'use client';
import { useState, useRef, useEffect, useCallback } from 'react';

// ---------- Toolbar button helper ----------
function ToolBtn({ onClick, title, children, active }) {
  return (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
      className={`px-2 py-1 rounded text-sm font-medium transition-colors select-none ${
        active ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

// ---------- Visual editor toolbar ----------
function VisualToolbar({ editorRef }) {
  const exec = (cmd, val = null) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, val);
  };

  const insertLink = () => {
    const url = prompt('Enter URL:', 'https://');
    if (url) exec('createLink', url);
  };

  const insertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) exec('insertImage', url);
  };

  return (
    <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 border-b border-slate-700 bg-slate-800/50">
      {/* Text style */}
      <ToolBtn onClick={() => exec('bold')} title="Bold"><strong>B</strong></ToolBtn>
      <ToolBtn onClick={() => exec('italic')} title="Italic"><em>I</em></ToolBtn>
      <ToolBtn onClick={() => exec('underline')} title="Underline"><u>U</u></ToolBtn>
      <ToolBtn onClick={() => exec('strikeThrough')} title="Strikethrough"><s>S</s></ToolBtn>
      <span className="w-px h-5 bg-slate-700 mx-1" />

      {/* Headings */}
      <ToolBtn onClick={() => exec('formatBlock', 'h1')} title="Heading 1">H1</ToolBtn>
      <ToolBtn onClick={() => exec('formatBlock', 'h2')} title="Heading 2">H2</ToolBtn>
      <ToolBtn onClick={() => exec('formatBlock', 'h3')} title="Heading 3">H3</ToolBtn>
      <ToolBtn onClick={() => exec('formatBlock', 'p')} title="Paragraph">¶</ToolBtn>
      <span className="w-px h-5 bg-slate-700 mx-1" />

      {/* Lists */}
      <ToolBtn onClick={() => exec('insertUnorderedList')} title="Bullet list">• List</ToolBtn>
      <ToolBtn onClick={() => exec('insertOrderedList')} title="Numbered list">1. List</ToolBtn>
      <span className="w-px h-5 bg-slate-700 mx-1" />

      {/* Block */}
      <ToolBtn onClick={() => exec('formatBlock', 'blockquote')} title="Blockquote">" "</ToolBtn>
      <ToolBtn onClick={() => exec('formatBlock', 'pre')} title="Code block">{'<>'}</ToolBtn>
      <span className="w-px h-5 bg-slate-700 mx-1" />

      {/* Media */}
      <ToolBtn onClick={insertLink} title="Insert link">🔗</ToolBtn>
      <ToolBtn onClick={insertImage} title="Insert image">🖼</ToolBtn>
      <span className="w-px h-5 bg-slate-700 mx-1" />

      {/* Alignment */}
      <ToolBtn onClick={() => exec('justifyLeft')} title="Align left">⬅</ToolBtn>
      <ToolBtn onClick={() => exec('justifyCenter')} title="Center">⬛</ToolBtn>
      <ToolBtn onClick={() => exec('justifyRight')} title="Align right">➡</ToolBtn>
      <span className="w-px h-5 bg-slate-700 mx-1" />

      {/* Undo/Redo */}
      <ToolBtn onClick={() => exec('undo')} title="Undo">↩</ToolBtn>
      <ToolBtn onClick={() => exec('redo')} title="Redo">↪</ToolBtn>
    </div>
  );
}

// ---------- Simple markdown → HTML renderer (no dep needed) ----------
function mdToHtml(md) {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^\> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>')
    .replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" />')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[a-z])/gm, '<p>')
    .replace(/(?<!\>)$/gm, '</p>')
    .replace(/<p><\/p>/g, '');
}

// Estimate read time
function calcReadTime(content) {
  const words = content.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

// Slugify title
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ---------- Main BlogEditor ----------
export default function BlogEditor({ post = null, onSave, isSaving }) {
  const editorRef = useRef(null);
  const [mode, setMode] = useState('visual'); // 'visual' | 'markdown'
  const [title, setTitle] = useState(post?.title || '');
  const [slug, setSlug] = useState(post?.slug || '');
  const [slugEdited, setSlugEdited] = useState(!!post?.slug);
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [category, setCategory] = useState(post?.category || '');
  const [tags, setTags] = useState(post?.tags?.join(', ') || '');
  const [coverImage, setCoverImage] = useState(post?.coverImage || '');
  const [published, setPublished] = useState(post?.published ?? false);
  const [publishedAt, setPublishedAt] = useState(
    post?.publishedAt?.toDate?.()?.toISOString?.().slice(0, 10) ||
    post?.publishedAt ||
    new Date().toISOString().slice(0, 10)
  );
  // Content state: visual stores HTML, markdown stores md string
  const [mdContent, setMdContent] = useState(
    post?.contentType === 'markdown' ? post.content || '' : ''
  );

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugEdited && title) setSlug(slugify(title));
  }, [title, slugEdited]);

  // Sync visual editor initial content
  useEffect(() => {
    if (editorRef.current && post?.content && post.contentType === 'html') {
      editorRef.current.innerHTML = post.content;
    }
  }, []);

  const getContent = useCallback(() => {
    if (mode === 'visual') return editorRef.current?.innerHTML || '';
    return mdContent;
  }, [mode, mdContent]);

  function handleSave(publishStatus) {
    const content = getContent();
    onSave({
      title,
      slug,
      excerpt,
      category,
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      coverImage,
      published: publishStatus ?? published,
      publishedAt,
      content,
      contentType: mode === 'visual' ? 'html' : 'markdown',
      readTime: calcReadTime(content),
    });
  }

  const mdPreviewHtml = mdToHtml(mdContent);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center justify-between gap-4">
        <h1 className="text-sm font-semibold text-slate-400">
          {post ? 'Edit Post' : 'New Post'}
        </h1>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleSave(false)}
            disabled={isSaving}
            className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-50"
          >
            Save Draft
          </button>
          <button
            type="button"
            onClick={() => handleSave(true)}
            disabled={isSaving}
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {isSaving ? (
              <><span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Saving…</>
            ) : (published ? 'Update' : 'Publish')}
          </button>
        </div>
      </div>

      <div className="flex gap-6 px-6 py-6 max-w-screen-xl mx-auto">
        {/* ── Main column ── */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Title */}
          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent text-3xl font-bold text-white placeholder-slate-600 border-none outline-none focus:ring-0 py-2"
          />
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Permalink:</span>
            <span className="text-blue-400">/blog/</span>
            <input
              type="text"
              value={slug}
              onChange={(e) => { setSlug(e.target.value); setSlugEdited(true); }}
              className="bg-slate-800 border border-slate-700 rounded px-2 py-0.5 text-slate-300 focus:outline-none focus:border-blue-500 w-48"
            />
          </div>

          {/* Editor card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            {/* Mode tabs */}
            <div className="flex items-center border-b border-slate-800 px-4 pt-3 gap-1">
              {['visual', 'markdown'].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg capitalize transition-colors -mb-px ${
                    mode === m
                      ? 'bg-slate-800 text-white border border-b-slate-800 border-slate-700'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {m === 'visual' ? '✏️ Visual' : '# Markdown'}
                </button>
              ))}
            </div>

            {/* Visual editor */}
            {mode === 'visual' && (
              <div>
                <VisualToolbar editorRef={editorRef} />
                <div
                  ref={editorRef}
                  contentEditable
                  suppressContentEditableWarning
                  data-placeholder="Start writing your post here…"
                  className="min-h-96 p-6 text-slate-200 text-base leading-8 focus:outline-none prose-editor"
                  style={{ whiteSpace: 'pre-wrap' }}
                />
              </div>
            )}

            {/* Markdown editor */}
            {mode === 'markdown' && (
              <div className="flex min-h-96">
                <textarea
                  value={mdContent}
                  onChange={(e) => setMdContent(e.target.value)}
                  placeholder="Write your post in Markdown…"
                  className="flex-1 resize-none bg-transparent p-6 text-slate-200 text-sm font-mono leading-7 focus:outline-none border-r border-slate-800"
                />
                <div
                  className="flex-1 p-6 text-slate-300 text-sm leading-8 overflow-y-auto prose-editor"
                  dangerouslySetInnerHTML={{ __html: mdPreviewHtml || '<p class="text-slate-600">Preview will appear here…</p>' }}
                />
              </div>
            )}
          </div>

          {/* Excerpt */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
            <label className="text-sm font-semibold text-slate-300">Excerpt</label>
            <textarea
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief description shown on the blog listing page…"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>
        </div>

        {/* ── Sidebar ── */}
        <div className="w-72 shrink-0 space-y-4">
          {/* Publish settings */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <h3 className="text-sm font-semibold text-slate-200">Publish</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Status</span>
              <button
                type="button"
                onClick={() => setPublished(!published)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  published ? 'bg-blue-600' : 'bg-slate-700'
                }`}
              >
                <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${published ? 'translate-x-4.5' : 'translate-x-0.5'}`} />
              </button>
            </div>
            <div>
              <label className="text-xs text-slate-500 block mb-1">Publish date</label>
              <input
                type="date"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="pt-1 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => handleSave(true)}
                disabled={isSaving}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-50"
              >
                {published ? 'Update' : 'Publish'}
              </button>
              <button
                type="button"
                onClick={() => handleSave(false)}
                disabled={isSaving}
                className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
              >
                Save Draft
              </button>
            </div>
          </div>

          {/* Category & Tags */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <h3 className="text-sm font-semibold text-slate-200">Categorize</h3>
            <div>
              <label className="text-xs text-slate-500 block mb-1">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. Web Development"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 block mb-1">Tags (comma-separated)</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="seo, marketing, uganda"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Cover Image */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="text-sm font-semibold text-slate-200">Cover Image</h3>
            <input
              type="url"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="https://…"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500"
            />
            {coverImage && (
              <img
                src={coverImage}
                alt="Cover preview"
                className="w-full aspect-video object-cover rounded-lg mt-2"
              />
            )}
          </div>
        </div>
      </div>

      {/* Prose editor styles */}
      <style>{`
        .prose-editor h1 { font-size: 2em; font-weight: 700; margin: .67em 0; color: #f1f5f9; }
        .prose-editor h2 { font-size: 1.5em; font-weight: 700; margin: .75em 0; color: #e2e8f0; }
        .prose-editor h3 { font-size: 1.2em; font-weight: 600; margin: .83em 0; color: #cbd5e1; }
        .prose-editor p  { margin: .5em 0; }
        .prose-editor ul { list-style: disc; padding-left: 1.5em; margin: .5em 0; }
        .prose-editor ol { list-style: decimal; padding-left: 1.5em; margin: .5em 0; }
        .prose-editor blockquote { border-left: 3px solid #3b82f6; padding-left: 1em; color: #94a3b8; font-style: italic; margin: 1em 0; }
        .prose-editor pre,
        .prose-editor code { background: #1e293b; border-radius: 4px; padding: .2em .4em; font-family: monospace; font-size: .9em; color: #7dd3fc; }
        .prose-editor pre { padding: 1em; display: block; white-space: pre-wrap; }
        .prose-editor a { color: #60a5fa; text-decoration: underline; }
        .prose-editor img { max-width: 100%; border-radius: 8px; margin: 1em 0; }
        [contenteditable]:empty:before { content: attr(data-placeholder); color: #475569; pointer-events: none; }
      `}</style>
    </div>
  );
}
