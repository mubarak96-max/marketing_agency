import { WifiOff } from 'lucide-react';

export const metadata = {
    title: 'Offline - Nexus Digital',
    description: 'You are currently offline',
};

export default function OfflinePage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <WifiOff className="w-10 h-10 text-gray-400" />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        You're Offline
                    </h1>

                    <p className="text-gray-600 mb-6">
                        It looks like you've lost your internet connection. Please check your connection and try again.
                    </p>

                    <button
                        onClick={() => window.location.reload()}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Try Again
                    </button>

                    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-2">While you're offline:</h3>
                        <ul className="text-sm text-blue-800 space-y-1">
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
