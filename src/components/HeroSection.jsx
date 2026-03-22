import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { heroContent, stats } from '../data/site';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80"
          alt="Premium photography studio"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#111111]/90 to-[#111111]/62" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.16),transparent_30%)]" />
      </div>

      <div className="section-shell relative z-10 flex min-h-[calc(100vh-8rem)] items-center py-16">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span className="eyebrow">Luxury Modern Photography</span>
            <h1 className="mt-8 font-display text-5xl leading-[0.92] text-white sm:text-6xl lg:text-8xl">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              {heroContent.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/portfolio" className="btn-primary gap-2">
                {heroContent.primaryCta}
                <ArrowRight size={16} />
              </Link>
              <Link to="/booking" className="btn-secondary gap-2">
                {heroContent.secondaryCta}
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease: 'easeOut' }}
            className="space-y-4"
          >
            <div className="glass-panel p-7">
              <p className="text-[10px] uppercase tracking-[0.34em] text-gold">Studio Signature</p>
              <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
                Elegant visual storytelling for portraits, weddings, events, and premium personal moments.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                A luxury-modern studio presence with rich imagery, refined editing, and a client-first experience from booking to delivery.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel p-5">
                  <p className="font-display text-4xl text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
