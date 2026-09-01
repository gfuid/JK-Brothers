import { useContext, useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiStar, FiShoppingCart, FiSearch } from 'react-icons/fi';
import { ShopContext } from '../../context/ShopContext';

export default function Garments() {
  const { products, toggleWishlist, isWishlisted, addToCart } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get active filters from URL
  const subCategoryFilter = searchParams.get('sub') || 'ALL';
  const searchTerm = searchParams.get('search') || '';

  const [searchVal, setSearchVal] = useState(searchTerm);

  // Sync state if search term changes in URL
  useEffect(() => {
    setSearchVal(searchTerm);
  }, [searchTerm]);

  const garmentsProducts = products.filter(p => p.category === 'GARMENTS');

  // Filter products by subcategory and search term
  const filteredProducts = garmentsProducts.filter(product => {
    const matchesSub = subCategoryFilter === 'ALL' || product.subCategory === subCategoryFilter;
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.subCategory.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSub && matchesSearch;
  });

  const categories = ['ALL', 'Ladies Suits', 'Jeans', 'Shirts'];

  const handleTabClick = (cat) => {
    setSearchParams(prev => {
      if (cat === 'ALL') {
        prev.delete('sub');
      } else {
        prev.set('sub', cat);
      }
      return prev;
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams(prev => {
      if (!searchVal.trim()) {
        prev.delete('search');
      } else {
        prev.set('search', searchVal);
      }
      return prev;
    });
  };

  return (
    <div className="py-12 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Banner */}
        <div className="bg-primary text-white p-8 md:p-12 rounded-sm mb-12 relative overflow-hidden shadow-md flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(197,168,92,0.15),transparent)] pointer-events-none"></div>
          <div className="relative z-10 text-center md:text-left max-w-xl">
            <h1 className="text-3xl md:text-5xl font-serif font-black tracking-wide mb-3 uppercase">Garments Collection</h1>
            <p className="text-xs md:text-sm text-gray-300 font-medium leading-relaxed">
              Discover premium fashion apparel, corporate formals, and traditional kurtis tailored to international stitching standards. Pre-washed fabrics, stretch fibers, and flawless sizing support.
            </p>
          </div>
          <div className="relative z-10 shrink-0 border border-accent/30 py-4 px-6 rounded-xs bg-white/5 backdrop-blur-xs text-center">
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent block mb-1">Wholesale Pricing</span>
            <span className="text-2xl font-serif font-bold text-white block">Direct Factory Rate</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sidebar Filters */}
          <div className="lg:col-span-3 bg-white p-6 rounded-sm border border-gray-150 shadow-2xs">
            <h3 className="font-serif text-lg font-bold text-primary mb-5 pb-2 border-b border-gray-100 uppercase tracking-wide">
              Filter Catalog
            </h3>

            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="mb-6 relative">
              <input 
                type="text" 
                placeholder="Search garments..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full pl-3 pr-10 py-2 border border-gray-200 text-xs rounded-sm focus:outline-hidden focus:border-accent text-gray-800"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                <FiSearch />
              </button>
            </form>

            {/* Subcategories list */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Categories</span>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTabClick(cat)}
                  className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-xs transition-colors cursor-pointer uppercase tracking-wider ${
                    subCategoryFilter === cat 
                      ? 'bg-accent/15 text-accent font-bold' 
                      : 'hover:bg-gray-50 text-gray-650 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Grid list */}
          <div className="lg:col-span-9">
            
            {/* Toolbar status */}
            <div className="flex justify-between items-center mb-6 text-xs text-gray-500 font-medium">
              <p>Showing <span className="text-primary font-bold">{filteredProducts.length}</span> Garments Products</p>
              {searchTerm && (
                <button 
                  onClick={() => setSearchParams({})} 
                  className="text-accent font-bold hover:underline"
                >
                  Clear search filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-sm border border-gray-100 p-8">
                <p className="text-gray-400 text-sm font-semibold mb-4">No garments match your selection.</p>
                <button 
                  onClick={() => setSearchParams({})}
                  className="bg-primary text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer hover:bg-blue-950"
                >
                  Show All Products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white border border-gray-100 rounded-sm overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Product Image */}
                      <div className="relative h-64 overflow-hidden bg-gray-50">
                        <Link to={`/product/${product.id}`}>
                          <img
                            src={product.img}
                            alt={product.name}
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
                        <span className="absolute bottom-3 left-3 bg-primary text-white text-[9px] font-bold uppercase tracking-widest py-1 px-2.5 rounded-sm">
                          {product.subCategory}
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
                          <p className="text-gray-500 text-[11px] font-medium leading-relaxed line-clamp-2 mb-4">
                            {product.description}
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-xs font-bold mb-3">
                            <span className="text-primary font-serif text-sm">₹{product.price} / pc</span>
                            <span className="text-gray-400">MOQ: {product.moq} pcs</span>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-2 mt-2">
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
                </AnimatePresence>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
