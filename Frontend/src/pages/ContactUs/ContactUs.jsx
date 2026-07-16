import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div className="py-16 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-2">
            Get In Touch With Us
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-primary tracking-wide uppercase">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-primary text-white p-8 rounded-sm border border-blue-950/20 shadow-2xs">
              <h3 className="font-serif text-lg font-bold mb-6 border-b border-white/10 pb-3 uppercase tracking-wide">
                ZK Brother Office
              </h3>
              
              <ul className="flex flex-col gap-6 text-xs text-gray-300 font-medium">
                <li className="flex items-start gap-4">
                  <FiPhone className="text-accent text-lg shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Telephone Contacts</h4>
                    <p className="text-sm font-semibold">+91 98965 07049</p>
                    <p className="text-sm font-semibold">+91 85972 662322</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <FiMail className="text-accent text-lg shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Wholesale Enquiries</h4>
                    <a href="mailto:m.k.tulla2@gmail.com" className="text-sm font-semibold hover:text-accent">
                      m.k.tulla2@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <FiMapPin className="text-accent text-lg shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Manufacturing Address</h4>
                    <p className="leading-relaxed">
                      123, Textile Market, Panipat,<br />Haryana, India - 132103
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <FiClock className="text-accent text-lg shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Working Timings</h4>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-red-400">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Static Google Maps mockup */}
            <div className="h-64 bg-white rounded-sm border border-gray-150 overflow-hidden relative flex items-center justify-center shadow-2xs">
              <div className="absolute inset-0 bg-sky-50 opacity-40"></div>
              {/* Map grid lines */}
              <div className="w-full h-full absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative text-center p-6 z-10">
                <FiMapPin className="text-4xl text-accent mx-auto mb-2 animate-bounce" />
                <h4 className="font-serif text-sm font-bold text-primary mb-1 uppercase">Factory Site Pin</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Panipat Textile Hub, Haryana, India</p>
                <a 
                  href="https://maps.google.com/?q=Panipat+Textile+Market" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block mt-3 text-[10px] font-bold text-accent hover:underline uppercase tracking-widest"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-sm border border-gray-150 shadow-2xs">
            <h3 className="font-serif text-lg font-bold text-primary mb-6 border-b border-gray-100 pb-3 uppercase tracking-wide">
              Send Direct Message
            </h3>

            <AnimatePresence mode="wait">
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 bg-emerald-50 border border-emerald-250 text-emerald-800 p-4 rounded-xs text-xs flex items-center gap-3"
                >
                  <FiCheckCircle className="text-xl shrink-0" />
                  <div>
                    <p className="font-bold uppercase tracking-wider">Enquiry Received!</p>
                    <p className="text-emerald-600 font-medium">Thank you. Our sales representative will follow up via email.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Wholesale blankets enquiry / private label stitching"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Message *</label>
                <textarea 
                  name="message" 
                  rows="5"
                  required
                  placeholder="Enter details about product requirements, shipping questions, or request brochures..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent resize-none text-gray-800"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-primary hover:bg-blue-950 text-white py-3.5 font-bold uppercase tracking-widest rounded-xs transition-colors cursor-pointer disabled:bg-primary/60"
              >
                {isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
