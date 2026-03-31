import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import BrandLogo from './BrandLogo';

export default function CTASection({ eyebrow, title, description, primaryAction, secondaryAction, image }) {
  return (
    <section className="page-pad pt-0">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[38px] border border-brand-deep/10 bg-[linear-gradient(180deg,#12331b_0%,#0b2111_100%)] shadow-[0_28px_72px_rgba(4,20,10,0.26)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.15),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.035)_0.7px,transparent_0.7px)] [background-size:20px_20px]" />

          <div className="relative grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="max-w-[38rem]">
                <BrandLogo
                  showName
                  imageClassName="h-14 sm:h-16"
                  nameClassName="text-white text-lg sm:text-[1.45rem]"
                  subtitleClassName="text-white/50"
                />
                <p className="mt-8 text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-brand-soft/86">
                  {eyebrow}
                </p>
                <h2 className="mt-5 max-w-[11ch] font-display text-[clamp(2.8rem,5vw,4.9rem)] leading-[0.95] tracking-[0.01em] text-white [text-wrap:balance]">
                  {title}
                </h2>
                <p className="mt-6 max-w-[35rem] text-[1rem] leading-8 text-white/72 sm:text-[1.05rem] sm:leading-9">
                  {description}
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link to={primaryAction.to} className="btn-primary">
                    {primaryAction.label}
                    <ArrowRight size={16} />
                  </Link>
                  {secondaryAction ? (
                    <Link to={secondaryAction.to} className="btn-ghost">
                      {secondaryAction.label}
                      <ArrowRight size={16} />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden border-t border-white/8 lg:min-h-full lg:border-l lg:border-t-0">
              <img src={image} alt={title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/24 via-brand-darker/8 to-brand-darker/16" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
