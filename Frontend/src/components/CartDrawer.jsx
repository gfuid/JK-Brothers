import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { ShopContext } from '../context/ShopContext';

export default function CartDrawer() {
  const { 
    cart, 
    cartDrawerOpen, 
    setCartDrawerOpen, 
    updateCartQty, 
    removeFromCart, 
    getCartTotal, 
    getCartCount 
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const handleQtyChange = (productId, color, moq, currentQty, val) => {
    const newQty = currentQty + val;
    if (newQty < moq) {
      alert(`Minimum Order Quantity (MOQ) is ${moq} pcs.`);
      return;
    }
    updateCartQty(productId, color, newQty);
  };

  const handleRedirect = (path) => {
    setCartDrawerOpen(false);
    navigate(path);
  };

  return (
    <AnimatePresence>
      {cartDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartDrawerOpen(false)}
            className="fixed inset-0 bg-black z-100 cursor-pointer"
          ></motion.div>

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm sm:max-w-md bg-white shadow-2xl z-101 flex flex-col justify-between"
          >
            
            {/* Header */}
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-[#FAF9F6]">
              <div className="flex items-center gap-2">
                <FiShoppingBag className="text-xl text-accent" />
                <h2 className="font-serif text-base font-bold text-primary uppercase tracking-wide">
                  Wholesale Cart ({getCartCount()} pcs)
                </h2>
              </div>
              <button
                onClick={() => setCartDrawerOpen(false)}
                className="p-1.5 hover:bg-gray-150 rounded-full transition-colors cursor-pointer text-gray-500 hover:text-primary"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Scrollable Items List */}
            <div className="flex-1 overflow-y-auto p-5 no-scrollbar flex flex-col gap-4">
              {cart.length === 0 ? (
                <div className="text-center py-20 text-gray-400 flex flex-col items-center justify-center h-full gap-3">
                  <FiShoppingBag className="text-4xl opacity-55" />
                  <p className="text-xs font-semibold">Your B2B Cart is empty.</p>
                  <button
                    onClick={() => handleRedirect('/handloom')}
                    className="mt-2 px-6 py-2 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-xs cursor-pointer"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-4 border-b border-gray-50 last:border-b-0 last:pb-0 items-center">
                    {/* Cover image */}
                    <img 
                      src={item.product.img} 
                      alt={item.product.name} 
                      className="w-16 h-16 object-cover rounded-xs border border-gray-100 bg-gray-50 shrink-0" 
                    />
                    
                    {/* Item details */}
                    <div className="flex-1 min-w-0 text-xs">
                      <h4 className="font-serif font-bold text-primary line-clamp-1 leading-snug">
                        {item.product.name}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                        Color: {item.color}
                      </p>
                      
                      {/* Quantity adjustments */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-gray-200 rounded-sm bg-white scale-90 origin-left">
                          <button
                            onClick={() => handleQtyChange(item.product.id, item.color, item.product.moq, item.quantity, -10)}
                            className="px-2 py-1 text-gray-400 hover:text-primary font-bold cursor-pointer"
                          >
                            <FiMinus className="text-[9px]" />
                          </button>
                          <span className="px-2.5 text-[10px] font-extrabold text-primary min-w-[28px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQtyChange(item.product.id, item.color, item.product.moq, item.quantity, 10)}
                            className="px-2 py-1 text-gray-400 hover:text-primary font-bold cursor-pointer"
                          >
                            <FiPlus className="text-[9px]" />
                          </button>
                        </div>
                        <span className="text-[9px] text-gray-400 font-medium">
                          (MOQ: {item.product.moq})
                        </span>
                      </div>
                    </div>

                    {/* Subtotal & Delete */}
                    <div className="text-right flex flex-col items-end gap-2 shrink-0">
                      <span className="font-sans text-xs font-bold text-primary">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.color)}
                        className="p-1 text-gray-400 hover:text-red-500 rounded-full cursor-pointer transition-colors"
                      >
                        <FiTrash2 className="text-xs" />
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Action CTA */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-gray-100 bg-[#FAF9F6] flex flex-col gap-4 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-serif font-bold text-primary uppercase tracking-wide">Est. Subtotal</span>
                  <span className="font-sans text-xl font-bold text-primary tracking-tight">₹{getCartTotal().toLocaleString('en-IN')}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3.5 mt-2">
                  <button
                    onClick={() => handleRedirect('/cart')}
                    className="w-full text-center border border-primary text-primary hover:bg-primary hover:text-white py-3 font-bold tracking-widest uppercase rounded-xs transition-colors cursor-pointer text-[10px]"
                  >
                    VIEW BASKET
                  </button>
                  <button
                    onClick={() => handleRedirect('/checkout')}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-accent hover:bg-accent-dark text-white py-3 font-bold tracking-widest uppercase rounded-xs transition-colors cursor-pointer text-[10px]"
                  >
                    CHECKOUT <FiArrowRight />
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
