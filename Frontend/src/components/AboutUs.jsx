import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ownerImg from '../assets/owner.png';

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-[#FAF9F6] overflow-hidden scroll-mt-navbar border-y border-gray-150">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Founder Image & Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Background decorative square */}
            <div className="absolute -top-4 -left-4 w-28 h-28 border-2 border-accent/40 rounded-sm -z-0 hidden sm:block"></div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-2 border-primary/20 rounded-sm -z-0 hidden sm:block"></div>

            {/* Founder Frame */}
            <div className="relative w-full max-w-md rounded-sm overflow-hidden border-4 border-white shadow-xl z-10 bg-white">
              <img 
                src={ownerImg} 
                alt="Mr. M. KARAM - Founder of Z K BROTHER" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-4 text-white">
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest block">Founder & MD</span>
                <h4 className="font-serif text-lg font-bold">Mr. M. KARAM</h4>
                <p className="text-[11px] text-gray-300">Z K BROTHER • Panipat, Haryana</p>
              </div>
            </div>

            {/* Circular Overlay Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 90, delay: 0.3 }}
              className="absolute -bottom-5 -left-3 sm:-left-5 bg-accent border-4 border-white text-primary rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col justify-center items-center text-center shadow-xl z-20"
            >
              <span className="font-serif text-xl sm:text-2xl font-black leading-none mb-0.5">4+</span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-widest uppercase leading-tight px-2">
                Years Of<br />Trust
              </span>
            </motion.div>
          </motion.div>

          {/* Right Side: Text Information */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-2">
              MEET THE FOUNDER • PANIPAT TEXTILE HUB
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-4.5xl font-serif font-black text-primary leading-tight mb-4 uppercase">
              About <span className="text-accent">Z K BROTHER</span>
            </h2>
            <div className="w-16 h-[2.5px] bg-accent mb-6 lg:self-start self-center"></div>

            <p className="text-sm sm:text-base text-gray-800 font-semibold leading-relaxed mb-3">
              "In B2B trading, everyone gives you a rate, but we give you the right quality and on-time delivery."
            </p>

            <p className="text-sm text-gray-700 leading-relaxed font-medium mb-3">
              I am <strong>Mr. M.KARAM (FOUNDER OF Z K BROTHER)</strong>. I started this company in 2022 with a simple idea. In the last 4 years, with this honesty, we have grown from Panipat to serving <strong>300+ B2B clients, wholesalers, Distributors and Traders across India</strong> with direct mill factory pricing on Blankets, Bedsheets, Curtains, Pillow Covers, and Doormats.
            </p>

            <p className="italic text-xs text-gray-600 border-l-2 border-accent pl-3 my-2 mb-6">
              "In B2B, people don't connect with a company, they connect with a person. If you ever face any issue with your order, you can call us directly. This business is not just our work, it's our reputation."
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/about-us"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-xs font-bold tracking-wider uppercase px-7 py-3.5 rounded-sm transition-all shadow-md hover:shadow-lg"
              >
                <span>Read Full Story & Credentials</span>
                <FiArrowRight />
              </Link>
              
              <a
                href="https://wa.me/919896507049?text=Hello%20Mr.%20M.%20Karam,%20I%20am%20interested%20in%20wholesale%20rates%20for%20Z%20K%20BROTHER."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider uppercase px-6 py-3.5 rounded-sm transition-all shadow-md hover:shadow-lg"
              >
                <FaWhatsapp className="text-base" />
                <span>WhatsApp Rates</span>
              </a>

              <a
                href="tel:+919896507049"
                className="inline-flex items-center gap-1.5 text-primary hover:text-accent font-bold text-xs uppercase tracking-wider px-3 py-2 transition-colors"
              >
                <FiPhoneCall />
                <span>+91 98965 07049</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
