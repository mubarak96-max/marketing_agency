'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Analytics tracking utility
export const trackEvent = (eventName, properties = {}) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, {
            ...properties,
            timestamp: new Date().toISOString(),
        });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventName, properties);
    }

    // Custom analytics (you can integrate with your backend)
    if (typeof window !== 'undefined') {
        try {
            fetch('/api/analytics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    event: eventName,
                    properties: {
                        ...properties,
                        url: window.location.href,
                        userAgent: navigator.userAgent,
                        timestamp: new Date().toISOString(),
                    },
                }),
            });
        } catch (error) {
            console.error('Analytics tracking error:', error);
        }
    }
};

// Conversion tracking for specific actions
export const trackConversion = (conversionType, value = 0, currency = 'AED') => {
    trackEvent('conversion', {
        conversion_type: conversionType,
        value: value,
        currency: currency,
    });

    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
            send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with actual conversion ID
            value: value,
            currency: currency,
        });
    }
};

// Scroll depth tracking
export const useScrollTracking = () => {
    useEffect(() => {
        let maxScroll = 0;
        const milestones = [25, 50, 75, 90, 100];
        const tracked = new Set();

        const handleScroll = () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            maxScroll = Math.max(maxScroll, scrolled);

            milestones.forEach(milestone => {
                if (maxScroll >= milestone && !tracked.has(milestone)) {
                    tracked.add(milestone);
                    trackEvent('scroll_depth', { depth: milestone });
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};

// Form tracking
export const trackFormInteraction = (formName, action, field = null) => {
    trackEvent('form_interaction', {
        form_name: formName,
        action: action, // 'start', 'complete', 'abandon'
        field: field,
    });
};

// CTA button tracking
export const trackCTAClick = (ctaText, location, destination = null) => {
    trackEvent('cta_click', {
        cta_text: ctaText,
        location: location,
        destination: destination,
    });
};

// Page view tracking component
export const PageTracking = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Track page view
        trackEvent('page_view', {
            page: pathname,
            title: document.title,
        });

        // Track time on page
        const startTime = Date.now();

        return () => {
            const timeOnPage = Date.now() - startTime;
            trackEvent('time_on_page', {
                page: pathname,
                duration: timeOnPage,
            });
        };
    }, [pathname]);

    // Scroll depth tracking
    useScrollTracking();

    return null;
};

// A/B Testing utility
export const useABTest = (testName, variants = ['A', 'B']) => {
    const getVariant = () => {
        if (typeof window === 'undefined') return variants[0];

        let variant = localStorage.getItem(`ab_test_${testName}`);

        if (!variant) {
            variant = variants[Math.floor(Math.random() * variants.length)];
            localStorage.setItem(`ab_test_${testName}`, variant);

            // Track A/B test assignment
            trackEvent('ab_test_assigned', {
                test_name: testName,
                variant: variant,
            });
        }

        return variant;
    };

    return getVariant();
};

// Exit intent tracking
export const useExitIntent = (callback) => {
    useEffect(() => {
        let hasTriggered = false;

        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasTriggered) {
                hasTriggered = true;
                trackEvent('exit_intent');
                callback();
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [callback]);
};

// Heat map integration (for tools like Hotjar, Crazy Egg)
export const initHeatMap = () => {
    useEffect(() => {
        // Hotjar
        if (typeof window !== 'undefined' && !window.hj) {
            (function (h, o, t, j, a, r) {
                h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                h._hjSettings = { hjid: process.env.NEXT_PUBLIC_HOTJAR_ID, hjsv: 6 };
                a = o.getElementsByTagName('head')[0];
                r = o.createElement('script'); r.async = 1;
                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                a.appendChild(r);
            })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
        }
    }, []);
};

// Lead scoring
export const updateLeadScore = (action, points = 1) => {
    if (typeof window === 'undefined') return;

    const currentScore = parseInt(localStorage.getItem('lead_score') || '0');
    const newScore = currentScore + points;

    localStorage.setItem('lead_score', newScore.toString());

    trackEvent('lead_score_update', {
        action: action,
        points: points,
        total_score: newScore,
    });

    // Trigger high-value lead notification at certain thresholds
    if (newScore >= 50 && currentScore < 50) {
        trackEvent('high_value_lead', { score: newScore });
    }
};

export default PageTracking;
