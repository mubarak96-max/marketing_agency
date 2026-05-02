'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  Share2,
  TrendingUp,
  Database,
  ShoppingCart,
} from 'lucide-react';

const ServiceTemplate = ({ service }) => {
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
      <section className="relative bg-gradient-to-r from-dubai-dark to-dubai-light text-white py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <ServiceIcon className="w-8 h-8 text-dubai-gold mr-2" />
                <span className="text-dubai-gold font-medium">Uganda Digital Services</span>
              </div>
              <h1 className="heading-1 mb-6">{service.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="primary">Request a Quote</Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline">View Our Work</Button>
                </Link>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h2 className="text-xl font-bold mb-4 text-dubai-gold">Why businesses in Uganda hire us</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-dubai-gold mt-1 mr-3 flex-shrink-0" />
                    <span>Clear project scope, timelines, and commercial priorities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-dubai-gold mt-1 mr-3 flex-shrink-0" />
                    <span>Websites, apps, and campaigns structured for lead generation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-dubai-gold mt-1 mr-3 flex-shrink-0" />
                    <span>Local market context for Kampala and broader Uganda targeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-dubai-gold mt-1 mr-3 flex-shrink-0" />
                    <span>Post-launch support and performance reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-luxury-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <p className="text-dubai-gold font-medium mb-3">What We Do</p>
            <h2 className="heading-2 text-dubai-dark mb-8">Our {service.title} Services</h2>

            <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-10">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.details?.overview}</p>

                {service.details?.process && (
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-dubai-dark mb-4">Our Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.details.process.map((step, index) => (
                        <div key={step} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-border-light">
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
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-dubai-dark mb-4">What&apos;s Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.details.includes.map((item) => (
                        <div key={item} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-dubai-gold mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.faqs && (
                  <div>
                    <h3 className="text-xl font-bold text-dubai-dark mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      {service.faqs.map((faq) => (
                        <div key={faq.question} className="bg-white border border-border-light rounded-xl p-5">
                          <h4 className="font-semibold text-dubai-dark mb-2">{faq.question}</h4>
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="bg-dubai-light/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-dubai-dark mb-4">Investment & Timeline</h3>
                  <p className="text-2xl font-bold text-dubai-gold mb-2">{service.price}</p>
                  <p className="text-gray-600 mb-5">Typical delivery: {service.deliveryTime}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-dubai-gold mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {service.idealFor && (
                  <div className="bg-white rounded-xl p-6 border border-border-light">
                    <h3 className="text-xl font-bold text-dubai-dark mb-4">Best Fit For</h3>
                    <div className="space-y-3">
                      {service.idealFor.map((item) => (
                        <div key={item} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-dubai-gold mr-2 mt-1" />
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-dubai-accent text-white rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Need this service in Kampala or across Uganda?</h3>
                  <p className="text-gray-100 mb-5">
                    We can help you scope the project, recommend the right setup, and give you a realistic implementation plan.
                  </p>
                  <Link href="/contact">
                    <Button variant="primary">
                      <span>Book Your Consultation</span>
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-dubai-gold font-medium mb-3">Tools & Technologies</p>
            <h2 className="heading-3 text-dubai-dark">Platforms We Use</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies?.map((tech) => (
              <div key={tech} className="px-6 py-3 bg-luxury-white rounded-full text-dubai-dark font-medium">
                {tech}
              </div>
            ))}
            {service.platforms?.map((platform) => (
              <div key={platform} className="px-6 py-3 bg-luxury-white rounded-full text-dubai-dark font-medium">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-luxury-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-dubai-dark">Explore Related Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/website-development" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-dubai-dark mb-3">Website Development</h3>
                <p className="text-gray-600 mb-4">Business websites, landing pages, and WordPress builds for lead generation.</p>
                <span className="text-dubai-gold flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4" /></span>
              </div>
            </Link>
            <Link href="/services/mobile-app-development" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-dubai-dark mb-3">Mobile App Development</h3>
                <p className="text-gray-600 mb-4">Android, iOS, and cross-platform apps tailored to real business workflows.</p>
                <span className="text-dubai-gold flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4" /></span>
              </div>
            </Link>
            <Link href="/services/ppc-agency" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-dubai-dark mb-3">PPC & Google Ads Management</h3>
                <p className="text-gray-600 mb-4">High-intent paid search campaigns built to drive qualified leads.</p>
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
