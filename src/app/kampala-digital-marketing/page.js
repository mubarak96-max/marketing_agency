import LocationLandingPage from '@/components/templates/LocationLandingPage';
import { locationPages } from '@/data/locationPages';

const page = locationPages['kampala-digital-marketing'];

export const metadata = {
  title: page.metaTitle,
  description: page.description,
  keywords: 'digital marketing Kampala, digital marketing company Kampala, internet marketing Kampala, ppc agency Kampala',
};

export default function KampalaDigitalMarketingPage() {
  return <LocationLandingPage page={page} />;
}
