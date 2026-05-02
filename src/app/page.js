import Hero from '@/components/sections/Hero';
import EnhancedServices from '@/components/sections/EnhancedServices';
import SocialProof from '@/components/sections/SocialProof';
import CaseStudies from '@/components/sections/CaseStudies';
import FreeTools from '@/components/sections/FreeTools';
import ReferralProgram from '@/components/sections/ReferralProgram';
import { MessageCircle } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/data/site';

export const metadata = {
  title: 'Professional Web Development Company in Uganda | Website Design, Apps & Marketing',
  description: 'We build websites, mobile apps, and digital marketing systems for businesses in Kampala and across Uganda.',
  openGraph: {
    title: 'Professional Web Development Company in Uganda | Website Design, Apps & Marketing',
    description: 'Professional Web Development Company in Uganda | Website Design, Apps & Marketing',
    images: ['/images/og-image.jpg'],
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <EnhancedServices />
      <CaseStudies />
      <FreeTools />
      <ReferralProgram />

      {/* WhatsApp floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.brandName} on WhatsApp`}
        className="fixed bottom-6 right-6 z-50 bg-brand-primary text-white p-4 rounded-full shadow-lg hover:bg-brand-accent transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
