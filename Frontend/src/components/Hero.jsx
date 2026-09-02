import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiPlay, 
  FiPause, 
  FiArrowRight, 
  FiCompass
} from 'react-icons/fi';
import { 
  BEDSHEET_IMAGES, 
  SUIT_IMAGES, 
  APPAREL_IMAGES, 
  JEANS_IMAGES, 
  handleImageError 
} from '../data/imageUrls';

const SLIDES = [
  {
    id: 'caspian-bedsheets',
    kicker: 'Panipat Handloom • 100% Pure Cotton',
    title: 'CASPIAN FITTED BEDSHEETS',
    subtitle: 'Luxury Bedding Collection',
    description: 'Engineered with 400+ thread-count pure combed cotton, ultra-durable elastic perimeter, and rich geometric prints crafted for hotel-grade luxury & lasting comfort.',
    image: BEDSHEET_IMAGES.caspian1,
    link: '/handloom',
    category: 'Handloom & Bedding',
    tag: 'Panipat, Haryana',
    badge: 'Best Seller'
  },
  {
    id: 'designer-suits',
    kicker: 'Artisan Garments • Handcrafted Detailing',
    title: 'MUL COTTON DESIGNER SUITS',
    subtitle: 'Ladies Ethnic Wear',
    description: 'Exquisite applique work, hand-embroidered borders, and featherlight breathable mul cotton fabrics tailored for festive grace and boutique elegance.',
    image: SUIT_IMAGES.mulCotton1,
    link: '/garments',
    category: 'Designer Suits',
    tag: 'Hand Embroidered',
    badge: 'Boutique Line'
  },
  {
    id: 'heritage-blankets',
    kicker: 'Export Standard • Warmth & Softness',
    title: 'HERITAGE FLEECE BLANKETS',
    subtitle: 'Thermal Blankets',
    description: 'Heavyweight thermal fleece and plush mink blankets woven with ultra-fine thermal microfiber yarn for supreme cloud-like warmth and lasting fluff.',
    image: APPAREL_IMAGES.blankets,
    link: '/handloom',
    category: 'Winter Line',
    tag: 'Export Quality',
    badge: 'Wholesale Favorite'
  },
  {
    id: 'stretch-denim',
    kicker: 'Export Apparel • Precision Tailored',
    title: 'PREMIUM STRETCH DENIM',
    subtitle: 'Contemporary Garments',
    description: 'Crafted with premium high-recovery cotton-spandex denim, modern enzyme wash treatments, and heavy-duty reinforced rivets for global export markets.',
    image: JEANS_IMAGES.jeans1,
    link: '/garments',
    category: 'Denim Collection',
    tag: 'Modern Fit',
    badge: 'Heavy Duty'
  },
  {
    id: 'linen-shirts',
    kicker: 'Summer Essentials • Breathable Weave',
    title: 'CLASSIC LINEN SHIRTS',
    subtitle: 'Men\'s Apparel',
    description: 'Breathable, lightweight cotton-linen formal and casual shirts designed with crisp collars, precision stitching, and effortless all-day comfort.',
    image: APPAREL_IMAGES.shirts,
    link: '/garments',
    category: 'Casual Shirts',
    tag: 'Breathable Weave',
    badge: '100% Breathable'
  }
];

