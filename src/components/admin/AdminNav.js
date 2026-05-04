'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import Image from 'next/image';
import { siteConfig } from '@/data/site';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: '⊞' },
  { label: 'All Posts', href: '/admin/blog', icon: '≡' },
  { label: 'New Post', href: '/admin/blog/new', icon: '+' },
  { label: 'View Site', href: '/', icon: '↗', external: true },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  async function handleLogout() {
    logout();
    router.replace('/admin/login');
  }

  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-slate-950 border-r border-slate-800 flex flex-col z-40">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-slate-800">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.brandName}
          width={160}
          height={40}
          className="h-9 w-auto brightness-0 invert"
        />
        <p className="text-slate-500 text-xs mt-1 font-medium uppercase tracking-wider">Admin</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = item.href !== '/' && pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="text-base leading-none w-5 text-center">{item.icon}</span>
              {item.label}
              {item.external && <span className="ml-auto text-slate-600 text-xs">↗</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-slate-800">
        <button
          onClick={handleLogout}
          id="admin-logout-btn"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <span className="text-base leading-none w-5 text-center">⊖</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
