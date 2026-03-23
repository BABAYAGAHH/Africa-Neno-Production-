import { useEffect } from 'react';
import { Clock3, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import { address, businessHours, email, phone, setPageMeta, socialLinks, whatsappLink } from '../data/site';

const iconMap = {
  Instagram,
  Facebook,
  YouTube: Youtube,
};

export default function Contact() {
  useEffect(() => {
    setPageMeta('Contact | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next session, event, or visual project."
        description="Use the form, phone, WhatsApp, or email to reach Africa Neno Production quickly and confidently."
        image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80"
      />

      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'Phone', value: phone, icon: Phone },
            { title: 'WhatsApp', value: '+234 800 000 0000', icon: MessageCircle },
            { title: 'Email', value: email, icon: Mail },
            { title: 'Address', value: address, icon: MapPin },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="glass-panel p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                  <Icon size={20} />
                </span>
                <p className="mt-5 text-[10px] uppercase tracking-[0.34em] text-white/42">{card.title}</p>
                <p className="mt-3 text-lg text-white">{card.value}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="glass-panel p-8">
              <SectionHeader
                eyebrow="Business Hours"
                title="Business hours, direct contact options, and quick ways to reach the studio."
                description="If you are ready to plan a shoot, we are happy to guide you on dates, packages, and next steps."
              />
              <div className="mt-8 space-y-4 text-sm text-white/68">
                {businessHours.map((item) => (
                  <div key={item.day} className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <span className="flex items-center gap-2 uppercase tracking-[0.22em] text-white/46">
                      <Clock3 size={14} className="text-gold" />
                      {item.day}
                    </span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary mt-6 gap-2">
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
            <div className="glass-panel p-8">
              <p className="text-[10px] uppercase tracking-[0.34em] text-gold">Social Links</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.label] || Instagram;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/78 transition hover:border-gold/40 hover:text-gold"
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

      <SectionWrapper tone="light">
        <div className="light-panel p-8 sm:p-10 lg:p-14">
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold">Location</p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl">
            Serving Lagos and available for studio, outdoor, event, and destination bookings.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-charcoal/72">
            This section can later hold an embedded map, a pickup point, or your full public studio address once it is finalized.
          </p>
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Need A Fast Reply"
        title="Use WhatsApp or the contact form to start the conversation today."
        description="Whether you are booking a session or asking a question, we are ready to help you plan the right next step."
        primaryAction={{ label: 'Book a Session', to: '/booking' }}
        secondaryAction={{ label: 'View Portfolio', to: '/portfolio' }}
        image="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}
