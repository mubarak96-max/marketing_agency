import React from 'react';
import Link from 'next/link';
import {
  Code,
  Smartphone,
  Globe,
  ShoppingBag,
  Database,
  BarChart3,
  Award,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Zap,
  Monitor,
  Layout,
  Server,
  TrendingUp,
  Search
} from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/data/site';

export const metadata = {
  title: 'Mubarak Mutesasira | Web Developer & Mobile App Developer in Uganda',
  description: 'Hire Mubarak Mutesasira, a freelance web developer and mobile app developer in Uganda. Experienced website designer in Uganda specializing in React, Next.js, React Native, Shopify, and full-stack development.',
  keywords: 'web developer in Uganda, freelance web developer, web developer near me, mobile app developer in Uganda, website designer in uganda, web designer in Uganda, React developer Uganda, Next.js developer, Shopify developer Uganda, full stack developer Kampala',
  openGraph: {
    title: 'Mubarak Mutesasira | Web Developer & Mobile App Developer in Uganda',
    description: 'Hire Mubarak Mutesasira, a freelance web developer and mobile app developer in Uganda. Experienced website designer in Uganda specializing in React, Next.js, React Native, Shopify, and full-stack development.',
    images: ['/images/og-image.jpg'],
  },
};

const skillCategories = [
  {
    title: 'Website Design & Frontend',
    icon: <Monitor className="w-6 h-6" />,
    skills: [
      'React.js & Next.js',
      'HTML5 & CSS3',
      'JavaScript ES6+',
      'Tailwind CSS',
      'Progressive Web Apps (PWA)',
      'Responsive Design',
      'WCAG Accessibility',
    ],
  },
  {
    title: 'Mobile App Development',
    icon: <Smartphone className="w-6 h-6" />,
    skills: [
      'React Native',
      'Cross-Platform Development (iOS & Android)',
      'Expo',
      'Push Notifications',
      'App Store & Play Store Publishing',
      'Native Modules Integration',
      'Offline-First Architecture',
    ],
  },
  {
    title: 'Backend & Database',
    icon: <Server className="w-6 h-6" />,
    skills: [
      'Node.js & Express.js',
      'MongoDB',
      'Firebase (Auth, Firestore, Functions)',
      'RESTful APIs',
      'GraphQL',
      'Authentication (JWT, OAuth)',
      'Docker',
    ],
  },
  {
    title: 'CMS & E-commerce',
    icon: <ShoppingBag className="w-6 h-6" />,
    skills: [
      'Shopify (Liquid, APIs, Apps)',
      'WordPress (Themes, Plugins)',
      'Headless CMS (Strapi, Contentful)',
      'Payment Integration',
      'Cart & Checkout Optimization',
    ],
  },
  {
    title: 'SEO & Analytics',
    icon: <TrendingUp className="w-6 h-6" />,
    skills: [
      'Technical SEO',
      'Google Analytics 4',
      'Google Tag Manager',
      'Schema Markup',
      'Core Web Vitals Optimization',
      'Conversion Tracking',
      'A/B Testing',
    ],
  },
  {
    title: 'Data & Marketing',
    icon: <BarChart3 className="w-6 h-6" />,
    skills: [
      'Python (Pandas, NumPy)',
      'Data Visualization',
      'Google Data Studio',
      'Meta Pixel & Ads',
      'Content Creation (Premiere, Canva)',
      'AI Tools Integration',
    ],
  },
];

