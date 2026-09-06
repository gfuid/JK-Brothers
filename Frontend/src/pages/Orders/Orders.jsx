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
  FiAlertCircle,
  FiCopy,
  FiCheck,
  FiX,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiPhone,
  FiCalendar,
  FiShield
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { ShopContext } from '../../context/ShopContext';
import { handleImageError } from '../../data/imageUrls';
import { fetchAllLiveOrderStatuses, fetchLiveOrderStatus } from '../../services/googleSheetService';

export default function Orders() {
  const { orders } = useContext(ShopContext);
  const [liveStatuses, setLiveStatuses] = useState({});
  const [isSyncing, setIsSyncing] = useState(false);
  
  // Selected Order ID (Auto-selected from user's latest order if available)
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [manualInputId, setManualInputId] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);

  // Search/Track Result State
  const [trackedOrder, setTrackedOrder] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  // Sync statuses from Google Sheet on mount
  useEffect(() => {
    syncStatuses();
  }, []);

  // Automatically fetch the latest order's stage as soon as orders load
  useEffect(() => {
    if (orders && orders.length > 0 && !selectedOrderId) {
      const latestOrder = orders[0];
      setSelectedOrderId(latestOrder.id);
      trackOrderById(latestOrder.id, false);
    }
  }, [orders]);

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

  // Helper to determine real status
  const getEffectiveStatus = (orderId, fallbackStatus) => {
    if (!orderId) return fallbackStatus || 'Processing';
    const fromSheet = liveStatuses[orderId] || liveStatuses[orderId.toUpperCase()];
    return fromSheet || fallbackStatus || 'Processing';
  };

  // Core tracking function
  const trackOrderById = async (targetId, shouldScroll = true) => {
    const cleanId = String(targetId || '').trim().toUpperCase();
    if (!cleanId) return;

    setSelectedOrderId(cleanId);
    setIsTracking(true);

    if (shouldScroll) {
      const trackerEl = document.getElementById('order-stage-tracker');
      if (trackerEl) {
        trackerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    try {
      // Check live from Google Sheet
      const statusFromSheet = await fetchLiveOrderStatus(cleanId);
      const local = orders.find(o => o.id.toUpperCase() === cleanId);

      const resolvedStatus = statusFromSheet || (local ? (liveStatuses[cleanId] || local.status) : null);

      if (resolvedStatus) {
        setTrackedOrder({
          orderId: cleanId,
          status: resolvedStatus,
          found: true,
          localOrder: local || null
        });
      } else if (local) {
        setTrackedOrder({
          orderId: cleanId,
          status: local.status || 'Processing',
          found: true,
          localOrder: local
        });
      } else {
        setTrackedOrder({
          orderId: cleanId,
          found: false
        });
      }
    } catch (err) {
      const local = orders.find(o => o.id.toUpperCase() === cleanId);
      if (local) {
        setTrackedOrder({
          orderId: cleanId,
          status: liveStatuses[cleanId] || local.status || 'Processing',
          found: true,
          localOrder: local
        });
      } else {
        setTrackedOrder({ orderId: cleanId, found: false });
      }
    } finally {
      setIsTracking(false);
    }
  };

  const handleManualSearch = (e) => {
    if (e) e.preventDefault();
    if (!manualInputId.trim()) return;
    trackOrderById(manualInputId, true);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  // Helper for stage number: 1 to 4
  const getStageNumber = (status) => {
    const s = String(status || '').toLowerCase();
    if (s.includes('deliver') || s.includes('complete')) return 4;
    if (s.includes('dispatch') || s.includes('ship')) return 3;
    if (s.includes('confirm') || s.includes('accept') || s.includes('pack')) return 2;
    if (s.includes('cancel')) return 0;
    return 1; // Stage 1: Order Placed / Processing
  };

  // Rich stage details in Hindi + English
  const getStageData = (status) => {
    const stage = getStageNumber(status);

    if (stage === 4) {
      return {
        stageNum: 4,
        stageBadge: 'Stage 4 of 4',
        titleHindi: 'Aapka Order Deliver Ho Chuka Hai',
        titleEnglish: 'Delivered Successfully to Destination',
        descriptionHindi: 'Badhai ho! Aapka wholesale consignment aapke diye gaye address / godown par safely deliver ho chuka hai.',
        descriptionEnglish: 'Consignment successfully delivered to your warehouse/business address.',
        badgeColor: 'bg-emerald-600 text-white',
        bannerBg: 'bg-emerald-50 border-emerald-300 text-emerald-950',
        dotColor: 'bg-emerald-500'
      };
    }

    if (stage === 3) {
      return {
        stageNum: 3,
        stageBadge: 'Stage 3 of 4',
        titleHindi: 'Maal Dispatch Ho Chuka Hai — Transport Mein Hai',
        titleEnglish: 'Dispatched & In Transit (On The Way)',
        descriptionHindi: 'Aapka maal ZK BROTHERS Panipat mill se nikal chuka hai aur transport freight service ke zariye aapke shahar ki taraf chal raha hai.',
        descriptionEnglish: 'Goods packed and dispatched via freight transport logistics from Panipat, Haryana.',
        badgeColor: 'bg-indigo-600 text-white',
        bannerBg: 'bg-indigo-50 border-indigo-300 text-indigo-950',
        dotColor: 'bg-indigo-500'
      };
    }

    if (stage === 2) {
      return {
        stageNum: 2,
        stageBadge: 'Stage 2 of 4',
        titleHindi: 'Order Confirm — Factory Mein Packing & QC Chal Rahi Hai',
        titleEnglish: 'Order Confirmed & Packaging in Progress',
        descriptionHindi: 'Aapka order confirm ho chuka hai. Factory floor par bales checking, folding aur transport packaging ka kaam chal raha hai.',
        descriptionEnglish: 'Wholesale order approved. Quality inspection and heavy bundle packing underway at Panipat mill.',
        badgeColor: 'bg-blue-600 text-white',
        bannerBg: 'bg-blue-50 border-blue-300 text-blue-950',
        dotColor: 'bg-blue-500'
      };
    }

    if (stage === 0) {
      return {
        stageNum: 0,
        stageBadge: 'Order Cancelled',
        titleHindi: 'Order Cancel Kar Diya Gaya Hai',
        titleEnglish: 'Order Cancelled',
        descriptionHindi: 'Yeh order cancel mark kiya gaya hai. Kisi bhi jaankari ya refund ke liye WhatsApp par sampark karein.',
        descriptionEnglish: 'This order is marked as cancelled. Please contact our support team.',
        badgeColor: 'bg-rose-600 text-white',
        bannerBg: 'bg-rose-50 border-rose-300 text-rose-950',
        dotColor: 'bg-rose-500'
      };
    }

    // Default: Stage 1
    return {
      stageNum: 1,
      stageBadge: 'Stage 1 of 4',
      titleHindi: 'Order Received — ZK BROTHERS Team Process Kar Rahi Hai',
      titleEnglish: 'Order Received & Under Verification',
      descriptionHindi: 'Aapka wholesale order hamari system queue mein darj ho gaya hai. Dispatch manager ise approve kar rahe hain.',
      descriptionEnglish: 'Order logged into central production queue and queued for mill dispatch review.',
      badgeColor: 'bg-amber-600 text-white',
      bannerBg: 'bg-amber-50 border-amber-300 text-amber-950',
      dotColor: 'bg-amber-500'
    };
  };

  const renderStatusBadge = (status) => {
    const s = String(status || '').toLowerCase();
    if (s.includes('deliver') || s.includes('complete')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 text-[10px] font-bold rounded-sm uppercase tracking-widest">
          <FiCheckCircle className="text-xs" /> Delivered
        </span>
      );
    }
    if (s.includes('dispatch') || s.includes('ship')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 text-[10px] font-bold rounded-sm uppercase tracking-widest">
          <FiTruck className="text-xs" /> Dispatched
        </span>
      );
    }
    if (s.includes('confirm') || s.includes('accept') || s.includes('pack')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/15 border border-blue-500/30 text-blue-600 text-[10px] font-bold rounded-sm uppercase tracking-widest">
          <FiCheckCircle className="text-xs" /> Confirmed
        </span>
      );
    }
    if (s.includes('cancel')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/15 border border-rose-500/30 text-rose-600 text-[10px] font-bold rounded-sm uppercase tracking-widest">
          <FiAlertCircle className="text-xs" /> Cancelled
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/15 border border-amber-500/30 text-amber-600 text-[10px] font-bold rounded-sm uppercase tracking-widest">
        <FiClock className="text-xs animate-spin-slow" /> Processing
      </span>
    );
  };

  // Find the currently active order object
  const currentOrderObj = orders.find(o => o.id === selectedOrderId) || orders[0] || null;
  const currentStageInfo = trackedOrder ? getStageData(trackedOrder.status) : (currentOrderObj ? getStageData(getEffectiveStatus(currentOrderObj.id, currentOrderObj.status)) : null);
  const currentStep = currentStageInfo ? currentStageInfo.stageNum : 1;

  return (
    <div className="py-10 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* ========================================================================= */}
        {/* PAGE HEADER */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-250/20 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600">
                ZK BROTHERS Live Dispatch Feed
              </span>
            </div>
            <h1 className="font-serif text-2xl md:text-3.5xl font-black text-primary uppercase tracking-wide">
              Live Order Stage &amp; Tracking
            </h1>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              Aapke wholesale order ka live status aur stage seedha factory dispatch register se sync ho raha hai.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={syncStatuses}
              disabled={isSyncing}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:border-accent text-primary hover:text-accent text-xs font-bold uppercase tracking-wider rounded-xs shadow-2xs transition-all cursor-pointer"
              title="Refresh status from Google Sheet"
            >
              <FiRefreshCw className={isSyncing ? 'animate-spin text-accent' : 'text-gray-500'} />
              {isSyncing ? 'Refreshing Live Data...' : 'Sync Live Status'}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN STAGE TRACKER (AUTO-FETCHED, ZERO-CONFUSION UI) */}
        {/* ========================================================================= */}
        <div 
          id="order-stage-tracker"
          className="bg-white border-2 border-primary/20 rounded-md shadow-md mb-12 overflow-hidden"
        >
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-[#0F1E36] via-[#162A4A] to-[#0F1E36] text-white p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-accent/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center text-accent text-2xl shrink-0">
                <FiTruck />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-accent text-[11px] font-black uppercase tracking-[0.25em]">
                    Real-Time Factory Dispatch
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-400/30">
                    Live
                  </span>
                </div>
                <h2 className="font-serif text-xl md:text-2xl font-black uppercase tracking-wide text-white">
                  Aapka Order Kis Stage Par Hai?
                </h2>
                <p className="text-xs text-gray-300 mt-0.5 font-medium">
                  {currentOrderObj 
                    ? `Order: ${currentOrderObj.id} • Placed on ${currentOrderObj.date}`
                    : 'Apne wholesale order ka live status aur stage dekhein'}
                </p>
              </div>
            </div>

            {/* Quick WhatsApp Help */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <a
                href={`https://wa.me/919050555855?text=${encodeURIComponent(
                  `Hello ZK BROTHERS, please check the status for my Order ID: ${selectedOrderId || 'Wholesale Order'}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xs text-xs font-bold transition-all shadow-xs"
              >
                <FaWhatsapp className="text-base" />
                <span>Help on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* If user has multiple orders, show simple 1-click Order Switcher Tabs */}
          {orders.length > 1 && (
            <div className="bg-[#FAF9F6] border-b border-gray-200 px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                📦 Aapke Orders (Chunein jiska status dekhna hai):
              </span>
              <div className="flex flex-wrap gap-2">
                {orders.map((ord, idx) => {
                  const isSelected = (selectedOrderId === ord.id);
                  return (
                    <button
                      key={ord.id}
                      type="button"
                      onClick={() => trackOrderById(ord.id, false)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-xs border transition-all cursor-pointer flex items-center gap-2 ${
                        isSelected 
                          ? 'bg-primary text-white border-primary shadow-xs'
                          : 'bg-white text-gray-700 border-gray-250 hover:border-accent hover:text-accent'
                      }`}
                    >
                      <span>{idx === 0 ? '⚡ Latest Order' : `Order #${idx + 1}`}</span>
                      <span className="font-mono text-[11px] opacity-80 font-normal">({ord.id})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* MAIN ACTION SECTION: Clear guidance & prominent button */}
          <div className="p-6 md:p-8 bg-[#FAF9F6]/50 border-b border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold mb-3">
                <FiPackage className="text-sm" />
                <span>Auto-Detected Order: <strong className="font-mono text-primary font-black">{selectedOrderId || 'No Active Order'}</strong></span>
              </div>

              <h3 className="text-lg md:text-xl font-black text-primary mb-2">
                👇 Is Button Par Click Karein Aur Live Stage Pata Lagayein:
              </h3>
              <p className="text-xs md:text-sm text-gray-600 font-medium mb-6 max-w-xl mx-auto">
                Aapko koi ID yaad rakhne ya daalne ki zaroorat nahi hai. Neeche diye button ko click karke seedha pata lagayein ki aapka consignment factory me hai, pack ho chuka hai ya transport me raste me hai.
              </p>

              {/* Big, Clear Action Button */}
              <button
                type="button"
                onClick={() => trackOrderById(selectedOrderId || (orders[0] && orders[0].id))}
                disabled={isTracking || (!selectedOrderId && orders.length === 0)}
                className={`w-full sm:w-auto px-8 md:px-12 py-4 rounded-sm text-sm md:text-base font-black uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-3 mx-auto cursor-pointer ${
                  isTracking 
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-accent hover:bg-accent/90 text-white hover:shadow-lg active:scale-98'
                }`}
              >
                {isTracking ? (
                  <>
                    <FiRefreshCw className="animate-spin text-lg" />
                    <span>Factory Se Live Stage Fetch Ho Raha Hai...</span>
                  </>
                ) : (
                  <>
                    <FiTruck className="text-xl" />
                    <span>🚚 PATA LAGAYEIN AAPKA ORDER KIS STAGE MAIN HAI</span>
                  </>
                )}
              </button>

              {/* Manual ID Toggle for Guest or Different Order */}
              <div className="mt-4 pt-3">
                <button
                  type="button"
                  onClick={() => setShowManualInput(!showManualInput)}
                  className="text-xs font-bold text-gray-500 hover:text-accent inline-flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
                >
                  <span>{showManualInput ? '▲ Manual ID box band karein' : '▼ Kisi aur / doosre Order ID ka status check karna hai? Yahan click karein'}</span>
                </button>

                {/* Collapsible Manual ID Form */}
                {showManualInput && (
                  <form onSubmit={handleManualSearch} className="mt-4 max-w-md mx-auto flex gap-2 animate-fadeIn">
                    <input
                      type="text"
                      value={manualInputId}
                      onChange={(e) => setManualInputId(e.target.value.toUpperCase())}
                      placeholder="Enter Order ID (e.g. ZK-ORD-712087)"
                      className="flex-1 px-4 py-2.5 text-xs font-bold border-2 border-gray-300 rounded-xs uppercase tracking-wider focus:border-accent focus:outline-hidden"
                    />
                    <button
                      type="submit"
                      disabled={isTracking || !manualInputId.trim()}
                      className="px-5 py-2.5 bg-primary hover:bg-blue-950 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                    >
                      Track
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* THE STAGE DISPLAY ("THIK TAREEKE SE DIKHAYE") */}
          {/* ========================================================================= */}
          {(trackedOrder || currentOrderObj) && currentStageInfo && (
            <div className="p-6 md:p-8 bg-white">
              
              {/* CURRENT STAGE HIGHLIGHT BANNER */}
              <div className={`p-5 md:p-6 rounded-md border-2 mb-8 ${currentStageInfo.bannerBg} shadow-2xs`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/10 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${currentStageInfo.badgeColor}`}>
                        {currentStageInfo.stageBadge}
                      </span>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-600">
                        Current Live Status
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                      {currentStageInfo.titleHindi}
                    </h3>
                    <p className="text-xs md:text-sm font-semibold text-gray-700 mt-0.5">
                      {currentStageInfo.titleEnglish}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                      Order Reference
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-base font-black text-primary">
                        {trackedOrder ? trackedOrder.orderId : currentOrderObj.id}
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(trackedOrder ? trackedOrder.orderId : currentOrderObj.id)}
                        className="p-1.5 bg-white border border-gray-300 hover:border-accent text-gray-600 hover:text-accent rounded-xs cursor-pointer text-xs"
                        title="Copy Order ID"
                      >
                        {copiedId ? <FiCheck className="text-emerald-600" /> : <FiCopy />}
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-xs md:text-sm font-medium leading-relaxed text-gray-800">
                  👉 <strong>Abhi kya ho raha hai:</strong> {currentStageInfo.descriptionHindi}
                </p>
              </div>

              {/* 4 STAGE DETAILED VISUAL STEPPER CARDS */}
              <div className="mb-8">
                <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                  <span>Order Progress Pipeline (4 Stages)</span>
                  <span className="h-px flex-1 bg-gray-200"></span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* STAGE 1 */}
                  <div className={`p-4 rounded-md border-2 transition-all ${
                    currentStep >= 1 
                      ? 'border-primary/40 bg-primary/5' 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500">
                        Stage 1
                      </span>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                        currentStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {currentStep > 1 ? '✓' : '1'}
                      </span>
                    </div>
                    <h5 className="font-bold text-sm text-primary mb-1">
                      Order Placed &amp; Logged
                    </h5>
                    <p className="text-[11px] text-gray-600 font-medium leading-normal mb-2">
                      Order central queue me approve hua aur production team ko assign hua.
                    </p>
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      currentStep >= 1 ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep >= 1 ? '✓ Completed' : 'Pending'}
                    </span>
                  </div>

                  {/* STAGE 2 */}
                  <div className={`p-4 rounded-md border-2 transition-all ${
                    currentStep === 2
                      ? 'border-blue-500 bg-blue-50/70 shadow-sm ring-2 ring-blue-400/20'
                      : currentStep > 2
                      ? 'border-primary/40 bg-primary/5'
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500">
                        Stage 2
                      </span>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                        currentStep > 2 ? 'bg-primary text-white' : currentStep === 2 ? 'bg-blue-600 text-white animate-pulse' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {currentStep > 2 ? '✓' : '2'}
                      </span>
                    </div>
                    <h5 className="font-bold text-sm text-primary mb-1">
                      Packaging &amp; QC Check
                    </h5>
                    <p className="text-[11px] text-gray-600 font-medium leading-normal mb-2">
                      Panipat factory me bundle packing, quality verification aur bale pressing.
                    </p>
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      currentStep > 2 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : currentStep === 2 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > 2 ? '✓ Completed' : currentStep === 2 ? '⚡ Active Right Now' : 'In Queue'}
                    </span>
                  </div>

                  {/* STAGE 3 */}
                  <div className={`p-4 rounded-md border-2 transition-all ${
                    currentStep === 3
                      ? 'border-indigo-500 bg-indigo-50/70 shadow-sm ring-2 ring-indigo-400/20'
                      : currentStep > 3
                      ? 'border-primary/40 bg-primary/5'
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500">
                        Stage 3
                      </span>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                        currentStep > 3 ? 'bg-primary text-white' : currentStep === 3 ? 'bg-indigo-600 text-white animate-bounce' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {currentStep > 3 ? '✓' : '3'}
                      </span>
                    </div>
                    <h5 className="font-bold text-sm text-primary mb-1">
                      Dispatched &amp; In Transit
                    </h5>
                    <p className="text-[11px] text-gray-600 font-medium leading-normal mb-2">
                      Panipat Hub se transport freight ko hand over; destination ki taraf raste me.
                    </p>
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      currentStep > 3 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : currentStep === 3 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > 3 ? '✓ Completed' : currentStep === 3 ? '🚚 Active in Transit' : 'Upcoming'}
                    </span>
                  </div>

                  {/* STAGE 4 */}
                  <div className={`p-4 rounded-md border-2 transition-all ${
                    currentStep >= 4
                      ? 'border-emerald-500 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-400/20'
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500">
                        Stage 4
                      </span>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                        currentStep >= 4 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {currentStep >= 4 ? '✓' : '4'}
                      </span>
                    </div>
                    <h5 className="font-bold text-sm text-primary mb-1">
                      Delivered to Destination
                    </h5>
                    <p className="text-[11px] text-gray-600 font-medium leading-normal mb-2">
                      Consignment aapke godown / dukan ke pate par safely deliver ho chuka hai.
                    </p>
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      currentStep >= 4 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep >= 4 ? '🎉 Delivered' : 'Final Step'}
                    </span>
                  </div>

                </div>
              </div>

              {/* ORDER DETAILS SUMMARY (If local order exists) */}
              {currentOrderObj && (
                <div className="bg-[#FAF9F6] border border-gray-200 rounded-md p-5 md:p-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                    <FiPackage className="text-accent" />
                    <span>Consignment Details (Order Summary)</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                    {/* Items preview */}
                    <div className="md:col-span-2">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                        Included Products ({currentOrderObj.items?.length || 0} items)
                      </span>
                      <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-2">
                        {currentOrderObj.items?.map((it, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-white border border-gray-150 p-2.5 rounded-xs">
                            <div className="flex items-center gap-2.5">
                              <img 
                                src={it.product.img} 
                                alt={it.product.name} 
                                onError={handleImageError} 
                                className="w-10 h-10 object-cover rounded-xs border border-gray-100 shrink-0" 
                              />
                              <div>
                                <h6 className="font-bold text-primary line-clamp-1">{it.product.name}</h6>
                                <span className="text-[10px] text-gray-500 font-semibold">
                                  Color: {it.color || 'Standard'} • Qty: {it.quantity} pcs
                                </span>
                              </div>
                            </div>
                            <span className="font-bold text-primary shrink-0">
                              ₹{(it.product.price * it.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery & Transport Info */}
                    <div className="bg-white border border-gray-150 p-4 rounded-xs flex flex-col justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                          Delivery Address
                        </span>
                        <p className="font-bold text-primary">{currentOrderObj.shippingDetails?.contactName}</p>
                        {currentOrderObj.shippingDetails?.businessName && (
                          <p className="text-[10px] text-accent font-bold uppercase">{currentOrderObj.shippingDetails.businessName}</p>
                        )}
                        <p className="text-gray-600 font-medium leading-relaxed mt-1">
                          {currentOrderObj.shippingDetails?.city}, {currentOrderObj.shippingDetails?.state} - {currentOrderObj.shippingDetails?.postalCode}
                        </p>
                        <p className="text-gray-500 font-semibold mt-1">
                          Phone: {currentOrderObj.shippingDetails?.phone}
                        </p>
                      </div>

                      <div className="border-t border-gray-100 pt-3">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                          Total Invoice Value
                        </span>
                        <span className="text-base font-black text-primary font-sans">
                          ₹{Number(currentOrderObj.total).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp LR / Bilty Action */}
                  <div className="mt-5 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-gray-600 font-medium">
                      Transport LR receipt, bilty ya expected delivery time jaanna chahte hain?
                    </span>
                    <a
                      href={`https://wa.me/919050555855?text=${encodeURIComponent(
                        `Hello ZK BROTHERS, please share the Transport Bilty / LR receipt and delivery estimate for Order ID: ${currentOrderObj.id}. Contact: ${currentOrderObj.shippingDetails?.contactName || ''}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xs text-xs font-bold transition-all shadow-xs cursor-pointer shrink-0"
                    >
                      <FaWhatsapp className="text-sm" />
                      <span>Request Transport Bilty on WhatsApp</span>
                    </a>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* If No order found for manual search */}
          {trackedOrder && !trackedOrder.found && (
            <div className="p-6 bg-rose-50 border-t border-rose-200">
              <div className="flex items-start gap-3 text-rose-800 text-xs">
                <FiAlertCircle className="text-xl text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-bold text-rose-900 mb-1">
                    Order ID "{trackedOrder.orderId}" Record Mein Nahi Mila
                  </h4>
                  <p className="font-medium text-rose-700">
                    Kripya spelling check karein ya apne invoice par likha Order ID dobara check karein. Agar aapne direct phone/WhatsApp par order diya tha toh hamari support team se WhatsApp par baat karein.
                  </p>
                </div>
                <a
                  href={`https://wa.me/919050555855?text=${encodeURIComponent(`Hello ZK BROTHERS, unable to track Order ID: ${trackedOrder.orderId}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-rose-600 text-white font-bold rounded-xs shrink-0"
                >
                  Contact Support
                </a>
              </div>
            </div>
          )}

        </div>

        {/* ========================================================================= */}
        {/* ALL ORDER HISTORY SECTION */}
        {/* ========================================================================= */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-black text-gray-500 uppercase tracking-widest">
            Your Order History ({orders.length})
          </h2>
          {orders.length > 0 && (
            <span className="text-[11px] text-gray-400 font-medium">
              Click "Check Live Stage" on any order to view its live stage above
            </span>
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
              Aapne is browser mein koi order place nahi kiya hai, ya browser storage clear ho gayi hai. Agar aapke paas Order ID hai toh aap upar diye box mein track kar sakte hain.
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
              const progressStep = getStageNumber(currentStatus);

              return (
                <div 
                  key={order.id}
                  className={`bg-white border-2 rounded-sm shadow-2xs overflow-hidden flex flex-col transition-all ${
                    selectedOrderId === order.id ? 'border-accent' : 'border-gray-150'
                  }`}
                >
                  {/* Order Header bar */}
                  <div className="bg-primary text-white p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-950/20">
                    <div className="text-xs">
                      <span className="text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Order Number</span>
                      <span className="text-base font-bold text-accent font-mono">{order.id}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Date Placed</span>
                      <span className="font-semibold">{order.date}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Payment Method</span>
                      <span className="font-semibold flex items-center gap-1"><FiCreditCard /> {order.shippingDetails?.paymentMode || 'Bank Wire (T/T)'}</span>
                    </div>
                    <div className="text-xs flex items-center gap-3">
                      <div>
                        <span className="text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Status</span>
                        {renderStatusBadge(currentStatus)}
                      </div>
                      
                      {/* Direct Track Button on Every Order Card */}
                      <button
                        type="button"
                        onClick={() => trackOrderById(order.id, true)}
                        className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-2 bg-accent hover:bg-accent/90 text-white text-[11px] font-bold uppercase tracking-wider rounded-xs transition-all shadow-xs cursor-pointer active:scale-95"
                        title="Click to track this order in live tracker above"
                      >
                        <FiTruck className="text-xs" />
                        <span>Check Live Stage</span>
                      </button>
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
                          <span className={progressStep >= 2 ? 'text-primary font-extrabold' : 'text-gray-400'}>Packaging QC</span>
                        </div>

                        {/* Step 3: Dispatched */}
                        <div className="flex flex-col items-center gap-1.5 z-10">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${progressStep >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                            {progressStep >= 3 ? '✓' : '3'}
                          </div>
                          <span className={progressStep >= 3 ? 'text-primary font-extrabold' : 'text-gray-400'}>In Transit</span>
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
