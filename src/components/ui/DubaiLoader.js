'use client';

import React from 'react';

const DubaiLoader = ({ size = 'default', className = '' }) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        default: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24'
    };

    return (
        <div className={`relative ${sizeClasses[size]} ${className}`}>
            {/* Burj Khalifa inspired loader */}
            <div className="absolute inset-0 flex items-end justify-center">
                {/* Building bars */}
                <div className="flex items-end space-x-1">
                    <div className="w-1 bg-dubai-gold rounded-t animate-pulse" style={{
                        height: '20%',
                        animationDelay: '0ms',
                        animationDuration: '1000ms'
                    }}></div>
                    <div className="w-1 bg-dubai-gold rounded-t animate-pulse" style={{
                        height: '40%',
                        animationDelay: '200ms',
                        animationDuration: '1000ms'
                    }}></div>
                    <div className="w-1.5 bg-dubai-gold rounded-t animate-pulse" style={{
                        height: '80%',
                        animationDelay: '400ms',
                        animationDuration: '1000ms'
                    }}></div>
                    <div className="w-2 bg-dubai-gold rounded-t animate-pulse" style={{
                        height: '100%',
                        animationDelay: '600ms',
                        animationDuration: '1000ms'
                    }}></div>
                    <div className="w-1.5 bg-dubai-gold rounded-t animate-pulse" style={{
                        height: '60%',
                        animationDelay: '800ms',
                        animationDuration: '1000ms'
                    }}></div>
                    <div className="w-1 bg-dubai-gold rounded-t animate-pulse" style={{
                        height: '30%',
                        animationDelay: '1000ms',
                        animationDuration: '1000ms'
                    }}></div>
                </div>
            </div>

            {/* Rotating ring around the skyline */}
            <div className="absolute inset-0 border-2 border-transparent border-t-dubai-light rounded-full animate-spin"></div>
        </div>
    );
};

const FullPageLoader = ({ message = 'Loading...' }) => {
    return (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="text-center">
                <DubaiLoader size="xl" className="mx-auto mb-6" />
                <div className="text-dubai-dark font-semibold text-lg mb-2">{message}</div>
                <div className="text-gray-600">Please wait while we prepare your experience</div>

                {/* Dubai-themed progress bar */}
                <div className="w-64 h-2 bg-gray-200 rounded-full mt-6 mx-auto overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-dubai-gold to-dubai-light rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

// Loading skeleton for content
const ContentSkeleton = ({ lines = 3, className = '' }) => {
    return (
        <div className={`animate-pulse ${className}`}>
            {Array.from({ length: lines }).map((_, index) => (
                <div key={index} className={`h-4 bg-gray-200 rounded mb-3 ${index === lines - 1 ? 'w-3/4' : 'w-full'
                    }`}></div>
            ))}
        </div>
    );
};

// Card loading skeleton
const CardSkeleton = ({ className = '' }) => {
    return (
        <div className={`animate-pulse bg-white rounded-lg p-6 shadow-md ${className}`}>
            <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
        </div>
    );
};

export { DubaiLoader, FullPageLoader, ContentSkeleton, CardSkeleton };
