import { useEffect } from 'react';
import { Camera, ImagePlus, MonitorPlay, Users } from 'lucide-react';
import { Link } from 'react-router';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import { brandImages } from '../data/media';
import { services } from '../data/services';
import { servicesShortCopy, setPageMeta } from '../data/site';

const servicePillars = [
  {
    title: 'Direction That Feels Easy',
    description: 'Every session is shaped with posing guidance, mood support, and composition decisions that help clients relax into the camera.',
    icon: Camera,
  },
  {
    title: 'Imagery Built To Travel Well',
    description: 'We create photographs that work beautifully across albums, framed prints, social media, websites, campaign decks, and brand profiles.',
    icon: ImagePlus,
  },
  {
    title: 'Production Thinking',
    description: 'Locations, timing, outfits, and usage goals are considered early so the final images feel more intentional and more useful.',
    icon: MonitorPlay,
  },
  {
    title: 'A Process People Enjoy',
    description: 'Premium results come easier when the experience feels respectful, warm, organised, and genuinely collaborative.',
    icon: Users,
  },
];

const productionFlow = [
  'Creative consultation to align on mood, location, outfits, and image goals.',
  'Session planning that respects timing, logistics, and the type of client experience you want.',
  'Calm guided photography on the day, with strong attention to framing, styling, and emotion.',
  'Professional curation, retouching, and delivery so your final gallery feels finished and premium.',
];

export default function Services() {
  useEffect(() => {
    setPageMeta('Services | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Photography services crafted for modern Nigerian weddings, portraits, brands, and milestone events."
        description={servicesShortCopy}
        image={brandImages.servicesHero}
      />

      <SectionWrapper tone="light">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Service Philosophy"
            title="We combine visual taste, planning discipline, and calm direction so each type of session gets the attention it deserves."
            description="The goal is not just beautiful photographs. It is a premium process that helps clients feel prepared, seen, and proud of the final result."
            tone="light"
          />
          <Link to="/booking" className="btn-light self-start">Book A Session</Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {servicePillars.map((item) => {
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
          eyebrow="Full Service Menu"
          title="Choose the type of session or coverage that fits your story, your audience, and your intended use."
          description="From cultural weddings and elegant portraits to founder branding and product visuals, every service is built around premium execution and reliable delivery."
          align="center"
          tone="light"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="dark">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="glass-panel p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-soft">What The Process Feels Like</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
              Premium service starts long before the final images arrive.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              We do our best work when expectations are clear, the atmosphere is calm, and every creative decision serves the kind of gallery you want to walk away with.
            </p>
          </div>
          <div className="grid gap-4">
            {productionFlow.map((step, index) => (
              <div key={step} className="rounded-[26px] border border-white/12 bg-white/8 p-6 backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-soft">Stage 0{index + 1}</p>
                <p className="mt-3 text-sm leading-8 text-white/74">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Need A Custom Session"
        title="If you are unsure which service fits best, we can shape the right direction together."
        description="We will recommend the right format, coverage level, location approach, and package based on your occasion, business goals, audience, and preferred visual style."
        primaryAction={{ label: 'Book A Session', to: '/booking' }}
        secondaryAction={{ label: 'Contact Studio', to: '/contact' }}
        image={brandImages.ctaBrand}
      />
    </>
  );
}