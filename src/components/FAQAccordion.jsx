import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQAccordion({ items, tone = 'light' }) {
  const [openIndex, setOpenIndex] = useState(0);
  const isLight = tone === 'light';

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-[28px] border ${
              isLight
                ? 'border-brand-deep/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,247,241,0.98)_100%)] shadow-soft'
                : 'border-white/12 bg-white/[0.08] shadow-[0_20px_48px_rgba(4,20,10,0.16)]'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 sm:px-7 sm:py-6 text-left"
            >
              <div className="min-w-0">
                <p className={`text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${isLight ? 'text-brand-deep/42' : 'text-white/46'}`}>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <span className={`mt-3 block text-[1rem] leading-8 ${isLight ? 'text-charcoal' : 'text-white'}`}>
                  {item.question}
                </span>
              </div>
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform ${
                  isLight ? 'bg-brand-soft text-brand-deep' : 'bg-white/10 text-brand-soft'
                } ${isOpen ? 'rotate-180' : ''}`}
              >
                <ChevronDown size={18} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className={`border-t px-6 pb-6 pt-5 text-sm leading-8 sm:px-7 sm:pb-7 ${isLight ? 'border-brand-deep/8 text-charcoal/68' : 'border-white/10 text-white/72'}`}>
                    {item.answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
