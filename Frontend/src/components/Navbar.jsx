import { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown,
  FiSliders,
  FiPhoneCall,
  FiArrowRight
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';

const logoImg = '/logo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileHandloomOpen, setMobileHandloomOpen] = useState(false);
  const [mobileGarmentsOpen, setMobileGarmentsOpen] = useState(false);

  const { wishlist, getCartCount, compare, setCartDrawerOpen } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll state for navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery('');
    setIsOpen(false);
  };

  const handloomCategories = [
    { name: 'Caspian Fitted Bedsheets', filter: 'Bedsheets', desc: '100% pure combed cotton with elastic perimeter' },
    { name: 'Fleece & Mink Blankets', filter: 'Blankets', desc: 'Heavy double bed warm embossed blankets' },
    { name: 'Printed Cotton Sets', filter: 'Bedsheets', desc: 'Vibrant colorfast heritage double bedsheets' },
  ];

  const garmentCategories = [
    { name: 'Designer Ladies Suits', filter: 'Ladies Suits', desc: 'Mul Cotton & Silk hand-embroidered boutique sets' },
    { name: 'Export Denim Jeans', filter: 'Jeans', desc: 'Stretch heavyweight cotton-spandex denim' },
    { name: 'Casual Linen Shirts', filter: 'Shirts', desc: 'Breathable 100% cotton-linen woven shirts' },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative py-1 text-[11px] xl:text-xs font-bold tracking-wider uppercase transition-colors duration-200 border-b-2 ${
      isActive 
        ? 'text-accent border-accent' 
        : 'text-gray-700 hover:text-accent border-transparent'
    }`;

  return (
    <header className="w-full flex flex-col z-40 sticky top-0 bg-white">
      
      {/* 1. Executive Top Utility Strip */}
      <div className="w-full bg-[#0B2144] text-white py-1.5 px-4 md:px-8 border-b border-accent/20 text-[10px] md:text-[11px] tracking-wide select-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          
          {/* Left Brand Badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-accent font-extrabold uppercase tracking-widest text-[9.5px] md:text-[10.5px]">
              PANIPAT DIRECT MANUFACTURER &amp; EXPORTER
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="text-gray-300 hidden md:inline text-[10px]">
              Wholesale Factory MOQ Rates • Worldwide Shipping
            </span>
          </div>

          {/* Right Direct Hotline & WhatsApp */}
          <div className="flex items-center gap-4 text-gray-200">
            <a
              href="https://wa.me/919050555855?text=Hello%20JK%20Brothers,%20I%20am%20interested%20in%20your%20wholesale%20catalogue."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-green-400 transition-colors duration-200 cursor-pointer"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp className="text-green-400 text-xs sm:text-sm" />
              <span className="font-semibold hidden sm:inline text-[10.5px]">WhatsApp RFQ</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href="tel:+919050555855"
              className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors duration-200 cursor-pointer"
              title="Direct Call"
            >
              <FiPhoneCall className="text-accent text-xs" />
              <span className="font-semibold text-[10.5px]">+91 90505 55855</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Executive Header Bar */}
      <div 
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-gray-100 ${
          scrolled ? 'py-1.5 shadow-sm' : 'py-2 sm:py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center gap-2 lg:gap-4 xl:gap-6">

          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center shrink-0 cursor-pointer group py-0.5 focus:outline-hidden"
            title="JK Brothers Home"
          >
            <img
              src={logoImg}
              alt="JK Brothers Textiles Panipat"
              className={`${
                scrolled ? 'h-8 sm:h-9 lg:h-10' : 'h-9 sm:h-10 lg:h-11'
              } w-auto object-contain transition-all duration-300 group-hover:scale-105`}
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6.5 shrink-0">
            <NavLink to="/" className={navLinkClass} end>
              HOME
            </NavLink>

            {/* Handloom Dropdown (with seamless hover bridge) */}
            <div className="relative group py-1">
              <NavLink
                to="/handloom"
                className={({ isActive }) => `flex items-center gap-1 text-[11px] xl:text-xs font-bold tracking-wider uppercase transition-colors duration-200 border-b-2 ${
                  isActive ? 'text-accent border-accent' : 'text-gray-700 hover:text-accent border-transparent'
                }`}
              >
                <span>HANDLOOM</span>
                <FiChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-accent" />
              </NavLink>

              {/* Dropdown Card with hover bridge */}
              <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-md shadow-xl border border-gray-100 p-2.5 flex flex-col gap-1">
                  <div className="px-3 py-1 text-[9px] font-black tracking-widest text-accent uppercase border-b border-gray-100">
                    Handloom Factory Products
                  </div>
                  {handloomCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      to={`/handloom?sub=${cat.filter}`}
                      className="group/item block px-3 py-2 rounded-sm hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-xs font-bold text-gray-800 group-hover/item:text-accent transition-colors">
                        {cat.name}
                      </div>
                      <div className="text-[10px] text-gray-400 font-medium truncate">
                        {cat.desc}
                      </div>
                    </Link>
                  ))}
                  <div className="pt-1 mt-1 border-t border-gray-100">
                    <Link
                      to="/handloom"
                      className="block text-center text-[10px] font-extrabold text-primary hover:text-accent uppercase tracking-wider py-1"
                    >
                      View All Handloom &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Garments Dropdown (with seamless hover bridge) */}
            <div className="relative group py-1">
              <NavLink
                to="/garments"
                className={({ isActive }) => `flex items-center gap-1 text-[11px] xl:text-xs font-bold tracking-wider uppercase transition-colors duration-200 border-b-2 ${
                  isActive ? 'text-accent border-accent' : 'text-gray-700 hover:text-accent border-transparent'
                }`}
              >
                <span>GARMENTS</span>
                <FiChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-accent" />
              </NavLink>

              {/* Dropdown Card with hover bridge */}
              <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-md shadow-xl border border-gray-100 p-2.5 flex flex-col gap-1">
                  <div className="px-3 py-1 text-[9px] font-black tracking-widest text-accent uppercase border-b border-gray-100">
                    Wholesale Apparel Line
                  </div>
                  {garmentCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      to={`/garments?sub=${cat.filter}`}
                      className="group/item block px-3 py-2 rounded-sm hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-xs font-bold text-gray-800 group-hover/item:text-accent transition-colors">
                        {cat.name}
                      </div>
                      <div className="text-[10px] text-gray-400 font-medium truncate">
                        {cat.desc}
                      </div>
                    </Link>
                  ))}
                  <div className="pt-1 mt-1 border-t border-gray-100">
                    <Link
                      to="/garments"
                      className="block text-center text-[10px] font-extrabold text-primary hover:text-accent uppercase tracking-wider py-1"
                    >
                      View All Garments &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>


            <NavLink to="/catalogue" className={navLinkClass}>
              CATALOGUE
            </NavLink>

            <NavLink to="/bulk-orders" className={navLinkClass}>
              BULK ORDERS
            </NavLink>

            <NavLink to="/about-us" className={navLinkClass}>
              ABOUT US
            </NavLink>

            <NavLink to="/contact-us" className={navLinkClass}>
              CONTACT
            </NavLink>
          </nav>

          {/* Right Action Icons & Search */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 text-gray-700 shrink-0">
            
            {/* Desktop Search Input */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex relative items-center">
              <input
                type="text"
                placeholder="Search bedsheets, suits..."
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-8 pr-3 py-1.5 bg-gray-50 focus:bg-white border text-xs text-gray-800 rounded-full focus:outline-hidden transition-all duration-300 ${
                  isSearchFocused 
                    ? 'w-48 lg:w-56 border-accent shadow-sm' 
                    : 'w-32 lg:w-40 border-gray-200 hover:border-gray-300'
                }`}
              />
              <button
                type="submit"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-accent transition-colors cursor-pointer"
                title="Search Products"
              >
                <FiSearch className="text-xs" />
              </button>
            </form>

            {/* Wishlist Button */}
            <Link 
              to="/wishlist" 
              className="relative p-2 rounded-full hover:bg-gray-100 hover:text-accent transition-colors duration-200 cursor-pointer" 
              title="Wishlist"
            >
              <FiHeart className="text-lg" />
              {wishlist.length > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-accent text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Compare Button */}
            <Link 
              to="/compare" 
              className="hidden sm:inline-flex relative p-2 rounded-full hover:bg-gray-100 hover:text-accent transition-colors duration-200 cursor-pointer" 
              title="Compare Products"
            >
              <FiSliders className="text-lg" />
              {compare.length > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-accent text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  {compare.length}
                </span>
              )}
            </Link>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative p-2 rounded-full hover:bg-gray-100 hover:text-accent transition-colors duration-200 cursor-pointer focus:outline-hidden"
              title="Wholesale Cart"
            >
              <FiShoppingBag className="text-lg" />
              {getCartCount() > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#0B2144] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* My Orders Button */}
            <Link 
              to="/orders" 
              className="hidden sm:inline-flex p-2 rounded-full hover:bg-gray-100 hover:text-accent transition-colors duration-200 cursor-pointer" 
              title="Order History"
            >
              <FiUser className="text-lg" />
            </Link>

            {/* Request Quote CTA Button (Desktop) */}
            <Link
              to="/bulk-orders"
              className="hidden xl:inline-flex items-center gap-1.5 bg-[#0B2144] hover:bg-accent text-white font-bold text-[10.5px] tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer ml-1"
            >
              <span>GET QUOTE</span>
              <FiArrowRight className="text-xs" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 text-gray-800 hover:text-accent transition-colors cursor-pointer focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>

          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Drawer (Full Responsive & Accessible) */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-b border-gray-200 px-4 py-5 flex flex-col gap-4 shadow-xl z-50">
          
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Search bedsheets, suits, denim..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 text-xs rounded-full text-gray-800 focus:outline-hidden focus:border-accent focus:bg-white transition-colors"
            />
            <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiSearch className="text-sm" />
            </button>
          </form>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 text-xs font-bold tracking-wider text-gray-800 uppercase">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className="py-2 px-3 rounded-md hover:bg-gray-50 hover:text-accent transition-colors"
            >
              HOME
            </Link>

            {/* Handloom Accordion */}
            <div className="flex flex-col">
              <button 
                type="button"
                onClick={() => setMobileHandloomOpen(!mobileHandloomOpen)}
                className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50 text-left cursor-pointer"
              >
                <span className="text-accent font-extrabold">HANDLOOM COLLECTION</span>
                <FiChevronDown className={`text-xs transition-transform ${mobileHandloomOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileHandloomOpen && (
                <div className="pl-6 flex flex-col gap-1.5 py-1 text-gray-600 font-semibold">
                  {handloomCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      to={`/handloom?sub=${cat.filter}`}
                      onClick={() => setIsOpen(false)}
                      className="py-1 hover:text-accent text-[11px]"
                    >
                      {cat.name}
                    </Link>
                  ))}
                  <Link
                    to="/handloom"
                    onClick={() => setIsOpen(false)}
                    className="py-1 text-accent font-bold text-[11px]"
                  >
                    View All Handloom &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Garments Accordion */}
            <div className="flex flex-col">
              <button 
                type="button"
                onClick={() => setMobileGarmentsOpen(!mobileGarmentsOpen)}
                className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50 text-left cursor-pointer"
              >
                <span className="text-accent font-extrabold">GARMENTS COLLECTION</span>
                <FiChevronDown className={`text-xs transition-transform ${mobileGarmentsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileGarmentsOpen && (
                <div className="pl-6 flex flex-col gap-1.5 py-1 text-gray-600 font-semibold">
                  {garmentCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      to={`/garments?sub=${cat.filter}`}
                      onClick={() => setIsOpen(false)}
                      className="py-1 hover:text-accent text-[11px]"
                    >
                      {cat.name}
                    </Link>
                  ))}
                  <Link
                    to="/garments"
                    onClick={() => setIsOpen(false)}
                    className="py-1 text-accent font-bold text-[11px]"
                  >
                    View All Garments &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/new-arrivals" 
              onClick={() => setIsOpen(false)} 
              className="py-2 px-3 rounded-md hover:bg-gray-50 hover:text-accent flex items-center justify-between transition-colors"
            >
              <span>NEW ARRIVALS</span>
              <span className="px-1.5 py-0.5 text-[8.5px] font-black bg-accent text-white rounded-full">
                NEW
              </span>
            </Link>

            <Link 
              to="/catalogue" 
              onClick={() => setIsOpen(false)} 
              className="py-2 px-3 rounded-md hover:bg-gray-50 hover:text-accent transition-colors"
            >
              CATALOGUE
            </Link>

            <Link 
              to="/bulk-orders" 
              onClick={() => setIsOpen(false)} 
              className="py-2 px-3 rounded-md hover:bg-gray-50 hover:text-accent transition-colors"
            >
              BULK RFQ ORDERS
            </Link>

            <Link 
              to="/about-us" 
              onClick={() => setIsOpen(false)} 
              className="py-2 px-3 rounded-md hover:bg-gray-50 hover:text-accent transition-colors"
            >
              ABOUT US
            </Link>

            <Link 
              to="/contact-us" 
              onClick={() => setIsOpen(false)} 
              className="py-2 px-3 rounded-md hover:bg-gray-50 hover:text-accent transition-colors"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Mobile Bottom Utility Shortcuts */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-700">
            <Link
              to="/orders"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 hover:text-accent"
            >
              <FiUser />
              <span>My Orders</span>
            </Link>
            <a
              href="https://wa.me/919050555855"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-green-600 hover:text-green-700"
            >
              <FaWhatsapp className="text-sm" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

        </div>
      )}

    </header>
  );
}
