import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router';

export default function PackageCard({ item, index = 0, tone = 'light' }) {
  const isLight = tone === 'light';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.36, delay: Math.min(index * 0.06, 0.2) }}
      className={`relative h-full overflow-hidden rounded-[32px] border p-7 sm:p-8 ${
        isLight
          ? 'border-brand-deep/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,247,241,0.98)_100%)] text-charcoal shadow-soft'
          : 'border-white/12 bg-white/[0.08] text-white shadow-[0_22px_54px_rgba(4,20,10,0.18)]'
      } ${item.highlighted ? 'ring-1 ring-brand/25' : ''}`}
    >
      {item.highlighted ? (
        <span className="absolute right-6 top-6 rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-brand-deep">
          Most Chosen
        </span>
      ) : null}
      <p className={`text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${isLight ? 'text-charcoal/42' : 'text-white/46'}`}>
        Photography Package
      </p>
      <h3 className="mt-4 max-w-[10ch] font-display text-[2.2rem] leading-[0.94] [text-wrap:balance] [overflow-wrap:anywhere] sm:text-[2.55rem]">
        {item.name}
      </h3>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
        <p className={`font-display text-[2.5rem] leading-none ${isLight ? 'text-brand-deep' : 'text-brand-soft'}`}>{item.price}</p>
        <span
          className={`rounded-full px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.22em] ${
            isLight ? 'bg-brand-soft text-brand-deep' : 'bg-white/10 text-brand-soft'
          }`}
        >
          {item.duration}
        </span>
      </div>
      <p className={`mt-3 text-sm leading-7 ${isLight ? 'text-charcoal/58' : 'text-white/60'}`}>{item.photos}</p>
      <div className={`mt-7 space-y-4 border-t pt-6 ${isLight ? 'border-brand-deep/8' : 'border-white/10'}`}>
        {item.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 text-sm leading-7">
            <span
              className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                isLight ? 'bg-brand-soft text-brand-deep' : 'bg-white/10 text-brand-soft'
              }`}
            >
              <Check size={12} />
            </span>
            <span className={isLight ? 'text-charcoal/68' : 'text-white/72'}>{feature}</span>
          </div>
        ))}
      </div>
      <Link
        to="/booking"
        className={`mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-transform hover:translate-x-0.5 ${
          isLight ? 'text-brand-deep hover:text-brand' : 'text-white hover:text-brand-soft'
        }`}
      >
        Reserve package
        <ArrowRight size={16} />
      </Link>
    </motion.article>
  );
}
