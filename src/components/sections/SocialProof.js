'use client';

import React, { useState, useEffect } from 'react';
import { Users, Award, TrendingUp, CheckCircle, Star } from 'lucide-react';
import Card from '../ui/Card';

const SocialProof = () => {
    const [activeProjects, setActiveProjects] = useState(12);
    const [completedProjects, setCompletedProjects] = useState(500);
    const [clientSatisfaction, setClientSatisfaction] = useState(98);

    // Animate counters on component mount
    useEffect(() => {
        const animateCounter = (setter, target, duration = 2000) => {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setter(target);
                    clearInterval(timer);
                } else {
                    setter(Math.floor(start));
                }
            }, 16);
        };

        animateCounter(setActiveProjects, 11);
        animateCounter(setCompletedProjects, 57);
        animateCounter(setClientSatisfaction, 98);
    }, []);

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

    const recentWins = [
        { client: 'Dubai Real Estate Co.', metric: '75% More Qualified Leads', date: '2 days ago' },
        { client: 'Luxury Hotel Group', metric: 'AED 320K Revenue Boost', date: '1 week ago' },
        { client: 'Fashion E-commerce', metric: '57% Sales Increase', date: '2 weeks ago' },
        { client: 'Healthcare Clinic', metric: '112% Online Bookings', date: '3 weeks ago' },
        { client: 'Tech Startup Dubai', metric: '69% User Acquisition', date: '1 month ago' },
        { client: 'Restaurant Chain', metric: 'AED 110K Monthly Growth', date: '1 month ago' },
        { client: 'Fitness Center', metric: '63% New Memberships', date: '2 months ago' },
        { client: 'Jewelry Brand', metric: '74% Online Revenue Up', date: '2 months ago' },
        { client: 'Construction Co.', metric: '46% Lead Generation', date: '3 months ago' },
        { client: 'Beauty Salon', metric: '61% Booking Increase', date: '3 months ago' },
    ];

    // Create duplicated array for infinite scroll effect
    const duplicatedWins = [...recentWins, ...recentWins];
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPosition((prev) => {
                const newPosition = prev + 1;
                // Reset position when we've scrolled through one complete set
                if (newPosition >= recentWins.length * 60) { // 60px per item height
                    return 0;
                }
                return newPosition;
            });
        }, 50); // Smooth scrolling every 50ms
        return () => clearInterval(interval);
    }, [recentWins.length]);

    return (
        <section className="py-16 bg-section-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Live Metrics Dashboard */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <Card className="p-6 text-center bg-card-light shadow-lg border border-border-light">
                        <div className="flex items-center justify-center mb-4">
                            <Users className="w-8 h-8 text-brand-primary" />
                        </div>
                        <div className="text-3xl font-bold text-text-on-light mb-2">
                            {activeProjects}
                        </div>
                        <p className="text-text-muted-light">Active Projects</p>
                        <div className="mt-2 flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                            <span className="text-sm text-green-600">Live</span>
                        </div>
                    </Card>

                    <Card className="p-6 text-center bg-card-light shadow-lg border border-border-light">
                        <div className="flex items-center justify-center mb-4">
                            <CheckCircle className="w-8 h-8 text-brand-primary" />
                        </div>
                        <div className="text-3xl font-bold text-text-on-light mb-2">
                            {completedProjects}+
                        </div>
                        <p className="text-text-muted-light">Projects Completed</p>
                        <div className="mt-2 text-sm text-brand-accent">Since 2022</div>
                    </Card>

                    <Card className="p-6 text-center bg-card-light shadow-lg border border-border-light">
                        <div className="flex items-center justify-center mb-4">
                            <Star className="w-8 h-8 text-brand-accent fill-current" />
                        </div>
                        <div className="text-3xl font-bold text-text-on-light mb-2">
                            {clientSatisfaction}%
                        </div>
                        <p className="text-text-muted-light">Client Satisfaction</p>
                        <div className="mt-2 flex justify-center">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-dubai-gold fill-current" />
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Recent Wins Ticker */}
                <div className="bg-card-light rounded-lg p-6 mb-16 shadow-lg border border-border-light">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <TrendingUp className="w-6 h-6 text-brand-primary mr-3" />
                            <h3 className="text-lg font-semibold text-text-on-light">Recent Wins</h3>
                        </div>
                        <div className="text-sm text-text-muted-light">Live Updates</div>
                    </div>
                    <div className="mt-4 h-48 overflow-hidden relative">
                        <div
                            className="absolute w-full transition-none"
                            style={{
                                transform: `translateY(-${scrollPosition}px)`,
                                animation: 'none'
                            }}
                        >
                            {duplicatedWins.map((win, index) => (
                                <div key={index} className="h-12 py-2 flex items-center justify-between border-b border-border-light last:border-b-0">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
                                        <span className="font-medium text-text-on-light">{win.client}</span>
                                        <span className="mx-2 text-text-muted-light">•</span>
                                        <span className="text-dubai-gold font-semibold">{win.metric}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">{win.date}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Industry Certifications */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-8">
                        Certified & Trusted Partners
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300">
                                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <img
                                        src={cert.logo}
                                        alt={cert.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h4 className="font-semibold text-dubai-dark mb-2">{cert.name}</h4>
                                <p className="text-sm text-gray-600">{cert.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
