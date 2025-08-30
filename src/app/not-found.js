import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-dubai-gold text-6xl font-bold mb-2">404</h1>
        <h2 className="text-dubai-dark text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">We couldn't find the page you're looking for. It might have been moved or deleted.</p>
        <Link href="/">
          <Button variant="primary">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
