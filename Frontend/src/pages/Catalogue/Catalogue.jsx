import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiBookOpen } from 'react-icons/fi';
import handloomBlanketsImg from '../../assets/handloom_blankets.webp';
import garmentsShirtsImg from '../../assets/garments_shirts.webp';

export default function Catalogue() {
  const catalogues = [
    {
      title: 'Premium Handloom Blanket Collection 2026',
      type: 'PDF Catalog',
      size: '8.4 MB',
      pages: 36,
      img: handloomBlanketsImg,
      desc: 'Complete listing of double-ply embossed fleece blankets, mink blankets, and traditional heavy wool blankets.'
    },
    {
      title: 'Men & Women Garments Apparel Catalog',
      type: 'PDF Catalog',
      size: '12.1 MB',
      pages: 48,
      img: garmentsShirtsImg,
      desc: 'Showcasing our seasonal shirts, casual denim pants, t-shirts, kurtis, and ethnic bridal gowns specs.'
    },
    {
      title: 'Home Linen & Towels Wholesale Guide',
      type: 'PDF Catalog',
      size: '6.2 MB',
      pages: 24,
      img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80',
      desc: 'Product sheets for Turkish bath towels, premium linen curtains, bedsheets, and decorative pillow shams.'
    },
    {
      title: 'Luxury Knitted Kashmiri Carpets Brochure',
      type: 'PDF Brochure',
      size: '4.8 MB',
      pages: 12,
      img: 'https://images.unsplash.com/photo-1576016770956-debb63d900ad?auto=format&fit=crop&w=400&q=80',
      desc: 'Displaying design grids, knot specs, and thread quality details of our export carpets.'
    }
  ];

  const handleDownload = (title) => {
    alert(`Starting download for: ${title}\n(Mock PDF downloaded successfully)`);
  };

  return (
    <div className="py-16 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-2">
            Brochures & Product Sheets
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-primary tracking-wide uppercase">
            Product Catalogue
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
          <p className="text-gray-500 text-xs md:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Download our print-ready digital product catalogs containing complete color charts, packaging weights, and MOQ pricing breakdowns.
          </p>
        </div>

        {/* Catalogues list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {catalogues.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-gray-150 rounded-sm overflow-hidden p-6 shadow-2xs hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row gap-6"
            >
              {/* Cover Image */}
              <div className="w-full sm:w-40 h-48 shrink-0 bg-gray-50 rounded-xs overflow-hidden border border-gray-100 relative group">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <FiBookOpen className="text-3xl text-white drop-shadow-xs" />
                </div>
              </div>

              {/* Specs */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-extrabold tracking-wider uppercase text-accent bg-accent/10 px-2 py-0.5 rounded-sm">
                    {cat.type}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-primary mt-2 mb-2 leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  
                  <div className="flex gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4">
                    <span>Size: {cat.size}</span>
                    <span>Pages: {cat.pages}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleDownload(cat.title)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-primary hover:bg-blue-950 text-white text-xs font-bold tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
                  >
                    <FiDownload /> Download
                  </button>
                  <button
                    onClick={() => alert(`Opening preview for: ${cat.title}`)}
                    className="px-4 py-2.5 border border-gray-200 text-gray-650 hover:text-accent hover:border-accent text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                    title="Quick Preview"
                  >
                    <FiEye />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
