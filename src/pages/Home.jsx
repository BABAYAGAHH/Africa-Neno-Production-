import { useEffect } from 'react';
import { BadgeCheck, Clock3, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import CTASection from '../components/CTASection';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import { brandImages } from '../data/media';
import {
  aboutShortCopy,
  ctaContent,
  locationLabel,
  mission,
  setPageMeta,
  vision,
  whyChooseUs,
} from '../data/site';

const studioProof = [
  {
    title: 'Studio-led direction',
    description: 'Every session is guided with calm posing, visual structure, and a polished finish from the start.',
    icon: Sparkles,
  },
  {
    title: 'Clear delivery process',
    description: 'Clients know what to expect, when to expect it, and how the final gallery will be presented.',
    icon: Clock3,
  },
  {
    title: 'Based in Agbor',
    description: 'We serve Delta State clients directly while remaining available for destination and nationwide work.',
    icon: MapPin,
  },
];

const homeActions = [
  {
    title: 'Services',
    description: 'See portrait, wedding, event, and brand photography offerings in full.',
    to: '/services',
    label: 'Explore Services',
  },
  {
    title: 'Portfolio',
    description: 'Review the studio style, finishing standard, and visual direction before booking.',
    to: '/portfolio',
    label: 'View Portfolio',
  },
  {
    title: 'Contact',
    description: 'Ask questions, confirm availability, or start planning a session with the studio.',
    to: '/contact',
    label: 'Contact Studio',
  },
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
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="light-panel overflow-hidden p-3">
            <img
              src={brandImages.heroTertiary}
              alt="African business woman in premium workspace"
              className="aspect-[4/4.8] h-full w-full rounded-[26px] object-cover"
            />
          </div>

          <div>
            <SectionHeader
              eyebrow="Studio Overview"
              title="A calm, premium photography studio for Nigerian clients who want quality handled well."
              description={aboutShortCopy}
              tone="light"
            />

            <div className="mt-8 grid gap-4">
              {studioProof.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="premium-card-light flex items-start gap-4 p-5 sm:p-6">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-brand-soft text-brand-deep">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.8rem] leading-none text-charcoal sm:text-[2rem]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-8 text-charcoal/66">{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
              <Link to="/booking" className="btn-light">
                Book A Session
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="dark">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div className="glass-panel p-8 sm:p-10">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-brand-soft/86">
              Brand Foundation
            </p>
            <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.96] text-white">
              Thoughtful creative direction supported by a disciplined working process.
            </h2>
            <p className="mt-6 text-[1rem] leading-8 text-white/72 sm:text-[1.05rem] sm:leading-9">
              Africa Neno Production is built for clients who want imagery that feels elegant, trustworthy, and professionally managed from inquiry to delivery.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-[28px] border border-white/12 bg-white/[0.08] p-6 shadow-[0_18px_42px_rgba(4,20,10,0.16)] backdrop-blur-sm md:col-span-2">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-soft/60">
                Mission
              </p>
              <p className="mt-4 font-display text-[2.2rem] leading-[0.98] text-white sm:text-[2.6rem]">{mission}</p>
            </article>

            <article className="rounded-[28px] border border-white/12 bg-white/[0.08] p-6 shadow-[0_18px_42px_rgba(4,20,10,0.16)] backdrop-blur-sm">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-soft/60">
                Vision
              </p>
              <p className="mt-4 text-sm leading-8 text-white/72">{vision}</p>
            </article>

            <article className="rounded-[28px] border border-white/12 bg-white/[0.08] p-6 shadow-[0_18px_42px_rgba(4,20,10,0.16)] backdrop-blur-sm">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-soft/60">
                Why Clients Return
              </p>
              <div className="mt-4 space-y-4">
                {whyChooseUs.slice(0, 3).map((item) => (
                  <div key={item.title} className="flex items-start gap-3 text-sm leading-7 text-white/72">
                    <span className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-brand-soft" />
                    <div>
                      <p className="font-semibold uppercase tracking-[0.16em] text-white/84">{item.title}</p>
                      <p className="mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <SectionHeader
          eyebrow="Explore Further"
          title="Use the dedicated pages to review the studio in more detail."
          description={`Home now stays focused on the studio itself, while the rest of the site gives deeper detail whenever you need it.`}
          align="center"
          tone="light"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {homeActions.map((item) => (
            <article key={item.title} className="premium-card-light flex h-full flex-col p-7 sm:p-8">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-deep/46">
                {locationLabel}
              </p>
              <h3 className="mt-4 font-display text-[2rem] leading-[0.96] text-charcoal sm:text-[2.35rem]">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-8 text-charcoal/66">{item.description}</p>
              <Link to={item.to} className="btn-light mt-8 self-start">
                {item.label}
              </Link>
            </article>
          ))}
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