import { useEffect } from 'react';
import { Link } from 'react-router';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import { aboutShortCopy, coreValues, mission, setPageMeta, teamMembers, vision } from '../data/site';

export default function About() {
  useEffect(() => {
    setPageMeta('About | LuxeFrame Studio');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="About"
        title="A luxury-modern studio built around emotion, elegance, and timeless photography."
        description={aboutShortCopy}
        image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80"
      />

      <SectionWrapper>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[32px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80"
              alt="Studio story"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Studio Story"
              title="LuxeFrame Studio was created to turn important moments into lasting visual heirlooms."
              description="Our studio is built on a passion for storytelling through photography. We believe every image should preserve emotion, beauty, and authenticity. Our goal is to create a comfortable experience and deliver photographs our clients will cherish for years."
            />
            <p className="mt-6 text-sm leading-8 text-white/68">
              We combine premium direction, calm communication, and carefully polished editing so every session feels elevated from the first inquiry to the final gallery delivery.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="light-panel p-8">
            <p className="text-[10px] uppercase tracking-[0.34em] text-gold">Mission</p>
            <h2 className="mt-4 font-display text-4xl">Purpose with polish.</h2>
            <p className="mt-4 text-base leading-8 text-charcoal/72">{mission}</p>
          </div>
          <div className="light-panel p-8">
            <p className="text-[10px] uppercase tracking-[0.34em] text-gold">Vision</p>
            <h2 className="mt-4 font-display text-4xl">Timeless imagery, trusted experience.</h2>
            <p className="mt-4 text-base leading-8 text-charcoal/72">{vision}</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Core Values"
          title="The principles guiding every session, every edit, and every client interaction."
          description="Strong creative work is supported by professionalism, reliability, and thoughtful attention to detail."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {coreValues.map((value) => (
            <div key={value} className="glass-panel p-6 text-center">
              <h3 className="font-display text-3xl text-white">{value}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Team"
            title="A polished placeholder team section for studio leadership and creative support."
            description="Use these cards for the lead photographer, creative director, and editor or replace them with your actual team details later."
            tone="light"
          />
          <Link to="/booking" className="btn-light self-start">Book a Session</Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="light-panel overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl">{member.name}</h3>
                <p className="mt-2 text-sm leading-7 text-charcoal/68">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Book a Session"
        title="Bring your story to the studio and let us shape it beautifully."
        description="From portraits to events, LuxeFrame Studio is positioned as a premium, cinematic, and conversion-ready photography brand."
        primaryAction={{ label: 'Book a Session', to: '/booking' }}
        secondaryAction={{ label: 'View Portfolio', to: '/portfolio' }}
        image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}
