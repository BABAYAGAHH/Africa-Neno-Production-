import { useEffect } from 'react';
import { Clock3, Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import { brandImages } from '../data/media';
import { address, businessHours, email, locationLabel, phone, setPageMeta, socialLinks, whatsappDisplay, whatsappLink, yearEstablished } from '../data/site';

const iconMap = {
  Instagram,
  Facebook,
  TikTok: Music2,
};

const contactCards = [
  { title: 'Phone', value: phone, icon: Phone },
  { title: 'WhatsApp', value: whatsappDisplay, icon: MessageCircle },
  { title: 'Email', value: email, icon: Mail },
  { title: 'Base', value: locationLabel, icon: MapPin },
];

const serviceAreas = [
  'Agbor studio and outdoor sessions',
  'Wedding and event coverage across Delta State and major Nigerian cities',
  'Founder, team, and brand shoots for modern businesses',
  'Destination and travel-ready bookings on request',
];

export default function Contact() {
  useEffect(() => {
    setPageMeta('Contact | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the studio about your next session, event, or brand production."
        description="Use the contact form, email, phone, or WhatsApp to reach AFRICA NENO PRODUCTION quickly and confidently."
        image={brandImages.contactHero}
      />

      <SectionWrapper tone="light">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="premium-card-light p-6">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] bg-brand-soft text-brand-deep">
                  <Icon size={22} />
                </span>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.24em] text-charcoal/42">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-charcoal/72">{item.value}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="light-panel p-8 sm:p-10">
              <SectionHeader
                eyebrow="Business Hours"
                title="Reach out during business hours or send a message and we will respond as quickly as possible."
                description="If you are planning a premium shoot or event, we are happy to help with dates, package direction, and the best next step."
                tone="light"
              />
              <div className="mt-8 space-y-4 text-sm text-charcoal/72">
                {businessHours.map((item) => (
                  <div key={item.day} className="flex items-center justify-between gap-4 border-b border-brand-deep/8 pb-4 last:border-b-0 last:pb-0">
                    <span className="flex items-center gap-2 uppercase tracking-[0.2em] text-charcoal/46">
                      <Clock3 size={14} className="text-brand" />
                      {item.day}
                    </span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[22px] border border-brand-deep/8 bg-white px-5 py-4 text-sm text-charcoal/72">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-charcoal/42">Year Established</p>
                <p className="mt-2">{yearEstablished}</p>
              </div>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary mt-8 gap-2">
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="premium-card-light p-8 sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-deep/46">Social Links</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.label] || Instagram;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-brand-deep/10 bg-white px-4 py-3 text-sm text-charcoal/78 transition hover:border-brand/30 hover:text-brand-deep"
                    >
                      <Icon size={16} />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="glass-panel p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-soft">Where We Work</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
              Based in {locationLabel} and available for bookings across Nigeria.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              We work across studio sessions, outdoor productions, weddings, events, and commercial assignments, with travel available where the story and schedule call for it.
            </p>
          </div>
          <div className="grid gap-4">
            {serviceAreas.map((item) => (
              <div key={item} className="rounded-[26px] border border-white/12 bg-white/8 p-6 backdrop-blur-sm">
                <p className="text-sm leading-8 text-white/74">{item}</p>
              </div>
            ))}
            <div className="rounded-[26px] border border-white/12 bg-white/8 p-6 backdrop-blur-sm">
              <p className="text-sm leading-8 text-white/74">{address}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Need A Fast Reply"
        title="Use WhatsApp or the contact form to start the conversation today."
        description="Whether you are booking a session, asking about a date, or planning a custom production, we are ready to help you move to the right next step."
        primaryAction={{ label: 'Book A Session', to: '/booking' }}
        secondaryAction={{ label: 'View Portfolio', to: '/portfolio' }}
        image={brandImages.ctaBrand}
      />
    </>
  );
}