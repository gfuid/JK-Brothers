import { useContext, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiStar, FiArrowLeft, FiShield, FiTruck, FiRefreshCw } from 'react-icons/fi';
import { ShopContext } from '../../context/ShopContext';
import { handleImageError } from '../../data/imageUrls';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, isWishlisted } = useContext(ShopContext);

  const product = products.find(p => p.id === Number(id));

  // State
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');

  // Handle product changes or loading
  useEffect(() => {
    if (product) {
      setQuantity(product.moq || 50); // Default quantity is set to the product's MOQ
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }
    }
  }, [product, id]);

  if (!product) {
    return (
      <div className="py-20 text-center min-h-screen flex flex-col justify-center items-center">
        <p className="text-gray-400 text-sm font-semibold mb-4">Product not found.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-primary text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleQtyChange = (val) => {
    const newQty = quantity + val;
    // Enforce MOQ
    if (newQty < product.moq) {
      alert(`Minimum Order Quantity (MOQ) for this product is ${product.moq} pcs.`);
      return;
    }
    setQuantity(newQty);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    alert(`Successfully added ${quantity} pcs of ${product.name} (${selectedColor}) to your cart.`);
  };

  // Get related products
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="py-12 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors cursor-pointer mb-8"
        >
          <FiArrowLeft /> Back
        </button>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-6 md:p-8 rounded-sm border border-gray-150 shadow-2xs mb-16">
          
          {/* Left Column: Product Image */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-4/3 rounded-xs overflow-hidden border border-gray-100 bg-gray-50">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              onError={handleImageError}
            />
            {/* Wishlist Icon */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`absolute top-4 right-4 p-3 rounded-full shadow-md border transition-colors cursor-pointer ${
                isWishlisted(product.id)
                  ? 'bg-accent border-accent text-white'
                  : 'bg-white/90 border-gray-150 text-gray-500 hover:text-accent hover:bg-white'
              }`}
            >
              <FiHeart className={isWishlisted(product.id) ? 'fill-current text-sm' : 'text-sm'} />
            </button>
          </div>

          {/* Right Column: Descriptions & Cart */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-extrabold tracking-widest uppercase text-accent bg-accent/10 px-2.5 py-1 rounded-sm self-start mb-3 inline-block">
                {product.subCategory}
              </span>
              <h1 className="font-serif text-2xl md:text-3.5xl font-bold text-primary leading-tight mb-2">
                {product.name}
              </h1>

              {/* Star Ratings */}
              <div className="flex gap-1.5 items-center mb-5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className={`text-sm ${i < product.rating ? 'fill-current' : 'text-gray-200'}`} />
                  ))}
                </div>
                <span className="text-[10px] text-gray-400 font-extrabold tracking-wide uppercase">
                  (Export Grade)
                </span>
              </div>

              {/* Price & MOQ display */}
              <div className="flex items-baseline gap-4 mb-6 pb-5 border-b border-gray-100">
                <span className="font-serif text-2xl md:text-3xl font-black text-primary">₹{product.price}</span>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">/ Piece</span>
                <span className="text-accent bg-accent/5 px-2.5 py-1 border border-accent/15 text-[10px] font-extrabold rounded-sm uppercase tracking-widest ml-auto">
                  MOQ: {product.moq} Pcs
                </span>
              </div>

              <p className="text-xs md:text-sm text-gray-550 leading-relaxed font-medium mb-6">
                {product.description}
              </p>

              {/* Colors selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-gray-450 tracking-widest uppercase block mb-2.5">
                    Available Colors
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1.5 rounded-sm border font-semibold transition-all cursor-pointer ${
                          selectedColor === color
                            ? 'bg-primary text-white border-primary shadow-xs'
                            : 'bg-white text-gray-650 border-gray-200 hover:border-accent hover:text-accent'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity selectors */}
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <span className="text-[10px] font-bold text-gray-450 tracking-widest uppercase block mb-2.5">
                    Order Quantity
                  </span>
                  <div className="flex items-center border border-gray-200 rounded-sm">
                    <button
                      onClick={() => handleQtyChange(-10)}
                      className="px-3.5 py-2.5 hover:bg-gray-50 text-gray-500 font-black cursor-pointer text-xs"
                      title="Decrease by 10"
                    >
                      -10
                    </button>
                    <span className="px-5 text-xs font-extrabold text-primary min-w-[50px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQtyChange(10)}
                      className="px-3.5 py-2.5 hover:bg-gray-50 text-gray-500 font-black cursor-pointer text-xs"
                      title="Increase by 10"
                    >
                      +10
                    </button>
                  </div>
                </div>
                
                {/* MOQ info note */}
                <div className="text-[10px] text-gray-400 font-medium leading-normal pt-6">
                  * Multiples of 10 supported.<br />
                  Cannot be lower than MOQ of {product.moq} pcs.
                </div>
              </div>
            </div>

            {/* Cart action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-5 border-t border-gray-100">
              <button
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white py-4 text-xs font-bold tracking-widest uppercase rounded-xs transition-colors cursor-pointer shadow-xs hover:shadow-md"
              >
                <FiShoppingCart /> ADD TO WHOLESALE CART
              </button>
              <Link
                to="/bulk-orders"
                className="text-center py-4 px-6 border border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold tracking-widest uppercase rounded-xs transition-all duration-300"
              >
                REQUEST CUSTOM QUOTE
              </Link>
            </div>

          </div>

        </div>

        {/* Spec Sheet Table */}
        <div className="bg-white rounded-sm border border-gray-150 p-6 md:p-8 shadow-2xs mb-16">
          <h2 className="font-serif text-lg font-bold text-primary mb-6 border-b border-gray-100 pb-3 uppercase tracking-wide">
            Product Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-xs">
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} className="flex justify-between py-2.5 border-b border-gray-50">
                <span className="font-bold text-gray-400 uppercase tracking-wider">{key}</span>
                <span className="font-semibold text-gray-700 text-right">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs mb-16">
          {[
            { icon: <FiShield className="text-xl text-accent" />, title: 'Quality Assured', desc: '100% inspection before B2B dispatch' },
            { icon: <FiTruck className="text-xl text-accent" />, title: 'Global Delivery', desc: 'Secure air/sea B2B shipping' },
            { icon: <FiRefreshCw className="text-xl text-accent" />, title: 'Easy Returns', desc: 'Return defective batches within 15 days' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 border border-gray-150 rounded-sm flex items-start gap-3 shadow-2xs">
              <div className="p-2 bg-accent/10 rounded-full shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-serif font-bold text-primary uppercase tracking-wide mb-0.5">{item.title}</h4>
                <p className="text-[11px] text-gray-400 font-medium leading-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-xl font-bold text-primary mb-8 pb-3 border-b border-gray-100 uppercase tracking-wide">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <div key={p.id} className="group bg-white border border-gray-100 rounded-sm overflow-hidden shadow-2xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
                  <div className="relative h-56 bg-gray-50 overflow-hidden">
                    <Link to={`/product/${p.id}`}>
                      <img 
                        src={p.img} 
                        alt={p.name} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                        loading="lazy"
                        onError={handleImageError}
                      />
                    </Link>
                    <span className="absolute bottom-3 left-3 bg-primary text-white text-[8px] font-bold uppercase tracking-widest py-0.5 px-2 rounded-sm">
                      {p.subCategory}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <Link to={`/product/${p.id}`}>
                        <h4 className="font-serif text-sm font-bold text-primary hover:text-accent transition-colors duration-300 leading-snug line-clamp-1 mb-1">
                          {p.name}
                        </h4>
                      </Link>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">₹{p.price} / pc | MOQ: {p.moq}</span>
                    </div>
                    <Link to={`/product/${p.id}`} className="mt-3 text-center py-2 bg-[#FAF9F6] border border-gray-150 text-[9px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white rounded-xs transition-colors block">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
