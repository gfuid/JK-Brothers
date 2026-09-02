import { motion } from 'framer-motion';
const logoImg = '/logo.webp';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 bg-[#fcfbf9] z-9999 flex flex-col items-center justify-center gap-6"
    >
      <div className="relative flex items-center justify-center">
        {/* Outer Circular Loading Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          className="w-28 h-28 border-2 border-accent/10 border-t-accent rounded-full"
        ></motion.div>

        {/* Center Logo with Zoom Pulse */}
        <motion.div
          initial={{ scale: 0.85 }}
          animate={{ scale: [0.85, 1, 0.85] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center p-2.5 shadow-sm border border-gray-50"
        >
          <img
            src={logoImg}
            alt="ZK Brother Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Brand Statement / Loading Text */}
      <div className="text-center flex flex-col items-center gap-1.5">
        <span className="text-accent text-[9px] font-extrabold tracking-[0.3em] uppercase block">
          ZK Brother
        </span>
        <span className="text-primary text-[10px] font-bold tracking-widest uppercase block animate-pulse">
          Loading catalog...
        </span>
      </div>
    </motion.div>
  );
}
