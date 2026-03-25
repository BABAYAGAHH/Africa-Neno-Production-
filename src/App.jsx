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
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(144,190,66,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(13,57,25,0.08),transparent_28%),linear-gradient(180deg,#faf8f2_0%,#f7f3ea_50%,#f2ede1_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[420px] bg-[linear-gradient(135deg,rgba(53,106,42,0.08),transparent_60%)]" />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.38, ease: 'easeOut' }}
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
