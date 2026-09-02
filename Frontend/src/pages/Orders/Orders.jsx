import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiInbox, FiClock, FiMapPin, FiCreditCard, FiPackage } from 'react-icons/fi';
import { ShopContext } from '../../context/ShopContext';
import { handleImageError } from '../../data/imageUrls';

export default function Orders() {
  const { orders } = useContext(ShopContext);

  if (orders.length === 0) {
    return (
      <div className="py-20 text-center min-h-screen flex flex-col justify-center items-center px-4">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl mb-4">
          <FiInbox />
        </div>
        <h2 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2 uppercase">No Orders Found</h2>
        <p className="text-gray-400 text-xs md:text-sm font-semibold max-w-xs mb-8">
          You haven't placed any wholesale B2B orders yet. Place an order via our Checkout portal to view history.
        </p>
        <Link 
          to="/handloom"
          className="bg-primary hover:bg-blue-950 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
        >
          Explore Catalogues
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <h1 className="font-serif text-2xl md:text-3.5xl font-black text-primary uppercase tracking-wide mb-8 border-b border-gray-250/20 pb-4">
          Wholesale Order Records
        </h1>

        {/* Orders list */}
        <div className="flex flex-col gap-8">
          {orders.map((order) => (
            <div 
              key={order.id}
              className="bg-white border border-gray-150 rounded-sm shadow-2xs overflow-hidden flex flex-col"
            >
              {/* Order Header bar */}
              <div className="bg-primary text-white p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-950/20">
                <div className="text-xs">
                  <span className="text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Order Number</span>
                  <span className="text-base font-bold text-accent">{order.id}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Date Placed</span>
                  <span className="font-semibold">{order.date}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Payment Method</span>
                  <span className="font-semibold flex items-center gap-1"><FiCreditCard /> {order.shippingDetails.paymentMode}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Status</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[9px] font-bold rounded-sm uppercase tracking-widest">
                    <FiClock className="animate-spin-slow" /> {order.status}
                  </span>
                </div>
              </div>

              {/* Order body */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Ordered Items details */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                    <FiPackage /> Items Ordered
                  </h3>
                  <div className="flex flex-col gap-3">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs border-b border-gray-50 pb-3 last:border-b-0 last:pb-0">
                        <div className="flex items-center gap-3">
                          <img src={item.product.img} alt={item.product.name} onError={handleImageError} className="w-12 h-12 object-cover rounded-xs border border-gray-100 shrink-0" />
                          <div>
                            <Link to={`/product/${item.product.id}`} className="font-bold text-primary hover:text-accent transition-colors leading-snug line-clamp-1">
                              {item.product.name}
                            </Link>
                            <p className="text-[10px] text-gray-450 font-bold uppercase tracking-wider mt-0.5">
                              Color: {item.color} | Qty: {item.quantity} pcs
                            </p>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-[10px] text-gray-450 block font-semibold">₹{item.product.price} / pc</span>
                          <span className="font-serif font-extrabold text-primary">₹{item.product.price * item.quantity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery details & Subtotal */}
                <div className="lg:col-span-4 bg-[#FAF9F6] p-5 rounded-xs border border-gray-150 text-xs flex flex-col gap-4">
                  <div>
                    <h4 className="font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1">
                      <FiMapPin /> Delivery Location
                    </h4>
                    <p className="font-semibold text-gray-700">{order.shippingDetails.contactName}</p>
                    {order.shippingDetails.businessName && <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{order.shippingDetails.businessName}</p>}
                    <p className="text-gray-600 font-medium leading-relaxed mt-1">
                      {order.shippingDetails.address}, {order.shippingDetails.city}, {order.shippingDetails.state} - {order.shippingDetails.postalCode}
                    </p>
                    <p className="text-gray-550 font-medium mt-1">Contact: {order.shippingDetails.phone}</p>
                  </div>

                  <div className="border-t border-gray-250/30 pt-3 flex justify-between items-baseline">
                    <span className="font-serif font-bold text-primary uppercase tracking-wide">Total Invoice</span>
                    <span className="font-serif text-lg font-black text-primary">₹{order.total}</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
