'use client';

import React, { useState, useEffect } from 'react';
import { X, Gift, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { trackEvent, trackConversion, useExitIntent } from '../analytics/Analytics';

const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [selectedOffer, setSelectedOffer] = useState('audit');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    // Exit intent detection
    useExitIntent(() => {
        // Only show if not shown before and user has been on page for at least 30 seconds
        const timeOnPage = Date.now() - (window.sessionStartTime || Date.now());
        if (!hasShown && timeOnPage > 30000) {
            setIsVisible(true);
            setHasShown(true);
            trackEvent('exit_intent_popup_shown');
        }
    });

    // Auto-show after 2 minutes if not shown via exit intent
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!hasShown) {
                setIsVisible(true);
                setHasShown(true);
                trackEvent('timed_popup_shown');
            }
        }, 120000); // 2 minutes

        return () => clearTimeout(timer);
    }, [hasShown]);

    // Initialize session start time
    useEffect(() => {
        if (typeof window !== 'undefined' && !window.sessionStartTime) {
            window.sessionStartTime = Date.now();
        }
    }, []);

    const offers = [
        {
            id: 'audit',
            title: 'Free Website Audit',
            subtitle: 'Worth AED 500',
            description: 'Get a comprehensive analysis of your website\'s performance, SEO, and conversion opportunities.',
            benefits: [
                'Performance Analysis',
                'SEO Recommendations',
                'Conversion Optimization Tips',
                'Competitor Analysis'
            ],
            cta: 'Get My Free Audit',
            value: 500
        },
        {
            id: 'consultation',
            title: 'Strategy Consultation',
            subtitle: 'Worth AED 750',
            description: '30-minute one-on-one consultation with our digital strategy experts.',
            benefits: [
                'Digital Strategy Review',
                'Growth Opportunities',
                'Budget Planning',
                'Action Plan'
            ],
            cta: 'Book Free Consultation',
            value: 750
        },
        {
            id: 'guide',
            title: 'Digital Marketing Guide',
            subtitle: 'Worth AED 300',
            description: 'Complete guide to digital marketing in the UAE with templates and checklists.',
            benefits: [
                '50+ Page Guide',
                'Marketing Templates',
                'UAE Market Insights',
                'Implementation Checklist'
            ],
            cta: 'Download Guide',
            value: 300
        }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || isSubmitting) return;

        setIsSubmitting(true);

        try {
            // Track conversion
            trackConversion('lead_generation', offers.find(o => o.id === selectedOffer)?.value || 0);
            trackEvent('exit_intent_conversion', {
                offer: selectedOffer,
                email: email
            });

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success and close popup
            setIsVisible(false);

            // Show success notification (you can implement a toast component)
            alert('Thank you! Check your email for next steps.');

        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setIsVisible(false);
        trackEvent('exit_intent_popup_closed');
    };

    if (!isVisible) return null;

    const currentOffer = offers.find(offer => offer.id === selectedOffer);

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scale-in">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-dubai-dark to-dubai-light text-white p-6 rounded-t-2xl">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-4">
                            <Gift className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Wait! Don't Miss This Exclusive Offer</h2>
                        <p className="text-gray-200">Choose your free digital growth package before you leave</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Offer Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {offers.map((offer) => (
                            <div
                                key={offer.id}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedOffer === offer.id
                                        ? 'border-dubai-gold bg-dubai-gold/5'
                                        : 'border-gray-200 hover:border-dubai-light'
                                    }`}
                                onClick={() => setSelectedOffer(offer.id)}
                            >
                                <div className="text-center">
                                    <h3 className="font-bold text-dubai-dark mb-1">{offer.title}</h3>
                                    <p className="text-sm text-dubai-gold font-semibold">{offer.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Selected Offer Details */}
                    {currentOffer && (
                        <div className="bg-luxury-white rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-bold text-dubai-dark mb-3">
                                {currentOffer.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{currentOffer.description}</p>

                            <div className="grid grid-cols-2 gap-3 mb-4">
                                {currentOffer.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center text-sm">
                                        <Star className="w-4 h-4 text-dubai-gold mr-2 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full"
                        />

                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting || !email}
                            className="w-full flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            ) : (
                                <Gift className="w-5 h-5 mr-2" />
                            )}
                            {currentOffer?.cta || 'Claim Your Free Offer'}
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </form>

                    {/* Trust Signals */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                            <div>
                                <div className="font-semibold text-dubai-dark">500+</div>
                                <div>Happy Clients</div>
                            </div>
                            <div>
                                <div className="font-semibold text-dubai-dark">98%</div>
                                <div>Satisfaction Rate</div>
                            </div>
                            <div>
                                <div className="font-semibold text-dubai-dark">5★</div>
                                <div>Average Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Options */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-center text-sm text-gray-600 mb-4">
                            Prefer to talk? Contact us directly:
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="tel:+971XXXXXXXX"
                                className="flex items-center text-dubai-gold hover:text-dubai-dark transition-colors"
                            >
                                <Phone className="w-4 h-4 mr-1" />
                                <span className="text-sm">Call Us</span>
                            </a>
                            <a
                                href="mailto:info@nexusdigital.ae"
                                className="flex items-center text-dubai-gold hover:text-dubai-dark transition-colors"
                            >
                                <Mail className="w-4 h-4 mr-1" />
                                <span className="text-sm">Email Us</span>
                            </a>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-xs text-gray-500 text-center mt-4">
                        No spam, ever. Unsubscribe at any time. We respect your privacy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExitIntentPopup;
