import { useEffect } from 'react';
import CTASection from '../components/CTASection';
import GalleryGrid from '../components/GalleryGrid';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import { portfolio } from '../data/portfolio';
import { setPageMeta } from '../data/site';

export default function Portfolio() {
  useEffect(() => {
    setPageMeta('Portfolio | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A portfolio shaped by real moments, polished direction, and timeless finishing."
        description="Explore weddings, portraits, events, family sessions, studio work, outdoor shoots, and brand visuals."
        image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Gallery"
          title="Strong imagery, clean spacing, and an immersive viewing experience keep the work at the center."
          description="Filter by category, browse full-size previews, and experience the portfolio in a refined lightbox."
          align="center"
        />
        <div className="mt-12">
          <GalleryGrid items={portfolio} />
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Create Your Story"
        title="Let your next session become part of a beautiful visual story."
        description="Use the booking page to start planning portraits, weddings, family sessions, events, or custom visual work."
        primaryAction={{ label: 'Book a Session', to: '/booking' }}
        secondaryAction={{ label: 'Contact Studio', to: '/contact' }}
        image="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}
