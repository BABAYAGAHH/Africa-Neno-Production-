import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function TestimonialCard({ item, index = 0, tone = 'light' }) {
  const isLight = tone === 'light';
  const initials = item.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.2) }}
      className={`h-full rounded-[28px] border p-7 shadow-[0_22px_50px_rgba(14,44,22,0.1)] ${
        isLight ? 'border-brand-deep/8 bg-white text-charcoal' : 'border-white/12 bg-white/[0.08] text-white'
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-brand">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} size={16} fill="currentColor" />
          ))}
        </div>
        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-[20px] font-display text-xl ${isLight ? 'bg-brand-soft text-brand-deep' : 'bg-white/10 text-brand-soft'}`}>
          {initials}
        </div>
      </div>
      <p className={`mt-6 text-base leading-8 ${isLight ? 'text-charcoal/74' : 'text-white/74'}`}>
        "{item.text}"
      </p>
      <div className={`mt-8 flex items-end justify-between gap-4 border-t pt-5 ${isLight ? 'border-brand-deep/8' : 'border-white/10'}`}>
        <div>
          <h3 className="font-display text-[clamp(1.8rem,2.6vw,2.4rem)] leading-tight [overflow-wrap:anywhere]">{item.name}</h3>
          <p className={`mt-1 text-[11px] font-bold uppercase tracking-[0.2em] ${isLight ? 'text-charcoal/48' : 'text-white/52'}`}>
            {item.service}
          </p>
        </div>
        <Quote size={22} className={isLight ? 'text-brand-deep/32' : 'text-white/32'} />
      </div>
    </motion.article>
  );
}
