import React from 'react';
import Image from 'next/image';
import Card from '../ui/Card';

const caseStudies = [
    {
        id: 1,
        title: 'Dubai Real Estate Portal',
        description: 'A complete digital transformation for a leading property developer',
        metrics: {
            leads: '300% Lead Increase',
            sales: 'AED 2M+ Sales',
            visitors: '50K+ Monthly Visitors'
        },
        image: '/images/case-study-1.jpg'
    },
    {
        id: 2,
        title: 'Luxury Hotel Booking System',
        description: 'Custom booking platform with revenue optimization',
        metrics: {
            bookings: '200% Booking Increase',
            revenue: 'AED 5M+ Revenue',
            retention: '95% Customer Retention'
        },
        image: '/images/case-study-2.jpg'
    }
];

const CaseStudies = () => {
    return (
        <section className="py-20 bg-dubai-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-luxury-white mb-4">
                        Success Stories
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Real results for real businesses in Dubai.
                        See how we've helped our clients achieve exceptional growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((study) => (
                        <Card
                            key={study.id}
                            variant="hover"
                            className="overflow-hidden bg-dubai-light text-luxury-white"
                        >
                            <div className="relative h-48">
                                <div className="absolute inset-0 bg-gradient-to-t from-dubai-dark to-transparent z-10" />
                                {/* Note: Add actual images to public/images/ directory */}
                                <div className="relative h-full w-full bg-dubai-accent">
                                    {/* Placeholder for image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-dubai-gold">
                                        Image Placeholder
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                                <p className="text-gray-300 mb-4">{study.description}</p>

                                <div className="grid grid-cols-3 gap-4">
                                    {Object.entries(study.metrics).map(([key, value]) => (
                                        <div key={key} className="text-center">
                                            <div className="text-dubai-gold font-bold">{value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
