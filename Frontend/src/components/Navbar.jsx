import { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  FiSearch, 
  FiHeart, 
  FiUser, 
  FiShoppingBag, 
  FiMenu, 
  FiX, 
  FiChevronDown,
  FiSliders,
  FiPhoneCall
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';

const logoImg = '/logo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const { wishlist, getCartCount, compare, setCartDrawerOpen } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  const handloomCategories = [
    { name: 'Fitted Bedsheets', filter: 'Bedsheets' },
    { name: 'Fleece & Mink Blankets', filter: 'Blankets' },
  ];

  const garmentCategories = [
    { name: 'Ladies Designer Suits', filter: 'Ladies Suits' },
    { name: 'Export Denim Jeans', filter: 'Jeans' },
    { name: 'Casual & Formal Shirts', filter: 'Shirts' },
  ];

  const navLinkClass = ({ isActive }) => 
    `hover:text-accent transition-colors py-1 relative text-[11px] xl:text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-200 ${
      isActive ? 'text-accent border-b-2 border-accent pb-0.5' : 'text-gray-800'
    }`;

  return (
    <header className="w-full flex flex-col z-50 sticky top-0 bg-white shadow-xs">
      
      {/* 1. Subtle Top Utility Strip */}
      <div className="w-full bg-[#071224] text-white py-1.5 px-4 sm:px-8 border-b border-white/10 text-[10px] md:text-[11px] tracking-wider">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping hidden xs:inline-block"></span>
            <span className="text-accent font-bold uppercase tracking-widest">
              PANIPAT DIRECT MANUFACTURER &amp; EXPORTER
            </span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/70 hidden sm:inline">Wholesale Factory MOQ Rates</span>
          </div>

          <div className="flex items-center gap-4 text-white/80">
            <a 
              href="https://wa.me/919050555855?text=Hello%20JK%20Brothers,%20I%20am%20interested%20in%20wholesale%20catalogue"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
            >
              <FaWhatsapp className="text-green-400 text-xs" />
              <span className="font-semibold hidden sm:inline">WhatsApp Order</span>
            </a>
            <span className="text-white/30 hidden md:inline">|</span>
            <a 
              href="tel:+919050555855"
              className="hidden md:flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <FiPhoneCall className="text-accent text-xs" />
              <span>+91 90505 55855</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Executive Header: Clean Single-Line Balanced Architecture */}
      <div className={`w-full bg-white transition-all duration-300 border-b border-gray-100 ${
        scrolled ? 'py-1.5 shadow-md' : 'py-2 sm:py-2.5'
      }`}>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 flex justify-between items-center gap-4 lg:gap-8">
          
          {/* Brand Logo - Elegantly Proportioned */}
          <Link to="/" className="flex items-center shrink-0 cursor-pointer group">
            <img 
              src={logoImg} 
              alt="ZK Brother Logo" 
              className={`${
                scrolled ? 'h-9 sm:h-10 lg:h-11' : 'h-11 sm:h-12 lg:h-13'
              } w-auto object-contain transition-all duration-300 group-hover:scale-102`} 
            />
          </Link>

          {/* Desktop Navigation Links - Guaranteed Single Line, No Wrapping */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 whitespace-nowrap">
            <NavLink to="/" className={navLinkClass} end>
              HOME
            </NavLink>
            
            {/* Handloom Dropdown */}
            <div className="relative group py-2">
              <NavLink 
                to="/handloom"
                className={({ isActive }) => `flex items-center gap-1 text-[11px] xl:text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-colors ${
                  isActive ? 'text-accent border-b-2 border-accent pb-0.5' : 'text-gray-800 hover:text-accent'
                }`}
              >
                <span>HANDLOOM</span>
                <FiChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180 text-gray-500 group-hover:text-accent" />
              </NavLink>
              <div className="absolute top-full left-0 mt-1 w-52 bg-white text-gray-800 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50 p-2">
                {handloomCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/handloom?sub=${cat.filter}`}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-50 hover:text-accent text-xs font-semibold rounded-xs transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Garments Dropdown */}
            <div className="relative group py-2">
              <NavLink 
                to="/garments"
                className={({ isActive }) => `flex items-center gap-1 text-[11px] xl:text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-colors ${
                  isActive ? 'text-accent border-b-2 border-accent pb-0.5' : 'text-gray-800 hover:text-accent'
                }`}
              >
                <span>GARMENTS</span>
                <FiChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180 text-gray-500 group-hover:text-accent" />
              </NavLink>
              <div className="absolute top-full left-0 mt-1 w-52 bg-white text-gray-800 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50 p-2">
                {garmentCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/garments?sub=${cat.filter}`}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-50 hover:text-accent text-xs font-semibold rounded-xs transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/new-arrivals" className={navLinkClass}>
              <span className="flex items-center gap-1.5">
                NEW ARRIVALS
                <span className="bg-accent/20 text-accent font-black text-[9px] px-1.5 py-0.2 rounded-sm uppercase tracking-normal">
                  HOT
                </span>
              </span>
            </NavLink>

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

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-3 sm:gap-4 xl:gap-5 text-gray-700 whitespace-nowrap">
            
            {/* Search Toggle Button */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-1 hover:text-accent transition-colors cursor-pointer"
              title="Search Products"
              aria-label="Search"
            >
              <FiSearch className="text-xl" />
            </button>

            {/* Wishlist */}
            <Link to="/wishlist" className="hover:text-accent transition-colors relative cursor-pointer p-1" title="Wishlist">
              <FiHeart className="text-xl" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Compare */}
            <Link to="/compare" className="hidden sm:inline-block hover:text-accent transition-colors relative cursor-pointer p-1" title="Compare">
              <FiSliders className="text-xl" />
              {compare.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  {compare.length}
                </span>
              )}
            </Link>

            {/* Shopping Cart Drawer Trigger */}
            <button 
              onClick={() => setCartDrawerOpen(true)} 
              className="hover:text-accent transition-colors relative cursor-pointer focus:outline-hidden p-1" 
              title="Shopping Cart"
            >
              <FiShoppingBag className="text-xl" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* My Orders */}
            <Link to="/orders" className="hidden sm:inline-block hover:text-accent transition-colors cursor-pointer p-1" title="My Orders">
              <FiUser className="text-xl" />
            </Link>

            {/* Quick Quote CTA Button */}
            <Link
              to="/bulk-orders"
              className="hidden xl:inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-primary font-extrabold text-[11px] tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-300 shadow-sm"
            >
              <span>GET QUOTE</span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-primary focus:outline-hidden p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Luxury Dropdown Search Overlay */}
      {isSearchOpen && (
        <div className="w-full bg-gray-50 border-b border-gray-200 py-3 px-4 sm:px-8 shadow-inner animate-fadeIn">
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto relative flex items-center">
            <FiSearch className="absolute left-4 text-gray-400 text-lg" />
            <input 
              type="text" 
              placeholder="Search bedsheets, designer suits, denim, fleece blankets..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full pl-12 pr-10 py-2.5 bg-white border border-gray-300 focus:border-accent rounded-full text-xs sm:text-sm text-gray-800 focus:outline-hidden shadow-xs"
            />
            <button 
              type="button" 
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-4 text-gray-400 hover:text-gray-700 cursor-pointer"
              title="Close search"
            >
              <FiX className="text-lg" />
            </button>
          </form>
        </div>
      )}

      {/* 4. Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-b border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-lg z-50 animate-fadeIn">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input 
              type="text" 
              placeholder="Search bedsheets, suits, jeans..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 text-xs rounded-full text-gray-800 focus:outline-hidden focus:border-accent"
            />
            <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiSearch className="text-sm" />
            </button>
          </form>

          <ul className="flex flex-col gap-3 text-xs font-bold tracking-wider text-gray-800 uppercase">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="block w-full hover:text-accent py-1">
                HOME
              </Link>
            </li>
            <hr className="border-gray-100" />
            
            {/* Handloom */}
            <li>
              <div className="font-black text-accent mb-1 text-[10px] tracking-widest">HANDLOOM COLLECTION</div>
              <div className="pl-3 flex flex-col gap-1.5 text-xs text-gray-600 font-semibold">
                {handloomCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/handloom?sub=${cat.filter}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-accent py-0.5"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </li>
            <hr className="border-gray-100" />

            {/* Garments */}
            <li>
              <div className="font-black text-accent mb-1 text-[10px] tracking-widest">GARMENTS COLLECTION</div>
              <div className="pl-3 flex flex-col gap-1.5 text-xs text-gray-600 font-semibold">
                {garmentCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/garments?sub=${cat.filter}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-accent py-0.5"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </li>
            <hr className="border-gray-100" />

            <li>
              <Link to="/new-arrivals" onClick={() => setIsOpen(false)} className="block w-full hover:text-accent py-1">
                NEW ARRIVALS
              </Link>
            </li>
            <li>
              <Link to="/catalogue" onClick={() => setIsOpen(false)} className="block w-full hover:text-accent py-1">
                CATALOGUE
              </Link>
            </li>
            <li>
              <Link to="/bulk-orders" onClick={() => setIsOpen(false)} className="block w-full hover:text-accent py-1">
                BULK RFQ ORDERS
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={() => setIsOpen(false)} className="block w-full hover:text-accent py-1">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={() => setIsOpen(false)} className="block w-full hover:text-accent py-1">
                CONTACT US
              </Link>
            </li>
          </ul>

          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            <Link 
              to="/orders" 
              onClick={() => setIsOpen(false)} 
              className="text-xs font-bold text-gray-700 hover:text-accent flex items-center gap-1.5"
            >
              <FiUser />
              <span>My Orders</span>
            </Link>
            <a 
              href="https://wa.me/919050555855" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-green-600 hover:text-green-700 flex items-center gap-1"
            >
              <FaWhatsapp />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
