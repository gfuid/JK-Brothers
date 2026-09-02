import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { APPAREL_IMAGES, handleImageError } from '../data/imageUrls';

const handloomImg = APPAREL_IMAGES.blankets;
const garmentsImg = APPAREL_IMAGES.shirts;

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FAF9F6] overflow-hidden flex items-center py-8 sm:py-10 lg:py-14">
      
      {/* Background Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,92,0.08),transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Handloom Blanket image (Slides in from Left & Floats) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 80, delay: 0.2 }}
            className="hidden lg:block lg:col-span-3 text-center"
          >
            <Link to="/handloom" className="inline-block">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
                className="relative group p-1.5 bg-white border border-gray-200 rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 transform -rotate-2 cursor-pointer"
              >
                <img 
                  src={handloomImg} 
                  alt="Handloom Blankets Collection" 
                  className="w-full max-h-[360px] object-cover rounded-xs"
                  loading="lazy"
                  onError={handleImageError}
                />
                {/* Frosted Glass Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xs flex items-center justify-center p-4">
                  <span className="bg-white text-primary text-[9px] font-bold uppercase tracking-widest py-2.5 px-4 rounded-xs shadow-md scale-90 group-hover:scale-100 transition-transform duration-300">
                    Browse Handloom &rarr;
                  </span>
                </div>
                <span className="absolute bottom-4 left-4 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm group-hover:opacity-0 transition-opacity duration-300">
                  Artisan Handloom
                </span>
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

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xs sm:text-sm md:text-base font-bold text-accent tracking-widest uppercase mb-6"
            >
              PREMIUM GARMENTS &amp; HANDLOOM PRODUCTS
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-xs sm:text-sm text-gray-600 max-w-md mb-8 leading-relaxed font-medium"
            >
              Manufacturer, Exporter &amp; Supplier of a wide range of premium quality Garments &amp; Handloom Products crafted with tradition and modern excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
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

          </div>

          {/* Right Column: Garments image (Slides in from Right & Floats) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 80, delay: 0.2 }}
            className="hidden lg:block lg:col-span-3 text-center"
          >
            <Link to="/garments" className="inline-block">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
                className="relative group p-1.5 bg-white border border-gray-200 rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 transform rotate-2 cursor-pointer"
              >
                <img 
                  src={garmentsImg} 
                  alt="Garments Collection" 
                  className="w-full max-h-[360px] object-cover rounded-xs"
                  loading="lazy"
                  onError={handleImageError}
                />
                {/* Frosted Glass Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xs flex items-center justify-center p-4">
                  <span className="bg-white text-primary text-[9px] font-bold uppercase tracking-widest py-2.5 px-4 rounded-xs shadow-md scale-90 group-hover:scale-100 transition-transform duration-300">
                    Browse Garments &rarr;
                  </span>
                </div>
                <span className="absolute bottom-4 right-4 bg-accent text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm group-hover:opacity-0 transition-opacity duration-300">
                  Premium Apparel
                </span>
              </motion.div>
            </Link>
          </motion.div>

        </div>

        {/* Mobile Product Visualizations */}
        <div className="lg:hidden grid grid-cols-2 gap-4 mt-12">
          <Link to="/handloom" className="block">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative p-1 bg-white border border-gray-200 rounded-sm shadow-md cursor-pointer"
            >
              <img 
                src={handloomImg} 
                alt="Handloom" 
                className="w-full h-44 object-cover rounded-xs" 
                loading="lazy"
                onError={handleImageError}
              />
              <span className="absolute bottom-2 left-2 bg-primary text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-xs">
                Handloom
              </span>
            </motion.div>
          </Link>
          <Link to="/garments" className="block">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative p-1 bg-white border border-gray-200 rounded-sm shadow-md cursor-pointer"
            >
              <img 
                src={garmentsImg} 
                alt="Garments" 
                className="w-full h-44 object-cover rounded-xs" 
                loading="lazy"
                onError={handleImageError}
              />
              <span className="absolute bottom-2 right-2 bg-accent text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-xs">
                Apparel
              </span>
            </motion.div>
          </Link>
        </div>

      </div>

    </section>
  );
}
