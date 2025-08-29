import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nexus Digital - Dubai\'s Premier Digital Agency | Web Development & Marketing',
  description: 'Dubai\'s leading digital agency specializing in website development, app creation, and performance marketing. 500+ successful projects, guaranteed ROI.',
  keywords: 'Dubai web development, UAE digital agency, website design Dubai, app development UAE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-dubai-dark antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
