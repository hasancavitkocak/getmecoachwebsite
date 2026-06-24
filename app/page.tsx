import Hero from '@/components/marketing/Hero';
import Categories from '@/components/marketing/Categories';
import HowItWorks from '@/components/marketing/HowItWorks';
import Features from '@/components/marketing/Features';
import Testimonials from '@/components/marketing/Testimonials';
import CTABanner from '@/components/marketing/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CTABanner />
    </>
  );
}
