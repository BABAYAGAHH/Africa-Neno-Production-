import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router';

export default function PackageCard({ item, index = 0, tone = 'dark' }) {
  const isLight = tone === 'light';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.24) }}
      className={`relative overflow-hidden rounded-[30px] border p-8 shadow-soft ${
        isLight
          ? 'border-brand-deep/8 bg-white text-charcoal'
          : 'border-white/12 bg-white/[0.08] text-white'
      } ${item.highlighted ? 'ring-1 ring-gold/45' : ''}`}
    >
      {item.highlighted ? (
        <span className="absolute right-6 top-6 rounded-full border border-gold/30 bg-gold/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">
          Featured
        </span>
      ) : null}
      <p className={`text-[10px] uppercase tracking-[0.34em] ${isLight ? 'text-charcoal/40' : 'text-white/45'}`}>
        Photography Package
      </p>
      <h3 className="mt-4 font-display text-4xl">{item.name}</h3>
      <p className="mt-3 text-3xl font-semibold text-gold">{item.price}</p>
      <div className={`mt-7 space-y-3 border-y py-6 ${isLight ? 'border-brand-deep/8' : 'border-white/10'}`}>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className={isLight ? 'text-charcoal/55' : 'text-white/55'}>Duration</span>
          <span className="font-semibold">{item.duration}</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className={isLight ? 'text-charcoal/55' : 'text-white/55'}>Edited Photos</span>
          <span className="font-semibold">{item.photos}</span>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {item.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 text-sm leading-7">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Check size={12} />
            </span>
            <span className={isLight ? 'text-charcoal/72' : 'text-white/72'}>{feature}</span>
          </div>
        ))}
      </div>
      <Link
        to="/booking"
        className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] transition ${
          isLight ? 'text-charcoal hover:text-brand-deep' : 'text-white hover:text-gold'
        }`}
      >
        Book package
        <ArrowRight size={16} />
      </Link>
    </motion.article>
  );
}
