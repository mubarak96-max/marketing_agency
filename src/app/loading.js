export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-dubai-gold border-t-transparent animate-spin"></div>
        <div className="mt-4 text-dubai-dark font-medium">Loading...</div>
      </div>
    </div>
  );
}
