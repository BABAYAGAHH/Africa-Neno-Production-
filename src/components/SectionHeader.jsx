import { motion } from 'framer-motion';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';
  const titleTone = tone === 'light' ? 'text-charcoal' : 'text-white';
  const bodyTone = tone === 'light' ? 'text-charcoal/68' : 'text-white/70';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`${alignment} ${className}`}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className={`mt-6 font-display text-4xl leading-[1.02] sm:text-5xl xl:text-6xl ${titleTone}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${bodyTone}`}>{description}</p>
      ) : null}
    </motion.div>
  );
}
