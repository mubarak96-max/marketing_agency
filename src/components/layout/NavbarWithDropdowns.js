'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import { services } from '@/data/services';

const NavbarWithDropdowns = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();
    const dropdownRefs = useRef({});

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeDropdown &&
                dropdownRefs.current[activeDropdown] &&
                !dropdownRefs.current[activeDropdown].contains(event.target)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDropdown]);

    // Close dropdown when navigating
    useEffect(() => {
        setActiveDropdown(null);
    }, [pathname]);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const navigation = [
        { name: 'Home', href: '/' },
        {
            name: 'Services',
            href: '/services',
            hasDropdown: true,
            dropdownItems: services.map(service => ({
                name: service.title,
                href: `/services/${service.id}`,
                icon: service.icon,
                description: service.description
            }))
        },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-dubai-dark">
                            Nexus Digital
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                ref={(el) => dropdownRefs.current[item.name] = el}
                            >
                                {item.hasDropdown ? (
                                    <button
                                        className={`flex items-center ${pathname === item.href || pathname.startsWith(`${item.href}/`)
                                            ? 'text-dubai-gold'
                                            : 'text-gray-700 hover:text-dubai-gold'
                                            } transition-colors duration-200`}
                                        onClick={() => toggleDropdown(item.name)}
                                    >
                                        {item.name}
                                        <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''
                                            }`} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`${pathname === item.href
                                            ? 'text-dubai-gold'
                                            : 'text-gray-700 hover:text-dubai-gold'
                                            } transition-colors duration-200`}
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {/* Dropdown Menu */}
                                {item.hasDropdown && activeDropdown === item.name && (
                                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                                        {item.dropdownItems.map((dropdownItem) => (
                                            <Link
                                                key={dropdownItem.name}
                                                href={dropdownItem.href}
                                                className={`${pathname === dropdownItem.href
                                                    ? 'text-dubai-gold bg-gray-50'
                                                    : 'text-gray-700 hover:text-dubai-gold hover:bg-gray-50'
                                                    } block px-4 py-2 transition-colors duration-200`}
                                            >
                                                <div className="flex items-center">
                                                    <div>
                                                        <div className="font-medium">{dropdownItem.name}</div>
                                                        <div className="text-xs text-gray-500 truncate max-w-[200px]">
                                                            {dropdownItem.description}
                                                        </div>
                                                    </div>
                                                    <ChevronRight className="ml-auto w-4 h-4" />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Button variant="primary">Book Strategy Call</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-dubai-gold"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                {item.hasDropdown ? (
                                    <>
                                        <button
                                            className={`flex items-center justify-between w-full ${pathname === item.href || pathname.startsWith(`${item.href}/`)
                                                ? 'text-dubai-gold'
                                                : 'text-gray-700 hover:text-dubai-gold'
                                                } block px-3 py-2 text-base`}
                                            onClick={() => toggleDropdown(item.name)}
                                        >
                                            {item.name}
                                            <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''
                                                }`} />
                                        </button>

                                        {/* Mobile Dropdown */}
                                        {activeDropdown === item.name && (
                                            <div className="pl-4 space-y-1 bg-gray-50 rounded-md">
                                                {item.dropdownItems.map((dropdownItem) => (
                                                    <Link
                                                        key={dropdownItem.name}
                                                        href={dropdownItem.href}
                                                        className={`${pathname === dropdownItem.href
                                                            ? 'text-dubai-gold'
                                                            : 'text-gray-700 hover:text-dubai-gold'
                                                            } block px-3 py-2 text-sm border-l-2 ${pathname === dropdownItem.href ? 'border-dubai-gold' : 'border-transparent'
                                                            }`}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        <div className="font-medium">{dropdownItem.name}</div>
                                                        <div className="text-xs text-gray-500 truncate">{dropdownItem.description}</div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`${pathname === item.href
                                            ? 'text-dubai-gold'
                                            : 'text-gray-700 hover:text-dubai-gold'
                                            } block px-3 py-2 text-base`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="px-3 py-2">
                            <Button variant="primary" className="w-full">
                                Book Strategy Call
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarWithDropdowns;
