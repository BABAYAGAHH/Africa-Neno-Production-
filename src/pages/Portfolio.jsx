import { useEffect } from 'react';
import { Eye, Grid2x2, HeartHandshake, WandSparkles } from 'lucide-react';
import CTASection from '../components/CTASection';
import GalleryGrid from '../components/GalleryGrid';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import { brandImages } from '../data/media';
import { portfolio } from '../data/portfolio';
import { setPageMeta } from '../data/site';

const galleryNotes = [
  {
    title: 'Edited With Restraint',
    description: 'Our galleries are finished to feel premium, balanced, and timeless rather than over-processed.',
    icon: WandSparkles,
  },
  {
    title: 'Built For Storytelling',
    description: 'We care about the in-between frames, not only the obvious highlights, so every gallery feels more complete.',
    icon: HeartHandshake,
  },
  {
    title: 'Curated For Clarity',
    description: 'The portfolio is arranged to help clients quickly understand our taste across weddings, portraits, events, and brand work.',
    icon: Grid2x2,
  },
  {
    title: 'Designed To Be Felt',
    description: 'Strong colour, clean composition, and atmosphere all work together to make the images linger longer.',
    icon: Eye,
  },
];

export default function Portfolio() {
  useEffect(() => {
    setPageMeta('Portfolio | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A gallery of Nigerian stories, premium portraits, and polished visual work created with intention."
        description="Explore weddings, portraits, family sessions, events, founder branding, and product imagery presented in a cleaner, more immersive portfolio experience."
        image={brandImages.portfolioHero}
      />

      <SectionWrapper tone="light">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[32px] border border-brand-deep/8 bg-white p-3 shadow-soft">
            <img
              src={brandImages.outdoorCouple}
              alt="African couple photographed outdoors in Lagos"
              className="aspect-[4/4.9] h-full w-full rounded-[26px] object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Portfolio Direction"
              title="We photograph with story, texture, and local relevance so the work feels elegant and recognisably ours."
              description="The portfolio reflects the kind of imagery modern African clients respond to best: clean direction, believable emotion, strong styling, and finish quality that still feels human."
              tone="light"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {galleryNotes.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="premium-card-light p-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-brand-soft text-brand-deep">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-4 font-display text-2xl text-charcoal">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-charcoal/66">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <SectionHeader
          eyebrow="Gallery"
          title="Filter the work by category and explore a more immersive view of the stories we create."
          description="Whether you are planning a wedding, portrait session, family shoot, or brand campaign, this gallery gives a clearer feel for our visual language and finish quality."
          align="center"
          tone="light"
        />
        <div className="mt-12">
          <GalleryGrid items={portfolio} tone="light" />
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Create Your Story"
        title="Let your next session become part of a visual story that feels polished, personal, and memorable."
        description="Use the booking page to start planning portraits, weddings, celebrations, founder branding, or a custom production tailored around your goals."
        primaryAction={{ label: 'Book A Session', to: '/booking' }}
        secondaryAction={{ label: 'Contact Studio', to: '/contact' }}
        image={brandImages.ctaStudio}
      />
    </>
  );
}