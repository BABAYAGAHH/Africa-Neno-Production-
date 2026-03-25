import { useEffect } from 'react';
import { CalendarDays, CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import { brandImages } from '../data/media';
import { address, email, phone, setPageMeta, whatsappLink } from '../data/site';

const bookingSteps = [
  'Send your preferred date, service type, location idea, and any reference details through the booking form.',
  'We review the request, recommend the right package or custom direction, and confirm the practical next steps.',
  'Once approved, we align on styling, timing, logistics, and the creative mood so the session runs smoothly.',
  'After the shoot, your images move into curation, premium finishing, and organised delivery.',
];

const quickChannels = [
  { title: 'Phone', value: phone, icon: Phone },
  { title: 'Email', value: email, icon: Mail },
  { title: 'Location', value: address, icon: MapPin },
  { title: 'Response Time', value: 'Within 24 hours', icon: CalendarDays },
];

export default function Booking() {
  useEffect(() => {
    setPageMeta('Booking | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Book your session through a clearer, more premium inquiry flow."
        description="Share the session type, preferred date, location, and important details so we can guide you into the right coverage with confidence."
        image={brandImages.bookingHero}
      />

      <SectionWrapper tone="dark">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="glass-panel p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-soft">How Booking Works</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
              A premium session usually begins with a very simple conversation.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              The form gives us enough detail to recommend the right package, prepare properly, and keep your inquiry moving without confusion.
            </p>
            <div className="mt-8 grid gap-4">
              {bookingSteps.map((step, index) => (
                <div key={step} className="rounded-[24px] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-soft">Step 0{index + 1}</p>
                  <p className="mt-3 text-sm leading-8 text-white/74">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <BookingForm />
        </div>
      </SectionWrapper>

      <SectionWrapper tone="light">
        <div className="grid items-start gap-6 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="light-panel p-8 sm:p-10">
            <SectionHeader
              eyebrow="Direct Contact"
              title="Prefer a faster conversation before filling every detail?"
              description="You can call, email, or start with WhatsApp if you would rather confirm availability or ask a quick question first."
              tone="light"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {quickChannels.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[22px] border border-brand-deep/8 bg-white px-5 py-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-brand-soft text-brand-deep">
                      <Icon size={20} />
                    </span>
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.24em] text-charcoal/42">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-charcoal/72">{item.value}</p>
                  </div>
                );
              })}
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary mt-8 gap-2">
              <MessageCircle size={16} />
              WhatsApp Quick Book
            </a>
          </div>
          <div className="premium-card-light p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-deep/46">What To Prepare</p>
            <h3 className="mt-4 font-display text-4xl text-charcoal">A few details help us plan beautifully from the start.</h3>
            <div className="mt-6 space-y-4">
              {[
                'Your preferred date or date range.',
                'The type of session or event coverage you need.',
                'The city, venue, or location style you have in mind.',
                'Any mood references, wardrobe direction, or special production requests.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-8 text-charcoal/68">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft text-brand-deep">
                    <CheckCircle2 size={14} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Need Something Custom"
        title="Tell us what you need and we will shape the right session plan around it."
        description="From portraits and founder branding to weddings and larger event coverage, we can recommend the format, schedule, and package that fits best."
        primaryAction={{ label: 'Contact Studio', to: '/contact' }}
        secondaryAction={{ label: 'View Packages', to: '/packages' }}
        image={brandImages.ctaWedding}
      />
    </>
  );
}