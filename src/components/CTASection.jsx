import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import BrandLogo from './BrandLogo';

export default function CTASection({ eyebrow, title, description, primaryAction, secondaryAction, image }) {
  return (
    <section className="page-pad pt-0">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid overflow-hidden rounded-[36px] border border-brand-deep/10 bg-[linear-gradient(180deg,#103019_0%,#0b2111_100%)] shadow-[0_30px_80px_rgba(4,20,10,0.28)] lg:grid-cols-[0.98fr_1.02fr]"
        >
          <div className="relative p-7 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.18),transparent_34%)]" />
            <div className="relative z-10 max-w-2xl">
              <BrandLogo
                showName
                imageClassName="h-14 sm:h-16"
                nameClassName="text-white text-lg sm:text-2xl"
              />
              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-soft">{eyebrow}</p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-6xl">{title}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">{description}</p>
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
          <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
            <img src={image} alt={title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/18 to-brand-darker/8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
