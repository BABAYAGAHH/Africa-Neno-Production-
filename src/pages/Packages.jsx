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
        title="Three premium packages structured to sell clearly and convert with confidence."
        description="Each card highlights the essentials clients care about most: price, duration, edited photos, features, and an easy next step."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
      />

      <SectionWrapper tone="light">
        <SectionHeader
          eyebrow="Package Grid"
          title="Basic, Standard, and Premium with strong visual hierarchy and clean comparison."
          description="Use this as a polished starting point for studio sessions, family shoots, weddings, and custom event coverage."
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
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold">Custom Package Banner</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl text-white sm:text-6xl">
            Need something different? We can tailor a package to your event, style, and budget.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
            Custom packages are available for unique concepts, destination work, large events, and special coverage needs that go beyond a standard session.
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
            title="Supportive answers below the pricing section keep the page helpful and conversion-focused."
            description="This section can also be turned into a notes panel or custom quote policy section later."
            tone="light"
          />
          <FAQAccordion items={faq} tone="light" />
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Ready to Book"
        title="Choose a package, then refine the details with us."
        description="The starter scaffold is built to help visitors move from interest to inquiry with minimal friction."
        primaryAction={{ label: 'Book a Session', to: '/booking' }}
        secondaryAction={{ label: 'View Portfolio', to: '/portfolio' }}
        image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}

