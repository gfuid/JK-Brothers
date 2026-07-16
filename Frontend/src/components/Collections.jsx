import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import handloomBlanketsImg from '../assets/handloom_blankets.webp';
import garmentsShirtsImg from '../assets/garments_shirts.webp';

export default function Collections() {
  const navigate = useNavigate();

  const handloomItems = [
    {
      name: 'Blankets',
      img: handloomBlanketsImg,
      count: '45+ Items',
    },
    {
      name: 'Towels',
      img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80',
      count: '30+ Items',
    },
    {
      name: 'Bedsheets',
      img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80',
      count: '60+ Items',
    },
    {
      name: 'Carpets',
      img: 'https://images.unsplash.com/photo-1576016770956-debb63d900ad?auto=format&fit=crop&w=400&q=80',
      count: '25+ Items',
    },
    {
      name: 'Curtains',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
      count: '40+ Items',
    },
    {
      name: 'Pillow Covers',
      img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80',
      count: '50+ Items',
    },
  ];

  const garmentItems = [
    {
      name: 'Jeans',
      img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'T-Shirts',
      img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Shirts',
      img: garmentsShirtsImg,
    },
    {
      name: 'Formal Pants',
      img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Ladies Suits',
      img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Kurtis',
      img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Gowns',
      img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Fancy Dresses',
      img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80',
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
            Explore our heritage handloom fabrics, woven by master artisans with precision and premium threads.
          </p>
        </div>

        {/* Handloom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {handloomItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => navigate(`/handloom?sub=${item.name}`)}
              className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Title & Info */}
              <div className="p-5 text-center flex flex-col items-center justify-center border-t border-gray-50">
                <h3 className="font-serif text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300 uppercase tracking-wider">
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
            Discover contemporary fits, everyday styles, and formal couture tailored for absolute comfort and luxury.
          </p>
        </div>

        {/* Garments Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {garmentItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => navigate(`/garments?sub=${item.name}`)}
              className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-50">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/45 transition-colors duration-300 flex flex-col justify-end p-4">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-base md:text-lg font-bold text-white tracking-wide uppercase mb-1 drop-shadow-xs">
                      {item.name}
                    </h3>
                    <p className="text-[9px] text-accent font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
