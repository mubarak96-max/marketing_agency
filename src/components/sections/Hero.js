import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
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
