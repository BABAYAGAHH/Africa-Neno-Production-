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
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.12),transparent_38%)]" />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
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
