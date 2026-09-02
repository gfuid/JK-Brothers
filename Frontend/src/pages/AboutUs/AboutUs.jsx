import { motion } from 'framer-motion';
import { BRAND_IMAGES, handleImageError } from '../../data/imageUrls';
import Stats from '../../components/Stats';

const aboutFactoryImg = BRAND_IMAGES.aboutFactory;

export default function AboutUs() {
  return (
    <div className="bg-[#fcfbf9] min-h-screen">
      
      {/* Intro Hero */}
      <section className="relative bg-primary text-white py-20 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,92,0.1),transparent)] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-3">Our Legacy & Operations</span>
          <h1 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-wide mb-6">About ZK Brother</h1>
          <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
            A trusted name in weaving history, manufacturing premium garments, and exporting high-grade handloom textiles worldwide from Panipat, Haryana.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Collage Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-accent/30 rounded-sm -z-0 hidden sm:block"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 rounded-sm -z-0 hidden sm:block"></div>

            <div className="relative w-full aspect-4/3 rounded-sm overflow-hidden border-4 border-white shadow-xl z-10 bg-gray-100">
              <img 
                src={aboutFactoryImg} 
                alt="ZK Brother Manufacturing Plant" 
                className="w-full h-full object-cover"
                loading="lazy"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-primary/5"></div>
            </div>
          </motion.div>

          {/* Core Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-5 text-sm text-gray-700 leading-relaxed font-medium"
          >
            <span className="text-accent text-xs font-bold tracking-[0.25em] uppercase">WHO WE ARE</span>
            <h2 className="text-2xl md:text-3.5xl font-serif font-bold text-primary leading-tight uppercase">
              Tradition Meets Modern Industrial Capability
            </h2>
            <div className="w-12 h-[2px] bg-accent mb-2"></div>
            
            <p>
              Founded in Panipat, Haryana—India's legendary center for home furnishings and loom crafts—ZK Brother has grown from a humble family-run weaving mill into a major integrated manufacturer, exporter, and supplier of premium garments and handloom merchandise.
            </p>
            <p>
              We operate state-of-the-art automatic looms, high-speed shuttleless weaving machines, and integrated industrial stitching lines. This allows us to scale production of double-ply fleece blankets, cotton towel sets, bedsheets, and high-fashion denim, shirts, and custom apparel with ease.
            </p>
            <p>
              Under our brand statement, **"WEAR. CARE. SHARE"**, we strictly monitor our environmental footprint. We utilize organic yarn inputs, direct B2B supply channels, and provide fair wages to our weavers, ensuring each product carries structural and ethical excellence.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Stats Counter Widget */}
      <Stats />

      {/* B2B Standards & Compliance */}
      <section className="py-20 bg-white border-t border-gray-150/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3.5xl font-serif font-bold text-primary mb-12 uppercase tracking-wide">
            Quality Accreditations & Specs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs text-left">
            {[
              {
                title: 'Oeko-Tex Standard 100',
                desc: 'All our handlooms, towels, and blankets are certified free from harmful chemicals and substances, completely safe for children.'
              },
              {
                title: 'ISO 9001:2015 Certified',
                desc: 'Strict quality control checks are implemented at yarn sourcing, loom weaving, color dyeing, structural stitching, and packaging phases.'
              },
              {
                title: 'Sustainable Sourcing',
                desc: 'We prioritize sourcing long-staple cotton and recycled polyester to lower our carbon footprint and preserve natural resources.'
              },
              {
                title: 'Custom Branding (B2B)',
                desc: 'Equipped to support large B2B clients with customized woven labels, brand tag hangings, barcode packing, and carton specifications.'
              }
            ].map((std, idx) => (
              <div key={idx} className="p-6 bg-[#FAF9F6] border border-gray-100 rounded-xs flex flex-col gap-3 shadow-2xs hover:shadow-xs transition-shadow duration-300">
                <span className="font-serif text-base font-bold text-primary uppercase tracking-wide">{std.title}</span>
                <p className="text-gray-500 leading-relaxed font-medium">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
