# AI Instructions  
You are the project builder. Follow these instructions step by step to generate the complete codebase.  
Do not ask me questions. Build everything automatically until the project is complete.  

# Project Instructions: Dubai Digital Agency Website

## Tech Stack
- Next.js (JavaScript, **no TypeScript**)  
- Tailwind CSS  
- Responsive design (mobile-first)  
- Minimal, luxury, Dubai-inspired design (white, black, gold, futuristic accents)  
- Pages: Home, Services, Portfolio, Industries, Blog, About, Contact  

## Improvements Added:
- **Next.js** with app directory structure
- **Inter font** from Google Fonts
- **Lucide React** icons
- **Custom Dubai color palette** in Tailwind config
- **Organized file structure** with data separation
- **Performance optimizations** and SEO meta tags
- **Animation specifications** for modern interactions
- **Form validation** and error handling
- **Dubai-specific content** and cultural elements

### Setup Commands
```bash
npx create-next-app@latest nexus-digital --js --tailwind --eslint --app --src-dir --import-alias "@/*"
cd nexus-digital
npm install lucide-react
```

### Custom Tailwind Config
```css
colors: {
  'dubai-gold': '#D4AF37',
  'dubai-dark': '#1a1a2e', 
  'dubai-light': '#16213e',
  'dubai-accent': '#0f3460',
  'luxury-white': '#fafafa',
}
```

### File Structure
```
src/
├── app/
│   ├── layout.js
│   ├── page.js (Home)
│   ├── services/page.js
│   ├── portfolio/page.js  
│   ├── industries/page.js
│   ├── blog/page.js
│   ├── about/page.js
│   └── contact/page.js
├── components/
│   ├── layout/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── ui/
│   │   ├── Button.js
│   │   ├── Card.js
│   │   └── Input.js
│   └── sections/
│       ├── Hero.js
│       ├── Services.js
│       ├── CaseStudies.js
│       └── Industries.js
├── data/
│   ├── services.js
│   ├── portfolio.js
│   └── industries.js
└── styles/
    └── globals.css
```

### Data Structure Examples
```javascript
// services.js
export const services = [
  {
    id: 'web-development',
    title: 'Website Development',
    icon: 'Globe',
    description: 'Custom websites that convert visitors',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    price: 'Starting from AED 5,000'
  }
];

// portfolio.js  
export const portfolioProjects = [
  {
    id: 'dubai-real-estate',
    title: 'Dubai Property Portal',
    industry: 'Real Estate',
    image: '/images/portfolio/project-1.jpg',
    results: {
      metric1: '300% Lead Increase',
      metric2: 'AED 2M+ Sales', 
      metric3: '50K+ Monthly Visitors'
    }
  }
];
```

---

## Pages & Sections (Detailed Requirements)

### 1. Home Page (`/`)
**Hero Section**
- **Layout**: Full-screen height with centered content
- **Headline**: "Dubai's Premier Digital Growth Agency"
- **Sub-headline**: "We Build Websites, Apps & Marketing Systems That Drive Real ROI"
- **CTAs**: Primary "Book Strategy Call" + Secondary "View Our Work"
- **Background**: Animated gradient with subtle Dubai skyline SVG overlay
- **Stats ticker**: "500+ Projects • AED 50M+ Revenue Generated • 98% Client Retention"

**Services Grid**
- 5 service cards in responsive grid
- Hover animations with icon transforms
- Each card links to service detail page

**Results Showcase**
- Before/after metrics in animated counters
- Client logos carousel
- Video testimonials (placeholder)

**Industries We Serve**
- 4 industry cards with sector-specific imagery
- Hover reveals case study preview

**Why Choose Nexus**
- 4 key differentiators with icons:
  1. "Dubai Market Expertise" - Local team, cultural understanding
  2. "Performance Guarantee" - ROI commitments, money-back guarantee
  3. "Full-Stack Solution" - Tech + Marketing integration
  4. "Rapid Execution" - 30-day project delivery

### 2. Services Page (`/services`)
**Service Detail Sections**:
1. **Website Development**
   - Features: E-commerce, CMS, Custom Development
   - Technologies: React, Next.js, WordPress
   - Starting price: AED 5,000

2. **Mobile App Development**
   - Platforms: iOS, Android, Cross-platform
   - Features: Native performance, API integration
   - Starting price: AED 15,000

3. **Social Media Marketing**
   - Platforms: Instagram, TikTok, LinkedIn, Twitter
   - Services: Content creation, community management, influencer partnerships
   - Starting price: AED 3,000/month

4. **Performance Marketing**
   - Channels: Google Ads, Meta Ads, TikTok Ads
   - Focus: Lead generation, e-commerce sales
   - Starting price: 15% of ad spend

5. **Management Systems**
   - CRM, ERP, Custom dashboards
   - Integrations with existing tools
   - Starting price: AED 8,000

