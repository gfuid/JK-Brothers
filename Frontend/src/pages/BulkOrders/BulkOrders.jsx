import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiInbox, FiClock, FiFileText } from 'react-icons/fi';
import { recordEnquiryInGoogleSheet } from '../../services/googleSheetService';
import { sendEnquiryEmail } from '../../services/emailService';

export default function BulkOrders() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: 'India',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    category: 'Blankets',
    quantity: 100,
    message: ''
  });

  const [bulkQuotes, setBulkQuotes] = useState(() => {
    const saved = localStorage.getItem('zk_bulk_quotes');
    return saved ? JSON.parse(saved) : [];
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('zk_bulk_quotes', JSON.stringify(bulkQuotes));
  }, [bulkQuotes]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.address || !formData.city || !formData.postalCode) return;

    setIsSubmitting(true);
    const quoteId = `ZK-BQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const newQuote = {
      id: quoteId,
      date: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      ...formData,
      status: 'Pending Review'
    };

    try {
      await Promise.allSettled([
        recordEnquiryInGoogleSheet({
          enquiryId: quoteId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          country: formData.country,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          category: formData.category,
          quantity: formData.quantity,
          message: formData.message,
          type: 'B2B Bulk Quote Enquiry'
        }),
        sendEnquiryEmail({
          enquiryId: quoteId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          country: formData.country,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          category: formData.category,
          quantity: formData.quantity,
          message: formData.message,
          type: 'B2B Bulk Quote Enquiry'
        })
      ]);
    } catch (err) {
      console.warn('Bulk quote dispatch note:', err);
    }

    setBulkQuotes([newQuote, ...bulkQuotes]);
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      country: 'India',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      category: 'Blankets',
      quantity: 100,
      message: ''
    });

    setTimeout(() => setShowSuccess(false), 6000);
  };

  const categories = [
    'Blankets', 'Towels', 'Bedsheets', 'Carpets', 'Curtains', 'Pillow Covers',
    'Jeans', 'T-Shirts', 'Shirts', 'Formal Pants', 'Ladies Suits', 'Kurtis', 'Gowns'
  ];

  return (
    <div className="py-16 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-2">
            Wholesale B2B Supplier Portal
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-primary tracking-wide uppercase">
            Bulk Order Enquiry
          </h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
          <p className="text-gray-500 text-xs md:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Fill out the B2B pricing quote sheet below. Our export managers will respond with customized container freight estimates and pricing sheets within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-sm border border-gray-150 shadow-2xs">
            <h2 className="font-serif text-xl font-bold text-primary mb-6 border-b border-gray-100 pb-3 uppercase tracking-wide">
              Request B2B Quote
            </h2>

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
                    <p className="font-bold uppercase tracking-wider">Enquiry Submitted Successfully!</p>
                    <p className="text-emerald-600 font-medium">Your request has been added to the tracking sheet below.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
              
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="e.g. John Smith"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Business Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="e.g. imports@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Phone / WhatsApp *</label>
                <input 
                  type="text" 
                  name="phone" 
                  required
                  placeholder="e.g. +1 555-123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Company Name *</label>
                <input 
                  type="text" 
                  name="company" 
                  required
                  placeholder="e.g. Global Retailers Ltd"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Destination Country</label>
                <input 
                  type="text" 
                  name="country" 
                  placeholder="e.g. United Kingdom"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">PIN / Zip Code *</label>
                <input 
                  type="text" 
                  name="postalCode" 
                  required
                  placeholder="e.g. 132103"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Shipping / Delivery Address *</label>
                <input 
                  type="text" 
                  name="address" 
                  required
                  placeholder="Street Address, Warehousing Depot, Unit"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">City *</label>
                <input 
                  type="text" 
                  name="city" 
                  required
                  placeholder="e.g. Panipat"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">State / Province *</label>
                <input 
                  type="text" 
                  name="state" 
                  required
                  placeholder="e.g. Haryana"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Product Category</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent bg-white text-gray-800 font-medium"
                >
                  {categories.map((c, idx) => (
                    <option key={idx} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Target Order Quantity (pcs) *</label>
                <input 
                  type="number" 
                  name="quantity" 
                  required
                  min="50"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Special Instructions / Custom Customizations</label>
                <textarea 
                  name="message" 
                  rows="4"
                  placeholder="Tell us about custom packing size, colors breakdown, embroidery labels, custom GSM, etc..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-200 rounded-xs focus:outline-hidden focus:border-accent resize-none text-gray-800"
                ></textarea>
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-dark text-white py-3.5 font-bold uppercase tracking-widest rounded-xs transition-colors cursor-pointer disabled:bg-accent/60"
                >
                  {isSubmitting ? 'PROCESSING REQUEST...' : 'SUBMIT B2B QUOTE REQUEST'}
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Tracking Quote History */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-primary text-white p-6 rounded-sm shadow-2xs border border-blue-950/20">
              <h3 className="font-serif text-lg font-bold mb-3 uppercase tracking-wide">B2B Trade Benefits</h3>
              <ul className="text-xs text-gray-300 flex flex-col gap-2.5 font-medium leading-relaxed list-disc pl-4">
                <li>Direct factory-rate quotes from textile hub Panipat.</li>
                <li>Customized brand label sewing & logo print options.</li>
                <li>Secure B2B Payment terms (LC, TT, CAD support).</li>
                <li>Global door-delivery logistics handling.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-sm border border-gray-150 shadow-2xs">
              <h3 className="font-serif text-base font-bold text-primary mb-4 pb-2 border-b border-gray-100 uppercase tracking-wide flex items-center gap-2">
                <FiFileText /> Sent Enquiries ({bulkQuotes.length})
              </h3>

              {bulkQuotes.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <FiInbox className="text-3xl mx-auto mb-2 opacity-50" />
                  <p className="text-xs font-semibold">No recent bulk enquiries submitted.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4 max-h-[350px] overflow-y-auto no-scrollbar pr-1">
                  {bulkQuotes.map((q) => (
                    <div key={q.id} className="p-4 bg-[#FAF9F6] border border-gray-150 rounded-xs text-[11px] flex flex-col gap-1.5 shadow-2xs">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-primary">{q.id}</span>
                        <span className="text-[10px] text-gray-400 font-bold">{q.date}</span>
                      </div>
                      <div className="font-semibold text-gray-800">
                        Product: {q.category} | Qty: {q.quantity} pcs
                      </div>
                      <div className="text-gray-500 font-medium">
                        Company: {q.company} ({q.city}, {q.state}, {q.country} - {q.postalCode})
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <FiClock className="text-amber-500" />
                        <span className="font-bold text-amber-600 uppercase text-[9px] tracking-wider">
                          {q.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
