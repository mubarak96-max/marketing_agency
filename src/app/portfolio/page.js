import { portfolioProjects } from '@/data/portfolio';
import Card from '@/components/ui/Card';
import { Star } from 'lucide-react';

export const metadata = {
    title: 'Portfolio - Nexus Digital | Success Stories & Case Studies',
    description: 'Explore our portfolio of successful digital projects across Dubai and the UAE. See how we help businesses achieve exceptional growth.',
    keywords: 'digital portfolio Dubai, case studies UAE, web projects Dubai, digital success stories',
};

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-luxury-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-dubai-dark text-luxury-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            Our Portfolio
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Success stories that showcase our expertise in digital transformation
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12">
                        {portfolioProjects.map((project) => (
                            <Card
                                key={project.id}
                                variant="hover"
                                className="overflow-hidden"
                            >
                                <div className="grid md:grid-cols-2">
                                    {/* Project Image */}
                                    <div className="relative h-64 md:h-full bg-dubai-light">
                                        <div className="absolute inset-0 flex items-center justify-center text-dubai-gold">
                                            Project Image Placeholder
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <div className="p-8">
                                        <div className="mb-6">
                                            <h2 className="text-2xl font-bold text-dubai-dark mb-2">
                                                {project.title}
                                            </h2>
                                            <p className="text-dubai-gold">{project.industry}</p>
                                        </div>

                                        <p className="text-gray-600 mb-6">
                                            {project.description}
                                        </p>

                                        {/* Services Used */}
                                        <div className="mb-6">
                                            <h3 className="text-sm font-semibold text-dubai-dark mb-2">
                                                Services Used
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.services.map((service) => (
                                                    <span
                                                        key={service}
                                                        className="px-3 py-1 bg-dubai-light/10 text-dubai-dark rounded-full text-sm"
                                                    >
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Results */}
                                        <div className="mb-6">
                                            <h3 className="text-sm font-semibold text-dubai-dark mb-3">
                                                Key Results
                                            </h3>
                                            <div className="grid grid-cols-3 gap-4">
                                                {Object.values(project.results).map((result, index) => (
                                                    <div key={index} className="text-center">
                                                        <div className="text-dubai-gold font-bold">
                                                            {result}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Testimonial */}
                                        {project.testimonial && (
                                            <div className="relative bg-dubai-light/5 p-4 rounded-lg">
                                                <div className="absolute -top-3 left-4 text-dubai-gold">
                                                    <Star className="w-6 h-6 fill-current" />
                                                </div>
                                                <p className="text-gray-600 italic mb-2">
                                                    "{project.testimonial.text}"
                                                </p>
                                                <div className="text-sm">
                                                    <span className="font-semibold text-dubai-dark">
                                                        {project.testimonial.author}
                                                    </span>
                                                    <span className="text-gray-500">
                                                        {' '}
                                                        — {project.testimonial.position}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
