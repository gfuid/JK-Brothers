import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiArrowRight, FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function FeaturedProducts() {
  const [filter, setFilter] = useState('ALL');

  // Pick the top 8 flagship real products (including client bedsheets, suits, jeans, blankets)
  const featuredList = products.filter(p => [1, 2, 8, 9, 10, 11, 18, 20].includes(p.id));

  const filteredProducts = filter === 'ALL' 
    ? featuredList 
    : featuredList.filter(p => p.category === filter);

  const handleEnquireClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
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
          <p className="text-gray-500 text-xs md:text-sm mt-3 max-w-md mx-auto">
            Direct factory craftsmanship — Caspian fitted bedsheets, designer applique suits, and premium denim.
          </p>
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
                  : 'bg-white text-gray-600 hover:text-accent border-gray-200 shadow-2xs'
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
                <Link to={`/product/${product.id}`} className="relative h-72 w-full overflow-hidden bg-gray-50 block">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-accent text-white text-[9px] font-bold tracking-widest uppercase py-1 px-2.5 rounded-sm">
                    {product.subCategory}
                  </span>
                </Link>

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
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif text-base font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-2 leading-tight">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                    {/* Price */}
                    <span className="text-sm font-bold text-primary tracking-wider">
                      ₹{product.price.toLocaleString()}
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
          <Link 
            to="/catalogue"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-950 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
          >
            VIEW ALL PRODUCTS 
            <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
