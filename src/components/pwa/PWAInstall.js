'use client';

import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import Button from '../ui/Button';

const PWAInstallBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);

            // Check if user has dismissed banner before
            const bannerDismissed = localStorage.getItem('pwa-banner-dismissed');
            const lastDismissed = localStorage.getItem('pwa-banner-dismissed-time');

            // Show banner if not dismissed or dismissed more than 7 days ago
            if (!bannerDismissed || (Date.now() - parseInt(lastDismissed) > 7 * 24 * 60 * 60 * 1000)) {
                setShowBanner(true);
            }
        };

        const handleAppInstalled = () => {
            setShowBanner(false);
            setDeferredPrompt(null);
            localStorage.removeItem('pwa-banner-dismissed');
            localStorage.removeItem('pwa-banner-dismissed-time');
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;

        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }

        setDeferredPrompt(null);
        setShowBanner(false);
    };

    const handleDismiss = () => {
        setShowBanner(false);
        localStorage.setItem('pwa-banner-dismissed', 'true');
        localStorage.setItem('pwa-banner-dismissed-time', Date.now().toString());
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 animate-slide-up">
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-dubai-gold rounded-lg flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                    </div>
                </div>

                <div className="ml-3 flex-1">
                    <h3 className="text-sm font-semibold text-dubai-dark">
                        Install Nexus Digital App
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                        Get faster access and offline browsing. Install our app for the best experience.
                    </p>

                    <div className="flex items-center mt-3 space-x-2">
                        <Button
                            onClick={handleInstall}
                            size="sm"
                            variant="primary"
                            className="flex items-center text-xs"
                        >
                            <Download className="w-3 h-3 mr-1" />
                            Install
                        </Button>
                        <button
                            onClick={handleDismiss}
                            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            Maybe later
                        </button>
                    </div>
                </div>

                <button
                    onClick={handleDismiss}
                    className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

// iOS Safari Install Instructions Component
const IOSInstallInstructions = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center">
                <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-bold text-dubai-dark mb-4">
                    Install Nexus Digital
                </h3>

                <div className="text-left space-y-3 mb-6">
                    <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                            1
                        </div>
                        <span className="text-sm">Tap the Share button</span>
                        <div className="ml-auto w-6 h-6 border border-gray-300 rounded flex items-center justify-center">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                            2
                        </div>
                        <span className="text-sm">Scroll down and tap "Add to Home Screen"</span>
                    </div>

                    <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                            3
                        </div>
                        <span className="text-sm">Tap "Add" to confirm</span>
                    </div>
                </div>

                <Button onClick={onClose} variant="primary" className="w-full">
                    Got it!
                </Button>
            </div>
        </div>
    );
};

// Combined PWA Install Component
const PWAInstall = () => {
    const [showIOSInstructions, setShowIOSInstructions] = useState(false);

    useEffect(() => {
        // Detect iOS Safari
        const isIOSSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (isIOSSafari) {
            // Check if already added to home screen
            const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;

            if (!isInStandaloneMode) {
                // Show iOS instructions after some time
                setTimeout(() => {
                    const iosInstructionsDismissed = localStorage.getItem('ios-instructions-dismissed');
                    if (!iosInstructionsDismissed) {
                        setShowIOSInstructions(true);
                    }
                }, 60000); // Show after 1 minute
            }
        }
    }, []);

    const handleIOSInstructionsClose = () => {
        setShowIOSInstructions(false);
        localStorage.setItem('ios-instructions-dismissed', 'true');
    };

    return (
        <>
            <PWAInstallBanner />
            <IOSInstallInstructions
                isVisible={showIOSInstructions}
                onClose={handleIOSInstructionsClose}
            />
        </>
    );
};

export default PWAInstall;
