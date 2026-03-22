import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function GalleryGrid({ items, limit }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = ['All', ...new Set(items.map((item) => item.category))];
  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory);
  const visibleItems = typeof limit === 'number' ? filteredItems.slice(0, limit) : filteredItems;
  const selectedItem = selectedIndex !== null ? visibleItems[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }
      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => (current + 1) % visibleItems.length);
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => (current - 1 + visibleItems.length) % visibleItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, visibleItems.length]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition ${
              activeCategory === category
                ? 'border-gold/60 bg-gold text-charcoal'
                : 'border-white/10 bg-white/[0.04] text-white/72 hover:border-gold/40 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.18) }}
            className="group relative overflow-hidden rounded-[28px] text-left"
          >
            <div className="aspect-[4/4.8] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/46">{item.category}</p>
              <h3 className="mt-2 font-display text-3xl text-white">{item.title}</h3>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/88 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[#050505] shadow-soft"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white transition hover:border-gold/40 hover:text-gold"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
              {visibleItems.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex((current) => (current - 1 + visibleItems.length) % visibleItems.length)}
                    className="absolute left-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white transition hover:border-gold/40 hover:text-gold"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex((current) => (current + 1) % visibleItems.length)}
                    className="absolute right-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white transition hover:border-gold/40 hover:text-gold"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              ) : null}
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="min-h-[360px] bg-black">
                  <img src={selectedItem.image} alt={selectedItem.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-end p-8 sm:p-10">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{selectedItem.category}</p>
                  <h3 className="mt-4 font-display text-4xl text-white sm:text-5xl">{selectedItem.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/65">{selectedItem.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
