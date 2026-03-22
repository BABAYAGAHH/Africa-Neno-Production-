import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router';
import { navLinks, studioName } from '../data/site';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell py-4">
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-6 ${
            isScrolled
              ? 'border-white/10 bg-[#111111]/76 shadow-soft backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-gold/10 font-display text-xl text-gold">
              AN
            </span>
            <div>
              <p className="font-display text-2xl leading-none text-white">{studioName}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-white/40">Photography Studio</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium uppercase tracking-[0.22em] transition ${
                    isActive ? 'text-gold' : 'text-white/68 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/booking" className="btn-primary gap-2">
              Book a Session
              <ArrowRight size={16} />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-gold/40 hover:text-gold lg:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 lg:hidden"
            >
              <div className="glass-panel p-6">
                <nav className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-white/10 pb-4 text-sm font-semibold uppercase tracking-[0.22em] ${
                          isActive ? 'text-gold' : 'text-white/80'
                        }`
                      }
                    >
                      {link.label}
                      <ArrowRight size={16} />
                    </NavLink>
                  ))}
                </nav>
                <Link to="/booking" className="btn-primary mt-6 w-full gap-2">
                  Book a Session
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

