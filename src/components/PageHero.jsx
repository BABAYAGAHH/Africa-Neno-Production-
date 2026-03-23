import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/92 via-brand-deep/86 to-brand-deep/72" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(144,190,66,0.22),transparent_34%)]" />
      </div>
      <div className="section-shell relative z-10 py-20 sm:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <BrandLogo
            className="w-fit"
            showName
            imageClassName="h-16 sm:h-20"
            nameClassName="text-white text-lg sm:text-2xl"
          />
          <span className="eyebrow mt-7">{eyebrow}</span>
          <h1 className="mt-7 font-display text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
