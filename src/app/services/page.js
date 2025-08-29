import { services } from '@/data/services';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

export const metadata = {
    title: 'Our Services - Nexus Digital | Web, Apps & Digital Marketing',
    description: 'Comprehensive digital services including web development, mobile apps, digital marketing, and custom solutions for Dubai businesses.',
    keywords: 'digital services Dubai, web development UAE, app development Dubai, digital marketing agency UAE',
};

export default function Services() {
    return (
        <div className="min-h-screen bg-luxury-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-dubai-dark text-luxury-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Comprehensive digital solutions tailored for ambitious businesses in Dubai
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12">
                        {services.map((service) => (
                            <div key={service.id} id={service.id} className="scroll-mt-20">
                                <Card variant="hover" className="p-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h2 className="text-3xl font-bold text-dubai-dark mb-4">
                                                {service.title}
                                            </h2>
                                            <p className="text-gray-600 mb-6">
                                                {service.details.overview}
                                            </p>
                                            <div className="mb-8">
                                                <h3 className="text-xl font-semibold text-dubai-dark mb-4">
                                                    What's Included
                                                </h3>
                                                <ul className="space-y-2">
                                                    {service.details.includes.map((item) => (
                                                        <li key={item} className="flex items-center text-gray-600">
                                                            <ChevronRight className="w-4 h-4 text-dubai-gold mr-2" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <p className="text-dubai-dark font-semibold">
                                                    Starting from: <span className="text-dubai-gold">{service.price}</span>
                                                </p>
                                                <Button variant="primary">Get Started</Button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bg-dubai-light/5 rounded-lg p-6">
                                                <h3 className="text-xl font-semibold text-dubai-dark mb-4">
                                                    Our Process
                                                </h3>
                                                <div className="space-y-4">
                                                    {service.details.process.map((step, index) => (
                                                        <div key={step} className="flex items-start">
                                                            <div className="flex-shrink-0 w-8 h-8 bg-dubai-gold text-dubai-dark rounded-full flex items-center justify-center font-bold mr-3">
                                                                {index + 1}
                                                            </div>
                                                            <div className="text-gray-600">{step}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {service.technologies && (
                                                    <div className="mt-8">
                                                        <h4 className="font-semibold text-dubai-dark mb-2">
                                                            Technologies
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {service.technologies.map((tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="px-3 py-1 bg-dubai-gold/10 text-dubai-dark rounded-full text-sm"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
