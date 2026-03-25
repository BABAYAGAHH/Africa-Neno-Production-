import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router';

export default function PackageCard({ item, index = 0, tone = 'light' }) {
  const isLight = tone === 'light';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.24) }}
      className={`relative h-full overflow-hidden rounded-[32px] border p-7 shadow-[0_22px_50px_rgba(14,44,22,0.1)] ${
        isLight
          ? 'border-brand-deep/8 bg-white text-charcoal'
          : 'border-white/12 bg-white/[0.08] text-white'
      } ${item.highlighted ? 'ring-1 ring-brand/35' : ''}`}
    >
      {item.highlighted ? (
        <span className="absolute right-6 top-6 rounded-full border border-brand/25 bg-brand-soft px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-deep">
          Most Chosen
        </span>
      ) : null}
      <p className={`text-[10px] font-bold uppercase tracking-[0.26em] ${isLight ? 'text-charcoal/42' : 'text-white/48'}`}>
        Photography Package
      </p>
      <h3 className="mt-4 font-display text-4xl leading-tight">{item.name}</h3>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
        <p className="text-3xl font-bold text-brand-deep">{item.price}</p>
        <span className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] ${isLight ? 'bg-brand-soft text-brand-deep' : 'bg-white/10 text-brand-soft'}`}>
          {item.duration}
        </span>
      </div>
      <p className={`mt-3 text-sm ${isLight ? 'text-charcoal/62' : 'text-white/62'}`}>{item.photos}</p>
      <div className={`mt-7 space-y-4 border-t pt-6 ${isLight ? 'border-brand-deep/8' : 'border-white/10'}`}>
        {item.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 text-sm leading-7">
            <span className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full ${isLight ? 'bg-brand-soft text-brand-deep' : 'bg-white/10 text-brand-soft'}`}>
              <Check size={12} />
            </span>
            <span className={isLight ? 'text-charcoal/70' : 'text-white/72'}>{feature}</span>
          </div>
        ))}
      </div>
      <Link to="/booking" className={`mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] ${isLight ? 'text-brand-deep hover:text-brand' : 'text-white hover:text-brand-soft'}`}>
        Reserve package
        <ArrowRight size={16} />
      </Link>
    </motion.article>
  );
}
