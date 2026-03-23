import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router';
import BrandLogo from './BrandLogo';
import { navLinks } from '../data/site';

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
          className={`flex items-center justify-between gap-4 rounded-[30px] border px-4 py-3 transition duration-300 sm:px-6 ${
            isScrolled
              ? 'border-brand-deep/10 bg-white/92 shadow-soft backdrop-blur-xl'
              : 'border-white/70 bg-white/80 shadow-[0_20px_50px_rgba(11,51,23,0.08)] backdrop-blur-xl'
          }`}
        >
          <Link to="/" className="min-w-0 shrink-0">
            <BrandLogo
              showName
              showSubtitle
              imageClassName="h-14 sm:h-16"
              nameClassName="text-brand-deep text-base sm:text-[1.7rem]"
              subtitleClassName="hidden text-brand-deep/58 sm:block"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium uppercase tracking-[0.22em] transition ${
                    isActive ? 'text-brand-deep' : 'text-charcoal/68 hover:text-brand-deep'
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-deep/10 bg-brand-soft/70 text-brand-deep transition hover:border-brand/40 hover:bg-white lg:hidden"
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
              <div className="light-panel p-6">
                <BrandLogo
                  showName
                  showSubtitle
                  imageClassName="h-14"
                  nameClassName="text-brand-deep text-base"
                  subtitleClassName="text-brand-deep/58"
                />
                <nav className="mt-6 flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-brand-deep/8 pb-4 text-sm font-semibold uppercase tracking-[0.22em] ${
                          isActive ? 'text-brand-deep' : 'text-charcoal/78'
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
