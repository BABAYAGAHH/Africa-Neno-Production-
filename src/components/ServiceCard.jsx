import { motion } from 'framer-motion';
import {
  Aperture,
  ArrowRight,
  CalendarDays,
  Camera,
  Gift,
  Heart,
  MapPin,
  Package,
  Sparkles,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';

const iconMap = {
  Aperture,
  CalendarDays,
  Camera,
  Gift,
  Heart,
  MapPin,
  Package,
  Sparkles,
  Users,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || Camera;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.36, delay: Math.min(index * 0.05, 0.2) }}
      className="group premium-card-light h-full overflow-hidden p-7 sm:p-8"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] border border-brand-deep/8 bg-brand-soft text-brand-deep shadow-[0_12px_26px_rgba(14,44,22,0.07)]">
            <Icon size={22} />
          </span>
          {service.image ? (
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[20px] border border-brand-deep/8">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
          ) : null}
        </div>

        <p className="mt-7 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-deep/46">
          Signature Service
        </p>
        <h3 className="mt-3 font-display text-[2rem] leading-[0.96] text-charcoal sm:text-[2.35rem] [text-wrap:balance] [overflow-wrap:anywhere]">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-8 text-charcoal/66">{service.description}</p>

        <div className="mt-6 space-y-3 border-t border-brand-deep/8 pt-5 text-sm leading-7 text-charcoal/58">
          <p className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Guided art direction included
          </p>
          <p className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Premium edit and delivery workflow
          </p>
        </div>

        <Link
          to="/booking"
          className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-deep transition-transform hover:translate-x-0.5 hover:text-brand"
        >
          Book this service
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
