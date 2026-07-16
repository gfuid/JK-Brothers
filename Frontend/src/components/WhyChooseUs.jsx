import { motion } from 'framer-motion';
import { 
  FiAward, 
  FiDollarSign, 
  FiTruck, 
  FiSmile, 
  FiPackage, 
  FiGlobe 
} from 'react-icons/fi';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Premium Quality',
      desc: 'We ensure high quality standards in every single product, using grade-A fibers and rigorous QC.',
      icon: <FiAward className="text-3xl text-accent" />,
    },
    {
      title: 'Competitive Prices',
      desc: 'Best industry-grade products at reasonable wholesale prices directly from our manufacturing hub.',
      icon: <FiDollarSign className="text-3xl text-accent" />,
    },
    {
      title: 'Timely Delivery',
      desc: 'We respect deadlines. Our optimized logistics ensure all orders reach on committed schedules.',
      icon: <FiTruck className="text-3xl text-accent" />,
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Our customer success and after-sales support remains our topmost operational priority.',
      icon: <FiSmile className="text-3xl text-accent" />,
    },
    {
      title: 'Bulk Order Support',
      desc: 'Equipped with large-scale factories, we easily accept and process bulk supply orders of all sizes.',
      icon: <FiPackage className="text-3xl text-accent" />,
    },
    {
      title: 'Global Shipping',
      desc: 'We ship our premium handloom and garment merchandise seamlessly to clients worldwide.',
      icon: <FiGlobe className="text-3xl text-accent" />,
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-primary tracking-wide uppercase">
            Why Choose Us
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
          <p className="text-gray-500 text-xs md:text-sm mt-3 max-w-md mx-auto">
            We combine quality materials, artisan craftsmanship, and industrial capacity to deliver absolute value.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ 
                scale: 1.02,
                borderColor: 'var(--color-accent)'
              }}
              className="p-8 bg-[#FAF9F6] border border-gray-100 rounded-xs transition-all duration-300 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:bg-white"
            >
              {/* Icon Holder */}
              <div className="mb-5 p-4 bg-white rounded-full border border-gray-100 shadow-xs group-hover:scale-115 transition-transform duration-300">
                {reason.icon}
              </div>

              {/* Headline */}
              <h3 className="font-serif text-lg font-bold text-primary mb-3 uppercase tracking-wide">
                {reason.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-[1px] bg-accent/30 mb-4"></div>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
