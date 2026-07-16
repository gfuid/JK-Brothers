import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2, FiShoppingCart, FiMinus, FiPlus, FiArrowRight, FiShield } from 'react-icons/fi';
import { ShopContext } from '../../context/ShopContext';

export default function Cart() {
  const { cart, updateCartQty, removeFromCart, getCartTotal, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleQtyChange = (productId, color, moq, currentQty, val) => {
    const newQty = currentQty + val;
    if (newQty < moq) {
      alert(`Cannot set quantity lower than the product's Minimum Order Quantity (MOQ) of ${moq} pcs.`);
      return;
    }
    updateCartQty(productId, color, newQty);
  };

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center min-h-screen flex flex-col justify-center items-center px-4">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl mb-4">
          <FiShoppingCart />
        </div>
        <h2 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2 uppercase">Your Cart is Empty</h2>
        <p className="text-gray-400 text-xs md:text-sm font-semibold max-w-xs mb-8">
          You haven't added any products to your wholesale cart yet. Explore our handloom or garments listings to start.
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
          Wholesale Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {cart.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-150 rounded-sm p-4 md:p-6 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6"
              >
                {/* Product Cover */}
                <div className="w-24 h-24 shrink-0 bg-gray-50 rounded-xs overflow-hidden border border-gray-100 relative">
                  <img 
                    src={item.product.img} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[8px] font-extrabold uppercase tracking-widest text-accent bg-accent/5 px-2 py-0.5 rounded-sm">
                    {item.product.subCategory}
                  </span>
                  <Link to={`/product/${item.product.id}`}>
                    <h3 className="font-serif text-base font-bold text-primary hover:text-accent transition-colors leading-snug mt-1 mb-1">
                      {item.product.name}
                    </h3>
                  </Link>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                    Color: <span className="text-gray-700">{item.color}</span>
                  </p>
                  <span className="text-xs text-gray-400 font-bold">
                    Unit Price: ₹{item.product.price}
                  </span>
                </div>

                {/* Quantity adjustments */}
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <span className="text-[9px] font-extrabold text-gray-400 tracking-widest uppercase">
                    Quantity (MOQ: {item.product.moq})
                  </span>
                  <div className="flex items-center border border-gray-200 rounded-sm bg-white">
                    <button
                      onClick={() => handleQtyChange(item.product.id, item.color, item.product.moq, item.quantity, -10)}
                      className="px-2.5 py-1.5 text-gray-400 hover:text-primary font-bold cursor-pointer"
                      title="Decrease by 10"
                    >
                      <FiMinus className="text-xs" />
                    </button>
                    <span className="px-4 text-xs font-extrabold text-primary min-w-[40px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQtyChange(item.product.id, item.color, item.product.moq, item.quantity, 10)}
                      className="px-2.5 py-1.5 text-gray-400 hover:text-primary font-bold cursor-pointer"
                      title="Increase by 10"
                    >
                      <FiPlus className="text-xs" />
                    </button>
                  </div>
                </div>

                {/* Subtotal & Delete */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto gap-4 pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-50 shrink-0">
                  <div className="text-right">
                    <span className="text-[9px] font-extrabold text-gray-400 tracking-widest uppercase block sm:mb-1">
                      Subtotal
                    </span>
                    <span className="font-serif text-base font-extrabold text-primary block">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id, item.color)}
                    className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                    title="Remove Item"
                  >
                    <FiTrash2 className="text-sm" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Right Column: Checkout Summary Box */}
          <div className="lg:col-span-4 bg-white border border-gray-150 p-6 rounded-sm shadow-2xs flex flex-col gap-6">
            <h3 className="font-serif text-lg font-bold text-primary border-b border-gray-100 pb-3 uppercase tracking-wide">
              Order Summary
            </h3>

            <div className="flex flex-col gap-3 text-xs font-semibold text-gray-500 leading-normal border-b border-gray-100 pb-4">
              <div className="flex justify-between">
                <span>Total Items</span>
                <span className="text-primary font-bold">{getCartCount()} pcs</span>
              </div>
              <div className="flex justify-between">
                <span>Cart Subtotal</span>
                <span className="text-primary font-bold">₹{getCartTotal()}</span>
              </div>
              <div className="flex justify-between items-center text-emerald-600">
                <span>B2B Logistics</span>
                <span className="font-extrabold uppercase tracking-widest text-[10px] bg-emerald-50 border border-emerald-250 py-0.5 px-2 rounded-sm">
                  FREE F.O.B
                </span>
              </div>
            </div>

            <div className="flex justify-between items-baseline py-1">
              <span className="font-serif text-base font-bold text-primary uppercase tracking-wide">Estimated Total</span>
              <span className="font-serif text-2xl font-black text-primary">₹{getCartTotal()}</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white py-3.5 text-xs font-bold tracking-widest uppercase rounded-xs transition-colors cursor-pointer shadow-xs hover:shadow-md"
            >
              PROCEED TO CHECKOUT <FiArrowRight />
            </button>

            {/* B2B Assurance badge */}
            <div className="p-4 bg-[#FAF9F6] border border-gray-150 rounded-xs flex items-start gap-2.5 text-[10px]">
              <FiShield className="text-accent text-lg shrink-0 mt-0.5" />
              <div className="text-gray-450 leading-relaxed font-medium">
                <span className="font-bold text-primary block uppercase tracking-wider mb-0.5">B2B Trade Assurance</span>
                All payments are processed securely. Bank LC support available upon contract signing.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
