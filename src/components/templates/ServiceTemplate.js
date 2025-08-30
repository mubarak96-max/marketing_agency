'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { ArrowRight, CheckCircle, Globe, Smartphone, Share2, TrendingUp, Database, ShoppingCart } from 'lucide-react';

const ServiceTemplate = ({ service }) => {
  // Get the appropriate icon component
  const getIcon = (iconName) => {
    const icons = {
      Globe,
      Smartphone,
      Share2,
      TrendingUp,
      Database,
      ShoppingCart,
    };
    return icons[iconName] || Globe;
  };

  const ServiceIcon = getIcon(service.icon);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dubai-dark to-dubai-light text-white py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <ServiceIcon className="w-8 h-8 text-dubai-gold mr-2" />
                <span className="text-dubai-gold font-medium">Our Services</span>
              </div>
              <h1 className="heading-1 mb-6">{service.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary">Get a Free Consultation</Button>
                <Button variant="outline">View Our Work</Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-dubai-gold">Why Choose Us for {service.title}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-dubai-gold mt-1 mr-3 flex-shrink-0" />
                    <span>Industry-leading expertise with 10+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-dubai-gold mt-1 mr-3 flex-shrink-0" />
                    <span>Client-focused approach with dedicated project managers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-dubai-gold mt-1 mr-3 flex-shrink-0" />
                    <span>Results-driven strategies tailored to Dubai market</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-dubai-gold mt-1 mr-3 flex-shrink-0" />
                    <span>Ongoing support and optimization after delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Content Section */}
      <section className="py-20 bg-luxury-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-dubai-gold font-medium mb-3">What We Do</p>
            <h2 className="heading-2 text-dubai-dark mb-8">Our {service.title} Services</h2>

            <div className="space-y-12 mt-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.details?.overview}</p>

                {service.details?.process && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-dubai-dark mb-4">Our Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.details.process.map((step, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-8 h-8 bg-dubai-gold text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            {index + 1}
                          </div>
                          <span className="text-dubai-dark font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.details?.includes && (
                  <div>
                    <h3 className="text-xl font-bold text-dubai-dark mb-4">What's Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.details.includes.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-dubai-gold mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-dubai-gold font-medium mb-3">Tools & Technologies</p>
            <h2 className="heading-3 text-dubai-dark">Technologies We Use</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies && service.technologies.map((tech, index) => (
              <div key={index} className="px-6 py-3 bg-luxury-white rounded-full text-dubai-dark font-medium">
                {tech}
              </div>
            ))}
            {service.platforms && service.platforms.map((platform, index) => (
              <div key={index} className="px-6 py-3 bg-luxury-white rounded-full text-dubai-dark font-medium">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Features Section */}
      <section className="py-20 bg-dubai-light text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-dubai-gold font-medium mb-3">Pricing & Timeline</p>
            <h2 className="heading-2 mb-4">Investment & Delivery</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Transparent pricing and clear timelines for your {service.title} project</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-dubai-gold mb-4">Investment</h3>
              <div className="text-2xl font-bold mb-4">{service.price}</div>
              <h4 className="text-lg font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-dubai-gold mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-dubai-gold mb-4">Timeline</h3>
              <div className="text-2xl font-bold mb-6">{service.deliveryTime}</div>
              <p className="text-gray-300">
                We work efficiently to deliver high-quality results within the agreed timeframe.
                Each project includes regular updates and milestone reviews to ensure we're on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dubai-accent text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-2 mb-6">Ready to Transform Your {service.title}?</h2>
            <p className="text-gray-300 mb-8">Book a free consultation with our team to discuss your project and get started on the path to digital success.</p>
            <Button variant="primary" size="large">
              <span>Book Your Consultation</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-luxury-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-dubai-dark">Explore Related Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* This would include links to other services */}
            <Link href="/services/web-development" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-dubai-dark mb-3">Website Development</h3>
                <p className="text-gray-600 mb-4">Custom websites that convert visitors into customers.</p>
                <span className="text-dubai-gold flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4" /></span>
              </div>
            </Link>
            <Link href="/services/mobile-app" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-dubai-dark mb-3">Mobile App Development</h3>
                <p className="text-gray-600 mb-4">Native and cross-platform mobile applications.</p>
                <span className="text-dubai-gold flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4" /></span>
              </div>
            </Link>
            <Link href="/services/performance" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-dubai-dark mb-3">Performance Marketing</h3>
                <p className="text-gray-600 mb-4">Data-driven campaigns that deliver measurable ROI.</p>
                <span className="text-dubai-gold flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTemplate;
