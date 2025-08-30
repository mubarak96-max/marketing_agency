import Hero from '@/components/sections/Hero';
import EnhancedServices from '@/components/sections/EnhancedServices';
import SocialProof from '@/components/sections/SocialProof';
import CaseStudies from '@/components/sections/CaseStudies';
import FreeTools from '@/components/sections/FreeTools';
import ReferralProgram from '@/components/sections/ReferralProgram';
import { MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Nexus Digital - Dubai\'s Premier Digital Agency | Web Development & Marketing',
  description: 'Dubai\'s leading digital agency specializing in website development, app creation, and performance marketing. 500+ successful projects, guaranteed ROI.',
  openGraph: {
    title: 'Nexus Digital - Dubai Digital Agency',
    description: 'Transform your business with Dubai\'s premier digital agency',
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
        href="https://wa.me/971XXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-brand-primary text-white p-4 rounded-full shadow-lg hover:bg-brand-accent transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
