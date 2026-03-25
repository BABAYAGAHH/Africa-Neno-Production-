import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.16),transparent_36%)]" />
      <div className="section-shell relative pt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid items-center gap-8 overflow-hidden rounded-[36px] border border-brand-deep/10 bg-white/86 p-6 shadow-[0_26px_70px_rgba(14,44,22,0.1)] backdrop-blur-sm lg:grid-cols-[1.04fr_0.96fr] lg:p-8 xl:p-10"
        >
          <div className="max-w-2xl">
            <BrandLogo
              showName
              imageClassName="h-14 sm:h-16"
              nameClassName="text-brand-deep text-base sm:text-2xl"
            />
            <span className="eyebrow mt-8">{eyebrow}</span>
            <h1 className="mt-7 font-display text-5xl leading-[0.96] text-charcoal sm:text-6xl xl:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-charcoal/68 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[30px] border border-brand-deep/8 bg-brand-soft/40">
            <img src={image} alt={title} className="aspect-[4/4.2] h-full w-full object-cover lg:aspect-[4/3.5]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/28 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
