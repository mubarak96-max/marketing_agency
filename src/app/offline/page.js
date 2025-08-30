'use client';

import { WifiOff } from 'lucide-react';

export default function OfflinePage() {
    return (
        <div className="min-h-screen bg-section-light flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="bg-card-light rounded-lg shadow-lg p-8 border border-border-light">
                    <div className="w-20 h-20 bg-section-light rounded-full flex items-center justify-center mx-auto mb-6">
                        <WifiOff className="w-10 h-10 text-brand-primary" />
                    </div>

                    <h1 className="text-2xl font-bold text-text-on-light mb-4">
                        You're Offline
                    </h1>

                    <p className="text-text-muted-light mb-6">
                        It looks like you've lost your internet connection. Please check your connection and try again.
                    </p>

                    <button
                        onClick={() => window.location.reload()}
                        className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-accent hover:text-text-on-light transition-colors duration-200"
                    >
                        Try Again
                    </button>

                    <div className="mt-8 p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                        <h3 className="font-semibold text-brand-primary mb-2">While you're offline:</h3>
                        <ul className="text-sm text-text-muted-light space-y-1">
                            <li>• Browse previously visited pages</li>
                            <li>• View our services information</li>
                            <li>• Check out our portfolio</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
