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
      className="group glass-panel overflow-hidden"
    >
      <div className="relative h-full">
        {service.image ? (
          <div className="relative h-56 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
          </div>
        ) : null}
        <div className="p-6 sm:p-7">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
            <Icon size={24} />
          </span>
          <h3 className="mt-5 font-display text-3xl text-white">{service.title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/65">{service.description}</p>
          <Link
            to="/booking"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:text-gold"
          >
            Book this service
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
