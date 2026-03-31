import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router';
import BrandLogo from './BrandLogo';
import { brandSignature, navLinks } from '../data/site';

const desktopNavLinks = navLinks.filter((link) => link.to !== '/booking');
const mobileQuickLinks = navLinks.filter((link) =>
  ['/services', '/portfolio', '/booking', '/contact'].includes(link.to),
);

export default function Navbar() {
  const location = useLocation();
  const lastScrollY = useRef(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [showQuickNav, setShowQuickNav] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      const isMovingDown = delta > 6;
      const isMovingUp = delta < -6;

      setIsScrolled(currentY > 18);

      if (currentY <= 24) {
        setIsHeaderVisible(true);
        setShowQuickNav(true);
      } else if (isMovingDown && currentY > 120) {
        setIsHeaderVisible(false);
        setShowQuickNav(false);
        setIsOpen(false);
      } else if (isMovingUp) {
        setIsHeaderVisible(true);
        setShowQuickNav(true);
      }

      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsHeaderVisible(true);
    setShowQuickNav(true);
    lastScrollY.current = 0;
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
        isHeaderVisible || isOpen ? 'translate-y-0' : '-translate-y-[calc(100%+1.5rem)]'
      }`}
    >
      <div className={`section-shell transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-4 sm:pt-5'}`}>
        <div
          className={`overflow-hidden rounded-[30px] border transition-all duration-300 ${
            isScrolled
              ? 'border-white/10 bg-[linear-gradient(180deg,rgba(8,25,12,0.94)_0%,rgba(10,31,16,0.94)_100%)] shadow-[0_24px_62px_rgba(4,20,10,0.28)] backdrop-blur-2xl'
              : 'border-white/10 bg-[linear-gradient(180deg,rgba(11,33,17,0.88)_0%,rgba(11,33,17,0.82)_100%)] shadow-[0_18px_46px_rgba(4,20,10,0.2)] backdrop-blur-xl'
          }`}
        >
          <div className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 lg:px-6 xl:px-7">
            <Link to="/" className="min-w-0 flex-1 lg:flex-none">
              <BrandLogo
                showName
                showSubtitle
                subtitle={brandSignature}
                imageClassName="h-12 sm:h-16 xl:h-[3.7rem]"
                nameClassName="text-white text-[0.92rem] sm:text-[1.2rem] xl:text-[1.28rem]"
                subtitleClassName="hidden text-white/50 2xl:block"
              />
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 lg:flex">
              <p className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-white/42 xl:block">
                Premium booking access
              </p>
              <Link to="/booking" className="btn-primary shrink-0 px-4 py-3 text-[0.62rem] xl:px-5">
                Book Now
                <ArrowRight size={16} />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-brand-soft shadow-[0_12px_30px_rgba(4,20,10,0.16)] hover:bg-white/[0.1] lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {showQuickNav && !isOpen ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="border-t border-white/8 lg:hidden"
              >
                <div className="overflow-x-auto px-4 pb-3 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <nav aria-label="Quick mobile navigation" className="flex w-max min-w-full items-center gap-2">
                    {mobileQuickLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                          `whitespace-nowrap rounded-full border px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                            isActive
                              ? 'border-brand-soft/40 bg-brand-soft text-brand-darker'
                              : 'border-white/10 bg-white/[0.04] text-white/74 hover:border-white/18 hover:text-white'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="hidden border-t border-white/8 lg:block">
            <div className="overflow-x-auto px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:px-7">
              <nav
                aria-label="Primary navigation"
                className="mx-auto flex w-max min-w-full items-center justify-center gap-4 xl:gap-5 2xl:gap-6"
              >
                {desktopNavLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `relative whitespace-nowrap px-1 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:transition-transform ${
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
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
                className="border-t border-white/8 lg:hidden"
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