import { motion } from 'framer-motion';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}) {
  const centered = align === 'center';
  const alignment = centered ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl';
  const titleTone = tone === 'light' ? 'text-charcoal' : 'text-white';
  const bodyTone = tone === 'light' ? 'text-charcoal/66' : 'text-white/70';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, ease: 'easeOut' }}
      className={`${alignment} ${className}`}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={`mt-7 max-w-[14ch] font-display text-[clamp(2.65rem,5vw,4.75rem)] leading-[0.96] tracking-[0.01em] [text-wrap:balance] ${centered ? 'mx-auto' : ''} ${titleTone}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-[42rem] text-[1rem] leading-8 sm:text-[1.06rem] sm:leading-9 ${centered ? 'mx-auto' : ''} ${bodyTone}`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
