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

      <SectionWrapper className="relative z-10 -mt-20 pt-0">
        <div className="grid gap-6 lg:grid-cols-4">
          {brandHighlights.map((item, index) => (
            <div key={item.title} className="glass-panel p-6">
              <p className="text-[10px] uppercase tracking-[0.34em] text-gold">0{index + 1}</p>
              <h3 className="mt-4 font-display text-3xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{item.description}</p>
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
              eyebrow="About The Studio"
              title="A studio experience that feels calm, polished, and unmistakably personal."
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
            eyebrow="Services"
            title="Photography services built for milestones, portraits, brands, and beautifully documented events."
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
          eyebrow="Packages"
          title="Simple package options that help clients choose with confidence."
          description="Compare coverage, turnaround, and included features at a glance, then book the package that fits your moment best."
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
            eyebrow="Portfolio"
            title="A curated look at the moments, moods, and stories we have captured."
            description="Browse selected work across portraits, events, weddings, family sessions, and brand imagery."
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
          title="A premium process built around clarity, comfort, and beautifully finished results."
          description="From direction and editing to communication and delivery, every part of the experience is designed to feel elevated."
          align="center"
          tone="light"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div key={item.title} className="light-panel p-7">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/12 text-gold">
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
            eyebrow="Testimonials"
            title="The kind words we receive matter just as much as the images we deliver."
            description="Clients consistently mention the comfort of the process, the clarity of communication, and the polish of the final gallery."
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
            eyebrow="FAQ"
            title="Answers to the questions clients ask before they are ready to book."
            description="Simple, clear answers help visitors feel informed, confident, and ready to take the next step."
            tone="light"
          />
          <FAQAccordion items={faq} tone="light" />
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Ready To Begin"
        title={ctaContent.title}
        description="Africa Neno Production is ready to plan portraits, weddings, events, and custom visual sessions with you."
        primaryAction={{ label: ctaContent.primary, to: '/booking' }}
        secondaryAction={{ label: ctaContent.secondary, to: '/contact' }}
        image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}
