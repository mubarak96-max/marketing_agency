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
        <section className="py-16 bg-section-light pt-96 md:pt-48">{/* Much more spacing on mobile (pt-96) between partners and this section */}
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
                <div className="bg-card-light rounded-lg p-4 md:p-6 mb-16 shadow-lg border border-border-light">
                    <div className="flex items-center justify-between mb-2 md:mb-0">
                        <div className="flex items-center">
                            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-brand-primary mr-2 md:mr-3" />
                            <h3 className="text-base md:text-lg font-semibold text-text-on-light">Recent Wins</h3>
                        </div>
                        <div className="text-xs md:text-sm text-text-muted-light">Live Updates</div>
                    </div>
                    <div className="mt-3 md:mt-4 h-40 md:h-48 overflow-hidden relative">
                        <div
                            className="absolute w-full transition-none"
                            style={{
                                transform: `translateY(-${scrollPosition}px)`,
                                animation: 'none'
                            }}
                        >
                            {duplicatedWins.map((win, index) => (
                                <div key={index} className="h-10 md:h-12 py-1 md:py-2 flex items-center justify-between border-b border-border-light last:border-b-0">
                                    <div className="flex items-center flex-1 min-w-0">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2 md:mr-3 flex-shrink-0"></div>
                                        <span className="font-medium text-text-on-light text-xs md:text-sm truncate">{win.client}</span>
                                        <span className="mx-1 md:mx-2 text-text-muted-light text-xs md:text-sm">•</span>
                                        <span className="text-dubai-gold font-semibold text-xs md:text-sm truncate">{win.metric}</span>
                                    </div>
                                    <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{win.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
