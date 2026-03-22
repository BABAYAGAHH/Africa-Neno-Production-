import { motion } from 'framer-motion';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
}) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';
  const titleTone = tone === 'light' ? 'text-charcoal' : 'text-white';
  const bodyTone = tone === 'light' ? 'text-charcoal/70' : 'text-white/68';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={alignment}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className={`mt-6 font-display text-4xl leading-tight sm:text-5xl ${titleTone}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${bodyTone}`}>{description}</p>
      ) : null}
    </motion.div>
  );
}
