'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AuthProvider, useAuth } from '@/lib/auth';

function AdminGuard({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user === null && pathname !== '/admin/login') {
      router.replace('/admin/login');
    }
  }, [user, pathname, router]);

  if (user === undefined) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return children;
}

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <AdminGuard>
        {children}
      </AdminGuard>
    </AuthProvider>
  );
}
