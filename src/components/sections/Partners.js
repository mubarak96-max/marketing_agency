'use client';

import React from 'react';
import Card from '../ui/Card';

const Partners = () => {
    const certifications = [
        {
            name: 'Google Partner',
            logo: '/images/google-partner.svg',
            description: 'Certified Google Ads & Analytics Partner'
        },
        {
            name: 'Meta Business Partner',
            logo: '/images/meta-partner.svg',
            description: 'Official Meta Business Partner'
        },
        {
            name: 'Shopify Partner',
            logo: '/images/shopify-partner.svg',
            description: 'Shopify Plus Partner Agency'
        }
    ];

    return (
        <section className="relative overflow-hidden">
            {/* Top half with light background */}
            <div className="bg-section-light pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center pt-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-text-on-light mb-4">
                            Certified & Trusted Partners
                        </h3>
                        <p className="text-text-muted-light max-w-2xl mx-auto mb-8">
                            We're officially certified partners with the world's leading technology platforms
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom half with white background */}
            <div className="bg-section-white pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Cards positioned to overlap both sections */}
                    <div className="relative -mt-40">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {certifications.map((cert, index) => (
                                <Card
                                    key={index}
                                    className="p-6 lg:p-8 bg-card-light shadow-2xl border border-border-light text-center hover:scale-105 hover:shadow-3xl transition-all duration-300 relative z-10"
                                >
                                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center">
                                        <img
                                            src={cert.logo}
                                            alt={cert.name}
                                            className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                            onError={(e) => {
                                                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNC4xNjY3IDI0LjE2NjdDMjQuMTY2NyAyMS40MTUgMjYuNDE1IDE5LjE2NjcgMjkuMTY2NyAxOS4xNjY3SDUwLjgzMzNDNTMuNTg1IDE5LjE2NjcgNTUuODMzMyAyMS40MTUgNTUuODMzMyAyNC4xNjY3VjU1LjgzMzNDNTUuODMzMyA1OC41ODUgNTMuNTg1IDYwLjgzMzMgNTAuODMzMyA2MC44MzMzSDI5LjE2NjdDMjYuNDE1IDYwLjgzMzMgMjQuMTY2NyA1OC41ODUgMjQuMTY2NyA1NS44MzMzVjI0LjE2NjdaIiBmaWxsPSIjMUJBOUJBIi8+CjxwYXRoIGQ9Ik00MCAzMkwzNiA0MEg0NEw0MCAzMloiIGZpbGw9IndoaXRlIi8+CjwvdXZnPgo=';
                                            }}
                                        />
                                    </div>
                                    <h4 className="font-semibold text-text-on-light mb-2 text-lg">{cert.name}</h4>
                                    <p className="text-sm text-text-muted-light leading-relaxed">{cert.description}</p>

                                    {/* Decorative badge */}
                                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Bottom padding to maintain spacing */}
                    <div className="h-16"></div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
