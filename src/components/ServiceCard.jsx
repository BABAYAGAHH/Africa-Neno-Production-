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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.24) }}
      className="group premium-card-light h-full overflow-hidden p-7"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] bg-brand-soft text-brand-deep shadow-[0_16px_28px_rgba(14,44,22,0.08)]">
            <Icon size={24} />
          </span>
          {service.image ? (
            <div className="h-16 w-16 overflow-hidden rounded-[20px] border border-brand-deep/8">
              <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
          ) : null}
        </div>
        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-deep/48">
          Premium Coverage
        </p>
        <h3 className="mt-3 font-display text-[clamp(2rem,3vw,2.5rem)] leading-tight text-charcoal [overflow-wrap:anywhere]">{service.title}</h3>
        <p className="mt-4 text-sm leading-8 text-charcoal/66">{service.description}</p>
        <div className="mt-6 space-y-3 text-sm text-charcoal/58">
          <p className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-brand" /> Guided art direction included</p>
          <p className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-brand" /> Premium edit and delivery workflow</p>
        </div>
        <Link
          to="/booking"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-deep hover:text-brand"
        >
          Book this service
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
