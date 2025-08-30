export const metadata = {
    title: 'Blog - Nexus Digital | Digital Marketing Insights & Tips',
    description: 'Stay updated with the latest digital marketing trends, web development tips, and business growth strategies from Dubai\'s leading digital agency.',
    keywords: 'digital marketing blog, web development tips, Dubai business insights, UAE digital trends',
};

export default function Blog() {
    return (
        <div className="min-h-screen bg-luxury-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-dubai-dark text-luxury-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            Digital Insights
                        </h1>
                        <p className="text-xl md:text-2xl text-luxury-white/90 mb-8 max-w-3xl mx-auto">
                            Expert insights, industry trends, and actionable tips to grow your business online
                        </p>
                    </div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="w-24 h-24 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-8">
                                <svg className="w-12 h-12 text-dubai-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-dubai-dark mb-6">
                                Coming Soon
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We're preparing valuable content about digital marketing strategies,
                                web development best practices, and business growth tips specifically
                                for the Dubai and UAE market.
                            </p>
                            <div className="bg-gray-50 rounded-lg p-8">
                                <h3 className="text-xl font-bold text-dubai-dark mb-4">
                                    What to expect:
                                </h3>
                                <ul className="text-left space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                                        Digital Marketing Strategies for UAE Businesses
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                                        Web Development Best Practices
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                                        E-commerce Growth Tips
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                                        Social Media Marketing Insights
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3"></span>
                                        Case Studies and Success Stories
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-dubai-dark text-luxury-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Stay Updated
                        </h2>
                        <p className="text-xl text-luxury-white/90 mb-8 max-w-2xl mx-auto">
                            Be the first to know when we publish new insights and industry updates
                        </p>
                        <div className="max-w-md mx-auto">
                            <div className="flex gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-md text-dubai-dark"
                                />
                                <button className="bg-dubai-gold text-dubai-dark px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
