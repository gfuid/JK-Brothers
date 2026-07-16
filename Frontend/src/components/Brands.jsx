import { motion } from 'framer-motion';

export default function Brands() {
  const brandLogos = [
    {
      name: 'LuLu',
      logo: (
        <span className="font-sans font-black text-xl tracking-tighter text-emerald-700">
          Lu<span className="text-red-500">Lu</span>
        </span>
      )
    },
    {
      name: 'Walmart',
      logo: (
        <div className="flex items-center gap-1">
          <span className="font-sans font-bold text-xl text-blue-600 tracking-tight">Walmart</span>
          <span className="text-amber-500 font-extrabold text-lg animate-spin-slow">*</span>
        </div>
      )
    },
    {
      name: 'Flipkart',
      logo: (
        <span className="font-sans font-black italic text-xl text-[#2874F0] tracking-tight">
          Flipkart
        </span>
      )
    },
    {
      name: 'Amazon',
      logo: (
        <div className="flex flex-col items-center">
          <span className="font-sans font-black text-xl text-black tracking-tighter -mb-1.5">amazon</span>
          <span className="text-amber-500 text-xs font-bold leading-none">&#x279E;</span>
        </div>
      )
    },
    {
      name: 'Trends',
      logo: (
        <span className="font-sans font-bold text-xl text-[#0B2144] tracking-[0.2em] uppercase">
          Trends
        </span>
      )
    },
    {
      name: 'Metro',
      logo: (
        <span className="font-sans font-black text-xl text-[#002F6C] border-b-2 border-amber-500 tracking-wider">
          METRO
        </span>
      )
    }
  ];

  return (
    <section className="py-12 bg-[#FAF9F6] border-t border-gray-250/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-400">
            Our Key Retail Partners & Clients
          </h2>
          <div className="w-10 h-[1.5px] bg-accent/40 mx-auto mt-2"></div>
        </div>

        {/* Brand Logos Carousel / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
          {brandLogos.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
              className="filter grayscale contrast-125 hover:filter-none transition-all duration-300 py-4 px-6 flex items-center justify-center cursor-pointer h-16 w-36 rounded-xs bg-white border border-gray-100 shadow-2xs hover:shadow-xs"
            >
              {brand.logo}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
