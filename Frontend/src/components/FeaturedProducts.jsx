import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiArrowRight, FiMessageSquare } from 'react-icons/fi';
import handloomBlanketsImg from '../assets/handloom_blankets.webp';
import garmentsShirtsImg from '../assets/garments_shirts.webp';

export default function FeaturedProducts() {
  const [filter, setFilter] = useState('ALL');

  const products = [
    {
      id: 1,
      name: 'Premium Embossed Blanket',
      category: 'HANDLOOM',
      sub: 'Blankets',
      img: handloomBlanketsImg,
      rating: 5,
      price: 'Wholesale Only',
    },
    {
      id: 2,
      name: 'Turkish Cotton Towel Set',
      category: 'HANDLOOM',
      sub: 'Towels',
      img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80',
      rating: 5,
      price: 'Wholesale Only',
    },
    {
      id: 3,
      name: 'Royal Heritage Bedsheet',
      category: 'HANDLOOM',
      sub: 'Bedsheets',
      img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80',
      rating: 4,
      price: 'Wholesale Only',
    },
    {
      id: 4,
      name: 'Kashmiri Handloom Carpet',
      category: 'HANDLOOM',
      sub: 'Carpets',
      img: 'https://images.unsplash.com/photo-1576016770956-debb63d900ad?auto=format&fit=crop&w=400&q=80',
      rating: 5,
      price: 'Wholesale Only',
    },
    {
      id: 5,
      name: 'Linen Casual Men Shirt',
      category: 'GARMENTS',
      sub: 'Shirts',
      img: garmentsShirtsImg,
      rating: 5,
      price: 'Wholesale Only',
    },
    {
      id: 6,
      name: 'Traditional Jaipuri Kurti',
      category: 'GARMENTS',
      sub: 'Kurtis',
      img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
      rating: 4,
      price: 'Wholesale Only',
    },
    {
      id: 7,
      name: 'Designer Silk Evening Gown',
      category: 'GARMENTS',
      sub: 'Gowns',
      img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&q=80',
      rating: 5,
      price: 'Wholesale Only',
    },
    {
      id: 8,
      name: 'Premium Slim Fit Denim Jeans',
      category: 'GARMENTS',
      sub: 'Jeans',
      img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80',
      rating: 5,
      price: 'Wholesale Only',
    },
  ];

  const filteredProducts = filter === 'ALL' 
    ? products 
    : products.filter(p => p.category === filter);

  const handleEnquireClick = () => {
    const element = document.getElementById('contact-footer');
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="featured-products" className="py-20 bg-[#FAF9F6] scroll-mt-navbar">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-primary tracking-wide uppercase">
            Featured Products
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {['ALL', 'HANDLOOM', 'GARMENTS'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer border ${
                filter === tab 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-gray-650 hover:text-accent border-gray-200 shadow-2xs'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid of Products */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group bg-white border border-gray-100 rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative h-72 w-full overflow-hidden bg-gray-50">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-accent text-white text-[9px] font-bold tracking-widest uppercase py-1 px-2.5 rounded-sm">
                    {product.sub}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-2 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={`text-xs ${i < product.rating ? 'fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>

                    {/* Name */}
                    <h3 className="font-serif text-base font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-2 leading-tight">
                      {product.name}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                    {/* Price */}
                    <span className="text-xs font-bold text-gray-500 tracking-wider">
                      {product.price}
                    </span>

                    {/* Enquire Button */}
                    <button 
                      onClick={handleEnquireClick}
                      className="inline-flex items-center gap-1.5 text-accent group-hover:text-accent-dark text-[11px] font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      Enquire <FiMessageSquare className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button 
            onClick={handleEnquireClick}
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-950 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
          >
            VIEW ALL PRODUCTS 
            <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
