'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Smartphone, Share2, TrendingUp, Database, ShoppingCart, ArrowRight } from 'lucide-react';

const EnhancedServices = () => {
  const services = [
    {
      id: 'website-development',
      title: 'Website Development',
      icon: Globe,
      description: 'Custom websites, landing pages, and WordPress builds designed to turn traffic into enquiries and sales.',
      features: ['Responsive Design', 'SEO Setup', 'Fast Loading', 'CMS Integration'],
      color: 'from-brand-primary via-brand-accent to-brand-dark',
      hoverColor: 'from-brand-accent via-brand-primary to-brand-dark',
      pattern: 'bg-[url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]',
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      icon: Smartphone,
      description: 'Android, iOS, and cross-platform applications built around practical business workflows.',
      features: ['iOS & Android', 'Cross-platform', 'API Integration', 'Push Notifications'],
      color: 'from-brand-accent to-brand-primary',
      hoverColor: 'from-brand-primary to-brand-accent',
      pattern: 'bg-[url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Crect x=\'18\' y=\'18\' width=\'4\' height=\'4\'/%3E%3C/g%3E%3C/svg%3E")]',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Share2,
      description: 'SEO, content, and growth support for businesses that need stronger online visibility in Uganda.',
      features: ['Content Strategy', 'SEO Support', 'Campaign Planning', 'Monthly Reporting'],
      color: 'from-brand-dark via-brand-primary to-brand-accent',
      hoverColor: 'from-brand-dark via-brand-accent to-brand-primary',
      pattern: 'bg-[url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")]',
    },
    {
      id: 'ppc-agency',
      title: 'PPC & Google Ads',
      icon: TrendingUp,
      description: 'Paid search campaigns built for commercial intent, better lead quality, and measurable ROI.',
      features: ['Lead Generation', 'Keyword Research', 'Landing Pages', 'ROAS Tracking'],
      color: 'from-brand-primary to-brand-dark',
      hoverColor: 'from-brand-accent to-brand-dark',
      pattern: 'bg-[url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'15\' cy=\'15\' r=\'1\'/%3E%3Ccircle cx=\'45\' cy=\'45\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]',
    },
    {
      id: 'management-systems',
      title: 'Management Systems',
      icon: Database,
      description: 'Custom dashboards, CRM workflows, and internal systems that reduce manual operations.',
      features: ['CRM Systems', 'ERP Workflows', 'Custom Dashboards', 'Data Analytics'],
      color: 'from-brand-accent via-brand-dark to-brand-primary',
      hoverColor: 'from-brand-primary via-brand-dark to-brand-accent',
      pattern: 'bg-[url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Crect x=\'10\' y=\'10\' width=\'2\' height=\'2\'/%3E%3Crect x=\'30\' y=\'30\' width=\'2\' height=\'2\'/%3E%3C/g%3E%3C/svg%3E")]',
    },
    {
      id: 'ecommerce-website-development',
      title: 'Ecommerce Development',
      icon: ShoppingCart,
      description: 'Online stores with payment, catalog, and checkout flows tailored for growing brands in Uganda.',
      features: ['Store Setup', 'Payment Integration', 'Inventory Management', 'Checkout Optimization'],
      color: 'from-brand-dark to-brand-accent',
      hoverColor: 'from-brand-dark to-brand-primary',
      pattern: 'bg-[url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3Ccircle cx=\'60\' cy=\'60\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]',
    },
  ];

  return (
    <section className="py-20 bg-section-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-on-dark mb-4">Our Services</h2>
          <p className="text-lg text-text-muted-dark max-w-2xl mx-auto">
            Website development, app development, internet marketing, and PPC services designed for business growth in Uganda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.id} href={`/services/${service.id}`}>
                <div className="group relative h-full">
                  <div
                    className={`
                      relative overflow-hidden rounded-2xl h-full
                      bg-gradient-to-br ${service.color}
                      group-hover:bg-gradient-to-br group-hover:${service.hoverColor}
                      transform transition-all duration-300 ease-out
                      group-hover:-translate-y-1 group-hover:scale-105
                      shadow-lg group-hover:shadow-xl
                      ${service.pattern}
                    `}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 delay-200"></div>
                    </div>

                    <div className="relative p-8 h-full flex flex-col">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 group-hover:rotate-6 transform">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/95 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-white/90 mb-6 flex-grow group-hover:text-white transition-colors duration-300">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div
                            key={feature}
                            className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                          >
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center text-white group-hover:text-white transition-colors duration-300">
                        <span className="font-semibold mr-2">Learn More</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>

                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-dubai-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500"></div>
                </div>
              </Link>
            );
          })}
        </div>

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
