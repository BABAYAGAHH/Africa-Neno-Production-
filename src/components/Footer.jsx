import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';
import { Link } from 'react-router';
import BrandLogo from './BrandLogo';
import { services } from '../data/services';
import { email, navLinks, phone, socialLinks, studioName, tagline, address } from '../data/site';

const iconMap = {
  Instagram,
  Facebook,
  YouTube: Youtube,
};

export default function Footer() {
  return (
    <footer className="border-t border-brand/15 bg-[linear-gradient(180deg,#0d3919_0%,#082712_100%)] text-white">
      <div className="section-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo imageClassName="h-14 max-w-[260px] sm:h-16" />
            <h2 className="mt-6 max-w-sm font-display text-4xl text-white sm:text-5xl">
              Photography shaped with warmth, clarity, and timeless intention.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/68">{tagline}</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/58">
              From portraits and weddings to events and brand visuals, we create imagery that feels polished,
              natural, and memorable.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">Quick Links</h3>
            <div className="mt-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-white/65 transition hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">Services</h3>
            <div className="mt-6 flex flex-col gap-4">
              {services.slice(0, 6).map((service) => (
                <Link key={service.id} to="/services" className="text-sm text-white/65 transition hover:text-gold">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">Contact</h3>
            <div className="mt-6 space-y-4 text-sm text-white/65">
              <p className="flex items-start gap-3"><Phone size={16} className="mt-1 text-gold" /> {phone}</p>
              <p className="flex items-start gap-3"><Mail size={16} className="mt-1 text-gold" /> {email}</p>
              <p className="flex items-start gap-3"><MapPin size={16} className="mt-1 text-gold" /> {address}</p>
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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/78 transition hover:border-gold/40 hover:text-gold"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.22em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} {studioName}. All rights reserved.</p>
          <p>Portraits, weddings, events, and polished visual storytelling.</p>
        </div>
      </div>
    </footer>
  );
}
