import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import BrandLogo from './BrandLogo';
import { brandImages } from '../data/media';
import { brandHighlights, brandSignature, heroContent, locationLabel, stats } from '../data/site';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-40 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[78%] bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(13,57,25,0.08),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(16,35,22,0.04)_0.65px,transparent_0.65px)] [background-size:20px_20px]" />
      <div className="section-shell relative pb-24 pt-10 sm:pt-12">
        <div className="grid items-start gap-14 xl:grid-cols-[0.96fr_1.04fr] xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <BrandLogo
              showName
              showSubtitle
              subtitle={brandSignature}
              imageClassName="h-16 sm:h-20"
              nameClassName="text-brand-deep text-xl sm:text-[2rem]"
              subtitleClassName="text-brand-deep/54"
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-deep/10 bg-white/82 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-brand-deep/66 shadow-[0_14px_28px_rgba(14,44,22,0.06)]">
                <MapPin size={14} />
                {locationLabel}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-deep/10 bg-white/82 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-brand-deep/66 shadow-[0_14px_28px_rgba(14,44,22,0.06)]">
                <BadgeCheck size={14} />
                Available Nationwide
              </span>
            </div>

            <p className="mt-9 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-deep/48">
              Premium photography studio for portraits, weddings, events, and modern brands.
            </p>
            <h1 className="mt-5 max-w-[11ch] font-display text-[clamp(3.55rem,8vw,6.9rem)] leading-[0.9] tracking-[0.01em] text-charcoal [text-wrap:balance]">
              {heroContent.title}
            </h1>
            <p className="mt-7 max-w-[38rem] text-[1rem] leading-8 text-charcoal/70 sm:text-[1.08rem] sm:leading-9">
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

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="premium-card-light h-full min-h-[9.2rem] p-5 sm:p-6">
                  <p className="font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[0.94] tracking-[0.01em] text-brand-deep [overflow-wrap:anywhere]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-charcoal/48 [overflow-wrap:anywhere]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {brandHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-brand-deep/8 bg-white/72 px-5 py-5 shadow-[0_18px_38px_rgba(14,44,22,0.05)] backdrop-blur-sm"
                >
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-brand-deep/46">
                    Studio Standard
                  </p>
                  <h3 className="mt-3 font-display text-[2rem] leading-none text-charcoal sm:text-[2.15rem] [text-wrap:balance]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-charcoal/64">{item.description}</p>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5, ease: 'easeOut' }}
            className="relative"
          >
            <div className="pointer-events-none absolute -left-10 top-12 hidden h-40 w-40 rounded-full bg-brand/14 blur-3xl lg:block" />
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="light-panel overflow-hidden p-3">
                <div className="relative overflow-hidden rounded-[28px]">
                  <img
                    src={brandImages.heroPrimary}
                    alt="African photographer holding camera"
                    className="aspect-[4/5] h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-darker/82 via-brand-darker/18 to-transparent p-6 sm:p-7">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-soft/90">
                      Studio Signature
                    </p>
                    <p className="mt-3 max-w-[12ch] font-display text-[2.25rem] leading-[0.98] text-white sm:text-[2.7rem]">
                      Calm direction. Clean light. Premium finishing.
                    </p>
                  </div>
                </div>
              </article>

              <div className="grid gap-5">
                <article className="premium-card-light overflow-hidden p-3">
                  <div className="overflow-hidden rounded-[24px]">
                    <img
                      src={brandImages.heroSecondary}
                      alt="Nigerian couple in traditional attire"
                      className="aspect-[4/4.15] h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-2 pb-1 pt-5">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-deep/48">
                      Traditional Weddings
                    </p>
                    <p className="mt-3 font-display text-[2rem] leading-none text-charcoal">
                      Joy, style, and cultural presence.
                    </p>
                    <p className="mt-3 text-sm leading-8 text-charcoal/64">
                      Documentary sensitivity paired with premium visual control for ceremonies that deserve both beauty and respect.
                    </p>
                  </div>
                </article>

                <article className="glass-panel p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[20px] border border-white/12">
                      <img
                        src={brandImages.heroTertiary}
                        alt="African business woman at her desk"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-soft/86">
                        Brand Portraits
                      </p>
                      <p className="mt-3 font-display text-[2rem] leading-none text-white">
                        Professional, modern, locally relevant.
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-8 text-white/72">
                    Built for founders, professionals, families, couples, and brands who want imagery that feels polished and enduring.
                  </p>
                </article>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}