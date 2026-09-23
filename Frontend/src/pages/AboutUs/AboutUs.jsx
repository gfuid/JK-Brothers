import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiAward, 
  FiCheckCircle, 
  FiPhoneCall, 
  FiCopy, 
  FiCheck, 
  FiShield, 
  FiTruck, 
  FiClock, 
  FiDollarSign, 
  FiLayers, 
  FiHeadphones,
  FiMapPin,
  FiFileText,
  FiArrowRight,
  FiDownload,
  FiUser,
  FiSmartphone,
  FiPackage
} from 'react-icons/fi';
import { FaWhatsapp, FaHandshake, FaIndustry } from 'react-icons/fa';
import Stats from '../../components/Stats';
import { recordEnquiryInGoogleSheet } from '../../services/googleSheetService';

// Assets
import ownerImg from '../../assets/owner.png';
import blanketsImg from '../../assets/products/handloom/handloom_blankets.webp';
import bedsheetImg from '../../assets/products/bedsheets/printed_bedsheet_1.webp';
import curtainImg from '../../assets/products/curtain/curtain1.jpeg';
import pillowImg from '../../assets/products/handloom/pillow_covers.jpg';
import doormatImg from '../../assets/products/handloom/bath_mat_memory_foam.jpg';

export default function AboutUs() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    category: 'All 5 High-Demand Products'
  });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  // Bottom Form State for full wholesale inquiry
  const [bottomForm, setBottomForm] = useState({
    name: '',
    phone: '',
    city: '',
    category: 'All 5 High-Demand Products',
    quantity: '',
    message: ''
  });
  const [bottomSubmitting, setBottomSubmitting] = useState(false);
  const [bottomSuccess, setBottomSuccess] = useState(false);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleBottomSubmit = async (e) => {
    e.preventDefault();
    if (!bottomForm.phone.trim()) return;

    setBottomSubmitting(true);
    const enquiryId = `ZK-RFQ-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      await recordEnquiryInGoogleSheet({
        enquiryId,
        name: bottomForm.name || 'Wholesale Buyer',
        phone: bottomForm.phone,
        city: bottomForm.city,
        category: bottomForm.category,
        quantity: bottomForm.quantity,
        subject: `Wholesale RFQ - ${bottomForm.category}`,
        message: `Quantity: ${bottomForm.quantity || 'Bulk'} | City: ${bottomForm.city || 'India'} | Note: ${bottomForm.message || 'Standard quote'}`,
        type: 'Wholesale Bottom RFQ'
      });
    } catch (err) {
      console.warn('RFQ log:', err);
    }

    setBottomSubmitting(false);
    setBottomSuccess(true);

    const whatsappText = `Hello Mr. M. Karam, I am ${bottomForm.name || 'a wholesale buyer'} from ${bottomForm.city || 'India'}. I need a wholesale quotation for ${bottomForm.category}${bottomForm.quantity ? ` (Quantity: ${bottomForm.quantity})` : ''}. ${bottomForm.message ? `Details: ${bottomForm.message}.` : ''} My WhatsApp contact is ${bottomForm.phone}.`;

    const whatsappUrl = `https://wa.me/919896507049?text=${encodeURIComponent(whatsappText)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 700);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadForm.phone.trim()) return;

    setLeadSubmitting(true);
    const enquiryId = `ZK-RATE-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      await recordEnquiryInGoogleSheet({
        enquiryId,
        name: leadForm.name || 'Wholesale Buyer',
        phone: leadForm.phone,
        category: leadForm.category,
        subject: 'Wholesale Price List & Catalog Request',
        message: `Requested 2026 Wholesale Rate Card & Catalog for ${leadForm.category}`,
        type: 'Wholesale Rate Request'
      });
    } catch (err) {
      console.warn('Lead submission log:', err);
    }

    setLeadSubmitting(false);
    setLeadSuccess(true);

    const whatsappUrl = `https://wa.me/919896507049?text=${encodeURIComponent(
      `Hello Mr. M. Karam, I am ${leadForm.name || 'a wholesale buyer'}. Please send me the 2026 Wholesale Rate Card & Catalog for ${leadForm.category}. My contact number is ${leadForm.phone}.`
    )}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 700);
  };

  const dealProducts = [
    {
      id: 1,
      title: 'Blankets (All Types)',
      subtitle: 'Mink, Polar Fleece, 2-Ply & Heavy Winter',
      desc: 'Manufactured with high-grade thermal microfibers. Available in single, double, embossed, and cloud-soft fleece for bulk hospital, hotel, and institutional distribution.',
      img: blanketsImg,
      tag: 'High Demand',
      specs: 'Mink, Fleece, Embossed, 2-Ply'
    },
    {
      id: 2,
      title: 'Double & Single Bedsheets',
      subtitle: 'Pure Cotton, Glace Cotton & Fitted Sets',
      desc: 'Skin-friendly, colorfast bed linen crafted on high-speed looms. Offering authentic Panipat floral prints, modern geometric themes, and elasticated fitted finishes.',
      img: bedsheetImg,
      tag: 'Top Wholesale Mover',
      specs: 'King, Queen & Single Sizes'
    },
    {
      id: 3,
      title: 'Curtains',
      subtitle: 'Blackout, Jacquard & Luxury Drapes',
      desc: 'Precision stitched living room, bedroom, and hospitality curtains. Features durable metal eyelets, wrinkle-resistant textures, and customized window/door heights.',
      img: curtainImg,
      tag: 'Custom Sizes Available',
      specs: '5ft, 7ft, 9ft & Custom Lots'
    },
    {
      id: 4,
      title: 'Pillow Covers',
      subtitle: 'Quilted, Cotton & Decorative Cases',
      desc: 'Bulk lots of durable pillow covers with strong concealed zippers, envelope folds, and decorative borders. Built to withstand continuous institutional wash cycles.',
      img: pillowImg,
      tag: 'Bulk Packs 50 - 500 pcs',
      specs: 'Standard 18x28 inch & Customized'
    },
    {
      id: 5,
      title: 'Paydan / Doormats',
      subtitle: 'Microfiber, Memory Foam & Anti-Skid Mats',
      desc: 'High-absorption floor mats crafted with water-resistant rubber/TPR backing. Engineered for high-traffic entryways, bathrooms, living spaces, and offices.',
      img: doormatImg,
      tag: 'Factory Direct Price',
      specs: 'Anti-Skid TPR / Microfiber'
    }
  ];

  const trustPillars = [
    {
      icon: <FiCheckCircle className="text-2xl text-accent" />,
      title: 'Honest Dealing, No False Promises',
      desc: 'We tell you the exact quality and GSM you will receive. No exaggerated claims, no bait-and-switch sampling.'
    },
    {
      icon: <FiClock className="text-2xl text-accent" />,
      title: 'On-Time Dispatch',
      desc: 'When we commit a dispatch date, we honor it. Our streamlined Panipat logistics ensure zero dispatch lags for your orders.'
    },
    {
      icon: <FiDollarSign className="text-2xl text-accent" />,
      title: 'Best B2B Wholesale Price',
      desc: "We don't deal in retail, strictly bulk supply at genuine wholesale rates so your retail margins remain strong."
    },
    {
      icon: <FaIndustry className="text-2xl text-accent" />,
      title: 'Factory Price, No Middleman',
      desc: 'Direct mill sourcing from the heart of Panipat removes trading intermediaries, offering you true factory-floor pricing.'
    },
    {
      icon: <FiLayers className="text-2xl text-accent" />,
      title: 'Consistent Quality in Every Lot',
      desc: 'From the first sample to a full truckload, our products maintain uniform yarn density, color vibrancy, and stitching integrity.'
    },
    {
      icon: <FiTruck className="text-2xl text-accent" />,
      title: 'Timely Delivery Across India',
      desc: 'Direct transport tie-ups with reputable B2B logistics and freight corridors ensure prompt door or godown delivery nationwide.'
    },
    {
      icon: <FiHeadphones className="text-2xl text-accent" />,
      title: 'Dedicated Support for Bulk Orders',
      desc: 'Priority order tracking, customized lot packaging, and dedicated assistance for wholesalers, distributors, and traders.'
    }
  ];

  const companyDetails = [
    { label: 'Nature of Business', value: 'Manufacturers, Wholesaler, Trader, Distributor', icon: <FaIndustry className="text-accent" /> },
    { label: 'Management', value: 'Mr. M KARAM (FOUNDER & MD)', highlight: true, icon: <FaHandshake className="text-accent" /> },
    { label: 'Years of Establishment', value: '2022', icon: <FiClock className="text-accent" /> },
    { label: 'Number of Employees', value: '12 - 20 Skilled Professionals', icon: <FiAward className="text-accent" /> },
    { 
      label: 'GST NO', 
      value: '06HIHPK3932B1ZH', 
      isCopyable: true, 
      key: 'gst', 
      badge: 'Active & Verified',
      icon: <FiFileText className="text-accent" /> 
    },
    { 
      label: 'MSME NO', 
      value: 'UDYAM-HR-14-006348', 
      isCopyable: true, 
      key: 'msme', 
      badge: 'Registered Enterprise',
      icon: <FiShield className="text-accent" /> 
    },
    { label: 'Annual Turnover', value: '35 to 50 lacs Approx', icon: <FiDollarSign className="text-accent" /> },
    { label: 'Legal Status of Firm', value: 'Proprietorship', icon: <FiCheckCircle className="text-accent" /> }
  ];

  return (
    <div className="bg-[#fcfbf9] min-h-screen text-gray-800">
      
      {/* 1. Header Hero Banner */}
      <section className="relative bg-primary text-white py-20 md:py-24 overflow-hidden text-center">
        {/* Subtle decorative background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,92,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-accent/30 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            B2B Textile Manufacturer & Wholesaler • Panipat
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-wider mb-6 text-white">
            About <span className="text-accent">Z K BROTHER</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-3xl mx-auto">
            Z K BROTHER is a trusted name born in the heart of <span className="text-accent font-semibold">Panipat - India's textile Hub</span>. We bridge direct mill sourcing with uncompromising quality and reliable on-time delivery.
          </p>

          {/* Quick Credibility Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-gray-300">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <FiCheckCircle className="text-accent" />
              <span>Direct Mill Sourcing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <FiTruck className="text-accent" />
              <span>Pan-India Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <FaHandshake className="text-accent" />
              <span>300+ Active B2B Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Meet The Founder & The Brand Story */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Founder Photo & Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative Corner Accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-accent rounded-tl-sm pointer-events-none z-20"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-accent rounded-br-sm pointer-events-none z-20"></div>

              {/* Photo Card */}
              <div className="relative rounded-sm overflow-hidden border-2 border-primary/20 shadow-2xl bg-white group">
                <img 
                  src={ownerImg} 
                  alt="Mr. M. KARAM - Founder of Z K BROTHER" 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Founder Badge Overlay at Bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary via-primary/90 to-transparent p-5 pt-12 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-accent font-bold uppercase tracking-widest">Founder & MD</p>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">Mr. M. KARAM</h3>
                      <p className="text-xs text-gray-300 font-medium">Z K BROTHER • Est. 2022</p>
                    </div>
                    <div className="p-2.5 rounded-full bg-accent text-primary shadow-lg">
                      <FaHandshake className="text-xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Founder Contact Action Bar */}
              <div className="mt-4 p-4 bg-white border border-gray-200 rounded-sm shadow-xs flex items-center justify-between gap-3">
                <div className="text-left">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Direct Line to Founder</span>
                  <span className="text-sm font-bold text-primary">+91 98965 07049</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+919896507049"
                    className="p-2.5 bg-primary text-white rounded-sm hover:bg-accent hover:text-primary transition-colors text-sm shadow-xs flex items-center gap-1.5 font-bold"
                    title="Call Founder"
                  >
                    <FiPhoneCall />
                    <span className="hidden sm:inline text-xs">Call</span>
                  </a>
                  <a
                    href="https://wa.me/919896507049?text=Hello%20Mr.%20M.%20Karam,%20I%20am%20contacting%20you%20regarding%20bulk%20textiles%20for%20Z%20K%20BROTHER."
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-[#25D366] text-white rounded-sm hover:bg-[#20ba59] transition-colors text-sm shadow-xs flex items-center gap-1.5 font-bold"
                    title="WhatsApp Founder"
                  >
                    <FaWhatsapp />
                    <span className="hidden sm:inline text-xs">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder's Message & Core Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-5 text-gray-700"
          >
            <div className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-[0.25em] uppercase">
              <span className="h-[2px] w-6 bg-accent"></span>
              Meet The Face Behind Z K BROTHER
            </div>

            <h2 className="text-2xl sm:text-3.5xl font-serif font-bold text-primary leading-tight uppercase">
              "In B2B Trading, Everyone Gives You A Rate, But We Give You The Right Quality And On-Time Delivery."
            </h2>

            <div className="w-16 h-[3px] bg-accent"></div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed font-medium">
              <p className="bg-amber-50/60 border-l-4 border-accent p-4 rounded-r-sm text-gray-800 font-semibold">
                I am <span className="text-primary font-bold">Mr. M.KARAM (FOUNDER OF Z K BROTHER)</span>. I started this company in 2022 with a simple idea: In B2B trading, everyone gives you a rate, but we give you the right quality and on-time delivery.
              </p>

              <p>
                In the last <strong className="text-primary">4 years</strong>, with this honesty, we have grown from Panipat to serving <strong className="text-primary">300+ B2B clients, wholesalers, Distributors and Traders across India</strong>. Because of our direct mill sourcing, we offer you the best factory price in the market.
              </p>

              {/* Founder's Emotional Commitment Quote */}
              <div className="relative p-5 sm:p-6 bg-white border border-accent/30 rounded-sm shadow-sm mt-3">
                <div className="text-accent text-3xl font-serif absolute -top-3 left-4 bg-white px-2">“</div>
                <p className="italic text-gray-800 text-sm sm:text-base leading-relaxed pt-2">
                  If you are looking for a trading partner who treats your order as his own, you are at the right place. In B2B, people don't connect with a company, they connect with a person. If you ever face any issue with your order, you can call us directly. This business is not just our work, it's our reputation.
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-gray-150 pt-3">
                  <span className="font-serif font-bold text-primary text-sm uppercase">Mr. M. KARAM</span>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">FOUNDER & MD, Z K BROTHER</span>
                </div>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/bulk-orders"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-sm font-semibold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md"
              >
                <span>Request B2B Bulk Quote</span>
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Stats Counter Section */}
      <Stats />

      {/* 4. What We Deal In - 5 High-Demand Panipat Products */}
      <section className="py-20 bg-white border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-2">
              Panipat Direct Mill Specialization
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-primary uppercase tracking-wide">
              What We Deal In
            </h2>
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="h-[1px] w-12 bg-accent"></span>
              <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
              <span className="h-[1px] w-12 bg-accent"></span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              We are specialists in <strong className="text-primary">5 high-demand Panipat products</strong>, offering direct mill sourcing, factory rates, and reliable bulk supply for wholesalers and traders across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dealProducts.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-[#fcfbf9] border border-gray-200/80 rounded-sm overflow-hidden flex flex-col shadow-2xs hover:shadow-md transition-all duration-300 group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image Frame */}
                <div className="relative aspect-16/10 overflow-hidden bg-gray-100 border-b border-gray-200/60">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-xs uppercase tracking-wider backdrop-blur-xs">
                    0{item.id}. Specialty
                  </div>
                  <div className="absolute top-3 right-3 bg-accent text-primary text-[10.5px] font-extrabold px-2.5 py-1 rounded-xs uppercase tracking-wide shadow-sm">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-primary uppercase tracking-wide group-hover:text-accent-dark transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-0.5 mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs">
                    <span className="font-semibold text-gray-500">Spec: {item.specs}</span>
                    <a
                      href={`https://wa.me/919896507049?text=Hi!%20I%20am%20interested%20in%20wholesale%20rates%20for%20${encodeURIComponent(item.title)}%20from%20Z%20K%20BROTHER.`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-bold hover:text-accent flex items-center gap-1 uppercase tracking-wider text-[11px]"
                    >
                      <span>Inquire Rate</span>
                      <FiArrowRight />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4.5 High-Converting Wholesale Rate & Catalog Lead Box */}
      <section className="py-12 bg-primary text-white relative overflow-hidden border-y-2 border-accent/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,92,0.18),transparent_70%)] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-white/5 border border-white/15 backdrop-blur-md rounded-sm p-6 sm:p-10 shadow-2xl">
            
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
                <FiDownload className="text-sm" />
                Instant B2B Price Dispatch
              </div>
              <h3 className="text-2xl sm:text-3.5xl font-serif font-black uppercase tracking-wide text-white">
                Get 2026 Wholesale Rate List & Catalog
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-2 leading-relaxed">
                Enter your WhatsApp number to receive our genuine factory rate card, MOQ details, and bulk packing specs directly on WhatsApp within 5 minutes.
              </p>
            </div>

            {leadSuccess ? (
              <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-sm p-6 text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl">
                  <FiCheckCircle />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Request Received Successfully!</h4>
                <p className="text-xs text-gray-200 max-w-md">
                  Opening WhatsApp to connect with Mr. M. KARAM. If it didn't open automatically, click the button below:
                </p>
                <a
                  href={`https://wa.me/919896507049?text=${encodeURIComponent(
                    `Hello Mr. M. Karam, I am ${leadForm.name || 'a wholesale buyer'}. Please send me the 2026 Wholesale Rate Card & Catalog for ${leadForm.category}. My contact number is ${leadForm.phone}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Chat On WhatsApp Now</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Field 1: Name / Firm Name */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Name / Firm Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent text-sm" />
                      <input
                        type="text"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar / Balaji Handlooms"
                        className="w-full bg-white/10 border border-white/20 rounded-xs pl-10 pr-3 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-accent focus:bg-white/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 2: WhatsApp Number */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      WhatsApp Mobile No. <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <FiSmartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent text-sm" />
                      <input
                        type="tel"
                        required
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        placeholder="e.g. 98965 07049"
                        className="w-full bg-white/10 border border-white/20 rounded-xs pl-10 pr-3 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-accent focus:bg-white/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 3: Product Interest */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Product Line Needed
                    </label>
                    <div className="relative">
                      <FiPackage className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent text-sm" />
                      <select
                        value={leadForm.category}
                        onChange={(e) => setLeadForm({ ...leadForm, category: e.target.value })}
                        className="w-full bg-[#0B2144] border border-white/20 rounded-xs pl-10 pr-3 py-2.5 text-xs text-white focus:outline-hidden focus:border-accent transition-all cursor-pointer"
                      >
                        <option value="All 5 High-Demand Products">All 5 Products (Full Catalog)</option>
                        <option value="Blankets (All Types)">1. Blankets (All Types)</option>
                        <option value="Double & Single Bedsheets">2. Double & Single Bedsheets</option>
                        <option value="Curtains">3. Curtains</option>
                        <option value="Pillow Covers">4. Pillow Covers</option>
                        <option value="Paydan / Doormats">5. Paydan / Doormats</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4 text-[11px] text-gray-300">
                    <span className="flex items-center gap-1.5"><FiCheckCircle className="text-accent" /> 100% Genuine Mill Price</span>
                    <span className="flex items-center gap-1.5"><FiCheckCircle className="text-accent" /> Sample Kits Available</span>
                    <span className="flex items-center gap-1.5"><FiCheckCircle className="text-accent" /> Zero Brokerage</span>
                  </div>

                  <button
                    type="submit"
                    disabled={leadSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark text-primary px-8 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 cursor-pointer disabled:opacity-70"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>{leadSubmitting ? 'Sending Request...' : 'Send Wholesale Rates On WhatsApp'}</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* 5. Why Clients Trust Us? - 7 Pillars */}
      <section className="py-20 bg-[#FAF9F6] border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-2">
              Uncompromising Standards & Ethics
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-primary uppercase tracking-wide">
              Why Clients Trust Us?
            </h2>
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="h-[1px] w-12 bg-accent"></span>
              <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
              <span className="h-[1px] w-12 bg-accent"></span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              In wholesale trading, trust is earned through consistent execution. Here is why over 300+ B2B partners across India make Z K BROTHER their preferred supply partner:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-6 bg-white border border-gray-200/90 rounded-sm shadow-2xs hover:shadow-md hover:border-accent/50 transition-all duration-300 flex flex-col justify-between ${
                  idx === 6 ? 'sm:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-primary/5 border border-primary/10 flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-primary uppercase tracking-wide mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-[11px] font-bold text-accent uppercase tracking-wider">
                  <FiCheck className="text-base" />
                  <span>Guaranteed Commitment</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Company Profile & Statutory Credentials Table */}
      <section className="py-20 bg-white border-t border-gray-150">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-2">
              Corporate Governance & Compliance
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-primary uppercase tracking-wide">
              Company Profile & Credentials
            </h2>
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="h-[1px] w-12 bg-accent"></span>
              <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
              <span className="h-[1px] w-12 bg-accent"></span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Registered corporate details for GST billing, formal distributor agreements, and institutional vendor onboarding.
            </p>
          </div>

          {/* Official Verification Table Card */}
          <div className="bg-[#fcfbf9] border border-gray-200 rounded-sm overflow-hidden shadow-xs">
            {/* Header of Table */}
            <div className="bg-primary text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent text-primary rounded-xs">
                  <FiShield className="text-lg" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold tracking-wide">Z K BROTHER</h3>
                  <p className="text-[11px] text-gray-300">Registered Textile Enterprise • Panipat, Haryana</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/20 border border-green-400/40 text-green-300 text-xs font-bold rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Govt. Verified GST & MSME
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-200/80">
              {companyDetails.map((item, idx) => (
                <div 
                  key={idx}
                  className={`grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-4.5 items-center gap-2 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF9F6]'
                  } hover:bg-amber-50/40`}
                >
                  {/* Label */}
                  <div className="sm:col-span-5 flex items-center gap-2.5">
                    <span className="p-1.5 bg-gray-100 rounded-xs text-sm">
                      {item.icon}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="sm:col-span-7 flex items-center justify-between gap-3">
                    <span className={`text-xs sm:text-sm font-semibold ${
                      item.highlight ? 'text-primary font-bold' : 'text-gray-800'
                    }`}>
                      {item.value}
                    </span>

                    {/* Copy action if GST or MSME */}
                    {item.isCopyable && (
                      <div className="flex items-center gap-2 shrink-0">
                        {item.badge && (
                          <span className="hidden md:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {item.badge}
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => handleCopy(item.value, item.key)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 bg-gray-100 hover:bg-accent hover:text-primary text-gray-700 rounded-xs border border-gray-200 transition-all cursor-pointer shadow-2xs"
                          title="Copy to clipboard"
                        >
                          {copiedKey === item.key ? (
                            <>
                              <FiCheck className="text-emerald-600" />
                              <span className="text-emerald-700">Copied!</span>
                            </>
                          ) : (
                            <>
                              <FiCopy />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Address Footer note inside table */}
            <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-600 flex items-start gap-2.5">
              <FiMapPin className="text-accent text-base shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-800">Factory / Godown Location:</strong> Plot No-199, Street No-03, Near Mahadev Exports, Huda Industrial Area, Panipat - 132103, Haryana, India.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Comprehensive Bottom Wholesale Inquiry Form & Founder Contact */}
      <section className="py-20 bg-primary text-white relative overflow-hidden border-t-2 border-accent/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,92,0.15),transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-2">
              Direct Mill Procurement
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black uppercase tracking-wide text-white">
              Wholesale Inquiry & Bulk Rate Request
            </h2>
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="h-[1px] w-12 bg-accent"></span>
              <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
              <span className="h-[1px] w-12 bg-accent"></span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
              Connect directly with <strong className="text-accent">Mr. M. KARAM (Founder & MD)</strong>. Fill your requirements below to receive customized factory rates, MOQ details, and sample kits directly on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Interactive Wholesale Lead Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white/5 border border-white/15 backdrop-blur-md rounded-sm p-6 sm:p-8 shadow-2xl">
              
              <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wide">
                    Submit Your Requirement
                  </h3>
                  <p className="text-[11px] text-gray-300">Fast response directly from the founder's desk</p>
                </div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent">
                  Zero Middlemen
                </span>
              </div>

              {bottomSuccess ? (
                <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-sm p-8 text-center flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl">
                    <FiCheckCircle />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-gray-200 max-w-md leading-relaxed">
                    Aapki inquiry successfully record ho gayi hai aur WhatsApp automatically open ho raha hai. Agar WhatsApp nahi khula toh niche diye gaye button par click karein:
                  </p>
                  <a
                    href={`https://wa.me/919896507049?text=${encodeURIComponent(
                      `Hello Mr. M. Karam, I am ${bottomForm.name || 'a wholesale buyer'} from ${bottomForm.city || 'India'}. I need a wholesale quotation for ${bottomForm.category}${bottomForm.quantity ? ` (Quantity: ${bottomForm.quantity})` : ''}. ${bottomForm.message ? `Details: ${bottomForm.message}.` : ''} My WhatsApp contact is ${bottomForm.phone}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Open WhatsApp Chat With Founder</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleBottomSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name / Firm */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        Your Name / Firm Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={bottomForm.name}
                        onChange={(e) => setBottomForm({ ...bottomForm, name: e.target.value })}
                        placeholder="e.g. Rahul Gupta / Gupta Handlooms"
                        className="w-full bg-white/10 border border-white/20 rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-accent focus:bg-white/15 transition-all"
                      />
                    </div>

                    {/* WhatsApp Phone */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        WhatsApp Mobile No. <span className="text-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={bottomForm.phone}
                        onChange={(e) => setBottomForm({ ...bottomForm, phone: e.target.value })}
                        placeholder="e.g. 98965 07049"
                        className="w-full bg-white/10 border border-white/20 rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-accent focus:bg-white/15 transition-all"
                      />
                    </div>

                    {/* City / Mandi */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        Your City / Mandi <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={bottomForm.city}
                        onChange={(e) => setBottomForm({ ...bottomForm, city: e.target.value })}
                        placeholder="e.g. Chandni Chowk Delhi, Surat, Jaipur..."
                        className="w-full bg-white/10 border border-white/20 rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-accent focus:bg-white/15 transition-all"
                      />
                    </div>

                    {/* Product of Interest */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        Product of Interest
                      </label>
                      <select
                        value={bottomForm.category}
                        onChange={(e) => setBottomForm({ ...bottomForm, category: e.target.value })}
                        className="w-full bg-[#0B2144] border border-white/20 rounded-xs px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:border-accent transition-all cursor-pointer"
                      >
                        <option value="All 5 High-Demand Products">All 5 Products (Full Catalog)</option>
                        <option value="Blankets (All Types)">1. Blankets (All Types)</option>
                        <option value="Double & Single Bedsheets">2. Double & Single Bedsheets</option>
                        <option value="Curtains">3. Curtains</option>
                        <option value="Pillow Covers">4. Pillow Covers</option>
                        <option value="Paydan / Doormats">5. Paydan / Doormats</option>
                      </select>
                    </div>

                    {/* Approx Quantity */}
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        Approx Requirement / Quantity (Optional)
                      </label>
                      <input
                        type="text"
                        value={bottomForm.quantity}
                        onChange={(e) => setBottomForm({ ...bottomForm, quantity: e.target.value })}
                        placeholder="e.g. 200 pcs blankets, 50 sets bedsheets, full transport lot..."
                        className="w-full bg-white/10 border border-white/20 rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-accent focus:bg-white/15 transition-all"
                      />
                    </div>

                    {/* Specific Requirement Notes */}
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        Requirement Details / Any Question (Optional)
                      </label>
                      <textarea
                        rows="2"
                        value={bottomForm.message}
                        onChange={(e) => setBottomForm({ ...bottomForm, message: e.target.value })}
                        placeholder="Tell us about specific sizes, GSM, custom packaging, or sample delivery needs..."
                        className="w-full bg-white/10 border border-white/20 rounded-xs px-3.5 py-2 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-accent focus:bg-white/15 transition-all resize-none"
                      ></textarea>
                    </div>

                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={bottomSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark text-primary py-3.5 rounded-sm font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-[1.01] cursor-pointer disabled:opacity-70"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>{bottomSubmitting ? 'Submitting Inquiry...' : 'Submit Wholesale Inquiry & Get Instant Rates'}</span>
                    </button>
                    <p className="text-[10px] text-gray-400 text-center mt-2.5">
                      🔒 Your details are 100% private. We only send genuine factory wholesale rate cards.
                    </p>
                  </div>
                </form>
              )}

            </div>

            {/* Right: Direct Founder Contact & Panipat Hub Card (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Executive Founder Card */}
              <div className="bg-white/5 border border-accent/30 rounded-sm p-6 backdrop-blur-md">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-4">
                  <img
                    src={ownerImg}
                    alt="Mr. M. KARAM"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent shadow-md shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">Founder & MD</span>
                    <h4 className="font-serif text-lg font-bold text-white">Mr. M. KARAM</h4>
                    <p className="text-xs text-gray-300">Z K BROTHER • Panipat</p>
                  </div>
                </div>

                <p className="italic text-xs text-gray-300 leading-relaxed mb-5">
                  "In B2B, people don't connect with a company, they connect with a person. If you ever face any issue or need custom factory rates, call me directly."
                </p>

                <div className="flex flex-col gap-2.5">
                  <a
                    href="tel:+919896507049"
                    className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-primary py-3 px-4 rounded-sm font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                  >
                    <FiPhoneCall className="text-sm" />
                    <span>Call Founder: +91 98965 07049</span>
                  </a>

                  <a
                    href="https://wa.me/919896507049?text=Hello%20Mr.%20M.%20Karam,%20I%20am%20interested%20in%20bulk%20textiles%20from%20Z%20K%20BROTHER."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-sm font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>WhatsApp Direct RFQ</span>
                  </a>
                </div>
              </div>

              {/* Manufacturing Plant Location Card */}
              <div className="bg-white/5 border border-white/10 rounded-sm p-6 text-xs text-gray-300 space-y-3">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-accent text-base shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wider mb-1">Panipat Manufacturing Facility</h5>
                    <p className="leading-relaxed">
                      Plot No-199, Street No-03, Near Mahadev Exports, Huda Industrial Area, Panipat - 132103, Haryana, India.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[11px]">
                  <span className="text-gray-400">GST: <strong className="text-white">06HIHPK3932B1ZH</strong></span>
                  <span className="text-gray-400">MSME: <strong className="text-white">UDYAM-HR-14-006348</strong></span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
