import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShield, FiFileText } from 'react-icons/fi';
import { ShopContext } from '../../context/ShopContext';
import { sendOrderConfirmationEmail } from '../../services/emailService';
import { recordOrderInGoogleSheet } from '../../services/googleSheetService';

export default function Checkout() {
  const { cart, getCartTotal, getCartCount, placeOrder } = useContext(ShopContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    paymentMode: 'Bank Transfer (TT)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.contactName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.postalCode) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Save cart state and total before clearing cart in placeOrder
    const currentCart = [...cart];
    const totalAmount = getCartTotal();
    const orderId = placeOrder(formData);

    // Dispatch EmailJS Order notification (customer + store admin) & Google Sheet record
    try {
      await Promise.allSettled([
        sendOrderConfirmationEmail({
          orderId,
          customerDetails: formData,
          cartItems: currentCart,
          totalAmount
        }),
        recordOrderInGoogleSheet({
          orderId,
          customerDetails: formData,
          cartItems: currentCart,
          totalAmount
        })
      ]);
    } catch (err) {
      console.warn('Dispatch note:', err);
    }

    setIsSubmitting(false);
    alert(`Order Placed Successfully! Your Order ID is ${orderId}. Confirmation details sent to ${formData.email}.`);
    navigate('/orders');
  };

  if (cart.length === 0) return null;

  return (
    <div className="py-12 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <h1 className="font-serif text-2xl md:text-3.5xl font-black text-primary uppercase tracking-wide mb-8 border-b border-gray-250/20 pb-4">
          Wholesale Checkout
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Checkout Shipping Form */}
          <div className="lg:col-span-8 bg-white border border-gray-150 p-6 md:p-8 rounded-sm shadow-2xs flex flex-col gap-6">
            <h2 className="font-serif text-lg font-bold text-primary mb-2 uppercase tracking-wide">
              Shipping & Business Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
              
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Business / Company Name (Optional)</label>
                <input 
                  type="text" 
                  name="businessName" 
                  placeholder="e.g. Export Import LLC"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Contact Person *</label>
                <input 
                  type="text" 
                  name="contactName" 
                  required
                  placeholder="e.g. John Doe"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Business Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Phone / WhatsApp *</label>
                <input 
                  type="text" 
                  name="phone" 
                  required
                  placeholder="e.g. +91 9896507049"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Payment Method</label>
                <select
                  name="paymentMode"
                  value={formData.paymentMode}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent bg-white text-gray-850 font-medium"
                >
                  <option value="Bank Transfer (TT)">Bank Wire Transfer (T/T)</option>
                  <option value="Letter of Credit (L/C)">Letter of Credit (L/C)</option>
                  <option value="Cash on Delivery (COD)">Cash on Delivery (COD)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Warehouse Shipping Address *</label>
                <input 
                  type="text" 
                  name="address" 
                  required
                  placeholder="Street Address, Company Depot, Suite"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">City *</label>
                <input 
                  type="text" 
                  name="city" 
                  required
                  placeholder="e.g. Panipat"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-gray-700 uppercase tracking-wider">State *</label>
                    <input 
                      type="text" 
                      name="state" 
                      required
                      placeholder="e.g. Haryana"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-gray-700 uppercase tracking-wider">PIN Code *</label>
                    <input 
                      type="text" 
                      name="postalCode" 
                      required
                      placeholder="132103"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Order summary and Place Order */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            <div className="bg-white border border-gray-150 p-6 rounded-sm shadow-2xs">
              <h3 className="font-serif text-base font-bold text-primary mb-4 pb-2 border-b border-gray-100 uppercase tracking-wide flex items-center gap-2">
                <FiFileText /> Order Review
              </h3>

              {/* Mini items list */}
              <div className="flex flex-col gap-3.5 mb-6 max-h-[220px] overflow-y-auto pr-1">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs gap-3">
                    <div className="flex items-center gap-2.5">
                      <img src={item.product.img} alt={item.product.name} className="w-10 h-10 object-cover rounded-xs border border-gray-100" />
                      <div>
                        <h4 className="font-bold text-primary line-clamp-1">{item.product.name}</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Color: {item.color} | Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-sans font-bold text-primary shrink-0">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2.5 text-xs font-semibold text-gray-500 border-t border-gray-100 pt-4 mb-4">
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span className="text-primary font-bold font-sans">{getCartCount()} pcs</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-primary font-bold font-sans">₹{getCartTotal().toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-600">
                  <span>F.O.B Shipping</span>
                  <span className="font-extrabold uppercase">FREE</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline border-t border-gray-100 pt-3 mb-6">
                <span className="font-serif text-sm font-bold text-primary uppercase tracking-wide">Final Amount</span>
                <span className="font-sans text-xl font-bold text-primary tracking-tight">₹{getCartTotal().toLocaleString('en-IN')}</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white py-3.5 text-xs font-bold tracking-widest uppercase rounded-xs transition-colors cursor-pointer shadow-xs disabled:bg-accent/60"
              >
                {isSubmitting ? 'PLACING B2B ORDER...' : 'PLACE B2B ORDER'}
              </button>
            </div>

            <div className="p-4 bg-white border border-gray-150 rounded-sm flex items-start gap-2.5 text-[10px]">
              <FiShield className="text-accent text-lg shrink-0 mt-0.5" />
              <div className="text-gray-450 leading-relaxed font-medium">
                <span className="font-bold text-primary block uppercase tracking-wider mb-0.5">Secure Transaction Guarantee</span>
                Your B2B order represents a binding purchase intent. A sales executive will review payment details and send invoice drafts.
              </div>
            </div>

          </div>

        </form>

      </div>
    </div>
  );
}
