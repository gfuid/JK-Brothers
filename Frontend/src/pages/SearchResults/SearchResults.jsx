import { useContext, useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiStar, FiShoppingCart, FiSearch, FiSliders } from 'react-icons/fi';
import { ShopContext } from '../../context/ShopContext';

export default function SearchResults() {
  const { products, toggleWishlist, isWishlisted, addToCart, toggleCompare, isCompared } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const query = searchParams.get('q') || '';
  const [searchVal, setSearchVal] = useState(query);

  useEffect(() => {
    setSearchVal(query);
  }, [query]);

  // Filter products
  const matchingProducts = products.filter(product => {
    if (!query) return false;
    const q = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(q) ||
      product.subCategory.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q)
    );
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams(prev => {
      if (!searchVal.trim()) {
        prev.delete('q');
      } else {
        prev.set('q', searchVal);
      }
      return prev;
    });
  };

  return (
    <div className="py-12 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-black text-primary tracking-wide uppercase">
            Search Results
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
        </div>

        {/* Centralized Search Bar Input */}
        <div className="max-w-xl mx-auto mb-12">
          <form onSubmit={handleSearchSubmit} className="relative shadow-xs border border-gray-150 rounded-sm overflow-hidden bg-white">
            <input 
              type="text" 
              placeholder="Search blankets, towels, shirts, jeans, bedsheets..." 
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="w-full pl-5 pr-12 py-3.5 focus:outline-hidden text-sm text-gray-800"
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-accent cursor-pointer">
              <FiSearch className="text-xl" />
            </button>
          </form>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6 text-xs text-gray-500 font-bold uppercase tracking-wider">
          {query ? (
            <p>Found <span className="text-primary">{matchingProducts.length}</span> results matching "{query}"</p>
          ) : (
            <p>Enter a search query to browse products</p>
          )}
        </div>

        {matchingProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-sm border border-gray-150 p-8 shadow-2xs">
            <FiSearch className="text-4xl text-gray-300 mx-auto mb-3" />
            <p className="text-gray-400 text-sm font-semibold mb-2">No matching products found.</p>
            <p className="text-gray-400 text-[11px] font-medium leading-relaxed max-w-xs mx-auto mb-6">
              Try checking your spelling or search for wider tags like "Handloom", "Garments", "Embossed", "Blanket", or "Shirt".
            </p>
            <Link
              to="/handloom"
              className="inline-block bg-primary hover:bg-blue-950 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs"
            >
              Browse Handloom
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {matchingProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-gray-100 rounded-sm overflow-hidden shadow-2xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-50">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                    </Link>
                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full shadow-xs border transition-colors cursor-pointer ${
                        isWishlisted(product.id)
                          ? 'bg-accent border-accent text-white'
                          : 'bg-white/85 border-gray-150 text-gray-500 hover:text-accent hover:bg-white'
                      }`}
                    >
                      <FiHeart className={isWishlisted(product.id) ? 'fill-current text-xs' : 'text-xs'} />
                    </button>
                    <span className="absolute bottom-3 left-3 bg-primary text-white text-[8px] font-bold uppercase tracking-widest py-1 px-2.5 rounded-sm">
                      {product.subCategory}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-1 mb-1.5 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className={`text-[11px] ${i < product.rating ? 'fill-current' : 'text-gray-250'}`} />
                        ))}
                      </div>
                      <Link to={`/product/${product.id}`}>
                        <h4 className="font-serif text-sm font-bold text-primary hover:text-accent transition-colors leading-snug line-clamp-2 mb-2">
                          {product.name}
                        </h4>
                      </Link>
                      <p className="text-[10px] text-gray-400 font-extrabold tracking-wider uppercase mb-3">
                        ₹{product.price} / pc | MOQ: {product.moq} pcs
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          to={`/product/${product.id}`}
                          className="text-center py-2.5 border border-primary text-primary hover:bg-primary hover:text-white text-[9px] font-bold tracking-wider uppercase rounded-xs transition-colors"
                        >
                          Details
                        </Link>
                        <button
                          onClick={() => {
                            addToCart(product, product.moq);
                            alert(`Added MOQ (${product.moq} pcs) of ${product.name} to Cart.`);
                          }}
                          className="flex items-center justify-center gap-1 py-2.5 bg-accent hover:bg-accent-dark text-white text-[9px] font-bold tracking-wider uppercase rounded-xs transition-colors cursor-pointer w-full"
                        >
                          <FiShoppingCart /> Add MOQ
                        </button>
                      </div>

                      {/* Compare toggle */}
                      <button
                        onClick={() => {
                          toggleCompare(product.id);
                        }}
                        className={`w-full py-1.5 border rounded-xs text-[9px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                          isCompared(product.id)
                            ? 'bg-primary border-primary text-white'
                            : 'border-gray-200 text-gray-500 hover:border-primary hover:text-primary'
                        }`}
                      >
                        <FiSliders /> {isCompared(product.id) ? 'Compared (Selected)' : 'Add to Compare'}
                      </button>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>
    </div>
  );
}
