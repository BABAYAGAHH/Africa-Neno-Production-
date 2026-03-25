import { Facebook, Instagram, Mail, MapPin, Music2, Phone } from 'lucide-react';
import { Link } from 'react-router';
import BrandLogo from './BrandLogo';
import { services } from '../data/services';
import { address, brandSignature, email, locationLabel, navLinks, phone, socialLinks, studioName, tagline, yearEstablished } from '../data/site';

const iconMap = {
  Instagram,
  Facebook,
  TikTok: Music2,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-deep/8 bg-[linear-gradient(180deg,#103019_0%,#0b2111_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.18),transparent_32%)]" />
      <div className="section-shell relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.8fr_0.9fr_0.95fr]">
          <div>
            <BrandLogo
              showName
              showSubtitle
              subtitle={brandSignature}
              imageClassName="h-16 sm:h-20"
              nameClassName="text-white text-xl sm:text-3xl"
              subtitleClassName="text-white/52"
            />
            <h2 className="mt-7 max-w-sm font-display text-4xl leading-tight text-white sm:text-5xl">
              Modern Nigerian photography with business-class care and timeless visual taste.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-8 text-white/68">{tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-soft">
              <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2">Established {yearEstablished}</span>
              <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2">{locationLabel}</span>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/52">Explore</h3>
            <div className="mt-6 grid gap-4">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-white/68 hover:text-brand-soft">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/52">Specialties</h3>
            <div className="mt-6 grid gap-4">
              {services.slice(0, 6).map((service) => (
                <Link key={service.id} to="/services" className="text-sm text-white/68 hover:text-brand-soft">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/52">Contact</h3>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/68">
              <p className="flex items-start gap-3"><Phone size={16} className="mt-1 text-brand-soft" /> {phone}</p>
              <p className="flex items-start gap-3"><Mail size={16} className="mt-1 text-brand-soft" /> {email}</p>
              <p className="flex items-start gap-3"><MapPin size={16} className="mt-1 text-brand-soft" /> {address}</p>
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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/78 hover:border-brand-soft/40 hover:text-brand-soft"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.2em] text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} {studioName}. All rights reserved.</p>
          <p>Premium portraits, weddings, events, and brand visuals from {locationLabel}.</p>
        </div>
      </div>
    </footer>
  );
}