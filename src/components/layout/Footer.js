'use client';

import React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  MessageCircle,
} from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { siteConfig, whatsappUrl } from '@/data/site';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-section-dark text-text-on-dark border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-accent">About {siteConfig.brandName}</h3>
            <p className="text-text-muted-dark mb-4">
              {siteConfig.brandName} is a Uganda-focused digital agency offering website development, mobile app development, PPC, and digital marketing services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-dubai-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-dubai-gold">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-dubai-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-dubai-gold">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/website-development" className="text-gray-300 hover:text-dubai-gold">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-gray-300 hover:text-dubai-gold">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-gray-300 hover:text-dubai-gold">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/ppc-agency" className="text-gray-300 hover:text-dubai-gold">
                  PPC & Google Ads
                </Link>
              </li>
              <li>
                <Link href="/kampala-website-development" className="text-gray-300 hover:text-dubai-gold">
                  Kampala Website Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe for practical insights on websites, Google Ads, and digital growth in Uganda.
            </p>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-dubai-light border-dubai-light"
              />
              <Button variant="primary" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dubai-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {siteConfig.streetAddress}, {siteConfig.city}, {siteConfig.country} · {siteConfig.email}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-2 rounded-full hover:bg-opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <button
                onClick={scrollToTop}
                className="bg-dubai-gold text-dubai-dark p-2 rounded-full hover:bg-opacity-90"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
