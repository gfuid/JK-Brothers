import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiInbox, 
  FiClock, 
  FiMapPin, 
  FiCreditCard, 
  FiPackage, 
  FiRefreshCw, 
  FiCheckCircle, 
  FiTruck, 
  FiSearch,
  FiAlertCircle
} from 'react-icons/fi';
import { ShopContext } from '../../context/ShopContext';
import { handleImageError } from '../../data/imageUrls';
import { fetchAllLiveOrderStatuses, fetchLiveOrderStatus } from '../../services/googleSheetService';

export default function Orders() {
  const { orders } = useContext(ShopContext);
  const [liveStatuses, setLiveStatuses] = useState({});
  const [isSyncing, setIsSyncing] = useState(false);
  const [searchOrderId, setSearchOrderId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Sync statuses from Google Sheet on mount
  useEffect(() => {
    syncStatuses();
  }, []);

  const syncStatuses = async () => {
    setIsSyncing(true);
    try {
      const statuses = await fetchAllLiveOrderStatuses();
      if (statuses && Object.keys(statuses).length > 0) {
        setLiveStatuses(statuses);
      }
    } catch (err) {
      console.warn('Status sync error:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleTrackSearch = async (e) => {
    e.preventDefault();
    const cleanId = searchOrderId.trim().toUpperCase();
    if (!cleanId) return;

    setIsSearching(true);
    setSearchResult(null);

    try {
      const status = await fetchLiveOrderStatus(cleanId);
      if (status) {
        setSearchResult({
          orderId: cleanId,
          status: status,
          found: true
        });
      } else {
        // Check in local orders as fallback
        const local = orders.find(o => o.id.toUpperCase() === cleanId);
        if (local) {
          setSearchResult({
            orderId: cleanId,
            status: liveStatuses[cleanId] || local.status || 'Processing',
            found: true
          });
        } else {
          setSearchResult({
            orderId: cleanId,
            found: false
          });
        }
      }
    } catch (err) {
      setSearchResult({ orderId: cleanId, found: false });
    } finally {
      setIsSearching(false);
    }
  };

  const getEffectiveStatus = (orderId, fallbackStatus) => {
    const fromSheet = liveStatuses[orderId] || liveStatuses[orderId.toUpperCase()];
    return fromSheet || fallbackStatus || 'Processing';
  };

  const renderStatusBadge = (status) => {
    const s = String(status).toLowerCase();
    if (s.includes('deliver') || s.includes('complete')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-sm uppercase tracking-widest">
          <FiCheckCircle className="text-xs" /> Delivered
        </span>
      );
    }
    if (s.includes('dispatch') || s.includes('ship')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/15 border border-indigo-500/30 text-indigo-500 dark:text-indigo-300 text-[10px] font-bold rounded-sm uppercase tracking-widest">
          <FiTruck className="text-xs" /> Dispatched
        </span>
      );
    }
    if (s.includes('confirm') || s.includes('accept')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/15 border border-blue-500/30 text-blue-500 dark:text-blue-300 text-[10px] font-bold rounded-sm uppercase tracking-widest">
          <FiCheckCircle className="text-xs" /> Confirmed
        </span>
      );
    }
    if (s.includes('cancel')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/15 border border-rose-500/30 text-rose-500 text-[10px] font-bold rounded-sm uppercase tracking-widest">
          <FiAlertCircle className="text-xs" /> Cancelled
        </span>
      );
    }
    // Default: Processing
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/15 border border-amber-500/30 text-amber-500 dark:text-amber-400 text-[10px] font-bold rounded-sm uppercase tracking-widest">
        <FiClock className="text-xs animate-spin-slow" /> Processing
      </span>
    );
  };

  const getStepProgress = (status) => {
    const s = String(status).toLowerCase();
    if (s.includes('deliver') || s.includes('complete')) return 4;
    if (s.includes('dispatch') || s.includes('ship')) return 3;
    if (s.includes('confirm') || s.includes('accept')) return 2;
    if (s.includes('cancel')) return 0;
    return 1; // Processing / Order Received
  };

  return (
    <div className="py-12 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header with Title & Live Sync */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-250/20 pb-4">
          <div>
            <h1 className="font-serif text-2xl md:text-3.5xl font-black text-primary uppercase tracking-wide">
              Wholesale Order Records
            </h1>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              Live status synced directly from JK Brothers Production & Dispatch Center (Google Sheets)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={syncStatuses}
              disabled={isSyncing}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-gray-200 text-primary hover:bg-gray-50 text-xs font-bold uppercase tracking-wider rounded-xs shadow-2xs transition-colors cursor-pointer"
              title="Refresh status from Google Sheet"
            >
              <FiRefreshCw className={isSyncing ? 'animate-spin text-accent' : 'text-gray-500'} />
              {isSyncing ? 'Checking Sheet...' : 'Sync Live Status'}
            </button>
          </div>
        </div>

        {/* Live Order Tracker Input */}
        <div className="bg-white border border-gray-150 p-5 rounded-sm shadow-2xs mb-8">
          <form onSubmit={handleTrackSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
              <input
                type="text"
                value={searchOrderId}
                onChange={(e) => setSearchOrderId(e.target.value)}
                placeholder="Track any Order ID (e.g. ZK-ORD-712087)"
                className="w-full pl-10 pr-4 py-2.5 text-xs border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-primary uppercase tracking-wider"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="bg-primary hover:bg-blue-950 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0"
            >
              {isSearching ? 'Tracking...' : 'Track Order Status'}
            </button>
          </form>

          {/* Search Result Banner */}
          {searchResult && (
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              {searchResult.found ? (
                <div className="flex items-center gap-3">
                  <span className="font-bold text-primary">Order {searchResult.orderId}:</span>
                  {renderStatusBadge(searchResult.status)}
                </div>
              ) : (
                <span className="text-rose-500 font-semibold flex items-center gap-1.5">
                  <FiAlertCircle /> Order ID "{searchResult.orderId}" not found in current records. Please verify the ID.
                </span>
              )}
            </div>
          )}
        </div>

        {/* If no orders in local storage */}
        {orders.length === 0 ? (
          <div className="py-16 text-center bg-white border border-gray-150 rounded-sm shadow-2xs px-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl mx-auto mb-4">
              <FiInbox />
            </div>
            <h2 className="font-serif text-xl font-bold text-primary mb-2 uppercase">No Orders in this Browser Session</h2>
            <p className="text-gray-400 text-xs font-semibold max-w-sm mx-auto mb-6">
              You haven't placed any wholesale orders in this browser, or your session has reset. You can still track any order above using your Order ID.
            </p>
            <Link 
              to="/handloom"
              className="inline-block bg-primary hover:bg-blue-950 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
            >
              Explore Wholesale Catalogues
            </Link>
          </div>
        ) : (
          /* Orders list */
          <div className="flex flex-col gap-8">
            {orders.map((order) => {
              const currentStatus = getEffectiveStatus(order.id, order.status);
              const progressStep = getStepProgress(currentStatus);

              return (
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
                      <span className="font-semibold flex items-center gap-1"><FiCreditCard /> {order.shippingDetails?.paymentMode || 'Bank Wire (T/T)'}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Status</span>
                      {renderStatusBadge(currentStatus)}
                    </div>
                  </div>

                  {/* 4-Step Order Tracker Pipeline */}
                  <div className="bg-[#FAF9F6] border-b border-gray-150 px-6 py-4">
                    <div className="max-w-3xl mx-auto">
                      <div className="grid grid-cols-4 relative text-center text-[10px] font-bold uppercase tracking-wider">
                        
                        {/* Connecting Line */}
                        <div className="absolute top-3 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-0">
                          <div 
                            className="h-full bg-accent transition-all duration-500"
                            style={{ width: `${Math.min(100, Math.max(0, (progressStep - 1) * 33.33))}%` }}
                          />
                        </div>

                        {/* Step 1: Placed */}
                        <div className="flex flex-col items-center gap-1.5 z-10">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${progressStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                            ✓
                          </div>
                          <span className={progressStep >= 1 ? 'text-primary font-extrabold' : 'text-gray-400'}>Order Placed</span>
                        </div>

                        {/* Step 2: Confirmed */}
                        <div className="flex flex-col items-center gap-1.5 z-10">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${progressStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                            {progressStep >= 2 ? '✓' : '2'}
                          </div>
                          <span className={progressStep >= 2 ? 'text-primary font-extrabold' : 'text-gray-400'}>Confirmed</span>
                        </div>

                        {/* Step 3: Dispatched */}
                        <div className="flex flex-col items-center gap-1.5 z-10">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${progressStep >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                            {progressStep >= 3 ? '✓' : '3'}
                          </div>
                          <span className={progressStep >= 3 ? 'text-primary font-extrabold' : 'text-gray-400'}>Dispatched</span>
                        </div>

                        {/* Step 4: Delivered */}
                        <div className="flex flex-col items-center gap-1.5 z-10">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${progressStep >= 4 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                            {progressStep >= 4 ? '✓' : '4'}
                          </div>
                          <span className={progressStep >= 4 ? 'text-emerald-700 font-extrabold' : 'text-gray-400'}>Delivered</span>
                        </div>

                      </div>
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
                              <span className="text-[10px] text-gray-450 block font-sans font-semibold">₹{Number(item.product.price).toLocaleString('en-IN')} / pc</span>
                              <span className="font-sans font-bold text-primary text-sm">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
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
                        <p className="font-semibold text-gray-700">{order.shippingDetails?.contactName}</p>
                        {order.shippingDetails?.businessName && <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{order.shippingDetails.businessName}</p>}
                        <p className="text-gray-600 font-medium leading-relaxed mt-1">
                          {order.shippingDetails?.address}, {order.shippingDetails?.city}, {order.shippingDetails?.state} - {order.shippingDetails?.postalCode}
                        </p>
                        <p className="text-gray-550 font-medium mt-1">Contact: {order.shippingDetails?.phone}</p>
                      </div>

                      <div className="border-t border-gray-250/30 pt-3 flex justify-between items-baseline">
                        <span className="font-sans font-bold text-primary uppercase tracking-wide">Total Invoice</span>
                        <span className="font-sans text-lg font-bold text-primary">₹{Number(order.total).toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
