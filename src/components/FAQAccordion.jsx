import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQAccordion({ items, tone = 'dark' }) {
  const [openIndex, setOpenIndex] = useState(0);
  const isLight = tone === 'light';

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-[24px] border ${
              isLight ? 'border-black/8 bg-white shadow-soft' : 'border-white/10 bg-white/[0.04] shadow-soft'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className={`font-semibold ${isLight ? 'text-charcoal' : 'text-white'}`}>
                {item.question}
              </span>
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${isLight ? 'bg-gold/10 text-gold' : 'bg-white/5 text-gold'} ${isOpen ? 'rotate-180' : ''}`}>
                <ChevronDown size={18} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={`px-6 pb-6 text-sm leading-7 ${isLight ? 'text-charcoal/70' : 'text-white/65'}`}>
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
