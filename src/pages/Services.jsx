import { useEffect } from 'react';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { servicesShortCopy, setPageMeta } from '../data/site';

export default function Services() {
  useEffect(() => {
    setPageMeta('Services | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Photography services for portraits, weddings, celebrations, family moments, and premium brand visuals."
        description={servicesShortCopy}
        image="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1600&q=80"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Full Service Menu"
          title="Each service card is built to be reusable, polished, and ready for production starter content."
          description="Every card includes a title, short description, icon, and direct CTA so the page feels both elegant and conversion-focused."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Need a Custom Session"
        title="If you are unsure which service fits best, start with a conversation."
        description="We can recommend the right photography direction, coverage level, and package based on your occasion and goals."
        primaryAction={{ label: 'Book a Session', to: '/booking' }}
        secondaryAction={{ label: 'Contact Studio', to: '/contact' }}
        image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}

