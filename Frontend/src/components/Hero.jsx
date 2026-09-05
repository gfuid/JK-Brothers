import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { 
  APPAREL_IMAGES, 
  BEDSHEET_IMAGES, 
  SUIT_IMAGES, 
  JEANS_IMAGES, 
  handleImageError 
} from '../data/imageUrls';

const SLIDES = [
  {
    id: 1,
    subtitle: 'PREMIUM GARMENTS & HANDLOOM PRODUCTS',
    description: 'Manufacturer, Exporter & Supplier of a wide range of premium quality Garments & Handloom Products crafted with tradition and modern excellence.',
    leftImg: APPAREL_IMAGES.blankets,
    leftAlt: 'Handloom Blankets Collection',
    leftTag: 'Artisan Handloom',
    leftBtn: 'Browse Handloom',
    leftLink: '/handloom',
    rightImg: APPAREL_IMAGES.shirts,
    rightAlt: 'Garments Collection',
    rightTag: 'Premium Apparel',
    rightBtn: 'Browse Garments',
    rightLink: '/garments',
  },
  {
    id: 2,
    subtitle: 'CASPIAN FITTED BEDSHEETS & LADIES SUITS',
    description: 'Engineered with 100% pure combed cotton, high thread-count, snug elastic perimeter, and exquisite boutique mul cotton suits.',
    leftImg: BEDSHEET_IMAGES.caspian1,
    leftAlt: 'Caspian Fitted Bedsheets',
    leftTag: 'Caspian Bedding',
    leftBtn: 'Browse Bedsheets',
    leftLink: '/handloom',
    rightImg: SUIT_IMAGES.mulCotton1,
    rightAlt: 'Mul Cotton Designer Suits',
    rightTag: 'Designer Suits',
    rightBtn: 'Browse Suits',
    rightLink: '/garments',
  },
  {
    id: 3,
    subtitle: 'EXPORT STRETCH DENIM & BOUTIQUE WEAR',
    description: 'Heavy-duty cotton-spandex denim with high-recovery fit alongside artisan hand-embroidered ethnic suits tailored for wholesale & export.',
    leftImg: JEANS_IMAGES.jeans1,
    leftAlt: 'Export Quality Denim Jeans',
    leftTag: 'Export Denim',
    leftBtn: 'Browse Denim',
    leftLink: '/garments',
    rightImg: SUIT_IMAGES.embroidered1,
    rightAlt: 'Embroidered Boutique Suits',
    rightTag: 'Ethnic Apparel',
    rightBtn: 'Browse Ethnic',
    rightLink: '/garments',
  },
  {
    id: 4,
    subtitle: 'HERITAGE BEDSHEETS & DESIGNER SUITS',
    description: 'Vibrant colorfast printed double bedsheets and coordinated pillow sets woven with premium long-staple cotton yarns.',
    leftImg: BEDSHEET_IMAGES.caspian2,
    leftAlt: 'Luxury Double Bedsheets',
    leftTag: 'Pure Cotton',
    leftBtn: 'Browse Bedsheets',
    leftLink: '/handloom',
    rightImg: SUIT_IMAGES.classic1,
    rightAlt: 'Classic Tailored Suits',
    rightTag: 'Ladies Suits',
    rightBtn: 'Browse Suits',
    rightLink: '/garments',
  },
];

