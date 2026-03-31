import { Facebook, Instagram, Mail, MapPin, Music2, Phone } from 'lucide-react';
import { Link } from 'react-router';
import BrandLogo from './BrandLogo';
import { services } from '../data/services';
import {
  address,
  brandSignature,
  email,
  locationLabel,
  navLinks,
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
        <div className="grid gap-12 xl:grid-cols-[1.2fr_0.7fr_0.8fr_0.95fr]">
          <div className="max-w-xl">
            <BrandLogo
              showName
              showSubtitle
              subtitle={brandSignature}
              imageClassName="h-16 sm:h-20"
              nameClassName="text-white text-xl sm:text-[1.9rem]"
              subtitleClassName="text-white/48"
            />
            <h2 className="mt-8 max-w-[11ch] font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.96] tracking-[0.01em] text-white">
              Calm visual storytelling for modern Nigerian clients.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-8 text-white/66">{tagline}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-brand-soft/86">
              <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2">Established {yearEstablished}</span>
              <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2">{locationLabel}</span>
            </div>
            <Link to="/booking" className="btn-primary mt-8">
              Book A Session
            </Link>
          </div>

          <div>
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/46">Navigate</h3>
            <div className="mt-6 grid gap-4">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-white/68 transition-colors hover:text-brand-soft">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/46">Specialties</h3>
            <div className="mt-6 grid gap-4">
              {services.slice(0, 6).map((service) => (
                <Link key={service.id} to="/services" className="text-sm text-white/68 transition-colors hover:text-brand-soft">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/46">Contact</h3>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/68">
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
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[0.62rem] uppercase tracking-[0.22em] text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} {studioName}. All rights reserved.</p>
          <p>Premium portraits, weddings, events, and brand visuals from {locationLabel}.</p>
        </div>
      </div>
    </footer>
  );
}
