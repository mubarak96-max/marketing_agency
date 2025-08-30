import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Hero = () => {
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
        <section className="relative min-h-screen flex items-center bg-section-dark">
            {/* Background with banner image, gradient overlay and Dubai skyline */}
            <div className="absolute inset-0 bg-banner bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-r from-section-dark via-section-medium to-brand-dark opacity-90"></div>
                {/* Removed the Dubai skyline SVG since it doesn't exist */}
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-on-dark mb-6">
                        Dubai's Premier Digital Growth Agency
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted-dark mb-8">
                        We Build Websites, Apps & Marketing Systems That Drive Real ROI
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="primary">
                            Book Strategy Call
                        </Button>
                        <Button variant="outline">
                            View Our Work
                        </Button>
                    </div>

                    {/* Stats Ticker */}
                    <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-text-on-dark">
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-brand-accent">500+</span>
                            <span className="text-sm">Projects Completed</span>
                        </div>
                        <div className="hidden sm:block h-8 w-px bg-brand-accent" />
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-brand-accent">AED 50M+</span>
                            <span className="text-sm">Revenue Generated</span>
                        </div>
                        <div className="hidden sm:block h-8 w-px bg-brand-accent" />
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-brand-accent">98%</span>
                            <span className="text-sm">Client Retention</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners Section - Half overlapping Hero */}
            <div className="absolute bottom-0 left-0 right-0 transform translate-y-3/4 md:translate-y-1/2 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-4 md:mb-8">
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">
                            Certified & Trusted Partners
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {certifications.map((cert, index) => (
                            <Card key={index} className="p-4 md:p-6 bg-white/90 backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300 shadow-2xl">
                                <div className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-2 md:mb-4 flex items-center justify-center">
                                    <img
                                        src={cert.logo}
                                        alt={cert.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h4 className="font-semibold text-dubai-dark mb-1 md:mb-2 text-sm md:text-base">{cert.name}</h4>
                                <p className="text-xs md:text-sm text-gray-600">{cert.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <div className="w-1 h-8 rounded-full bg-brand-accent mx-auto" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
