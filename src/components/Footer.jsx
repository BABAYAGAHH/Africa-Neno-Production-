import { Facebook, Instagram, Mail, MapPin, Music2, Phone } from 'lucide-react';
import { Link } from 'react-router';
import BrandLogo from './BrandLogo';
import {
  address,
  brandSignature,
  businessHours,
  email,
  locationLabel,
  phone,
  socialLinks,
  studioName,
  tagline,
  yearEstablished,
} from '../data/site';

const iconMap = {
  Instagram,
  Facebook,
  TikTok: Music2,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-deep/8 bg-[linear-gradient(180deg,#102c19_0%,#0b2111_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.15),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_22%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.035)_0.65px,transparent_0.65px)] [background-size:20px_20px]" />

      <div className="section-shell relative py-16 sm:py-20">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr_0.95fr] xl:gap-12">
          <div className="max-w-xl">
            <BrandLogo
              showName
              showSubtitle
              subtitle={brandSignature}
              imageClassName="h-16 sm:h-20"
              nameClassName="text-white text-xl sm:text-[1.9rem]"
              subtitleClassName="text-white/48"
            />
            <h2 className="mt-8 max-w-[12ch] font-display text-[clamp(2.4rem,5vw,4.3rem)] leading-[0.96] tracking-[0.01em] text-white">
              Calm visual storytelling for modern Nigerian clients.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-8 text-white/66">{tagline}</p>

            <div className="mt-7 flex flex-wrap gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-brand-soft/86">
              <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2">Established {yearEstablished}</span>
              <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2">{locationLabel}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/booking" className="btn-primary">
                Book A Session
              </Link>
              <Link to="/contact" className="btn-ghost">
                Contact Studio
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_20px_48px_rgba(4,20,10,0.18)] backdrop-blur-sm">
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/46">Studio Contact</h3>
            <div className="mt-6 space-y-5 text-sm leading-7 text-white/68">
              <p className="flex items-start gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-brand-soft" />
                <span>{phone}</span>
              </p>
              <p className="flex items-start gap-3">
                <Mail size={16} className="mt-1 shrink-0 text-brand-soft" />
                <span>{email}</span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-brand-soft" />
                <span>{address}</span>
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.label] || Instagram;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/78 transition-colors hover:border-brand-soft/34 hover:text-brand-soft"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_20px_48px_rgba(4,20,10,0.18)] backdrop-blur-sm">
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/46">Studio Hours</h3>
            <div className="mt-6 space-y-4">
              {businessHours.map((item) => (
                <div key={item.day} className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/84">{item.day}</p>
                  <p className="mt-2 text-sm leading-7 text-white/66">{item.time}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-soft/62">Studio Note</p>
              <p className="mt-3 text-sm leading-8 text-white/66">
                For weddings, events, and destination assignments, planning and schedule details are confirmed in advance during consultation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[0.62rem] uppercase tracking-[0.22em] text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} {studioName}. All rights reserved.</p>
          <p>Premium portraits, weddings, events, and brand visuals from {locationLabel}.</p>
        </div>
      </div>
    </footer>
  );
}