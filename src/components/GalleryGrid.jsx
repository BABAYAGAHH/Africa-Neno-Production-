import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function GalleryGrid({ items, limit, tone = 'light' }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isLight = tone === 'light';

  const categories = ['All', ...new Set(items.map((item) => item.category))];
  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory);
  const visibleItems = typeof limit === 'number' ? filteredItems.slice(0, limit) : filteredItems;
  const selectedItem = selectedIndex !== null ? visibleItems[selectedIndex] : null;

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  useEffect(() => {
    if (selectedIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }
      if (event.key === 'ArrowRight' && visibleItems.length > 0) {
        setSelectedIndex((current) => (current + 1) % visibleItems.length);
      }
      if (event.key === 'ArrowLeft' && visibleItems.length > 0) {
        setSelectedIndex((current) => (current - 1 + visibleItems.length) % visibleItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, visibleItems.length]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2.5 text-[0.64rem] font-semibold uppercase tracking-[0.22em] ${
              activeCategory === category
                ? isLight
                  ? 'border-brand-deep bg-brand-deep text-white'
                  : 'border-brand-soft bg-brand-soft text-brand-darker'
                : isLight
                  ? 'border-brand-deep/10 bg-white/80 text-charcoal/66 hover:border-brand-deep/18 hover:text-brand-deep'
                  : 'border-white/12 bg-white/8 text-white/74 hover:border-white/20 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.32, delay: Math.min(index * 0.05, 0.18) }}
            className={`group relative overflow-hidden rounded-[30px] border text-left ${
              isLight
                ? 'border-brand-deep/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,247,241,0.98)_100%)] shadow-soft'
                : 'border-white/10 bg-white/6 shadow-soft'
            }`}
          >
            <div className="aspect-[4/4.9] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
            </div>

            {isLight ? (
              <div className="p-5 sm:p-6">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-deep/46">
                  {item.category}
                </p>
                <h3 className="mt-3 font-display text-[2rem] leading-[0.96] text-charcoal [text-wrap:balance]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-charcoal/64">{item.description}</p>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/84 via-brand-darker/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/58">
                    {item.category}
                  </p>
                  <h3 className="mt-3 font-display text-[2rem] leading-[0.96] text-white [text-wrap:balance]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-8 text-white/72">{item.description}</p>
                </div>
              </>
            )}
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
            className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-darker/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-6xl overflow-hidden rounded-[34px] border border-white/12 bg-[#0b2111] shadow-[0_30px_80px_rgba(4,20,10,0.32)]"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-brand-deep/70 text-white hover:border-brand-soft/40 hover:text-brand-soft"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
              {visibleItems.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex((current) => (current - 1 + visibleItems.length) % visibleItems.length)}
                    className="absolute left-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-brand-deep/70 text-white hover:border-brand-soft/40 hover:text-brand-soft"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex((current) => (current + 1) % visibleItems.length)}
                    className="absolute right-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-brand-deep/70 text-white hover:border-brand-soft/40 hover:text-brand-soft"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              ) : null}
              <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
                <div className="min-h-[360px] bg-brand-darker">
                  <img src={selectedItem.image} alt={selectedItem.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-end p-8 sm:p-10">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-brand-soft">
                    {selectedItem.category}
                  </p>
                  <h3 className="mt-4 max-w-[10ch] font-display text-[2.7rem] leading-[0.95] text-white sm:text-[3.4rem] [text-wrap:balance]">
                    {selectedItem.title}
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-8 text-white/70">{selectedItem.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
