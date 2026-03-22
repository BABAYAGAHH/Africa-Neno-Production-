import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function CTASection({ eyebrow, title, description, primaryAction, secondaryAction, image }) {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[36px] border border-white/10"
        >
          <div className="absolute inset-0">
            <img src={image} alt={title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-[#111111]/82 to-[#111111]/65" />
          </div>
          <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
            <div className="max-w-3xl">
              <span className="eyebrow">{eyebrow}</span>
              <h2 className="mt-6 font-display text-4xl text-white sm:text-6xl">{title}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                {description}
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to={primaryAction.to} className="btn-primary gap-2">
                {primaryAction.label}
                <ArrowRight size={16} />
              </Link>
              {secondaryAction ? (
                <Link to={secondaryAction.to} className="btn-secondary gap-2">
                  {secondaryAction.label}
                  <ArrowRight size={16} />
                </Link>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
