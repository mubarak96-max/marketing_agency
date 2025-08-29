import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import { Monitor, Smartphone, Share2, TrendingUp, Database } from 'lucide-react';

const services = [
    {
        id: 'web-development',
        title: 'Website Development',
        icon: Monitor,
        description: 'Custom websites that convert visitors into customers. From simple landing pages to complex e-commerce platforms.',
    },
    {
        id: 'mobile-app',
        title: 'Mobile App Development',
        icon: Smartphone,
        description: 'Native and cross-platform mobile applications built for performance and user engagement.',
    },
    {
        id: 'social-media',
        title: 'Social Media Marketing',
        icon: Share2,
        description: 'Strategic social media management and content creation to build your brand presence.',
    },
    {
        id: 'performance',
        title: 'Performance Marketing',
        icon: TrendingUp,
        description: 'Data-driven advertising campaigns that deliver measurable ROI across multiple channels.',
    },
    {
        id: 'management-systems',
        title: 'Management Systems',
        icon: Database,
        description: 'Custom CRM, ERP, and dashboard solutions to streamline your business operations.',
    },
];

const Services = () => {
    return (
        <section className="py-20 bg-luxury-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dubai-dark mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored for the Dubai market,
                        designed to accelerate your business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.id}
                                href={`/services#${service.id}`}
                                className="transform transition-all duration-300 hover:-translate-y-2"
                            >
                                <Card variant="hover" className="p-6 h-full">
                                    <div className="text-dubai-gold mb-4">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dubai-dark mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
