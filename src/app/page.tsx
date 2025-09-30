import { HeroSection } from '@/components/hero-section';
import { FeaturedDestinations } from '@/components/featured-destinations';
import { WhyChooseUs } from '@/components/why-choose-us';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedDestinations />
      <WhyChooseUs />
    </main>
  );
}