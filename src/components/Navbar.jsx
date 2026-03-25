import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router';
import BrandLogo from './BrandLogo';
import { brandSignature, navLinks } from '../data/site';

const desktopNavLinks = navLinks.filter((link) => link.to !== '/booking');

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`section-shell transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-4'}`}>
        <div
          className={`overflow-hidden rounded-[30px] border transition-all duration-300 ${
            isScrolled
              ? 'border-brand-deep/12 bg-white/90 shadow-[0_26px_70px_rgba(14,44,22,0.12)] backdrop-blur-2xl'
              : 'border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(14,44,22,0.08)] backdrop-blur-xl'
          }`}
        >
          <div className="flex items-center gap-3 px-4 py-3 sm:px-5 lg:px-6 xl:gap-4 2xl:gap-5">
            <Link to="/" className="min-w-0 flex-1 xl:flex-none">
              <BrandLogo
                showName
                showSubtitle
                subtitle={brandSignature}
                imageClassName="h-14 sm:h-16 xl:h-12 2xl:h-14"
                nameClassName="text-brand-deep text-[0.95rem] sm:text-xl xl:text-[1.14rem] 2xl:text-[1.35rem]"
                subtitleClassName="hidden text-brand-deep/52 2xl:block"
              />
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 xl:flex 2xl:gap-4">
              <nav
                aria-label="Primary navigation"
                className="flex min-w-0 max-w-full flex-1 items-center justify-end gap-1 overflow-x-auto rounded-full border border-brand-deep/10 bg-brand-soft/45 p-1.5"
              >
                {desktopNavLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition ${
                        isActive
                          ? 'bg-brand-deep text-white shadow-[0_16px_30px_rgba(14,44,22,0.18)]'
                          : 'text-charcoal/72 hover:bg-white hover:text-brand-deep'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <Link to="/booking" className="btn-primary shrink-0 px-4 py-3 text-[0.68rem] 2xl:px-5 2xl:text-[0.72rem]">
                Book Now
                <ArrowRight size={16} />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-deep/10 bg-brand-soft/55 text-brand-deep shadow-[0_18px_34px_rgba(14,44,22,0.08)] hover:bg-white xl:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
                className="border-t border-brand-deep/8 xl:hidden"
              >
                <div className="px-4 pb-4 pt-3 sm:px-5">
                  <div className="light-panel p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-deep/56">
                      Navigate the studio
                    </p>
                    <nav aria-label="Mobile navigation" className="mt-5 grid gap-3 sm:grid-cols-2">
                      {navLinks.map((link) => (
                        <NavLink
                          key={link.to}
                          to={link.to}
                          className={({ isActive }) =>
                            `flex items-center justify-between rounded-[22px] border px-4 py-4 text-sm font-bold uppercase tracking-[0.16em] ${
                              isActive
                                ? 'border-brand-deep bg-brand-deep text-white'
                                : 'border-brand-deep/8 bg-white text-charcoal/76'
                            }`
                          }
                        >
                          {link.label}
                          <ArrowRight size={16} />
                        </NavLink>
                      ))}
                    </nav>
                    <Link to="/booking" className="btn-primary mt-5 w-full justify-center">
                      Book A Session
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}