import LocationLandingPage from '@/components/templates/LocationLandingPage';
import { locationPages } from '@/data/locationPages';

const page = locationPages['kampala-website-development'];

export const metadata = {
  title: page.metaTitle,
  description: page.description,
  keywords: 'website development Kampala, website designer Kampala, website development Uganda, web development company Kampala',
};

export default function KampalaWebsiteDevelopmentPage() {
  return <LocationLandingPage page={page} />;
}
