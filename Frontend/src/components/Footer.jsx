import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import logoImg from '../assets/branding/logo.webp';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-accent relative overflow-hidden">
      
      {/* Footer Top Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-gray-800">
        
        {/* Col 1: About ZK Brother */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <div className="flex items-center justify-center bg-white p-2 rounded-sm max-w-[180px] shadow-sm">
            <img src={logoImg} alt="ZK Brother Logo" className="h-16 w-auto object-contain" />
          </div>
          <p className="text-xs text-gray-400 font-medium leading-relaxed">
            We are a premier Manufacturer, Exporter, and Supplier of high-quality Garments &amp; Handloom Products, operating out of Haryana, India. We serve clients globally with direct B2B supplies.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-2">
            {[
              { icon: <FaFacebookF />, link: 'https://facebook.com' },
              { icon: <FaInstagram />, link: 'https://instagram.com' },
              { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
              { icon: <FaYoutube />, link: 'https://youtube.com' }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.link} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-gray-700/60 flex items-center justify-center text-xs text-gray-400 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-accent border-b border-accent/25 pb-2">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs text-gray-400 font-medium">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/handloom" className="hover:text-white transition-colors">
                Handloom Collection
              </Link>
            </li>
            <li>
              <Link to="/garments" className="hover:text-white transition-colors">
                Garments Collection
              </Link>
            </li>
            <li>
              <Link to="/new-arrivals" className="hover:text-white transition-colors">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/bulk-orders" className="hover:text-white transition-colors">
                Bulk Orders
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Our Products */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-accent border-b border-accent/25 pb-2">
            Our Products
          </h4>
          <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 text-xs text-gray-400 font-medium">
            <Link to="/handloom?sub=Blankets" className="hover:text-white transition-colors text-left">Blankets</Link>
            <Link to="/garments?sub=Jeans" className="hover:text-white transition-colors text-left">Jeans</Link>
            <Link to="/handloom?sub=Towels" className="hover:text-white transition-colors text-left">Towels</Link>
            <Link to="/garments?sub=Shirts" className="hover:text-white transition-colors text-left">Shirts</Link>
            <Link to="/handloom?sub=Bedsheets" className="hover:text-white transition-colors text-left">Bedsheets</Link>
            <Link to="/garments?sub=Kurtis" className="hover:text-white transition-colors text-left">Kurtis</Link>
            <Link to="/handloom?sub=Carpets" className="hover:text-white transition-colors text-left">Carpets</Link>
            <Link to="/garments?sub=Gowns" className="hover:text-white transition-colors text-left">Gowns</Link>
            <Link to="/handloom?sub=Curtains" className="hover:text-white transition-colors text-left">Curtains</Link>
            <Link to="/garments?sub=Fancy Dresses" className="hover:text-white transition-colors text-left">Fancy Dresses</Link>
          </div>
        </div>

        {/* Col 4: Contact Info */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-accent border-b border-accent/25 pb-2">
            Contact Info
          </h4>
          <ul className="flex flex-col gap-3 text-xs text-gray-400 font-medium">
            <li className="flex items-start gap-2.5">
              <FiPhone className="text-accent text-sm shrink-0 mt-0.5" />
              <div>
                <p className="text-white">+91 98965 07049</p>
                <p className="text-white">+91 85972 662322</p>
                <p className="text-[10px] text-gray-500">Mon - Sat, 9am - 7pm</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <FiMail className="text-accent text-sm shrink-0 mt-0.5" />
              <a href="mailto:m.k.tulla2@gmail.com" className="hover:text-white transition-colors">
                m.k.tulla2@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <FiMapPin className="text-accent text-sm shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                123, Textile Market, Panipat, Haryana, India - 132103
              </span>
            </li>
          </ul>
        </div>

        {/* Col 5: Quick Contact Form */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h4 className="font-serif text-sm font-bold tracking-widest uppercase text-accent border-b border-accent/25 pb-2">
            Quick Contact
          </h4>
          
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-accent/15 border border-accent/35 rounded-xs p-4 flex flex-col items-center text-center text-xs text-accent"
              >
                <FiCheckCircle className="text-xl mb-1.5 text-accent animate-bounce" />
                <p className="font-bold uppercase tracking-wider mb-1">Enquiry Sent</p>
                <p className="text-[10px] text-gray-300 font-medium">Our sales team will email you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full bg-[#162a4d] border border-gray-700/50 focus:border-accent text-xs p-2.5 rounded-xs text-white focus:outline-hidden"
                />
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full bg-[#162a4d] border border-gray-700/50 focus:border-accent text-xs p-2.5 rounded-xs text-white focus:outline-hidden"
                />
                <textarea 
                  name="message"
                  required
                  placeholder="Quick Message" 
                  rows="3"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="w-full bg-[#162a4d] border border-gray-700/50 focus:border-accent text-xs p-2.5 rounded-xs text-white resize-none focus:outline-hidden"
                ></textarea>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-dark text-white text-[10px] font-bold tracking-widest uppercase py-2.5 rounded-xs transition-colors cursor-pointer shadow-xs disabled:bg-accent/50"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center sm:text-left">
        <p>© 2024 Z K Brother. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link to="/about-us" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link to="/about-us" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
        </div>
      </div>

    </footer>
  );
}
