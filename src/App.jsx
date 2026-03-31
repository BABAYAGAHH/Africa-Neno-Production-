import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ivory text-charcoal">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(32,77,29,0.08),transparent_22%),linear-gradient(180deg,#fbfaf6_0%,#f6f1e8_50%,#efe8dc_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[32rem] bg-[linear-gradient(180deg,rgba(11,33,17,0.05)_0%,rgba(11,33,17,0)_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40 [background-image:radial-gradient(rgba(16,35,22,0.05)_0.6px,transparent_0.6px)] [background-size:18px_18px] [mask-image:linear-gradient(180deg,black_18%,transparent_100%)]" />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}