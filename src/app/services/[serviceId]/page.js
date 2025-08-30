import { services } from '@/data/services';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  // Await params in Next.js 15
  const resolvedParams = await params;
  const serviceId = resolvedParams.serviceId;
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    };
  }

  return {
    title: `${service.title} - Nexus Digital | Dubai's Premium Digital Agency`,
    description: service.metaDescription || service.description,
    keywords: service.metaKeywords || service.title,
  };
}

export default async function ServicePage({ params }) {
  // Await params in Next.js 15
  const resolvedParams = await params;
  const serviceId = resolvedParams.serviceId;
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    notFound();
  }

  // Check if the service has the content property, if not add an empty array
  const serviceWithContent = {
    ...service,
    content: service.content || []
  };

  return <ServiceTemplate service={serviceWithContent} />;
}

export async function generateStaticParams() {
  return services.map(service => ({
    serviceId: service.id,
  }));
}
