import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutFactoryImg from '../assets/about_factory.webp';

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-[#FAF9F6] overflow-hidden scroll-mt-navbar">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Images & Overlay Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Background decorative square */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-accent/35 rounded-sm -z-0 hidden sm:block"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 rounded-sm -z-0 hidden sm:block"></div>

            {/* Collage Container */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square sm:aspect-4/3 rounded-sm overflow-hidden border-4 border-white shadow-xl z-10 bg-gray-100">
              <img 
                src={aboutFactoryImg} 
                alt="ZK Brother Factory Production" 
                className="w-full h-full object-cover object-center"
              />
              
              {/* Overlay styling for extra polish */}
              <div className="absolute inset-0 bg-primary/5"></div>
            </div>

            {/* Circular Overlay Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 80, delay: 0.4 }}
              className="absolute -bottom-6 sm:-bottom-8 -left-2 sm:left-6 bg-accent border-4 border-white text-white rounded-full w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-center items-center text-center shadow-lg z-20"
            >
              <span className="font-serif text-2xl sm:text-3xl font-black leading-none mb-0.5">10+</span>
              <span className="text-[8px] sm:text-[10px] font-bold tracking-widest uppercase leading-tight px-3">
                Years of<br />Experience
              </span>
            </motion.div>
          </motion.div>

          {/* Right Side: Text Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-2">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary leading-tight mb-6">
              Z K BROTHER
            </h2>
            <div className="w-16 h-[2px] bg-accent mb-6 lg:self-start self-center"></div>

            <p className="text-sm text-gray-700 leading-relaxed font-medium mb-4">
              Z K Brother is a trusted and pioneered name in the field of premium Garments and Handloom products. We are a prominent Manufacturer, Exporter, and Supplier of a high-quality, comprehensive range of products including luxury Blankets, Towels, designer Bedsheets, Carpets, home Curtains, and fashion Garments for men, women, and children.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed font-medium mb-8">
              Based in the historic textile hub of Panipat, Haryana, our production facility combines state-of-the-art manufacturing machinery with traditional handloom weaving techniques. We are deeply committed to stringent quality control, reliable deliveries, and absolute customer satisfaction.
            </p>

            <Link 
              to="/about-us"
              className="inline-block text-center bg-accent hover:bg-accent-dark text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              READ MORE
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