const experiences = [
  {
    role: 'Digital Marketing Executive & Web Developer',
    company: 'Home Sweet Home Real Estate — Dubai',
    period: '2024 – Present',
    highlights: [
      'Built a full-stack real estate platform using React.js, Next.js, and Node.js with MongoDB',
      'Improved local SEO visibility by 85% through technical SEO and schema markup',
      'Achieved 65% faster page loads via performance optimization and code splitting',
      'Generated 150+ qualified monthly leads through automated capture systems',
    ],
  },
  {
    role: 'Web and App Developer',
    company: '800Sayara — Dubai',
    period: '2024',
    highlights: [
      'Launched official website and cross-platform mobile app using React.js and React Native',
      'Built RESTful APIs for car booking, user management, and payment processing',
      'Achieved 40% faster booking completion rates through optimized user flows',
      'Improved user engagement and retention by 35%',
    ],
  },
  {
    role: 'Digital Marketing & E-commerce Manager',
    company: 'BookHero — Dubai',
    period: '2023 – 2024',
    highlights: [
      'Built a complete online bookstore with Shopify and custom Node.js integrations',
      'Improved organic traffic by 60% and reduced cart abandonment by 25%',
      'Achieved 4.2% CTR improvement and 15% higher conversion rates through A/B testing',
      'Developed real-time analytics dashboards using React.js and Google Data Studio',
    ],
  },
  {
    role: 'Web/App Developer & SEO Specialist',
    company: 'SOLVING PATH — Dubai',
    period: '2021 – 2023',
    highlights: [
      'Built and maintained 10+ websites and web applications using React.js, Next.js, and Node.js',
      'Achieved 95+ Google PageSpeed scores through advanced optimization',
      'Improved organic visibility by 60% across multiple client websites',
      'Created RESTful APIs and integrated third-party services',
    ],
  },
  {
    role: 'Social Media Manager',
    company: 'Brokers Online Africa',
    period: '2019 – 2021',
    highlights: [
      'Built custom content management and analytics systems',
      'Developed web-based automation tools improving team productivity by 50%',
      'Created campaign management tools for targeted advertising across platforms',
    ],
  },
];

const projects = [
  {
    title: 'Real Estate Platform',
    description: 'A full-stack property search and mortgage calculator platform built with Next.js and Node.js.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'SEO'],
    metric: '85% SEO improvement',
  },
  {
    title: 'Car Booking Mobile App',
    description: 'Cross-platform React Native app with real-time GPS tracking, push notifications, and secure payments.',
    tags: ['React Native', 'Firebase', 'Node.js', 'Maps'],
    metric: '40% faster bookings',
  },
  {
    title: 'Online Bookstore',
    description: 'Shopify-powered e-commerce platform with custom theme development and external API integrations.',
    tags: ['Shopify', 'Liquid', 'Node.js', 'Analytics'],
    metric: '60% organic traffic growth',
  },
  {
    title: 'Admin Dashboards',
    description: 'Internal management dashboards for real-time service tracking, analytics, and team operations.',
    tags: ['React.js', 'MongoDB', 'Charts', 'APIs'],
    metric: '50% productivity gain',
  },
];

const certifications = [
  'IBM Professional Data Science Certificate — Coursera',
  'Certificate in Digital Marketing — Udemy',
  'Technical Writing — Udemy',
  'HubSpot Inbound Marketing — HubSpot',
];

