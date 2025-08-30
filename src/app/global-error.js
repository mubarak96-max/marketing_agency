'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-luxury-white">
          <div className="max-w-md">
            <h2 className="text-dubai-dark text-3xl font-bold mb-4">Something went wrong!</h2>
            <p className="text-gray-600 mb-6">We apologize for the inconvenience. Please try again or contact support if the problem persists.</p>
            <button
              onClick={reset}
              className="bg-dubai-gold text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
