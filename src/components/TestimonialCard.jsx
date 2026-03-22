import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function TestimonialCard({ item, index = 0, tone = 'dark' }) {
  const isLight = tone === 'light';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.2) }}
      className={`rounded-[28px] border p-7 shadow-soft ${
        isLight ? 'border-black/8 bg-white text-charcoal' : 'border-white/10 bg-white/[0.04] text-white'
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} size={16} fill="currentColor" />
          ))}
        </div>
        <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${isLight ? 'bg-gold/10 text-gold' : 'bg-white/5 text-gold'}`}>
          <Quote size={18} />
        </span>
      </div>
      <p className={`mt-6 text-base leading-8 ${isLight ? 'text-charcoal/75' : 'text-white/72'}`}>
        "{item.text}"
      </p>
      <div className={`mt-6 border-t pt-5 ${isLight ? 'border-black/8' : 'border-white/10'}`}>
        <h3 className="font-display text-3xl">{item.name}</h3>
        <p className={`mt-1 text-xs uppercase tracking-[0.22em] ${isLight ? 'text-charcoal/45' : 'text-white/45'}`}>
          {item.service}
        </p>
      </div>
    </motion.article>
  );
}
