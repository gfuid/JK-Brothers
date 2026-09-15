import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { 
  BEDSHEET_IMAGES, 
  APPAREL_IMAGES,
  CURTAIN_IMAGES,
  handleImageError 
} from '../data/imageUrls';

const handloomBlanketsImg = APPAREL_IMAGES.blankets;
const bathMatImg = APPAREL_IMAGES.bathMat;
const caspianBedsheet1 = BEDSHEET_IMAGES.caspian1;
const caspianBedsheet2 = BEDSHEET_IMAGES.caspian2;
const caspianBedsheet3 = BEDSHEET_IMAGES.caspian3;
const printedBedsheet1 = BEDSHEET_IMAGES.printed1;
const printedBedsheet2 = BEDSHEET_IMAGES.printed2;
const featherFittedBedsheet = BEDSHEET_IMAGES.featherFitted;
const sageFloralBedsheet = BEDSHEET_IMAGES.sageFloral;
const curtain1 = CURTAIN_IMAGES.curtain1;

export default function Collections() {
  const navigate = useNavigate();

  const handloomItems = [
    {
      name: 'Designer Eyelet Curtains',
      sub: 'Curtains',
      img: curtain1,
      count: 'Velvet, Jacquard & Blackout',
    },
    {
      name: 'Caspian Fitted Bedsheets',
      sub: 'Bedsheets',
      img: caspianBedsheet1,
      count: '72x78+9" Zig Zag Finish',
    },
    {
      name: 'Embossed Blankets',
      sub: 'Blankets',
      img: handloomBlanketsImg,
      count: 'Heavy Double Bed Fleece',
    },
    {
      name: 'Caspian Feather Motif Fitted',
      sub: 'Bedsheets',
      img: featherFittedBedsheet,
      count: 'All-Around Elastic Tuck',
    },
    {
      name: 'Royal Sage Floral Glace Set',
      sub: 'Bedsheets',
      img: sageFloralBedsheet,
      count: '300 TC Satin Weave Feel',
    },
    {
      name: 'Memory Foam Bath Mats',
      sub: 'Bath Mats',
      img: bathMatImg,
      count: 'High-Density Anti-Skid',
    },
    {
      name: 'Printed Cotton Bedsheets',
      sub: 'Bedsheets',
      img: printedBedsheet1,
      count: '100% Pure Cotton King',
    },
    {
      name: 'Botanical Fitted Bedsheets',
      sub: 'Bedsheets',
      img: caspianBedsheet3,
      count: 'Elastic Mattress Grip',
    },
    {
      name: 'Pastel Geometric Fitted',
      sub: 'Bedsheets',
      img: caspianBedsheet2,
      count: 'High-Density Glace Cotton',
    },
    {
      name: 'Luxury Floral Glace Cotton',
      sub: 'Bedsheets',
      img: printedBedsheet2,
      count: 'Super King Flat Set',
    },
  ];

  return (
    <div className="py-20 bg-[#fcfbf9] overflow-hidden">
      
      {/* Handloom Collection Section */}
      <section id="handloom-collection" className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-[10.5px] font-black text-accent tracking-widest uppercase mb-1.5 inline-block bg-accent/10 px-3 py-1 rounded-xs">
            Artisan Handloom Weaving Mill
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-primary tracking-wide uppercase mt-1">
            Our Handloom Collection
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-[1px] w-12 bg-accent"></span>
            <span className="w-2 h-2 rotate-45 border border-accent bg-accent"></span>
            <span className="h-[1px] w-12 bg-accent"></span>
          </div>
          <p className="text-gray-500 text-xs md:text-sm mt-3 max-w-md mx-auto">
            Explore our heritage handloom fabrics, Caspian fitted double bedsheets with zig-zag stitch finish, and embossed fleece blankets.
          </p>
        </div>

        {/* Handloom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {handloomItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => navigate(`/handloom?sub=${item.sub}`)}
              className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-50">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Title & Info */}
              <div className="p-5 text-center flex flex-col items-center justify-center border-t border-gray-50">
                <h3 className="font-serif text-base font-bold text-primary group-hover:text-accent transition-colors duration-300 uppercase tracking-wider">
                  {item.name}
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent mt-1">
                  {item.count}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/handloom"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-950 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
          >
            VIEW ALL HANDLOOM PRODUCTS 
            <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
