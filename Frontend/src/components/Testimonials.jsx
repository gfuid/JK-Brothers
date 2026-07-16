import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Wholesale Distributor',
      location: 'Delhi, India',
      quote: "The quality of blankets and bedsheets we received is outstanding. The thread count, weave consistency, and rich designs have made Z K Brother our exclusive handloom supplier.",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Ahmed Khan',
      role: 'Sourcing Director, Al-Tijarah Group',
      location: 'Dubai, UAE',
      quote: "We have been importing garments and carpets from Z K Brother for over 5 years now. Their commitment to international delivery timelines and export packaging standards is exemplary.",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Fashion Buyer, Retail Co.',
      location: 'London, UK',
      quote: "Exceptional garment craftsmanship! The stitching quality on the shirts and kurtis is top-tier, and the fabric selection is perfect. Best pricing and premium support throughout the import process.",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-primary tracking-wide uppercase">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
          <p className="text-gray-500 text-xs md:text-sm mt-3 max-w-md mx-auto">
            Read stories of satisfaction and long-term global trade partnerships from our key clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-8 bg-[#FAF9F6] border border-gray-100 rounded-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote Icon overlay */}
              <div className="absolute top-6 right-6 text-accent/15 text-5xl font-serif select-none pointer-events-none">
                “
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <FiStar key={i} className="text-sm fill-current" />
                  ))}
                </div>

                {/* Quote Paragraph */}
                <p className="text-gray-650 text-xs md:text-sm italic font-medium leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/40">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent shadow-xs"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-primary">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    {t.location}
                  </p>
                  <p className="text-[9px] text-accent font-medium mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