export default function MubarakPortfolio() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mubarak Mutesasira',
    jobTitle: 'Web Developer & Mobile App Developer',
    description: 'Freelance web developer and mobile app developer in Uganda specializing in React, Next.js, React Native, and Shopify.',
    url: `${siteConfig.domain}/mubarak-mutesasira-web-designer-in-uganda`,
    email: 'mubarakmmm5@gmail.com',
    telephone: '+971552193684',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kampala',
      addressCountry: 'UG',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Uganda Advanced Certificate of Education',
    },
    knowsAbout: [
      'Web Development',
      'Mobile App Development',
      'React.js',
      'Next.js',
      'React Native',
      'Shopify Development',
      'SEO',
      'Node.js',
      'MongoDB',
      'Firebase',
    ],
    sameAs: [
      'https://www.linkedin.com/in/mubarak-mutesa-43a2109',
    ],
  };

  return (
    <div className="min-h-screen bg-section-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-section-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-section-dark via-section-medium to-brand-dark opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/20 rounded-full text-brand-accent text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              Available for Projects in Uganda & Remote
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-on-dark mb-6">
              Mubarak Mutesasira
            </h1>
            <p className="text-xl md:text-2xl text-text-muted-dark mb-4 max-w-3xl mx-auto">
              Freelance Web Developer & Mobile App Developer in Uganda
            </p>
            <p className="text-lg text-text-muted-dark mb-10 max-w-2xl mx-auto">
              Website designer in Uganda specializing in React, Next.js, React Native, and Shopify. 
              I build fast, modern websites and mobile apps that help businesses grow online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-accent transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hire Me on WhatsApp
              </a>
              <a
                href="mailto:mubarakmmm5@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-text-on-dark text-text-on-dark rounded-lg font-medium hover:bg-text-on-dark hover:text-section-dark transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send an Email
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '10+', label: 'Websites Built' },
                { value: '95+', label: 'PageSpeed Score' },
                { value: '60%', label: 'Avg. SEO Growth' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-brand-accent">{stat.value}</div>
                  <div className="text-sm text-text-muted-dark">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-on-light mb-6">
              Why Work With a Local Web Developer?
            </h2>
            <p className="text-lg text-text-muted-light leading-relaxed mb-6">
              Searching for a <strong>web developer near me</strong> or a reliable <strong>website designer in Uganda</strong>? 
              I am Mubarak Mutesasira, a <strong>web developer in Uganda</strong> with hands-on experience building 
              websites, mobile apps, and e-commerce platforms for businesses across Kampala and beyond.
            </p>
            <p className="text-lg text-text-muted-light leading-relaxed mb-6">
              Whether you need a brand-new website, a custom mobile app, or a Shopify store that actually converts, 
              I bring full-stack expertise with a marketing mindset. Every project is built with performance, 
              SEO, and user experience at its core.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['React.js', 'Next.js', 'React Native', 'Node.js', 'Shopify', 'MongoDB', 'Firebase', 'Tailwind CSS'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-section-light text-brand-primary rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-on-light mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-text-muted-light max-w-2xl mx-auto">
              As a full-stack <strong>freelance web developer</strong> and <strong>mobile app developer in Uganda</strong>, 
              I work with modern tools to deliver scalable, high-performance solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-border-light hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text-on-light">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm text-text-muted-light">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-on-light mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-text-muted-light max-w-2xl mx-auto">
              Proven track record delivering results for real estate, e-commerce, automotive, and service-based businesses.
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border-light"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-on-light">{exp.role}</h3>
                    <p className="text-brand-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-text-muted-light mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-muted-light">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-on-light mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-text-muted-light max-w-2xl mx-auto">
              A selection of projects that show what a dedicated <strong>web developer in Uganda</strong> can deliver 
              when design, code, and strategy come together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-text-on-light">{project.title}</h3>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                    {project.metric}
                  </span>
                </div>
                <p className="text-text-muted-light mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-section-light text-brand-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-on-light mb-4">
              Certifications & Education
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border-light">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-brand-primary" />
                <h3 className="text-lg font-bold text-text-on-light">Education</h3>
              </div>
              <p className="text-text-muted-light">
                Uganda Advanced Certificate of Education (UACE)
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border-light">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-brand-primary" />
                <h3 className="text-lg font-bold text-text-on-light">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2 text-sm text-text-muted-light">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-on-dark mb-6">
            Need a Website or Mobile App?
          </h2>
          <p className="text-lg text-text-muted-dark mb-8 max-w-2xl mx-auto">
            If you are looking for a <strong>web developer near me</strong>, a <strong>freelance web developer</strong>, 
            or a <strong>mobile app developer in Uganda</strong>, let us talk. I am available for freelance projects, 
            contract work, and long-term collaborations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-accent transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:mubarakmmm5@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-text-on-dark text-text-on-dark rounded-lg font-semibold hover:bg-text-on-dark hover:text-section-dark transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me Directly
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-text-muted-dark">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Kampala, Uganda</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>mubarakmmm5@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+971 55 219 3684</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
