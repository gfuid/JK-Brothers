import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

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
      '/': 'JK Brothers | Premium Garments & Handloom Textiles Manufacturer & Exporter Panipat',
      '/handloom': 'Wholesale Handloom, Bedsheets & Blankets | JK Brothers Panipat',
      '/garments': 'Wholesale Garments, Denim Jeans & Designer Suits | JK Brothers',
      '/new-arrivals': 'New Arrivals 2026 | Fresh Textiles & Apparel Releases | JK Brothers',
      '/catalogue': 'Product Catalogues & Spec Sheets | JK Brothers Panipat',
      '/bulk-orders': 'Wholesale Bulk Orders & Export Enquiries | JK Brothers Panipat',
      '/about-us': 'About JK Brothers | Textile Manufacturing Facility Panipat Haryana',
      '/contact-us': 'Contact JK Brothers | Panipat Wholesale Textile Suppliers',
      '/cart': 'Wholesale Cart | JK Brothers',
      '/wishlist': 'My Wishlist / Favorites | JK Brothers',
      '/checkout': 'Secure Checkout & Wholesale Order Portal | JK Brothers',
      '/orders': 'Order History & Status | JK Brothers',
      '/compare': 'Product Comparison Tool | JK Brothers',
      '/search': 'Search Catalogues & Products | JK Brothers',
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
      <main className="flex-1">
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/handloom" element={<Handloom />} />
            <Route path="/garments" element={<Garments />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/bulk-orders" element={<BulkOrders />} />
            <Route path="/about-us" element={<AboutUs />} />
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
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
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

    </div>
    </>
  );
}