### 3. Portfolio Page (`/portfolio`)
- Filterable by industry/service type
- Masonry grid layout
- Modal popup for detailed case studies
- Client testimonial integration

### 4. Industries Page (`/industries`)
**Key Industries**:
- **Real Estate**: Lead generation, Social media marketing, CRM integration
- **Hospitality**: Booking systems, social media, reputation management  
- **E-commerce**: Conversion optimization, inventory management, marketing automation
- **Health & Beauty**: Appointment booking, social commerce, compliance-focused marketing
- **Others**

### 5. Contact Page (`/contact`)
**Contact Form Fields**:
- Full Name (required)
- Email (required, validation)
- Phone Number with UAE country code default
- Company Name
- Service Interest (dropdown)
- Project Budget (range slider)
- Project Timeline (dropdown)
- Message (required)

**Contact Information**:
- Address: Dubai Internet City (or appropriate Dubai address)
- Phone: +971 4 XXX XXXX
- WhatsApp: Direct click-to-chat
- Email: info@nexusdigital.ae

**Interactive Elements**:
- Google Maps embed with custom marker
- WhatsApp floating button
- Calendar booking widget integration placeholder

---

## Components Specifications

### Navbar.js Requirements
- Sticky positioning with background blur effect
- Logo with hover animation
- Desktop: horizontal menu
- Mobile: hamburger menu with slide-out drawer
- Active page highlighting
- Smooth scroll to sections for home page
- CTA button always visible

### Footer.js Requirements
- 4 columns: About, Services, Industries, Contact
- Social media icons with hover effects
- Newsletter signup
- Copyright notice
- WhatsApp contact button
- Back to top button

### Reusable UI Components
- **Button.js**: Primary, secondary, outline variants with loading states
- **Card.js**: Default, hover, featured variants
- **Input.js**: Text, email, textarea, select with validation styling

---

## SEO & Performance Requirements

### Meta Tags for Each Page
```javascript
// Example for home page
export const metadata = {
  title: 'Nexus Digital - Dubai\'s Premier Digital Agency | Web Development & Marketing',
  description: 'Dubai\'s leading digital agency specializing in website development, app creation, and performance marketing. 500+ successful projects, guaranteed ROI.',
  keywords: 'Dubai web development, UAE digital agency, website design Dubai, app development UAE',
  openGraph: {
    title: 'Nexus Digital - Dubai Digital Agency',
    description: 'Transform your business with Dubai\'s premier digital agency',
    images: ['/images/og-image.jpg'],
  }
}
```

### Performance Optimizations
- Next.js Image component for all images
- Lazy loading for below-fold content
- Minified CSS and JavaScript
- Google Fonts optimization
- Compressed images (WebP format)

---

## Animation & Interaction Requirements

### Scroll Animations
- Fade-in animations for sections as they enter viewport
- Counter animations for statistics
- Stagger animations for card grids
- Parallax scrolling for hero backgrounds

### Hover Effects
- Card lift and shadow increase
- Button color transitions
- Icon rotations/transforms
- Image zoom effects in portfolio

### Loading States
- Skeleton loaders for dynamic content
- Button loading spinners
- Page transition animations

---

## Content Guidelines

### Tone of Voice
- Professional yet approachable
- Results-focused language
- Local Dubai references where appropriate
- Confidence without arrogance
- Clear, jargon-free explanations

### Dubai-Specific Elements
- Currency in AED
- Local business hours (Sunday-Thursday)
- Arabic language toggle option (future enhancement)
- UAE-specific case studies and examples
- Dubai landmarks in design elements (subtle)

---

## Technical Requirements

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

### Browser Support
- Chrome (last 2 versions)
- Safari (last 2 versions)  
- Firefox (last 2 versions)
- Edge (last 2 versions)

### Form Handling
- Client-side validation
- Success/error states
- Form submission to placeholder endpoint
- Email format validation
- Phone number format validation (UAE)

---

## Deliverables Checklist

### Code Quality
- [ ] Clean, commented code
- [ ] Consistent naming conventions  
- [ ] Proper component structure
- [ ] Error boundaries implemented
- [ ] Loading states for all async operations

### Functionality
- [ ] All pages render correctly
- [ ] Navigation works on all devices
- [ ] Forms validate and show appropriate feedback
- [ ] All links and buttons functional
- [ ] Images optimized and loading properly

### Design
- [ ] Consistent styling across all pages
- [ ] Responsive design working on all breakpoints
- [ ] Hover states and animations smooth
- [ ] Typography hierarchy clear
- [ ] Color scheme consistent

### Content
- [ ] All placeholder content realistic and relevant
- [ ] SEO meta tags on all pages
- [ ] Proper heading structure (H1, H2, H3)
- [ ] Alt text for all images
- [ ] Contact information complete

---

## Post-Development Notes
After completing the build, provide:
1. Brief setup instructions
2. List of placeholder content that needs real data
3. Recommendations for deployment (Vercel/Netlify)
4. Suggestions for future enhancements
5. Performance optimization checklist