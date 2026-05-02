export const siteConfig = {
  brandName: 'Nexus Digital',
  domain: 'https://nexusdigital.ug',
  email: 'hello@nexusdigital.ug',
  phoneDisplay: '+256 700 000000',
  phoneHref: '+256700000000',
  whatsappNumber: '256700000000',
  city: 'Kampala',
  country: 'Uganda',
  streetAddress: 'Plot 12 Yusuf Lule Road',
  region: 'Central Region',
  businessHours: [
    'Monday - Friday: 8:30 AM - 6:00 PM',
    'Saturday: 10:00 AM - 2:00 PM',
    'Sunday: Closed',
  ],
  serviceAreas: ['Kampala', 'Entebbe', 'Jinja', 'Mbarara', 'Uganda'],
  currency: 'UGX',
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.brandName,
  url: siteConfig.domain,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: 'UG',
  },
  areaServed: siteConfig.serviceAreas,
  priceRange: 'UGX',
};
