'use client';

import React from 'react';
import Link from 'next/link';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    ArrowUp,
    MessageCircle
} from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-section-dark text-text-on-dark border-t border-border-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* About Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-brand-accent">About Nexus Digital</h3>
                        <p className="text-text-muted-dark mb-4">
                            Dubai's premier digital growth agency specializing in web development,
                            marketing, and custom solutions for ambitious businesses.
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

                    {/* Services Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-dubai-gold">
                                    Website Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-dubai-gold">
                                    Mobile App Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-dubai-gold">
                                    Social Media Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-dubai-gold">
                                    Performance Marketing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-300 mb-4">
                            Subscribe to our newsletter for digital insights and industry updates.
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

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-dubai-light">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 text-sm">
                            © {new Date().getFullYear()} Nexus Digital. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <a
                                href="https://wa.me/971XXXXXXXX"
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
