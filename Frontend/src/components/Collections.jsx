import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { 
  BEDSHEET_IMAGES, 
  SUIT_IMAGES, 
  APPAREL_IMAGES, 
  JEANS_IMAGES,
  handleImageError 
} from '../data/imageUrls';

const handloomBlanketsImg = APPAREL_IMAGES.blankets;
const garmentsShirtsImg = APPAREL_IMAGES.shirts;
const caspianBedsheet1 = BEDSHEET_IMAGES.caspian1;
const caspianBedsheet3 = BEDSHEET_IMAGES.caspian3;
const printedBedsheet1 = BEDSHEET_IMAGES.printed1;
const mulCottonSuit1 = SUIT_IMAGES.mulCotton1;
const embroideredCottonSuit1 = SUIT_IMAGES.embroidered1;
const classicSuit1 = SUIT_IMAGES.classic1;
const jeans1 = JEANS_IMAGES.jeans1;
const jeans3 = JEANS_IMAGES.jeans3;

export default function Collections() {
  const navigate = useNavigate();

  const handloomItems = [
    {
      name: 'Caspian Fitted Bedsheets',
      sub: 'Bedsheets',
      img: caspianBedsheet1,
      count: '72x78+9" Zig Zag Finish',
    },
    {
      name: 'Embossed Blankets',
      sub: 'Blankets',
      img: handloomBlanketsImg,
      count: 'Heavy Double Bed',
    },
    {
      name: 'Printed Cotton Bedsheets',
      sub: 'Bedsheets',
      img: printedBedsheet1,
      count: '100% Pure Cotton',
    },
    {
      name: 'Botanical Fitted Bedsheets',
      sub: 'Bedsheets',
      img: caspianBedsheet3,
      count: 'Elastic Mattress Grip',
    },
  ];

  const garmentItems = [
    {
      name: 'Mul Cotton Applique Suits',
      sub: 'Ladies Suits',
      img: mulCottonSuit1,
      note: 'Size 38-46 | ₹2499',
    },
    {
      name: 'Silky Cotton Embroidered Suits',
      sub: 'Ladies Suits',
      img: embroideredCottonSuit1,
      note: 'Size 38-46 | ₹1246',
    },
    {
      name: 'Festive Chanderi Suits',
      sub: 'Ladies Suits',
      img: classicSuit1,
      note: 'Designer Boutique Wear',
    },
    {
      name: 'Slim Fit Denim Jeans',
      sub: 'Jeans',
      img: jeans1,
      note: 'Heavyweight Stretch Denim',
    },
    {
      name: 'Casual Linen Shirts',
      sub: 'Shirts',
      img: garmentsShirtsImg,
      note: '100% Breathable Cotton-Linen',
    },
    {
      name: 'Vintage Stonewash Jeans',
      sub: 'Jeans',
      img: jeans3,
      note: 'Premium Rugged Wash',
    },
  ];

  return (
    <div className="py-20 bg-[#fcfbf9] overflow-hidden">
      
      {/* 1. Handloom Collection Section */}
      <section id="handloom-collection" className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-primary tracking-wide uppercase">
            Our Handloom Collection
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
          <p className="text-gray-500 text-xs md:text-sm mt-3 max-w-md mx-auto">
            Explore our heritage handloom fabrics, Caspian fitted double bedsheets, and embossed blankets.
          </p>
        </div>

        {/* Handloom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {handloomItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => navigate(`/handloom?sub=${item.sub}`)}
              className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Title & Info */}
              <div className="p-5 text-center flex flex-col items-center justify-center border-t border-gray-50">
                <h3 className="font-serif text-base font-bold text-primary group-hover:text-accent transition-colors duration-300 uppercase tracking-wider">
                  {item.name}
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent mt-1">
                  {item.count}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/handloom"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-950 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
          >
            VIEW ALL HANDLOOM PRODUCTS 
            <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 2. Garments Collection Section */}
      <section id="garments-collection" className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-primary tracking-wide uppercase">
            Our Garments Collection
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
          <p className="text-gray-500 text-xs md:text-sm mt-3 max-w-md mx-auto">
            Discover designer Mul &amp; Silky cotton suits, export-grade denim jeans, and fine casual shirts.
          </p>
        </div>

        {/* Garments Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {garmentItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => navigate(`/garments?sub=${item.sub}`)}
              className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-50">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={handleImageError}
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-4">
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide uppercase mb-1 drop-shadow-xs">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-accent font-bold tracking-wider uppercase mb-1">
                      {item.note}
                    </p>
                    <p className="text-[9px] text-white/80 font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore Collection &rarr;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/garments"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-950 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
          >
            VIEW ALL GARMENTS PRODUCTS 
            <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
