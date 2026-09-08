/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary Brand Colors - Blue Theme
                'brand-primary': '#2563EB',      // Blue - Primary CTA, links, highlights
                'brand-accent': '#3B82F6',       // Lighter Blue - Secondary accents
                'brand-dark': '#0F172A',         // Almost Black - Dark sections and text
                'brand-light': '#F1F5F9',        // Soft Background - Light backgrounds and text

                // Section Background Variations for Visual Hierarchy
                'section-dark': '#0F172A',       // Almost Black - Hero, footer
                'section-medium': '#1E293B',     // Slate Dark - Alternating sections
                'section-light': '#F1F5F9',      // Soft Background - Alternating sections  
                'section-white': '#ffffff',      // Pure white - Clean sections

                // Card and Component Backgrounds
                'card-dark': '#1E293B',         // Slate cards on dark sections
                'card-light': '#ffffff',        // Light cards on light sections
                'card-medium': '#F1F5F9',       // Medium cards

                // Semantic Mappings for Backward Compatibility
                'dubai-gold': '#2563EB',         // Now blue
                'dubai-dark': '#0F172A',         // Almost black
                'dubai-light': '#F1F5F9',        // Soft background
                'dubai-accent': '#2563EB',       // Blue
                'luxury-white': '#ffffff',       // Pure white
                'luxury-black': '#0F172A',       // Almost black
                'luxury-dark': '#0F172A',        // Almost black
                'luxury-charcoal': '#1E293B',    // Card backgrounds
                'luxury-gray': '#334155',        // Subtle elements

                // Text Colors for Different Backgrounds
                'text-on-dark': '#ffffff',       // White text on dark
                'text-on-light': '#0F172A',      // Dark text on light
                'text-muted-dark': '#94A3B8',    // Muted on dark backgrounds
                'text-muted-light': '#64748B',   // Muted on light backgrounds

                // Border Colors
                'border-dark': '#1E293B',        // Borders on dark sections
                'border-light': '#E2E8F0',       // Borders on light sections
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'banner': "url('/banner.jpg')",
            },
        },
    },
    plugins: [],
}
