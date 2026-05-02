import Link from 'next/link';
import Button from '@/components/ui/Button';

const LocationLandingPage = ({ page }) => {
  return (
    <div className="min-h-screen bg-luxury-white">
      <section className="relative py-20 bg-dubai-dark text-luxury-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-accent font-semibold mb-4">Uganda Location Page</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{page.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{page.heroText}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">Book Strategy Call</Button>
            <Link href="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {page.benefits.map((benefit) => (
              <div key={benefit} className="rounded-xl border border-border-light bg-white p-6 shadow-sm">
                <p className="text-lg font-semibold text-dubai-dark">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            {page.sections.map((section) => (
              <div key={section.title} className="rounded-2xl bg-white p-8 shadow-sm border border-border-light">
                <h2 className="text-2xl font-bold text-dubai-dark mb-4">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-gray-600 leading-8 mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-on-light mb-4">{page.cta}</h2>
          <p className="text-text-muted-light mb-8">
            We help businesses in Kampala and across Uganda turn websites, apps, and campaigns into measurable growth channels.
          </p>
          <Link href="/contact">
            <Button variant="primary">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LocationLandingPage;
