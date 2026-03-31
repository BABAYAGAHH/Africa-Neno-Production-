import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.15),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(32,77,29,0.05),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(16,35,22,0.04)_0.65px,transparent_0.65px)] [background-size:20px_20px]" />
      <div className="section-shell relative pt-8 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="light-panel grid items-center gap-9 overflow-hidden p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10 xl:p-12"
        >
          <div className="max-w-[40rem]">
            <BrandLogo
              showName
              imageClassName="h-14 sm:h-16"
              nameClassName="text-brand-deep text-base sm:text-[1.55rem]"
            />
            <span className="eyebrow mt-8">{eyebrow}</span>
            <h1 className="mt-7 max-w-[11ch] font-display text-[clamp(3.2rem,7vw,5.8rem)] leading-[0.93] tracking-[0.01em] text-charcoal [text-wrap:balance]">
              {title}
            </h1>
            <p className="mt-6 max-w-[36rem] text-[1rem] leading-8 text-charcoal/68 sm:text-[1.05rem] sm:leading-9">
              {description}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[30px] border border-brand-deep/8 bg-brand-soft/30 p-3 shadow-[0_20px_46px_rgba(14,44,22,0.08)]">
            <div className="overflow-hidden rounded-[24px]">
              <img src={image} alt={title} className="aspect-[4/4.15] h-full w-full object-cover lg:aspect-[4/3.5]" />
            </div>
            <div className="pointer-events-none absolute inset-x-10 bottom-10 rounded-[22px] border border-white/14 bg-white/66 px-5 py-4 backdrop-blur-md">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-deep/54">
                Africa Neno Production
              </p>
              <p className="mt-2 font-display text-[1.8rem] leading-none text-charcoal">
                Refined imagery with calm editorial polish.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
