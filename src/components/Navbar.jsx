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
      <div className={`section-shell transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-4 sm:pt-5'}`}>
        <div
          className={`overflow-hidden rounded-[32px] border transition-all duration-300 ${
            isScrolled
              ? 'border-white/10 bg-[linear-gradient(180deg,rgba(8,25,12,0.94)_0%,rgba(10,31,16,0.94)_100%)] shadow-[0_24px_62px_rgba(4,20,10,0.28)] backdrop-blur-2xl'
              : 'border-white/10 bg-[linear-gradient(180deg,rgba(11,33,17,0.88)_0%,rgba(11,33,17,0.82)_100%)] shadow-[0_18px_46px_rgba(4,20,10,0.2)] backdrop-blur-xl'
          }`}
        >
          <div className="flex items-center gap-4 px-4 py-3.5 sm:px-6 sm:py-4 xl:px-7">
            <Link to="/" className="min-w-0 shrink-0">
              <BrandLogo
                showName
                showSubtitle
                subtitle={brandSignature}
                imageClassName="h-14 sm:h-16 xl:h-[3.7rem]"
                nameClassName="text-white text-[0.95rem] sm:text-[1.2rem] xl:text-[1.3rem]"
                subtitleClassName="hidden text-white/50 xl:block"
              />
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-end gap-8 xl:flex">
              <nav aria-label="Primary navigation" className="ml-auto flex min-w-0 items-center gap-5 2xl:gap-7">
                {desktopNavLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `relative px-1 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:transition-transform ${
                        isActive
                          ? 'text-white after:scale-x-100 after:bg-brand-soft'
                          : 'text-white/66 after:scale-x-0 after:bg-white/45 hover:text-white hover:after:scale-x-100'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <Link to="/booking" className="btn-primary shrink-0 px-5 py-3.5 text-[0.68rem]">
                Book Now
                <ArrowRight size={16} />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-brand-soft shadow-[0_12px_30px_rgba(4,20,10,0.16)] hover:bg-white/[0.1] xl:hidden"
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
                className="border-t border-white/8 xl:hidden"
              >
                <div className="px-4 pb-4 pt-3 sm:px-5">
                  <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_44px_rgba(4,20,10,0.2)] backdrop-blur-xl">
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-white/52">
                      Navigate the studio
                    </p>
                    <nav aria-label="Mobile navigation" className="mt-5 grid gap-2.5">
                      {navLinks.map((link) => (
                        <NavLink
                          key={link.to}
                          to={link.to}
                          className={({ isActive }) =>
                            `flex items-center justify-between rounded-[22px] border px-4 py-4 text-[0.76rem] font-semibold uppercase tracking-[0.18em] ${
                              isActive
                                ? 'border-brand-soft/35 bg-brand-soft text-brand-darker'
                                : 'border-white/10 bg-white/[0.04] text-white/78'
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
