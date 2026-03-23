import { useEffect } from 'react';
import { Link } from 'react-router';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import PackageCard from '../components/PackageCard';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import { faq } from '../data/faq';
import { packages } from '../data/packages';
import { setPageMeta } from '../data/site';

export default function Packages() {
  useEffect(() => {
    setPageMeta('Packages | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Packages designed to make choosing your session simple and confident."
        description="Compare coverage, delivery, and included features, then book the option that matches your needs best."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
      />

      <SectionWrapper tone="light">
        <SectionHeader
          eyebrow="Package Options"
          title="Clear package choices for portraits, families, events, and custom coverage."
          description="Choose a starting package, then tailor the finer details with us if needed."
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
        <div className="glass-panel p-8 sm:p-10 lg:p-14">
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold">Custom Quotes</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl text-white sm:text-6xl">
            Need something more tailored? We can build coverage around your event, concept, or budget.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            Custom packages are available for destination work, large events, special concepts, and coverage that goes
            beyond a standard session format.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/booking" className="btn-primary">Request Custom Quote</Link>
            <Link to="/contact" className="btn-secondary">Contact Studio</Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Package FAQ"
            title="Helpful answers for clients comparing packages and planning their session."
            description="Everything here is designed to keep the decision clear, practical, and stress-free."
            tone="light"
          />
          <FAQAccordion items={faq} tone="light" />
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Ready To Book"
        title="Choose a package, then let us refine the details together."
        description="We will help shape the final plan around your date, location, style, and coverage needs."
        primaryAction={{ label: 'Book a Session', to: '/booking' }}
        secondaryAction={{ label: 'View Portfolio', to: '/portfolio' }}
        image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}
