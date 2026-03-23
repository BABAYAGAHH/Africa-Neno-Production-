import { useEffect } from 'react';
import { CalendarDays, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SectionWrapper from '../components/SectionWrapper';
import { email, phone, address, setPageMeta, whatsappLink } from '../data/site';

export default function Booking() {
  useEffect(() => {
    setPageMeta('Booking | Africa Neno Production');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Book your session with clear next steps and a smooth inquiry experience."
        description="Share the session type, preferred date, location, and any special details so we can plan with you properly."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
      />

      <SectionWrapper>
        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <BookingForm />
          <div className="space-y-6">
            <div className="glass-panel p-8">
              <SectionHeader
                eyebrow="Booking Info"
                title="Everything you need to inquire confidently is right here."
                description="Use the form for detailed requests or reach out directly if you would prefer to discuss your session first."
              />
              <div className="mt-8 space-y-4 text-sm text-white/68">
                <p className="flex items-center gap-3"><Phone size={16} className="text-gold" /> {phone}</p>
                <p className="flex items-center gap-3"><Mail size={16} className="text-gold" /> {email}</p>
                <p className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> {address}</p>
                <p className="flex items-center gap-3"><CalendarDays size={16} className="text-gold" /> Response time: within 24 hours</p>
              </div>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary mt-6 gap-2">
                <MessageCircle size={16} />
                WhatsApp Quick Book
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        eyebrow="Need Something Custom"
        title="Tell us what you need and we will help shape the right session plan."
        description="We can recommend the right structure, coverage, and package based on your occasion and preferences."
        primaryAction={{ label: 'Contact Studio', to: '/contact' }}
        secondaryAction={{ label: 'View Packages', to: '/packages' }}
        image="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1600&q=80"
      />
    </>
  );
}
