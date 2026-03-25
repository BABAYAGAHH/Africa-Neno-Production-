import { useEffect } from 'react';
import { CheckCheck, Crown, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import PackageCard from '../components/PackageCard';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import { faq } from '../data/faq';
import { brandImages } from '../data/media';
import { packages } from '../data/packages';
import { setPageMeta } from '../data/site';

const packageAssurances = [
  {
    title: 'Straightforward Scope',
    description: 'Every package is designed to make the value, coverage, and expected output easy to compare before you book.',
    icon: CheckCheck,
  },
  {
    title: 'Premium Experience',
    description: 'The package is only the starting point. We still guide styling, logistics, and image direction with care.',
    icon: Crown,
  },
  {
    title: 'Reliable Delivery',
    description: 'Preview timing, editing standards, and image presentation are handled with the same professionalism throughout.',
    icon: ShieldCheck,
  },
];

const customQuoteNotes = [
  'Traditional and white wedding combinations that need longer or split-day coverage.',
  'Corporate, founder, and campaign work with specific deliverables for web, social, and launch assets.',
  'Travel, destination, or multi-location shoots that need a more detailed production plan.',
  'Special concepts, larger events, or image libraries that do not fit neatly inside a standard session format.',
];

export default function Packages() {
  useEffect(() => {
    setPageMeta('Packages | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Premium package options that make it easier to choose the right level of coverage with confidence."
        description="Compare the experience, deliverables, and support behind each option, then refine the final details with us if your session needs something more tailored."
        image={brandImages.packagesHero}
      />

      <SectionWrapper tone="light">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Package Confidence"
            title="We keep package choices clear so clients can focus on the result they want, not on confusing pricing structures."
            description="Every option is designed to be useful, polished, and easy to customise where necessary."
            tone="light"
          />
          <Link to="/booking" className="btn-light self-start">Reserve A Date</Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packageAssurances.map((item) => {
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
          eyebrow="Package Options"
          title="Choose the package that best matches your occasion, your level of coverage, and the type of delivery you expect."
          description="These packages are designed as premium starting points for portraits, celebrations, events, and flexible visual coverage."
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
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="glass-panel p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-soft">Custom Quotes</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
              Some productions deserve a more tailored package from the start.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              If your session needs extra planning, multiple locations, larger coverage, or more strategic image usage, we can build a custom quote around it without losing clarity.
            </p>
          </div>
          <div className="grid gap-4">
            {customQuoteNotes.map((note) => (
              <div key={note} className="rounded-[26px] border border-white/12 bg-white/8 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-brand-soft">
                    <Sparkles size={13} />
                  </span>
                  <p className="text-sm leading-8 text-white/74">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Package FAQ"
            title="Helpful answers for clients comparing options, timing, delivery, and what happens next."
            description="We want the booking decision to feel practical, transparent, and stress-free."
            tone="light"
          />
          <FAQAccordion items={faq} tone="light" />
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Ready To Book"
        title="Choose your package, then let us refine the details around your date, location, and vision."
        description="Once you enquire, we will guide you on styling, schedule, logistics, and anything else needed to make the production feel smooth and premium."
        primaryAction={{ label: 'Book A Session', to: '/booking' }}
        secondaryAction={{ label: 'View Portfolio', to: '/portfolio' }}
        image={brandImages.ctaWedding}
      />
    </>
  );
}