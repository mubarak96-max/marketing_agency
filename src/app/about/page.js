export const metadata = {
    title: 'About Us - Nexus Digital | Dubai\'s Premier Digital Agency',
    description: 'Learn about Nexus Digital, Dubai\'s leading digital agency. Our story, mission, and commitment to delivering exceptional digital solutions.',
    keywords: 'about Nexus Digital, Dubai digital agency, UAE web development company, digital agency team',
};

export default function About() {
    return (
        <div className="min-h-screen bg-luxury-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-dubai-dark text-luxury-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            About Nexus Digital
                        </h1>
                        <p className="text-xl md:text-2xl text-luxury-white/90 mb-8 max-w-3xl mx-auto">
                            Dubai's premier digital agency, transforming businesses through innovative technology and strategic design
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-dubai-dark mb-6">
                            Our Story
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Founded in Dubai with a vision to bridge the gap between businesses and digital excellence,
                            Nexus Digital has grown to become the UAE's most trusted digital transformation partner.
                            We combine global expertise with local market understanding to deliver solutions that drive real results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-dubai-dark mb-4">Our Mission</h3>
                            <p className="text-gray-600 mb-6">
                                To empower businesses across Dubai and the UAE with cutting-edge digital solutions
                                that enhance their online presence, streamline operations, and accelerate growth.
                            </p>
                            <h3 className="text-2xl font-bold text-dubai-dark mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the region's leading digital agency, recognized for innovation, quality,
                                and exceptional client success stories.
                            </p>
                        </div>
                        <div className="bg-dubai-dark rounded-lg p-8 text-luxury-white">
                            <h3 className="text-2xl font-bold mb-6">Why Choose Nexus Digital?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                                    500+ Successful Projects
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                                    99% Client Satisfaction Rate
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                                    Expert Team of 50+ Professionals
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                                    24/7 Support & Maintenance
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                                    Guaranteed ROI Improvement
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-dubai-dark mb-6">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            These principles guide everything we do and define how we work with our clients
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-dubai-dark">I</span>
                            </div>
                            <h3 className="text-xl font-bold text-dubai-dark mb-4">Innovation</h3>
                            <p className="text-gray-600">
                                We stay ahead of digital trends and technologies to provide cutting-edge solutions
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-dubai-dark">Q</span>
                            </div>
                            <h3 className="text-xl font-bold text-dubai-dark mb-4">Quality</h3>
                            <p className="text-gray-600">
                                Every project meets the highest standards of design, functionality, and performance
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-dubai-dark">T</span>
                            </div>
                            <h3 className="text-xl font-bold text-dubai-dark mb-4">Transparency</h3>
                            <p className="text-gray-600">
                                Clear communication, honest timelines, and transparent pricing in all our dealings
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
