'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Languages } from 'lucide-react';

const LanguageContext = createContext();

// Arabic translations
const translations = {
    en: {
        // Navigation
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'About',
        contact: 'Contact',
        blog: 'Blog',

        // Common
        learnMore: 'Learn More',
        getStarted: 'Get Started',
        bookConsultation: 'Book Consultation',
        viewWork: 'View Our Work',
        contactUs: 'Contact Us',
        readMore: 'Read More',
        viewAll: 'View All',

        // Hero Section
        heroTitle: "Dubai's Premier Digital Growth Agency",
        heroSubtitle: 'We Build Websites, Apps & Marketing Systems That Drive Real ROI',

        // Services
        servicesTitle: 'Our Premium Services',
        servicesSubtitle: 'Comprehensive digital solutions tailored for the Dubai market, designed to accelerate your business growth with cutting-edge technology.',

        // Social Proof
        activeProjects: 'Active Projects',
        projectsCompleted: 'Projects Completed',
        clientSatisfaction: 'Client Satisfaction',
        recentWins: 'Recent Wins',

        // Footer
        aboutCompany: 'About Nexus Digital',
        aboutText: 'Dubai\'s premier digital growth agency specializing in web development, marketing, and custom solutions for ambitious businesses.',
        newsletter: 'Newsletter',
        newsletterText: 'Subscribe to our newsletter for digital insights and industry updates.',
        subscribeButton: 'Subscribe',

        // Free Tools
        freeToolsTitle: 'Free Tools & Resources',
        freeToolsSubtitle: 'Analyze and improve your digital presence with our free professional tools',

        // Contact
        phoneNumber: 'Phone Number',
        emailAddress: 'Email Address',
        officeAddress: 'Office Address',
        businessHours: 'Business Hours',

        // Referral Program
        referralTitle: 'Referral Rewards Program',
        referralSubtitle: 'Earn amazing rewards by referring businesses to Nexus Digital. The more you refer, the more you earn!',
    },
    ar: {
        // Navigation
        home: 'الرئيسية',
        services: 'الخدمات',
        portfolio: 'معرض الأعمال',
        about: 'نبذة عنا',
        contact: 'اتصل بنا',
        blog: 'المدونة',

        // Common
        learnMore: 'اعرف المزيد',
        getStarted: 'ابدأ الآن',
        bookConsultation: 'احجز استشارة',
        viewWork: 'شاهد أعمالنا',
        contactUs: 'تواصل معنا',
        readMore: 'اقرأ المزيد',
        viewAll: 'عرض الكل',

        // Hero Section
        heroTitle: 'وكالة النمو الرقمي الرائدة في دبي',
        heroSubtitle: 'نبني المواقع والتطبيقات وأنظمة التسويق التي تحقق عائد استثمار حقيقي',

        // Services
        servicesTitle: 'خدماتنا المتميزة',
        servicesSubtitle: 'حلول رقمية شاملة مصممة خصيصاً لسوق دبي، لتسريع نمو أعمالك بأحدث التقنيات.',

        // Social Proof
        activeProjects: 'المشاريع النشطة',
        projectsCompleted: 'المشاريع المكتملة',
        clientSatisfaction: 'رضا العملاء',
        recentWins: 'الإنجازات الأخيرة',

        // Footer
        aboutCompany: 'عن نيكسوس ديجيتال',
        aboutText: 'وكالة النمو الرقمي الرائدة في دبي المتخصصة في تطوير الويب والتسويق والحلول المخصصة للشركات الطموحة.',
        newsletter: 'النشرة الإخبارية',
        newsletterText: 'اشترك في نشرتنا الإخبارية للحصول على رؤى رقمية وتحديثات الصناعة.',
        subscribeButton: 'اشترك',

        // Free Tools
        freeToolsTitle: 'الأدوات والموارد المجانية',
        freeToolsSubtitle: 'حلل وحسن حضورك الرقمي باستخدام أدواتنا المهنية المجانية',

        // Contact
        phoneNumber: 'رقم الهاتف',
        emailAddress: 'عنوان البريد الإلكتروني',
        officeAddress: 'عنوان المكتب',
        businessHours: 'ساعات العمل',

        // Referral Program
        referralTitle: 'برنامج مكافآت الإحالة',
        referralSubtitle: 'احصل على مكافآت رائعة من خلال إحالة الشركات إلى نيكسوس ديجيتال. كلما أحلت أكثر، كلما ربحت أكثر!',
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [isRTL, setIsRTL] = useState(false);

    useEffect(() => {
        // Get saved language from localStorage
        const savedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(savedLanguage);
        setIsRTL(savedLanguage === 'ar');

        // Update document direction and language
        document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = savedLanguage;
    }, []);

    const switchLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        setIsRTL(newLanguage === 'ar');
        localStorage.setItem('language', newLanguage);

        // Update document direction and language
        document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLanguage;
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, isRTL, switchLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Language Switcher Component
export const LanguageSwitcher = ({ className = '' }) => {
    const { language, switchLanguage } = useLanguage();

    return (
        <div className={`relative ${className}`}>
            <button
                onClick={() => switchLanguage(language === 'en' ? 'ar' : 'en')}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white"
            >
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium">
                    {language === 'en' ? 'العربية' : 'English'}
                </span>
            </button>
        </div>
    );
};

// RTL-aware component wrapper
export const RTLWrapper = ({ children, className = '' }) => {
    const { isRTL } = useLanguage();

    return (
        <div className={`${isRTL ? 'rtl-content' : 'ltr-content'} ${className}`}>
            {children}
        </div>
    );
};

// Text direction utility hook
export const useTextDirection = () => {
    const { isRTL } = useLanguage();

    const getDirectionClasses = (ltrClasses, rtlClasses) => {
        return isRTL ? rtlClasses : ltrClasses;
    };

    const getMarginClasses = (marginLeft, marginRight) => {
        return isRTL ? `mr-${marginLeft} ml-${marginRight}` : `ml-${marginLeft} mr-${marginRight}`;
    };

    const getPaddingClasses = (paddingLeft, paddingRight) => {
        return isRTL ? `pr-${paddingLeft} pl-${paddingRight}` : `pl-${paddingLeft} pr-${paddingRight}`;
    };

    return {
        isRTL,
        getDirectionClasses,
        getMarginClasses,
        getPaddingClasses,
        textAlign: isRTL ? 'right' : 'left',
        flexDirection: isRTL ? 'row-reverse' : 'row',
    };
};

// Higher-order component for RTL support
export const withRTL = (Component) => {
    return function RTLComponent(props) {
        const { isRTL } = useLanguage();
        return <Component {...props} isRTL={isRTL} />;
    };
};

export default LanguageProvider;
