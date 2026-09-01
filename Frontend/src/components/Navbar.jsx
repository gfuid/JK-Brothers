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
  FiArrowRight
} from 'react-icons/fi';
import logoImg from '../assets/branding/logo.webp';
import { ShopContext } from '../context/ShopContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  
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
    setShowSearchInput(false);
  };

  const handloomCategories = [
    { name: 'Bedsheets', filter: 'Bedsheets' },
    { name: 'Blankets', filter: 'Blankets' },
  ];

  const garmentCategories = [
    { name: 'Ladies Suits', filter: 'Ladies Suits' },
    { name: 'Jeans', filter: 'Jeans' },
    { name: 'Shirts', filter: 'Shirts' },
  ];

  const navLinkClass = ({ isActive }) => 
    `text-white/85 hover:text-white transition-all font-medium text-sm relative py-1 ${
      isActive ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded-full' : ''
    }`;

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner Gradient Navbar (Matching image design) */}
      <div 
        className={`w-full text-white transition-all duration-300 ${
          scrolled ? 'shadow-xl backdrop-blur-md py-2.5' : 'py-3.5'
        }`}
        style={{
          background: 'linear-gradient(90deg, #FF4E20 0%, #E02B20 35%, #8E1119 70%, #300508 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo / Brand Name */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <img 
              src={logoImg} 
              alt="JK Brothers" 
              className="h-9 sm:h-10 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight text-white drop-shadow-xs">
              JK Brothers
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>

            {/* Handloom Dropdown */}
            <div className="relative group py-1">
              <NavLink 
                to="/handloom"
                className={({ isActive }) => 
                  `flex items-center gap-1.5 text-white/85 hover:text-white font-medium text-sm transition-colors py-1 ${
                    isActive ? 'text-white font-semibold' : ''
                  }`
                }
              >
                <span>Handloom</span>
                <FiChevronDown className="text-xs opacity-75 group-hover:opacity-100 transition-transform duration-300 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#2D0609]/95 text-white rounded-xl shadow-2xl backdrop-blur-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/10 z-50 p-2">
                {handloomCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/handloom?sub=${cat.filter}`}
                    className="block w-full text-left px-3.5 py-2 hover:bg-white/15 rounded-lg text-xs font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Garments Dropdown */}
            <div className="relative group py-1">
              <NavLink 
                to="/garments"
                className={({ isActive }) => 
                  `flex items-center gap-1.5 text-white/85 hover:text-white font-medium text-sm transition-colors py-1 ${
                    isActive ? 'text-white font-semibold' : ''
                  }`
                }
              >
                <span>Garments</span>
                <FiChevronDown className="text-xs opacity-75 group-hover:opacity-100 transition-transform duration-300 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#2D0609]/95 text-white rounded-xl shadow-2xl backdrop-blur-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/10 z-50 p-2">
                {garmentCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/garments?sub=${cat.filter}`}
                    className="block w-full text-left px-3.5 py-2 hover:bg-white/15 rounded-lg text-xs font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/new-arrivals" className={navLinkClass}>
              New Arrivals
            </NavLink>
            <NavLink to="/catalogue" className={navLinkClass}>
              Catalogue
            </NavLink>
            <NavLink to="/bulk-orders" className={navLinkClass}>
              Bulk Orders
            </NavLink>
            <NavLink to="/about-us" className={navLinkClass}>
              About
            </NavLink>
          </nav>

          {/* Right Actions & Get In Touch CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search Input toggle */}
            <div className="relative">
              {showSearchInput ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center animate-fadeIn">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-36 sm:w-48 bg-white/20 text-white placeholder-white/60 text-xs rounded-full py-1.5 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <button type="submit" className="absolute right-2 text-white/80 hover:text-white cursor-pointer">
                    <FiSearch className="text-sm" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  className="p-2 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-colors cursor-pointer"
                  title="Search"
                >
                  <FiSearch className="text-lg" />
                </button>
              )}
            </div>

            {/* Wishlist */}
            <Link 
              to="/wishlist" 
              className="p-2 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-colors relative cursor-pointer"
              title="Wishlist"
            >
              <FiHeart className="text-lg" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-white text-[#D32F2F] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Compare */}
            <Link 
              to="/compare" 
              className="hidden sm:flex p-2 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-colors relative cursor-pointer"
              title="Compare"
            >
              <FiSliders className="text-lg" />
              {compare.length > 0 && (
                <span className="absolute top-0 right-0 bg-white text-[#D32F2F] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {compare.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <button 
              onClick={() => setCartDrawerOpen(true)}
              className="p-2 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-colors relative cursor-pointer"
              title="Cart"
            >
              <FiShoppingBag className="text-lg" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 bg-white text-[#FF4E20] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Account */}
            <Link 
              to="/orders" 
              className="hidden sm:flex p-2 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-colors cursor-pointer"
              title="My Account"
            >
              <FiUser className="text-lg" />
            </Link>

            {/* "Get in touch" CTA Pill Button matching reference image exactly */}
            <Link 
              to="/contact-us" 
              className="inline-flex items-center gap-2.5 bg-white text-gray-900 hover:bg-white/95 font-semibold text-xs sm:text-sm pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group ml-1 cursor-pointer"
            >
              <span className="whitespace-nowrap">Get in touch</span>
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF4E20] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform duration-300">
                <FiArrowRight className="text-xs sm:text-sm stroke-[2.5]" />
              </span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full focus:outline-none ml-1 cursor-pointer"
            >
              {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden w-full text-white shadow-2xl border-t border-white/10 px-5 py-6 flex flex-col gap-4 animate-fadeIn"
             style={{
               background: 'linear-gradient(180deg, #500A0F 0%, #1A0305 100%)'
             }}
        >
          {/* Search bar inside drawer */}
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 text-white placeholder-white/60 text-sm rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 cursor-pointer">
              <FiSearch className="text-lg" />
            </button>
          </form>

          {/* Links */}
          <ul className="flex flex-col gap-3 font-medium text-sm text-white/90">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">
                Home
              </Link>
            </li>

            <li className="pt-2 border-t border-white/10">
              <span className="text-xs font-semibold text-white/50 tracking-wider uppercase">Handloom</span>
              <div className="grid grid-cols-2 gap-2 mt-2 pl-2">
                {handloomCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/handloom?sub=${cat.filter}`}
                    onClick={() => setIsOpen(false)}
                    className="text-xs text-white/80 hover:text-white py-1"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </li>

            <li className="pt-2 border-t border-white/10">
              <span className="text-xs font-semibold text-white/50 tracking-wider uppercase">Garments</span>
              <div className="grid grid-cols-2 gap-2 mt-2 pl-2">
                {garmentCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/garments?sub=${cat.filter}`}
                    onClick={() => setIsOpen(false)}
                    className="text-xs text-white/80 hover:text-white py-1"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </li>

            <li className="pt-2 border-t border-white/10">
              <Link to="/new-arrivals" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="/catalogue" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">
                Catalogue
              </Link>
            </li>
            <li>
              <Link to="/bulk-orders" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">
                Bulk Orders
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

