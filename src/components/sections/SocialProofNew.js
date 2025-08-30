'use client';

import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';
import { ChevronRight } from 'lucide-react';

const SocialProof = () => {
    const [metrics, setMetrics] = useState({
        websites: 150,
        clients: 89,
        revenue: 2.1,
        satisfaction: 98
    });

    // Animate metrics on load
    useEffect(() => {
        const timer = setTimeout(() => {
            setMetrics({
                websites: 150,
                clients: 89,
                revenue: 2.1,
                satisfaction: 98
            });
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const recentWins = [
        "E-commerce store achieved 300% ROI in 3 months",
        "Restaurant app gained 5,000+ downloads in first week",
        "B2B website generated 150+ qualified leads monthly",
        "Tech startup raised $2M after our rebrand",
        "Fashion retailer increased online sales by 280%"
    ];

    return (
        <section className="py-16 md:py-20 bg-section-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Live Metrics */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-on-light mb-4">
                        Proven Track Record
                    </h2>
                    <p className="text-lg text-text-muted-light max-w-2xl mx-auto">
                        Real results from real clients. Here's what we've achieved together.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 md:mb-16">
                    <Card className="p-6 lg:p-8 bg-card-light text-center">
                        <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                            {metrics.websites}+
                        </div>
                        <div className="text-sm md:text-base text-text-muted-light">Websites Built</div>
                    </Card>

                    <Card className="p-6 lg:p-8 bg-card-light text-center">
                        <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                            {metrics.clients}+
                        </div>
                        <div className="text-sm md:text-base text-text-muted-light">Happy Clients</div>
                    </Card>

                    <Card className="p-6 lg:p-8 bg-card-light text-center">
                        <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                            ${metrics.revenue}M+
                        </div>
                        <div className="text-sm md:text-base text-text-muted-light">Revenue Generated</div>
                    </Card>

                    <Card className="p-6 lg:p-8 bg-card-light text-center">
                        <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                            {metrics.satisfaction}%
                        </div>
                        <div className="text-sm md:text-base text-text-muted-light">Client Satisfaction</div>
                    </Card>
                </div>

                {/* Recent Wins - Mobile Optimized */}
                <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-text-on-light mb-6 md:mb-8">
                        Recent Client Wins 🎉
                    </h3>

                    <div className="space-y-3 md:space-y-4 max-w-4xl mx-auto">
                        {recentWins.map((win, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 md:p-4 bg-card-light rounded-lg border border-border-light hover:border-brand-primary transition-all duration-300 group"
                            >
                                <span className="text-sm md:text-base text-text-on-light flex-1 text-left">
                                    {win}
                                </span>
                                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 flex-shrink-0" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
