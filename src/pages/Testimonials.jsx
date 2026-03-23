import { useEffect } from 'react';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import TestimonialCard from '../components/TestimonialCard';
import { setPageMeta } from '../data/site';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  useEffect(() => {
    setPageMeta('Testimonials | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Kind words from clients who trusted us with their most important moments."
        description="Each review reflects the calm process, clear communication, and polished results we work hard to deliver."
        image="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80"
      />

      <SectionWrapper tone="light">
        <SectionHeader
          eyebrow="Client Stories"
          title="Real experiences that speak to the quality of the journey and the final gallery."
          description="We want every client to feel comfortable, guided, and proud of what we create together."
          align="center"
          tone="light"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} tone="light" />
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Book With Confidence"
        title="Make your own session the next memorable success story."
        description="We are ready to create work that feels personal, polished, and worth sharing."
        primaryAction={{ label: 'Book a Session', to: '/booking' }}
        secondaryAction={{ label: 'View Portfolio', to: '/portfolio' }}
        image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}
