'use client';

import React, { createContext, useContext } from 'react';

const LanguageContext = createContext({
  language: 'en',
  isRTL: false,
  switchLanguage: () => { },
  t: (key) => key,
});

const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    contact: 'Contact',
    blog: 'Blog',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    bookConsultation: 'Book Consultation',
    viewWork: 'View Our Work',
    contactUs: 'Contact Us',
    readMore: 'Read More',
    viewAll: 'View All',
    heroTitle: 'Website Development Company in Uganda',
    heroSubtitle: 'We build websites, mobile apps, and marketing systems that help businesses in Uganda grow online.',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Website development, app development, digital marketing, and PPC services for ambitious businesses in Kampala and across Uganda.',
    activeProjects: 'Active Projects',
    projectsCompleted: 'Projects Completed',
    clientSatisfaction: 'Client Satisfaction',
    recentWins: 'Recent Wins',
    aboutCompany: 'About MM Tech Spot',
    aboutText: 'MM Tech Spot is a Uganda-focused digital agency specializing in website development, digital marketing, and custom business systems.',
    newsletter: 'Newsletter',
    newsletterText: 'Subscribe for practical insights on websites, PPC, and digital growth in Uganda.',
    subscribeButton: 'Subscribe',
    freeToolsTitle: 'Free Tools & Resources',
    freeToolsSubtitle: 'Analyze and improve your digital presence with our free professional tools.',
    phoneNumber: 'Phone Number',
    emailAddress: 'Email Address',
    officeAddress: 'Office Address',
    businessHours: 'Business Hours',
    referralTitle: 'Referral Rewards Program',
    referralSubtitle: 'Earn rewards when you refer businesses that need websites, apps, or digital marketing support.',
  },
};

export const LanguageProvider = ({ children }) => {
  const value = {
    language: 'en',
    isRTL: false,
    switchLanguage: () => { },
    t: (key) => translations.en[key] || key,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageSwitcher = () => null;

export const RTLWrapper = ({ children, className = '' }) => {
  return <div className={`ltr-content ${className}`}>{children}</div>;
};

export const useTextDirection = () => ({
  isRTL: false,
  getDirectionClasses: (ltrClasses) => ltrClasses,
  getMarginClasses: (marginLeft, marginRight) => `ml-${marginLeft} mr-${marginRight}`,
  getPaddingClasses: (paddingLeft, paddingRight) => `pl-${paddingLeft} pr-${paddingRight}`,
  textAlign: 'left',
  flexDirection: 'row',
});

export const withRTL = (Component) => {
  return function RTLComponent(props) {
    return <Component {...props} isRTL={false} />;
  };
};

export default LanguageProvider;
