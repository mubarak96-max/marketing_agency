import { industries } from '@/data/industries';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Building2, Hotel, ShoppingBag, Heart, ChevronRight } from 'lucide-react';

const icons = {
    Building2,
    Hotel,
    ShoppingBag,
    Heart,
};

export const metadata = {
    title: 'Industries - Nexus Digital | Sector-Specific Digital Solutions',
    description: 'Industry-specific digital solutions for Dubai businesses. Expertise in Real Estate, Hospitality, E-commerce, and Healthcare sectors.',
    keywords: 'digital solutions Dubai, industry solutions UAE, sector-specific digital services',
};

export default function Industries() {
    return (
        <div className="min-h-screen bg-luxury-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-dubai-dark text-luxury-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            Industries We Serve
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Specialized digital solutions tailored for Dubai's key business sectors
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12">
                        {industries.map((industry) => {
                            const Icon = icons[industry.icon];
                            return (
                                <div key={industry.id} id={industry.id} className="scroll-mt-20">
                                    <Card variant="hover" className="p-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <div className="text-dubai-gold mb-6">
                                                    <Icon className="w-12 h-12" />
                                                </div>
                                                <h2 className="text-3xl font-bold text-dubai-dark mb-4">
                                                    {industry.title}
                                                </h2>
                                                <p className="text-gray-600 mb-6">
                                                    {industry.description}
                                                </p>
                                                <Button variant="primary">Learn More</Button>
                                            </div>

                                            <div className="space-y-8">
                                                {/* Services */}
                                                <div>
                                                    <h3 className="text-xl font-semibold text-dubai-dark mb-4">
                                                        Our Solutions
                                                    </h3>
                                                    <div className="space-y-4">
                                                        {industry.services.map((service) => (
                                                            <div key={service.name} className="bg-dubai-light/5 p-4 rounded-lg">
                                                                <h4 className="font-semibold text-dubai-dark mb-2">
                                                                    {service.name}
                                                                </h4>
                                                                <p className="text-gray-600 text-sm">
                                                                    {service.description}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Case Studies */}
                                                {industry.caseStudies && (
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-dubai-dark mb-4">
                                                            Success Stories
                                                        </h3>
                                                        {industry.caseStudies.map((study) => (
                                                            <div
                                                                key={study.title}
                                                                className="bg-dubai-gold/10 p-4 rounded-lg"
                                                            >
                                                                <h4 className="font-semibold text-dubai-dark mb-2">
                                                                    {study.title}
                                                                </h4>
                                                                <div className="space-y-1">
                                                                    {study.results.map((result) => (
                                                                        <div
                                                                            key={result}
                                                                            className="flex items-center text-dubai-gold"
                                                                        >
                                                                            <ChevronRight className="w-4 h-4 mr-1" />
                                                                            <span className="text-sm">{result}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
