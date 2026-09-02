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
  FiSliders
} from 'react-icons/fi';
const logoImg = '/logo.webp';
import { ShopContext } from '../context/ShopContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { wishlist, getCartCount, compare, setCartDrawerOpen } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
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
    `hover:text-accent transition-colors py-1 relative ${
      isActive ? 'text-accent border-b-2 border-accent' : 'text-white'
    }`;

  return (
    <header className="w-full flex flex-col z-50">
      
      {/* Main Bar (Sticks on scroll) - White Top Bar */}
      <div className={`w-full bg-white transition-all duration-300 ${
        scrolled ? 'fixed top-0 shadow-lg border-b border-gray-100 py-1 z-50' : 'relative py-2 sm:py-3 border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img 
              src={logoImg} 
              alt="ZK Brother Logo" 
              className={`${
                scrolled ? 'h-12 sm:h-14 lg:h-16' : 'h-16 sm:h-20 lg:h-24'
              } w-auto object-contain transition-all duration-300`} 
            />
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md mx-6 relative">
            <input 
              type="text" 
              placeholder="Search for products, subcategories..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 border border-gray-200 focus:border-accent focus:outline-hidden text-sm rounded-sm transition-colors bg-gray-50/50 focus:bg-white text-gray-800"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors cursor-pointer">
              <FiSearch className="text-lg" />
            </button>
          </form>

          {/* User Actions */}
          <div className="flex items-center gap-5 md:gap-7 text-gray-700">
            <Link to="/wishlist" className="hover:text-accent transition-colors relative cursor-pointer" title="Wishlist">
              <FiHeart className="text-2xl" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-[9px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center animate-pulse">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/compare" className="hover:text-accent transition-colors relative cursor-pointer" title="Product Comparison">
              <FiSliders className="text-2xl" />
              {compare.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-[9px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center">
                  {compare.length}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setCartDrawerOpen(true)} 
              className="hover:text-accent transition-colors relative cursor-pointer focus:outline-hidden" 
              title="Shopping Cart"
            >
              <FiShoppingBag className="text-2xl" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[9px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
            <Link to="/orders" className="hover:text-accent transition-colors cursor-pointer" title="My Orders">
              <FiUser className="text-2xl" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-primary focus:outline-hidden p-1 cursor-pointer"
            >
              {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links Bar - Desktop Royal Navy Blue */}
      <nav className="hidden lg:flex w-full bg-primary text-white py-3 px-8 justify-center border-t border-blue-950/20 shadow-md">
        <ul className="flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase">
          <li>
            <NavLink to="/" className={navLinkClass} end>
              HOME
            </NavLink>
          </li>
          
          {/* Handloom Dropdown */}
          <li className="relative group py-1">
            <NavLink 
              to="/handloom"
              className={({ isActive }) => `hover:text-accent flex items-center gap-1 transition-colors ${isActive ? 'text-accent' : ''}`}
            >
              HANDLOOM <FiChevronDown className="text-sm transition-transform group-hover:rotate-180" />
            </NavLink>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 z-50">
              <div className="py-2">
                {handloomCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/handloom?sub=${cat.filter}`}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-50 hover:text-accent text-[11px] font-semibold tracking-wide uppercase transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Garments Dropdown */}
          <li className="relative group py-1">
            <NavLink 
              to="/garments"
              className={({ isActive }) => `hover:text-accent flex items-center gap-1 transition-colors ${isActive ? 'text-accent' : ''}`}
            >
              GARMENTS <FiChevronDown className="text-sm transition-transform group-hover:rotate-180" />
            </NavLink>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 z-50">
              <div className="py-2">
                {garmentCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/garments?sub=${cat.filter}`}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-50 hover:text-accent text-[11px] font-semibold tracking-wide uppercase transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <NavLink to="/new-arrivals" className={navLinkClass}>
              NEW ARRIVALS
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalogue" className={navLinkClass}>
              CATALOGUE
            </NavLink>
          </li>
          <li>
            <NavLink to="/bulk-orders" className={navLinkClass}>
              BULK ORDERS
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={navLinkClass}>
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className={navLinkClass}>
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Drawer (Collapsible) */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-b border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-inner z-40 transition-all duration-300">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-10 py-2 border border-gray-200 text-sm rounded-sm text-gray-800"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiSearch className="text-lg" />
            </button>
          </form>

          <ul className="flex flex-col gap-3.5 text-xs font-bold tracking-wider text-gray-700 uppercase">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="block w-full hover:text-accent py-1">
                HOME
              </Link>
            </li>
            <hr className="border-gray-100" />
            
            {/* Handloom for Mobile */}
            <li>
              <div className="font-extrabold text-[#0B2144] mb-1.5 text-[10px] tracking-widest text-accent">HANDLOOM</div>
              <div className="pl-3 grid grid-cols-2 gap-2 text-[11px] text-gray-600 font-semibold">
                {handloomCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/handloom?sub=${cat.filter}`}
                    onClick={() => setIsOpen(false)}
                    className="text-left py-0.5 hover:text-accent"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </li>
            <hr className="border-gray-100" />

            {/* Garments for Mobile */}
            <li>
              <div className="font-extrabold text-[#0B2144] mb-1.5 text-[10px] tracking-widest text-accent">GARMENTS</div>
              <div className="pl-3 grid grid-cols-2 gap-2 text-[11px] text-gray-600 font-semibold">
                {garmentCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={`/garments?sub=${cat.filter}`}
                    onClick={() => setIsOpen(false)}
                    className="text-left py-0.5 hover:text-accent"
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
                BULK ORDERS
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
        </div>
      )}
    </header>
  );
}
