import { useEffect } from 'react';
import { BadgeCheck, Clock3, Heart, MessageSquareQuote } from 'lucide-react';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import TestimonialCard from '../components/TestimonialCard';
import { brandImages } from '../data/media';
import { setPageMeta } from '../data/site';
import { testimonials } from '../data/testimonials';

const trustSignals = [
  {
    title: 'Clients Feel Guided',
    description: 'Our sessions are known for clear direction, calm communication, and an atmosphere that helps people feel confident on camera.',
    icon: Heart,
  },
  {
    title: 'Delivery Stays Reliable',
    description: 'We respect timelines, explain the process clearly, and make sure the post-session experience feels organised and professional.',
    icon: Clock3,
  },
  {
    title: 'The Finish Feels Premium',
    description: 'Reviews often highlight our editing taste, polish, and the way the final gallery feels complete rather than rushed.',
    icon: BadgeCheck,
  },
  {
    title: 'Communication Builds Trust',
    description: 'People remember how easy it felt to work with us just as much as they remember the photographs themselves.',
    icon: MessageSquareQuote,
  },
];

export default function Testimonials() {
  useEffect(() => {
    setPageMeta('Testimonials | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Kind words from clients who trusted us with meaningful personal, family, wedding, and business moments."
        description="The reviews below reflect the kind of premium experience we want every client to feel from the first inquiry to the final image delivery."
        image={brandImages.testimonialsHero}
      />

      <SectionWrapper tone="light">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustSignals.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="premium-card-light p-6">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] bg-brand-soft text-brand-deep">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-3xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/66">{item.description}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <SectionHeader
          eyebrow="Client Stories"
          title="Real feedback that speaks to the journey, the service quality, and the confidence clients feel in the final result."
          description="We want every gallery to look polished, but we also want the process itself to feel respectful, organised, and enjoyable enough for clients to recommend us without hesitation."
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
        title="Make your own session the next premium experience worth talking about."
        description="If you want polished imagery, strong guidance, and a process that feels smooth from beginning to end, we are ready to help you plan it."
        primaryAction={{ label: 'Book A Session', to: '/booking' }}
        secondaryAction={{ label: 'View Portfolio', to: '/portfolio' }}
        image={brandImages.familyMoment}
      />
    </>
  );
}