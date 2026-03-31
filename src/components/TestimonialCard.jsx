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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.36, delay: Math.min(index * 0.05, 0.18) }}
      className={`h-full rounded-[30px] border p-7 sm:p-8 ${
        isLight
          ? 'border-brand-deep/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,247,241,0.98)_100%)] text-charcoal shadow-soft'
          : 'border-white/12 bg-white/[0.08] text-white shadow-[0_22px_54px_rgba(4,20,10,0.18)]'
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-brand">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} size={15} fill="currentColor" />
          ))}
        </div>
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-[20px] font-display text-xl ${
            isLight ? 'bg-brand-soft text-brand-deep' : 'bg-white/10 text-brand-soft'
          }`}
        >
          {initials}
        </div>
      </div>
      <div className={`mt-7 border-t pt-6 ${isLight ? 'border-brand-deep/8' : 'border-white/10'}`}>
        <p className={`text-[1.02rem] leading-8 ${isLight ? 'text-charcoal/74' : 'text-white/76'}`}>
          "{item.text}"
        </p>
      </div>
      <div className={`mt-8 flex items-end justify-between gap-4 border-t pt-5 ${isLight ? 'border-brand-deep/8' : 'border-white/10'}`}>
        <div>
          <p className={`text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${isLight ? 'text-charcoal/44' : 'text-white/48'}`}>
            Client Reflection
          </p>
          <h3 className="mt-3 font-display text-[2rem] leading-none [overflow-wrap:anywhere]">{item.name}</h3>
          <p className={`mt-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] ${isLight ? 'text-charcoal/48' : 'text-white/52'}`}>
            {item.service}
          </p>
        </div>
        <Quote size={22} className={isLight ? 'text-brand-deep/26' : 'text-white/26'} />
      </div>
    </motion.article>
  );
}
