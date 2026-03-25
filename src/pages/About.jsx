import { useEffect } from 'react';
import { Link } from 'react-router';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import { brandImages } from '../data/media';
import { aboutShortCopy, address, coreValues, locationLabel, mission, phone, setPageMeta, teamMembers, vision, yearEstablished } from '../data/site';

const studioPrinciples = [
  {
    title: 'Pre-Session Clarity',
    description: 'We align on wardrobe, location, mood, timing, and deliverables before the camera comes out.',
  },
  {
    title: 'Calm On-Set Direction',
    description: 'Clients are guided clearly so they feel confident, natural, and beautifully composed throughout the session.',
  },
  {
    title: 'Premium Editing Taste',
    description: 'Retouching is refined, balanced, and designed to elevate the image without making it look overworked.',
  },
  {
    title: 'Business-Class Delivery',
    description: 'The final gallery is curated carefully so the whole experience feels complete, polished, and reliable.',
  },
];

const studioFacts = [
  { label: 'Year Established', value: yearEstablished },
  { label: 'Studio Base', value: locationLabel },
  { label: 'Direct Line', value: phone },
];

export default function About() {
  useEffect(() => {
    setPageMeta('About | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Africa Neno Production"
        description={aboutShortCopy}
        image={brandImages.aboutHero}
      />

      <SectionWrapper tone="light">
        <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="overflow-hidden rounded-[32px] border border-brand-deep/8 bg-white p-3 shadow-soft">
            <img
              src={brandImages.aboutStory}
              alt="Nigerian couple portrait session"
              className="aspect-[4/4.8] h-full w-full rounded-[26px] object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Studio Story"
              title="We build polished visual experiences for people, couples, families, founders, and brands that want quality to be obvious."
              description="Our work is rooted in thoughtful planning, modern Nigerian visual culture, and a calm premium process that helps clients look and feel their best on camera."
              tone="light"
            />
            <p className="mt-6 text-sm leading-8 text-charcoal/66">
              AFRICA NENO PRODUCTION was created to serve clients who want more than pretty images. We focus on structure, taste, communication, and finishing, because those details are what make the final result feel truly premium.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {coreValues.map((value) => (
                <span key={value} className="rounded-full border border-brand-deep/10 bg-brand-soft px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-deep">
                  {value}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {studioFacts.map((item) => (
                <div key={item.label} className="premium-card-light p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-deep/46">{item.label}</p>
                  <p className="mt-3 text-sm leading-7 text-charcoal/72">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-8 text-charcoal/66">{address}</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="dark">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-soft">Mission</p>
            <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">Purpose with creative discipline.</h2>
            <p className="mt-4 text-base leading-8 text-white/72">{mission}</p>
          </div>
          <div className="glass-panel p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-soft">Vision</p>
            <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">Trusted imagery for modern Nigeria.</h2>
            <p className="mt-4 text-base leading-8 text-white/72">{vision}</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <SectionHeader
          eyebrow="How We Work"
          title="The studio experience is designed to feel clear, calm, and premium at every stage."
          description="Good photography is not only about the camera. It is also about how carefully the session is planned, directed, and delivered."
          align="center"
          tone="light"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {studioPrinciples.map((item) => (
            <div key={item.title} className="premium-card-light p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-deep/46">Studio Standard</p>
              <h3 className="mt-4 font-display text-3xl text-charcoal">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/66">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Studio Roles"
            title="The work behind the camera is supported by planning, direction, and finishing discipline."
            description="Even when the team is small, every premium result depends on clearly held creative responsibilities."
            tone="light"
          />
          <Link to="/booking" className="btn-light self-start">Book A Session</Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="premium-card-light p-7">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] bg-brand-soft font-display text-2xl text-brand-deep">
                0{index + 1}
              </div>
              <h3 className="mt-5 font-display text-4xl text-charcoal">{member.name}</h3>
              <p className="mt-4 text-sm leading-8 text-charcoal/66">{member.role}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Book A Session"
        title="Let us create imagery that feels personal, polished, and worth keeping for years."
        description="From portraits to weddings and brand sessions, we deliver a premium process shaped around care, planning, and strong visual taste."
        primaryAction={{ label: 'Book A Session', to: '/booking' }}
        secondaryAction={{ label: 'View Portfolio', to: '/portfolio' }}
        image={brandImages.ctaStudio}
      />
    </>
  );
}