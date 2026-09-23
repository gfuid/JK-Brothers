import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp, FiPhoneCall } from 'react-icons/fi';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CartDrawer from './components/CartDrawer';
import Lenis from 'lenis';

// Lazy-loaded route components for production performance & code splitting
const Home = lazy(() => import('./pages/Home/Home'));
const Handloom = lazy(() => import('./pages/Handloom/Handloom'));
const Garments = lazy(() => import('./pages/Garments/Garments'));
const NewArrivals = lazy(() => import('./pages/NewArrivals/NewArrivals'));
const Catalogue = lazy(() => import('./pages/Catalogue/Catalogue'));
const BulkOrders = lazy(() => import('./pages/BulkOrders/BulkOrders'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Wishlist = lazy(() => import('./pages/Wishlist/Wishlist'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const Orders = lazy(() => import('./pages/Orders/Orders'));
const Compare = lazy(() => import('./pages/Compare/Compare'));
const SearchResults = lazy(() => import('./pages/SearchResults/SearchResults'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function RouteLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="w-10 h-10 border-2 border-accent/20 border-t-accent rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top & set dynamic SEO title on route change
  useEffect(() => {
    window.scrollTo({ top: 0 });

    const titles = {
      '/': 'ZK BROTHERS | Premium Garments & Handloom Textiles Manufacturer & Exporter Panipat',
      '/handloom': 'Wholesale Handloom, Bedsheets & Blankets | ZK BROTHERS Panipat',
      '/garments': 'Khadi Fashion | Wholesale Apparel, Suits, Kurtis & Jeans | ZK BROTHERS',
      '/khadi-fashion': 'Khadi Fashion | Wholesale Apparel, Suits, Kurtis & Jeans | ZK BROTHERS',
      '/khatib-fashion': 'Khadi Fashion | Wholesale Apparel, Suits, Kurtis & Jeans | ZK BROTHERS',
      '/new-arrivals': 'New Arrivals 2026 | Fresh Textiles & Apparel Releases | ZK BROTHERS',
      '/catalogue': 'Product Catalogues & Spec Sheets | ZK BROTHERS Panipat',
      '/bulk-orders': 'Wholesale Bulk Orders & Export Enquiries | ZK BROTHERS Panipat',
      '/about-us': 'About ZK BROTHERS | Textile Manufacturing Facility Panipat Haryana',
      '/contact-us': 'Contact ZK BROTHERS | Panipat Wholesale Textile Suppliers',
      '/cart': 'Wholesale Cart | ZK BROTHERS',
      '/wishlist': 'My Wishlist / Favorites | ZK BROTHERS',
      '/checkout': 'Secure Checkout & Wholesale Order Portal | ZK BROTHERS',
      '/orders': 'Order History & Status | ZK BROTHERS',
      '/compare': 'Product Comparison Tool | ZK BROTHERS',
      '/search': 'Search Catalogues & Products | ZK BROTHERS',
    };

    if (titles[location.pathname]) {
      document.title = titles[location.pathname];
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>
      <CartDrawer />
      <div className="flex flex-col min-h-screen w-full bg-[#fcfbf9] text-[#2c3e50] relative selection:bg-accent selection:text-white">
        
        {/* Persistent Navbar */}
        <Navbar />

        {/* Main Routed Area */}
      <main className="flex-1 pb-16 sm:pb-0">
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/handloom" element={<Handloom />} />
            <Route path="/garments" element={<Garments />} />
            <Route path="/khadi-fashion" element={<Garments />} />
            <Route path="/khatib-fashion" element={<Garments />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/bulk-orders" element={<BulkOrders />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 flex flex-col gap-3 z-50">
        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/919896507049?text=Hi!%20I%20am%20interested%20in%20your%20garments%20and%20handloom%20products." 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-xl cursor-pointer hover:scale-110 animate-float"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* Back-to-Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleScrollTop}
              className="bg-accent hover:bg-accent-dark text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-lg cursor-pointer hover:scale-110"
              title="Back to Top"
            >
              <FiArrowUp />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Sticky B2B Lead Conversion Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/90 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] flex items-center gap-2.5">
        <a
          href="tel:+919896507049"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 px-2 rounded-sm font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-transform"
        >
          <FiPhoneCall className="text-sm text-accent" />
          <span>Call Founder</span>
        </a>
        <a
          href="https://wa.me/919896507049?text=Hello%20Mr.%20M.%20Karam,%20please%20send%20me%20the%20latest%20wholesale%20rate%20list%20and%20product%20catalog."
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-2 rounded-sm font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-transform"
        >
          <FaWhatsapp className="text-base" />
          <span>WhatsApp Rates</span>
        </a>
      </div>

    </div>
    </>
  );
}
