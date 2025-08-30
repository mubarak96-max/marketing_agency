'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Smartphone, Share2, TrendingUp, Database, ShoppingCart, ArrowRight } from 'lucide-react';

const EnhancedServices = () => {

    const services = [
        {
            id: 'web-development',
            title: 'Website Development',
            icon: Globe,
            description: 'Custom websites that convert visitors into customers with stunning design and powerful functionality.',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
            color: 'from-brand-primary via-brand-accent to-brand-dark',
            hoverColor: 'from-brand-accent via-brand-primary to-brand-dark',
            pattern: 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
        },
        {
            id: 'mobile-app',
            title: 'Mobile App Development',
            icon: Smartphone,
            description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
            features: ['iOS & Android', 'Cross-platform', 'API Integration', 'Push Notifications'],
            color: 'from-brand-accent to-brand-primary',
            hoverColor: 'from-brand-primary to-brand-accent',
            pattern: 'bg-[url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05" fill-rule="evenodd"%3E%3Crect x="18" y="18" width="4" height="4"/%3E%3C/g%3E%3C/svg%3E")]'
        },
        {
            id: 'social-media',
            title: 'Social Media Marketing',
            icon: Share2,
            description: 'Strategic social media management and content creation that builds brand presence.',
            features: ['Content Creation', 'Community Management', 'Influencer Partnerships', 'Analytics'],
            color: 'from-brand-dark via-brand-primary to-brand-accent',
            hoverColor: 'from-brand-dark via-brand-accent to-brand-primary',
            pattern: 'bg-[url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="10" cy="10" r="1"/%3E%3C/g%3E%3C/svg%3E")]'
        },
        {
            id: 'performance-marketing',
            title: 'Performance Marketing',
            icon: TrendingUp,
            description: 'Data-driven advertising campaigns for maximum ROI with transparent reporting.',
            features: ['Lead Generation', 'E-commerce Sales', 'Brand Awareness', 'ROI Tracking'],
            color: 'from-brand-primary to-brand-dark',
            hoverColor: 'from-brand-accent to-brand-dark',
            pattern: 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="15" cy="15" r="1"/%3E%3Ccircle cx="45" cy="45" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
        },
        {
            id: 'management-systems',
            title: 'Management Systems',
            icon: Database,
            description: 'Custom CRM, ERP & dashboard solutions to streamline your business operations.',
            features: ['CRM Systems', 'ERP Solutions', 'Custom Dashboards', 'Data Analytics'],
            color: 'from-brand-accent via-brand-dark to-brand-primary',
            hoverColor: 'from-brand-primary via-brand-dark to-brand-accent',
            pattern: 'bg-[url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05" fill-rule="evenodd"%3E%3Crect x="10" y="10" width="2" height="2"/%3E%3Crect x="30" y="30" width="2" height="2"/%3E%3C/g%3E%3C/svg%3E")]'
        },
        {
            id: 'ecommerce-setup',
            title: 'E-commerce Setup',
            icon: ShoppingCart,
            description: 'Complete e-commerce solutions from setup to optimization for the UAE market.',
            features: ['Online Store Setup', 'Payment Integration', 'Inventory Management', 'UAE Shipping'],
            color: 'from-brand-dark to-brand-accent',
            hoverColor: 'from-brand-dark to-brand-primary',
            pattern: 'bg-[url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="20" cy="20" r="1"/%3E%3Ccircle cx="60" cy="60" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
        }
    ];

    return (
        <section className="py-20 bg-section-medium">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-on-dark mb-4">
                        Our Premium Services
                    </h2>
                    <p className="text-lg text-text-muted-dark max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored for the Dubai market,
                        designed to accelerate your business growth with cutting-edge technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link key={service.id} href={`/services/${service.id}`}>
                                <div className="group relative h-full">
                                    {/* Main Card */}
                                    <div className={`
                                        relative overflow-hidden rounded-2xl h-full
                                        bg-gradient-to-br ${service.color}
                                        group-hover:bg-gradient-to-br group-hover:${service.hoverColor}
                                        transform transition-all duration-300 ease-out
                                        group-hover:-translate-y-1 group-hover:scale-105
                                        shadow-lg group-hover:shadow-xl
                                        ${service.pattern}
                                    `}>
                                        {/* Animated Background Elements */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
                                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 delay-200"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative p-8 h-full flex flex-col">
                                            {/* Icon */}
                                            <div className="mb-6">
                                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 group-hover:rotate-6 transform">
                                                    <Icon className="w-8 h-8 text-white" />
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/95 transition-colors duration-300">
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-white/90 mb-6 flex-grow group-hover:text-white transition-colors duration-300">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-2 mb-6">
                                                {service.features.map((feature, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300"
                                                        style={{ transitionDelay: `${idx * 100}ms` }}
                                                    >
                                                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3"></div>
                                                        <span className="text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <div className="flex items-center text-white group-hover:text-white transition-colors duration-300">
                                                <span className="font-semibold mr-2">Learn More</span>
                                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </div>

                                        {/* Hover Shine Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        </div>
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-dubai-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500"></div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-dubai-gold to-dubai-light rounded-full">
                        <Link href="/services">
                            <div className="px-8 py-3 bg-white rounded-full text-dubai-dark font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center">
                                View All Services
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnhancedServices;
