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
import { packages } from '../data/packages';
import { portfolio } from '../data/portfolio';
import { services } from '../data/services';
import {
  aboutShortCopy,
  ctaContent,
  brandHighlights,
  servicesShortCopy,
  setPageMeta,
  whyChooseUs,
} from '../data/site';
import { testimonials } from '../data/testimonials';

const iconMap = {
  Aperture,
  BadgeCheck,
  Clock3,
  Heart,
  Layers3,
  Sparkles,
};

export default function Home() {
  useEffect(() => {
    setPageMeta('Home | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />

      <SectionWrapper className="-mt-20 relative z-10 pt-0">
        <div className="grid gap-6 lg:grid-cols-4">
          {brandHighlights.map((item, index) => (
            <div key={item.title} className="glass-panel p-6">
              <p className="text-[10px] uppercase tracking-[0.34em] text-gold">0{index + 1}</p>
              <h3 className="mt-4 font-display text-3xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[30px] shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=1200&q=80"
              alt="Studio portrait session"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="About Preview"
              title="A studio experience built to feel elegant, comfortable, and beautifully intentional."
              description={aboutShortCopy}
              tone="light"
            />
            <Link to="/about" className="btn-light mt-8">Learn More</Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Services Preview"
            title="Premium photography services designed for modern clients and meaningful stories."
            description={servicesShortCopy}
          />
          <Link to="/services" className="btn-secondary self-start">View All Services</Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 8).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <SectionHeader
          eyebrow="Packages Preview"
          title="Three polished packages to help visitors choose quickly and confidently."
          description="Basic, Standard, and Premium options designed for portraits, families, events, and high-value coverage."
          align="center"
          tone="light"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((item, index) => (
            <PackageCard key={item.id} item={item} index={index} tone="light" />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Portfolio Preview"
            title="The portfolio stays at the center of the experience."
            description="Elegant gallery previews, category filters, and an immersive lightbox help the work speak first."
          />
          <Link to="/portfolio" className="btn-secondary self-start">View Full Portfolio</Link>
        </div>
        <div className="mt-12">
          <GalleryGrid items={portfolio} limit={6} />
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="A premium process built around confidence, polish, and meaningful visual results."
          description="From direction and editing to communication and delivery, every part of the experience is designed to feel elevated."
          align="center"
          tone="light"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div key={item.title} className="light-panel p-7">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 font-display text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/68">{item.description}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Testimonials Preview"
            title="Testimonials add trust, warmth, and conversion momentum."
            description="Clients consistently highlight the comfort of the process and the polish of the final images."
          />
          <Link to="/testimonials" className="btn-secondary self-start">See All Reviews</Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="FAQ Preview"
            title="Common questions answered before clients make their move."
            description="Simple, clear answers help visitors feel ready to inquire or book."
            tone="light"
          />
          <FAQAccordion items={faq} tone="light" />
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Final CTA"
        title={ctaContent.title}
        description="Invite visitors to start the booking process, explore packages, or contact the studio with confidence."
        primaryAction={{ label: ctaContent.primary, to: '/booking' }}
        secondaryAction={{ label: ctaContent.secondary, to: '/contact' }}
        image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}