const AUTOPLAY_DURATION = 3500;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef(null);
  const autoplayTimerRef = useRef(null);

  const resetAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_DURATION);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    resetAutoplayTimer();
  }, [resetAutoplayTimer]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    resetAutoplayTimer();
  }, [resetAutoplayTimer]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    resetAutoplayTimer();
  }, [resetAutoplayTimer]);

  // Autoplay loop - continuously slides smoothly every 3.5s
  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [resetAutoplayTimer]);

  // Touch Swipe for mobile devices
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartXRef.current) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartXRef.current = null;
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <section 
      className="relative w-full bg-[#FAF9F6] overflow-hidden flex flex-col justify-center py-8 sm:py-10 lg:py-14 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,92,0.08),transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Handloom image (Slides in from Left & Floats with Carousel) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 80, delay: 0.2 }}
            className="hidden lg:block lg:col-span-3 text-center"
          >
            <Link to={currentSlide.leftLink} className="inline-block w-full max-w-[280px]">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
                className="relative group p-1.5 bg-white border border-gray-200 rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 transform -rotate-2 cursor-pointer overflow-hidden"
              >
                <div className="relative w-full h-[360px] overflow-hidden rounded-xs bg-gray-50">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={`left-img-${currentSlide.id}`}
                      src={currentSlide.leftImg} 
                      alt={currentSlide.leftAlt} 
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover rounded-xs"
                      loading="eager"
                      onError={handleImageError}
                    />
                  </AnimatePresence>

                  {/* Frosted Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xs flex items-center justify-center p-4 z-10">
                    <span className="bg-white text-primary text-[9px] font-bold uppercase tracking-widest py-2.5 px-4 rounded-xs shadow-md scale-90 group-hover:scale-100 transition-transform duration-300">
                      {currentSlide.leftBtn} &rarr;
                    </span>
                  </div>
                  <span className="absolute bottom-4 left-4 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm group-hover:opacity-0 transition-opacity duration-300 z-10">
                    {currentSlide.leftTag}
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Center Column: Text Content */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center text-center px-2">
            
            {/* Welcome Tag */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="h-[1.5px] w-6 bg-accent"></span>
              <span className="text-accent text-[11px] md:text-xs font-extrabold tracking-[0.3em] uppercase">
                WELCOME TO
              </span>
              <span className="h-[1.5px] w-6 bg-accent"></span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black text-primary leading-tight mb-2 tracking-wide uppercase"
            >
              Z K BROTHER
            </motion.h1>

            {/* Subtitle with Smooth Slide Transition */}
            <div className="min-h-[28px] flex items-center justify-center mb-3 sm:mb-6">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`sub-${currentSlide.id}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs sm:text-sm md:text-base font-bold text-accent tracking-widest uppercase"
                >
                  {currentSlide.subtitle}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Mobile Product Visualizations - Placed above description, buttons & controls */}
            <div className="lg:hidden grid grid-cols-2 gap-3.5 w-full max-w-sm sm:max-w-md my-4">
              <Link to={currentSlide.leftLink} className="block">
                <div className="relative p-1 bg-white border border-gray-200 rounded-sm shadow-md cursor-pointer overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="relative w-full h-44 sm:h-52 overflow-hidden rounded-xs bg-gray-50">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={`mobile-left-${currentSlide.id}`}
                        src={currentSlide.leftImg} 
                        alt={currentSlide.leftAlt} 
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover rounded-xs" 
                        loading="eager"
                        onError={handleImageError}
                      />
                    </AnimatePresence>
                    <span className="absolute bottom-2 left-2 bg-primary text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-xs z-10 shadow-xs">
                      {currentSlide.leftTag}
                    </span>
                  </div>
                </div>
              </Link>

              <Link to={currentSlide.rightLink} className="block">
                <div className="relative p-1 bg-white border border-gray-200 rounded-sm shadow-md cursor-pointer overflow-hidden transform rotate-1 hover:rotate-0 transition-transform">
                  <div className="relative w-full h-44 sm:h-52 overflow-hidden rounded-xs bg-gray-50">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={`mobile-right-${currentSlide.id}`}
                        src={currentSlide.rightImg} 
                        alt={currentSlide.rightAlt} 
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover rounded-xs" 
                        loading="eager"
                        onError={handleImageError}
                      />
                    </AnimatePresence>
                    <span className="absolute bottom-2 right-2 bg-accent text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-xs z-10 shadow-xs">
                      {currentSlide.rightTag}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Description with Smooth Slide Transition */}
            <div className="min-h-[56px] sm:min-h-[56px] flex items-center justify-center mb-6 sm:mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentSlide.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs sm:text-sm text-gray-600 max-w-md leading-relaxed font-medium"
                >
                  {currentSlide.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-6"
            >
              <Link
                to="/handloom"
                className="w-full sm:w-auto text-center bg-primary hover:bg-blue-950 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                EXPLORE PRODUCTS
              </Link>
              <Link
                to="/bulk-orders"
                className="w-full sm:w-auto text-center bg-accent hover:bg-accent-dark text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                GET A QUOTE
              </Link>
            </motion.div>

            {/* Slider Navigation Controls (Prev, Dots, Next) */}
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-primary hover:text-white hover:border-primary text-gray-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:shadow-sm"
              >
                <FiChevronLeft className="text-base" />
              </button>

              <div className="flex items-center gap-2">
                {SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      idx === currentIndex 
                        ? 'w-6 h-2 bg-accent shadow-xs' 
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-primary hover:text-white hover:border-primary text-gray-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:shadow-sm"
              >
                <FiChevronRight className="text-base" />
              </button>
            </div>

          </div>

          {/* Right Column: Garments image (Slides in from Right & Floats with Carousel) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 80, delay: 0.2 }}
            className="hidden lg:block lg:col-span-3 text-center"
          >
            <Link to={currentSlide.rightLink} className="inline-block w-full max-w-[280px]">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
                className="relative group p-1.5 bg-white border border-gray-200 rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 transform rotate-2 cursor-pointer overflow-hidden"
              >
                <div className="relative w-full h-[360px] overflow-hidden rounded-xs bg-gray-50">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={`right-img-${currentSlide.id}`}
                      src={currentSlide.rightImg} 
                      alt={currentSlide.rightAlt} 
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover rounded-xs"
                      loading="eager"
                      onError={handleImageError}
                    />
                  </AnimatePresence>

                  {/* Frosted Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xs flex items-center justify-center p-4 z-10">
                    <span className="bg-white text-primary text-[9px] font-bold uppercase tracking-widest py-2.5 px-4 rounded-xs shadow-md scale-90 group-hover:scale-100 transition-transform duration-300">
                      {currentSlide.rightBtn} &rarr;
                    </span>
                  </div>
                  <span className="absolute bottom-4 right-4 bg-accent text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm group-hover:opacity-0 transition-opacity duration-300 z-10">
                    {currentSlide.rightTag}
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
