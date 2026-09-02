import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiTrash2, FiShoppingCart, FiStar } from 'react-icons/fi';
import { ShopContext } from '../../context/ShopContext';
import { handleImageError } from '../../data/imageUrls';

export default function Wishlist() {
  const { wishlist, products, toggleWishlist, addToCart } = useContext(ShopContext);

  // Extract products in wishlist
  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    return (
      <div className="py-20 text-center min-h-screen flex flex-col justify-center items-center px-4">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl mb-4">
          <FiHeart className="fill-current" />
        </div>
        <h2 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2 uppercase">Your Wishlist is Empty</h2>
        <p className="text-gray-400 text-xs md:text-sm font-semibold max-w-xs mb-8">
          Save your favorite garments and handloom products to request a custom quote or order later.
        </p>
        <div className="flex gap-4">
          <Link 
            to="/handloom"
            className="bg-primary hover:bg-blue-950 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
          >
            Shop Handloom
          </Link>
          <Link 
            to="/garments"
            className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
          >
            Shop Garments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <h1 className="font-serif text-2xl md:text-3.5xl font-black text-primary uppercase tracking-wide mb-8 border-b border-gray-250/20 pb-4">
          My Favorites / Wishlist
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlistedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-100 rounded-sm overflow-hidden shadow-2xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.img}
                    alt={product.name}
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>
                {/* Remove from Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-red-50 text-red-500 rounded-full border border-gray-150 shadow-xs cursor-pointer transition-colors"
                  title="Remove from Wishlist"
                >
                  <FiTrash2 className="text-sm" />
                </button>
                <span className="absolute bottom-3 left-3 bg-primary text-white text-[8px] font-bold uppercase tracking-widest py-1 px-2 rounded-sm">
                  {product.subCategory}
                </span>
              </div>

              {/* Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-1.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`text-[11px] ${i < product.rating ? 'fill-current' : 'text-gray-250'}`} 
                      />
                    ))}
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h4 className="font-serif text-sm font-bold text-primary hover:text-accent transition-colors leading-snug line-clamp-1 mb-1">
                      {product.name}
                    </h4>
                  </Link>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-3">
                    ₹{product.price} / pc | MOQ: {product.moq}
                  </p>
                </div>

                <div className="mt-2 pt-3 border-t border-gray-50 flex gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 text-center py-2 border border-primary text-primary hover:bg-primary hover:text-white text-[10px] font-bold tracking-wider uppercase rounded-xs transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => {
                      addToCart(product, product.moq);
                      alert(`Added MOQ (${product.moq} pcs) of ${product.name} to Cart.`);
                    }}
                    className="flex items-center justify-center gap-1 py-2 bg-accent hover:bg-accent-dark text-white text-[10px] font-bold tracking-wider uppercase rounded-xs transition-colors cursor-pointer w-1/2"
                  >
                    <FiShoppingCart /> Add MOQ
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
