import { useEffect } from 'react';
import { Aperture, BadgeCheck, Clock3, Heart, Layers3, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import GalleryGrid from '../components/GalleryGrid';
import HeroSection from '../components/HeroSection';
import PackageCard from '../components/PackageCard';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { faq } from '../data/faq';
import { brandImages } from '../data/media';
import { packages } from '../data/packages';
import { portfolio } from '../data/portfolio';
import { services } from '../data/services';
import { aboutShortCopy, ctaContent, servicesShortCopy, setPageMeta, whyChooseUs } from '../data/site';
import { testimonials } from '../data/testimonials';

const iconMap = {
  Aperture,
  BadgeCheck,
  Clock3,
  Heart,
  Layers3,
  Sparkles,
};

const proofPoints = [
  'Portrait sessions with art direction and premium retouching.',
  'Wedding coverage that respects Nigerian culture, timing, and emotion.',
  'Brand imagery for founders and businesses that need credibility online.',
  'Clear communication from inquiry to final gallery delivery.',
];

export default function Home() {
  useEffect(() => {
    setPageMeta('Home | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />

      <SectionWrapper tone="light">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="overflow-hidden rounded-[32px] border border-brand-deep/8 bg-white p-3 shadow-soft">
            <img
              src={brandImages.heroTertiary}
              alt="African business woman in premium workspace"
              className="aspect-[4/4.7] h-full w-full rounded-[26px] object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="About The Studio"
              title="A premium photography experience built for modern Nigerian clients who care about quality."
              description={aboutShortCopy}
              tone="light"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <div key={point} className="premium-card-light flex items-start gap-3 p-5">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft text-brand-deep">
                    <BadgeCheck size={14} />
                  </span>
                  <p className="text-sm leading-7 text-charcoal/68">{point}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-secondary mt-8">Learn More</Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Services"
            title="Portraits, weddings, events, families, and brand visuals handled with polish and care."
            description={servicesShortCopy}
            tone="light"
          />
          <Link to="/services" className="btn-light self-start">View All Services</Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="dark">
        <div className="grid gap-6 xl:grid-cols-[0.86fr_1.14fr] xl:items-start">
          <div className="glass-panel p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-soft">Why Clients Choose Us</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
              A process built around clarity, comfort, and business-class execution.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Africa Neno Production blends creative taste with a smooth operational process, so clients feel guided, prepared, and proud of the result.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {whyChooseUs.slice(0, 4).map((item) => {
              const Icon = iconMap[item.icon] || Sparkles;
              return (
                <div key={item.title} className="rounded-[26px] border border-white/12 bg-white/8 p-6 backdrop-blur-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-white/10 text-brand-soft">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-3xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <SectionHeader
          eyebrow="Packages"
          title="Clear package options that make premium photography easier to choose."
          description="Compare coverage depth, image delivery, and the type of experience each package is designed to support."
          align="center"
          tone="light"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((item, index) => (
            <PackageCard key={item.id} item={item} index={index} tone="light" />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="dark">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Portfolio"
            title="A curated look at the moments, portraits, and brand visuals we create."
            description="Browse selected Nigerian wedding, portrait, family, product, and founder-focused imagery in a cleaner gallery experience."
            tone="dark"
          />
          <Link to="/portfolio" className="btn-ghost self-start">View Full Portfolio</Link>
        </div>
        <div className="mt-12">
          <GalleryGrid items={portfolio} limit={6} tone="dark" />
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Client Reviews"
            title="Kind words from clients who trusted us with important personal and business moments."
            description="Comfort, professionalism, and polished delivery show up repeatedly in the feedback we receive."
            tone="light"
          />
          <Link to="/testimonials" className="btn-light self-start">See All Reviews</Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} tone="light" />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="dark">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="FAQ"
            title="Answers that help visitors feel informed, prepared, and ready to book."
            description="We keep the process simple, transparent, and easy to understand before production begins."
            tone="dark"
          />
          <FAQAccordion items={faq} tone="dark" />
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Ready To Begin"
        title={ctaContent.title}
        description="Africa Neno Production is ready to plan portraits, weddings, events, and custom visual sessions with you."
        primaryAction={{ label: ctaContent.primary, to: '/booking' }}
        secondaryAction={{ label: ctaContent.secondary, to: '/contact' }}
        image={brandImages.ctaWedding}
      />
    </>
  );
}