import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiSearch, FiShoppingBag, FiArrowRight, FiCompass, FiGrid } from 'react-icons/fi';
const logoImg = '/logo.webp';

export default function NotFound() {
  // Generate random animated floating petals/particles matching reference image
  const particles = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 12) + 6,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="min-h-screen bg-[#070709] text-white py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Glassmorphic Central Card Container */}
      <div className="w-full max-w-6xl bg-white/[0.03] backdrop-blur-2xl border border-white/15 rounded-3xl sm:rounded-[36px] shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-6 sm:p-10 lg:p-14 relative overflow-hidden min-h-[78vh] flex flex-col justify-between">
        
        {/* Floating Animated Red Petals/Particles matching reference image */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: -20, x: `${p.x}%` }}
            animate={{
              opacity: [0, 0.8, 0.4, 0],
              y: ['0%', '110%'],
              rotate: [0, 360],
              x: [`${p.x}%`, `${p.x + (p.id % 2 === 0 ? 8 : -8)}%`],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
            style={{ width: `${p.size}px`, height: `${p.size * 1.5}px` }}
            className="absolute rounded-full bg-gradient-to-tr from-[#FF3B00] to-[#8E1119] blur-[0.5px] pointer-events-none z-10 opacity-70"
          />
        ))}

        {/* Glass Card Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 relative z-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoImg} alt="JK Brothers" className="h-8 sm:h-9 w-auto brightness-0 invert" />
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-white/80 transition-colors">
              JK BROTHERS
            </span>
          </Link>

          <div className="flex items-center gap-4 text-sm text-white/80">
            <Link to="/" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <FiHome className="text-base" />
              <span>Home</span>
            </Link>
            <Link to="/catalogue" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <FiGrid className="text-base" />
              <span>Catalogue</span>
            </Link>
            <Link 
              to="/cart" 
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-md"
              title="Cart"
            >
              <FiShoppingBag className="text-base" />
            </Link>
          </div>
        </div>

        {/* Center Main 404 Visual Content */}
        <div className="my-10 sm:my-16 flex flex-col items-center justify-center text-center relative z-20">
          
          {/* Framed "BACK HOME" Button (matching reference layout) */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 border border-white/50 hover:border-white bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase px-8 py-3.5 rounded-lg backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 group"
            >
              <span>BACK HOME</span>
              <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* 404 Typography with Vertical "PAGE NOT FOUND" Badge */}
          <div className="relative flex items-center justify-center my-2">
            {/* Giant 404 Text */}
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-black text-[110px] sm:text-[180px] lg:text-[230px] leading-none tracking-tighter text-white drop-shadow-[0_15px_40px_rgba(255,255,255,0.15)] select-none"
            >
              404
            </motion.h1>

            {/* Rotated Vertical Badge: "PAGE NOT FOUND" matching image */}
            <div className="hidden sm:flex items-center absolute right-[-40px] lg:right-[-60px] top-1/2 -translate-y-1/2">
              <span className="[writing-mode:vertical-rl] rotate-180 text-xs lg:text-sm tracking-[0.35em] text-white/70 font-extrabold uppercase border-l-2 border-white/30 pl-3 py-2">
                PAGE NOT FOUND
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm max-w-md font-medium leading-relaxed mt-2">
            The page you are looking for might have been moved, removed, or is temporarily unavailable. Let us guide you back.
          </p>
        </div>

        {/* Glass Quick Links Navigation Cards (Bottom Section) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/10 relative z-20">
          <Link 
            to="/handloom"
            className="group bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 rounded-2xl p-4 flex items-center justify-between transition-all duration-300 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-base group-hover:scale-110 transition-transform">
                <FiCompass />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Handloom</p>
                <p className="text-[10px] text-gray-400">Blankets, Bedsheets, Towels</p>
              </div>
            </div>
            <FiArrowRight className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </Link>

          <Link 
            to="/garments"
            className="group bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 rounded-2xl p-4 flex items-center justify-between transition-all duration-300 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-base group-hover:scale-110 transition-transform">
                <FiGrid />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Garments</p>
                <p className="text-[10px] text-gray-400">Jeans, Shirts, Kurtis</p>
              </div>
            </div>
            <FiArrowRight className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </Link>

          <Link 
            to="/contact-us"
            className="group bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 rounded-2xl p-4 flex items-center justify-between transition-all duration-300 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-base group-hover:scale-110 transition-transform">
                <FiSearch />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Contact Us</p>
                <p className="text-[10px] text-gray-400">Need assistance? Reach out</p>
              </div>
            </div>
            <FiArrowRight className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

      </div>
    </div>
  );
}
