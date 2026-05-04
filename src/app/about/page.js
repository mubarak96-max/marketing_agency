export const metadata = {
  title: 'About MM Tech Spot | Web Development & Marketing Agency Uganda',
  description: 'Learn about MM Tech Spot, a Uganda-focused website development, app development, and digital marketing agency serving businesses in Kampala and beyond.',
  keywords: 'about MM Tech Spot, web development company Uganda, digital marketing agency Uganda',
};

export default function About() {
  return (
    <div className="min-h-screen bg-luxury-white">
      <section className="relative py-20 bg-dubai-dark text-luxury-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">About MM Tech Spot</h1>
            <p className="text-xl md:text-2xl text-luxury-white/90 mb-8 max-w-3xl mx-auto">
              A Uganda-focused digital agency helping businesses grow through better websites, mobile apps, and measurable marketing systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-dark mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              MM Tech Spot exists to help businesses in Kampala and across Uganda compete more effectively online. We build digital assets that support real commercial outcomes, not just attractive visuals. That means better websites, clearer offers, stronger campaigns, and systems that help teams move faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-dubai-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To help businesses in Uganda turn websites, mobile apps, and digital marketing into practical growth channels with clear commercial value.
              </p>
              <h3 className="text-2xl font-bold text-dubai-dark mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the agency teams trust when they need digital execution that is commercially sharp, technically solid, and locally relevant.
              </p>
            </div>
            <div className="bg-dubai-dark rounded-lg p-8 text-luxury-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose MM Tech Spot?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                  Conversion-focused strategy, not just design output
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                  Website, PPC, and app work aligned to business goals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                  Stronger local targeting for Kampala and Uganda search demand
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                  Clear process, realistic timelines, and measurable reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-dark mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles shape how we scope work, communicate with clients, and measure success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-dubai-dark">C</span>
              </div>
              <h3 className="text-xl font-bold text-dubai-dark mb-4">Clarity</h3>
              <p className="text-gray-600">
                We define scope, expectations, and success metrics clearly before work begins.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-dubai-dark">P</span>
              </div>
              <h3 className="text-xl font-bold text-dubai-dark mb-4">Performance</h3>
              <p className="text-gray-600">
                We optimize for lead quality, conversion, usability, and long-term digital efficiency.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-dubai-dark">A</span>
              </div>
              <h3 className="text-xl font-bold text-dubai-dark mb-4">Accountability</h3>
              <p className="text-gray-600">
                We care about outcomes and keep communication direct, transparent, and measurable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
