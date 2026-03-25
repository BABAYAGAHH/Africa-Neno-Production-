import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import BrandLogo from './BrandLogo';
import { brandImages } from '../data/media';
import { brandHighlights, heroContent, stats } from '../data/site';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(13,57,25,0.08),transparent_30%)]" />
      <div className="section-shell relative pb-24 pt-8 sm:pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <BrandLogo
              showName
              showSubtitle
              subtitle="Lagos, Nigeria • Portraits, Weddings & Events"
              imageClassName="h-16 sm:h-20"
              nameClassName="text-brand-deep text-xl sm:text-3xl"
              subtitleClassName="text-brand-deep/58"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-deep/10 bg-white/84 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-deep/72 shadow-[0_18px_34px_rgba(14,44,22,0.06)]">
                <MapPin size={14} />
                Lagos, Nigeria
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-deep/10 bg-white/84 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-deep/72 shadow-[0_18px_34px_rgba(14,44,22,0.06)]">
                <BadgeCheck size={14} />
                Available Nationwide
              </span>
            </div>
            <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[0.93] text-charcoal sm:text-6xl lg:text-8xl">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/72 sm:text-lg">
              {heroContent.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/portfolio" className="btn-primary">
                {heroContent.primaryCta}
                <ArrowRight size={16} />
              </Link>
              <Link to="/booking" className="btn-secondary">
                {heroContent.secondaryCta}
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="premium-card-light p-5">
                  <p className="font-display text-4xl text-brand-deep">{stat.value}</p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/52">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {brandHighlights.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-brand-deep/10 bg-white/72 px-4 py-4 shadow-[0_18px_34px_rgba(14,44,22,0.05)] backdrop-blur-sm">
                  <p className="text-sm font-semibold text-brand-deep">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-charcoal/62">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease: 'easeOut' }}
            className="relative"
          >
            <div className="pointer-events-none absolute -left-10 top-12 hidden h-40 w-40 rounded-full bg-brand/16 blur-3xl lg:block" />
            <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
              <div className="group relative overflow-hidden rounded-[34px] border border-brand-deep/10 bg-white p-3 shadow-[0_30px_70px_rgba(14,44,22,0.12)]">
                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src={brandImages.heroPrimary}
                    alt="African photographer holding camera"
                    className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-7 bottom-7 rounded-[24px] border border-white/18 bg-brand-darker/78 p-5 text-white backdrop-blur-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-soft">
                    Studio Signature
                  </p>
                  <p className="mt-2 font-display text-3xl leading-tight">
                    Calm direction. Clean light. Premium finishing.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-[30px] border border-brand-deep/10 bg-white p-3 shadow-[0_24px_56px_rgba(14,44,22,0.1)]">
                  <div className="overflow-hidden rounded-[24px]">
                    <img
                      src={brandImages.heroSecondary}
                      alt="Nigerian couple in traditional attire"
                      className="aspect-[4/4.2] h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-2 pb-1 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-deep/54">
                      Traditional Weddings
                    </p>
                    <p className="mt-2 text-sm leading-7 text-charcoal/66">
                      Culturally grounded storytelling with style, joy, and elegant documentary balance.
                    </p>
                  </div>
                </div>
                <div className="glass-panel overflow-hidden p-5">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-[20px] border border-white/12">
                      <img
                        src={brandImages.heroTertiary}
                        alt="African business woman at her desk"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-soft">
                        Brand Portraits
                      </p>
                      <p className="mt-2 font-display text-3xl text-white">Professional, modern, locally relevant.</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-white/72">
                    Built for founders, professionals, families, couples, and brands who want a result that feels truly premium.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
