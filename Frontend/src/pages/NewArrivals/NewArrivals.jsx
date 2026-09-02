import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiStar, FiShoppingCart } from 'react-icons/fi';
import { ShopContext } from '../../context/ShopContext';
import { handleImageError } from '../../data/imageUrls';

export default function NewArrivals() {
  const { products, toggleWishlist, isWishlisted, addToCart } = useContext(ShopContext);

  const newArrivals = products.filter(p => p.isNewArrival);

  return (
    <div className="py-16 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-2">
            Fresh From Our Loom & Tailor
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-primary tracking-wide uppercase">
            New Arrivals
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
          <p className="text-gray-500 text-xs md:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Stay ahead in the retail market. Browse our latest releases of export-quality blankets, linens, and apparel.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-100 rounded-sm overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative h-72 w-full overflow-hidden bg-gray-50">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.img}
                    alt={product.name}
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full shadow-xs border transition-colors cursor-pointer ${
                    isWishlisted(product.id)
                      ? 'bg-accent border-accent text-white'
                      : 'bg-white/80 border-gray-150 text-gray-500 hover:text-accent hover:bg-white'
                  }`}
                >
                  <FiHeart className={isWishlisted(product.id) ? 'fill-current text-xs' : 'text-xs'} />
                </button>
                <span className="absolute top-3 left-3 bg-accent text-white text-[9px] font-extrabold uppercase tracking-widest py-1 px-2.5 rounded-sm">
                  NEW
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
                        className={`text-xs ${i < product.rating ? 'fill-current' : 'text-gray-200'}`} 
                      />
                    ))}
                  </div>
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="font-serif text-base font-bold text-primary hover:text-accent transition-colors duration-300 mb-2 leading-snug">
                      {product.name}
                    </h3>
                  </Link>
                  <span className="text-[10px] text-gray-400 font-extrabold tracking-wider uppercase block mb-3">
                    Category: {product.category} ({product.subCategory})
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex justify-between items-center text-xs font-bold mb-4">
                    <span className="text-primary font-serif text-sm">₹{product.price} / pc</span>
                    <span className="text-gray-400">MOQ: {product.moq} pcs</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to={`/product/${product.id}`}
                      className="text-center py-2.5 border border-primary text-primary hover:bg-primary hover:text-white text-[10px] font-bold tracking-wider uppercase rounded-xs transition-colors"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => {
                        addToCart(product, product.moq);
                        alert(`Added MOQ (${product.moq} pcs) of ${product.name} to Cart.`);
                      }}
                      className="flex items-center justify-center gap-1.5 py-2.5 bg-accent hover:bg-accent-dark text-white text-[10px] font-bold tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
                    >
                      <FiShoppingCart /> Add MOQ
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
