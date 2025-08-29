import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import Industries from '@/components/sections/Industries';
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
      <Services />
      <CaseStudies />
      <Industries />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/971XXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
