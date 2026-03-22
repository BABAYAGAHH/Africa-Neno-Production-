import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-[#111111]/82 to-[#111111]/70" />
      </div>
      <div className="section-shell relative z-10 py-20 sm:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-7 font-display text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