const AUTOPLAY_INTERVAL = 5500; // 5.5s continuous loop

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const progressIntervalRef = useRef(null);
  const touchStartXRef = useRef(null);
  const cardRefs = useRef([]);

  const activeSlide = SLIDES[currentIndex];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Continuous Seamless Auto-loop
  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepTime = 50; // Update every 50ms
    const totalSteps = AUTOPLAY_INTERVAL / stepTime;
    const progressIncrement = 100 / totalSteps;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + progressIncrement;
      });
    }, stepTime);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, nextSlide]);

  // Smoothly scroll active card into view when slide changes
  useEffect(() => {
    if (cardRefs.current[currentIndex]) {
      cardRefs.current[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe for Mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartXRef.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartXRef.current = null;
  };

  return (
    <section 
      className="relative w-full min-h-[600px] sm:min-h-[680px] lg:h-[88vh] lg:max-h-[860px] bg-[#071224] text-white overflow-hidden select-none flex flex-col justify-between"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Interactive Product Showcase Hero"
    >
      {/* 1. Cinematic Background Slider with Smooth Crossfade & Zoom */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={activeSlide.image} 
              alt={activeSlide.title} 
              className="w-full h-full object-cover object-center"
              onError={handleImageError}
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-Layer Dark Vignette Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071224]/95 via-[#071224]/80 to-[#071224]/35 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071224] via-[#071224]/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,rgba(197,168,92,0.18),transparent_65%)] z-10 pointer-events-none" />
      </div>

      {/* 2. Top Micro-Bar */}
      <div className="relative z-20 max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 w-full pt-6 md:pt-8 flex items-center justify-between text-xs tracking-widest uppercase text-white/70">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="font-semibold text-white/90">JK BROTHERS</span>
          <span className="text-white/40">•</span>
          <span className="hidden sm:inline text-white/60">EST. PANIPAT, INDIA</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-accent font-mono text-[11px] font-bold">
            WHOLESALE &amp; EXPORT CATALOGUE
          </span>
          <span className="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white/80 border border-white/15">
            {activeSlide.badge}
          </span>
        </div>
      </div>

      {/* 3. Main Center Content Area: Left-aligned Text + Right-aligned Floating Cards */}
      <div className="relative z-20 max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 w-full py-4 md:py-6 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Text Info shifted left */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left lg:pr-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
                  },
                  exit: { opacity: 0, transition: { duration: 0.2 } }
                }}
                className="w-full"
              >
                {/* Kicker Badge */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  className="flex items-center gap-2.5 mb-3"
                >
                  <span className="h-[2px] w-7 bg-accent rounded-full"></span>
                  <span className="text-accent text-xs md:text-sm font-bold tracking-[0.25em] uppercase drop-shadow-sm">
                    {activeSlide.kicker}
                  </span>
                </motion.div>

                {/* Big Bold Headline */}
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white uppercase leading-[1.08] mb-4 drop-shadow-md"
                >
                  {activeSlide.title}
                </motion.h1>

                {/* Description Paragraph */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="text-sm sm:text-base text-gray-200/90 font-medium max-w-lg mb-7 leading-relaxed drop-shadow-sm"
                >
                  {activeSlide.description}
                </motion.p>

                {/* Interactive Action CTAs */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="flex items-center gap-3 sm:gap-4 flex-wrap"
                >
                  {/* Primary CTA Button: Pill with Arrow */}
                  <Link
                    to={activeSlide.link}
                    className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-primary font-bold text-xs sm:text-sm tracking-widest uppercase px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>{activeSlide.ctaText || 'DISCOVER COLLECTION'}</span>
                    <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                  {/* Secondary CTA: Get Wholesale Quote */}
                  <Link
                    to="/bulk-orders"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/40 font-bold text-xs sm:text-sm tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 backdrop-blur-md cursor-pointer"
                  >
                    <FiCompass className="text-accent" />
                    <span>GET A QUOTE</span>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: Floating Cards Deck with Distinct Active Highlight */}
          <div className="lg:col-span-7 xl:col-span-7 w-full flex flex-col items-end mt-4 lg:mt-0">
            <div className="flex items-center justify-between w-full mb-3 lg:hidden">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">
                Our Collections
              </span>
              <span className="text-[11px] text-white/50 font-mono">
                Tap card to view
              </span>
            </div>

            {/* Horizontal Cards Strip aligned to the right */}
            <div className="w-full flex items-center gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-3 pt-2 px-2 lg:justify-end snap-x">
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <motion.div
                    key={slide.id}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onClick={() => goToSlide(idx)}
                    whileHover={{ y: -6, scale: isActive ? 1.05 : 1.0 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className={`relative shrink-0 w-[150px] sm:w-[175px] md:w-[195px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 snap-start group ${
                      isActive 
                        ? 'border-2 border-accent ring-4 ring-accent/25 shadow-2xl shadow-accent/35 scale-105 -translate-y-2 z-20 opacity-100 brightness-105' 
                        : 'border border-white/15 opacity-55 hover:opacity-95 brightness-80 hover:brightness-100 scale-95 hover:border-white/40'
                    }`}
                  >
                    {/* Card Image */}
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isActive ? 'scale-105' : 'group-hover:scale-105'
                      }`}
                      loading="lazy"
                      onError={handleImageError}
                    />

                    {/* Active Highlight Top Gold Bar & Playing Indicator */}
                    {isActive && (
                      <>
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-accent shadow-[0_0_12px_#C5A85C] z-10" />
                        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 bg-[#071224]/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-accent/50 shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                          <span className="text-[9px] font-extrabold text-accent tracking-widest uppercase font-mono">
                            ACTIVE
                          </span>
                        </div>
                      </>
                    )}

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-t from-black/95 via-black/40 to-transparent' 
                        : 'bg-gradient-to-t from-black/95 via-black/60 to-black/20'
                    }`} />

                    {/* Card Content Info */}
                    <div className="absolute bottom-0 inset-x-0 p-3.5 flex flex-col justify-end text-left pointer-events-none">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`h-[1.5px] rounded-full transition-all duration-300 ${
                          isActive ? 'w-5 bg-accent' : 'w-2.5 bg-white/40'
                        }`} />
                        <span className={`text-[10px] font-bold uppercase tracking-wider truncate transition-colors duration-300 ${
                          isActive ? 'text-accent' : 'text-white/60'
                        }`}>
                          {slide.category}
                        </span>
                      </div>
                      <h4 className={`text-xs sm:text-sm font-bold uppercase tracking-wide line-clamp-2 leading-tight drop-shadow-sm transition-colors duration-300 ${
                        isActive ? 'text-white font-black' : 'text-white/80'
                      }`}>
                        {slide.title}
                      </h4>
                      <p className={`text-[10px] mt-1 font-medium truncate transition-colors duration-300 ${
                        isActive ? 'text-white/80' : 'text-white/40'
                      }`}>
                        {slide.tag}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* 4. Bottom Controls Bar: Left/Right Arrows, Progress Line, Slide Numbers */}
      <div className="relative z-20 max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 w-full pb-6 md:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4">
        
        {/* Navigation Arrows & Play/Pause */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/10 hover:bg-accent hover:border-accent hover:text-primary text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer shadow-md"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/10 hover:bg-accent hover:border-accent hover:text-primary text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer shadow-md"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>

          {/* Autoplay Pause / Play Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause Continuous Loop' : 'Resume Continuous Loop'}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white/80 text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer"
          >
            {isPlaying ? (
              <>
                <FiPause className="text-accent text-xs" />
                <span className="text-[11px] uppercase tracking-wider hidden xs:inline">Auto Loop</span>
              </>
            ) : (
              <>
                <FiPlay className="text-accent text-xs" />
                <span className="text-[11px] uppercase tracking-wider hidden xs:inline">Paused</span>
              </>
            )}
          </button>
        </div>

        {/* Progress Line Bar */}
        <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
          <div className="relative w-36 sm:w-48 md:w-64 h-[3px] bg-white/20 rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 bottom-0 bg-accent rounded-full transition-all duration-75 ease-linear shadow-xs shadow-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Slide Counter Numbers (e.g. 01 / 05) */}
        <div className="flex items-center gap-2 text-white font-mono text-sm tracking-wider">
          <span className="text-xl font-black text-accent">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-white/30 font-light">/</span>
          <span className="text-white/60 font-medium">
            {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>

      </div>

    </section>
  );
}
