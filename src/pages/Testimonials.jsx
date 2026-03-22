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
    setPageMeta('Testimonials | LuxeFrame Studio');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Six strong testimonials help the studio feel trusted, polished, and easy to choose."
        description="This page uses elegant testimonial cards with rating stars and service labels to strengthen social proof."
        image="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80"
      />

      <SectionWrapper tone="light">
        <SectionHeader
          eyebrow="Client Stories"
          title="Thoughtful presentation turns simple reviews into a strong trust-building section."
          description="Use this layout to highlight how the experience feels as much as the final images look."
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
        title="Make your own session the next success story."
        description="The testimonial page keeps the design premium while encouraging visitors to take the next step toward booking."
        primaryAction={{ label: 'Book a Session', to: '/booking' }}
        secondaryAction={{ label: 'View Portfolio', to: '/portfolio' }}
        image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}
