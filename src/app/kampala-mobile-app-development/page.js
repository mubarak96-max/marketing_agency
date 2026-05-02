import LocationLandingPage from '@/components/templates/LocationLandingPage';
import { locationPages } from '@/data/locationPages';

const page = locationPages['kampala-mobile-app-development'];

export const metadata = {
  title: page.metaTitle,
  description: page.description,
  keywords: 'mobile app development Kampala, app development company Kampala, mobile application development Uganda',
};

export default function KampalaMobileAppDevelopmentPage() {
  return <LocationLandingPage page={page} />;
}
