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
                // Primary Brand Colors - Professional Luxury Theme
                'brand-primary': '#1ba9ba',      // Teal - Primary CTA, links, highlights
                'brand-accent': '#c5cd7f',       // Sage Green - Secondary accents, success states
                'brand-dark': '#181918',         // Charcoal - Dark sections and text
                'brand-light': '#dbddde',        // Light Gray - Light backgrounds and text

                // Section Background Variations for Visual Hierarchy
                'section-dark': '#000000',       // Pure black - Hero, footer
                'section-medium': '#181918',     // Charcoal - Alternating sections
                'section-light': '#f8f9fa',     // Light gray - Alternating sections  
                'section-white': '#ffffff',     // Pure white - Clean sections

                // Card and Component Backgrounds
                'card-dark': '#1a1a1a',         // Dark cards on dark sections
                'card-light': '#ffffff',        // Light cards on light sections
                'card-medium': '#f8f9fa',       // Medium cards

                // Semantic Mappings for Backward Compatibility
                'dubai-gold': '#c5cd7f',         // Now sage green
                'dubai-dark': '#181918',         // Charcoal
                'dubai-light': '#f8f9fa',        // Light section
                'dubai-accent': '#1ba9ba',       // Teal
                'luxury-white': '#ffffff',       // Pure white
                'luxury-black': '#000000',       // Pure black
                'luxury-dark': '#181918',        // Charcoal
                'luxury-charcoal': '#1a1a1a',    // Card backgrounds
                'luxury-gray': '#2a2a2a',        // Subtle elements

                // Text Colors for Different Backgrounds
                'text-on-dark': '#ffffff',       // White text on dark
                'text-on-light': '#181918',      // Dark text on light
                'text-muted-dark': '#dbddde',    // Muted on dark backgrounds
                'text-muted-light': '#6b7280',   // Muted on light backgrounds

                // Border Colors
                'border-dark': '#2a2a2a',        // Borders on dark sections
                'border-light': '#e5e7eb',       // Borders on light sections
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
