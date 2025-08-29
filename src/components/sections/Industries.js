import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import { Building2, Hotel, ShoppingBag, Heart } from 'lucide-react';

const industries = [
    {
        id: 'real-estate',
        title: 'Real Estate',
        icon: Building2,
        description: 'Digital solutions for property developers, agencies, and real estate platforms.',
        services: ['Lead Generation', 'Virtual Tours', 'CRM Integration']
    },
    {
        id: 'hospitality',
        title: 'Hospitality',
        icon: Hotel,
        description: 'Comprehensive solutions for hotels, restaurants, and tourism businesses.',
        services: ['Booking Systems', 'Guest Experience', 'Revenue Management']
    },
    {
        id: 'ecommerce',
        title: 'E-commerce',
        icon: ShoppingBag,
        description: 'End-to-end solutions for online retailers and marketplaces.',
        services: ['Online Stores', 'Inventory Management', 'Payment Integration']
    },
    {
        id: 'health-beauty',
        title: 'Health & Beauty',
        icon: Heart,
        description: 'Digital transformation for clinics, spas, and wellness centers.',
        services: ['Appointment Booking', 'Patient Portals', 'Marketing Automation']
    }
];

const Industries = () => {
    return (
        <section className="py-20 bg-luxury-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dubai-dark mb-4">
                        Industries We Serve
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Specialized digital solutions tailored for Dubai's key business sectors
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {industries.map((industry) => {
                        const Icon = industry.icon;
                        return (
                            <Link
                                key={industry.id}
                                href={`/industries#${industry.id}`}
                                className="group"
                            >
                                <Card variant="hover" className="h-full p-6">
                                    <div className="text-dubai-gold mb-4">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-dubai-dark mb-3">
                                        {industry.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {industry.description}
                                    </p>
                                    <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {industry.services.map((service) => (
                                            <div
                                                key={service}
                                                className="text-sm text-dubai-gold"
                                            >
                                                • {service}
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Industries;
