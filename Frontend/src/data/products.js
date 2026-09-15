import { 
  BEDSHEET_IMAGES, 
  APPAREL_IMAGES,
  CURTAIN_IMAGES
} from './imageUrls.js';

// Archived garments products are safely preserved in `./garments/garmentsProducts.js`
export { garmentsProducts as archivedGarmentsProducts } from './garments/garmentsProducts.js';

// Bedsheets CDN Assets
const caspianBedsheet1 = BEDSHEET_IMAGES.caspian1;
const caspianBedsheet2 = BEDSHEET_IMAGES.caspian2;
const caspianBedsheet3 = BEDSHEET_IMAGES.caspian3;
const caspianBedsheet4 = BEDSHEET_IMAGES.caspian4;
const caspianBedsheet5 = BEDSHEET_IMAGES.caspian5;
const printedBedsheet1 = BEDSHEET_IMAGES.printed1;
const printedBedsheet2 = BEDSHEET_IMAGES.printed2;
const featherFittedBedsheet = BEDSHEET_IMAGES.featherFitted;
const sageFloralBedsheet = BEDSHEET_IMAGES.sageFloral;

// Handloom Blankets & Mats CDN Assets
const handloomBlanketsImg = APPAREL_IMAGES.blankets;
const bathMatImg = APPAREL_IMAGES.bathMat;

// Curtains & Drapes Assets
const curtain1 = CURTAIN_IMAGES.curtain1;
const curtain2 = CURTAIN_IMAGES.curtain2;
const curtain3 = CURTAIN_IMAGES.curtain3;
const curtain4 = CURTAIN_IMAGES.curtain4;
const curtain5 = CURTAIN_IMAGES.curtain5;
const curtain6 = CURTAIN_IMAGES.curtain6;
const curtain7 = CURTAIN_IMAGES.curtain7;

export const handloomProducts = [
  // ==========================================
  // 1. CASPIAN FITTED BEDSHEETS (Direct Client Spec)
  // ==========================================
  {
    id: 1,
    name: 'Caspian Fitted Double Bed Bedsheet (Navy Floral)',
    category: 'HANDLOOM',
    subCategory: 'Bedsheets',
    img: caspianBedsheet1,
    price: 649,
    moq: 30,
    rating: 5,
    description: 'Caspian Fitted Double Bed Bedsheet featuring exquisite zig zag pillow stitch finishing. Engineered for perfect mattress fitting with all-around 360-degree elastic corners that prevent slipping and stay wrinkle-free all night. Includes 2 matching pillow covers.',
    specs: {
      material: 'High-Density Glace Cotton Blend',
      bedsheetSize: '72 × 78 + 9 Inches (Fitted Double Bed)',
      pillowCoverSize: '20 × 30 Inches',
      stitching: 'Elegant Zig Zag Stitch Finish',
      mattressFitting: 'Perfect Mattress Fitting up to 9" depth',
      packaging: 'PVC Zipper Book Packaging'
    },
    colors: ['Royal Navy Floral', 'Indigo Blue'],
    isNewArrival: true
  },
  {
    id: 2,
    name: 'Caspian Fitted Double Bed Bedsheet (Pastel Geometric)',
    category: 'HANDLOOM',
    subCategory: 'Bedsheets',
    img: caspianBedsheet2,
    price: 649,
    moq: 30,
    rating: 5,
    description: 'Caspian Fitted Double Bed Bedsheet in a subtle geometric pastel print with signature zig zag pillow stitch finish. Snug mattress grip and fade-resistant dye.',
    specs: {
      material: 'High-Density Glace Cotton Blend',
      bedsheetSize: '72 × 78 + 9 Inches (Fitted Double Bed)',
      pillowCoverSize: '20 × 30 Inches',
      stitching: 'Elegant Zig Zag Stitch Finish',
      mattressFitting: 'Perfect Mattress Fitting up to 9" depth',
      packaging: 'PVC Zipper Book Packaging'
    },
    colors: ['Pastel Sage', 'Geometric Beige'],
    isNewArrival: true
  },
  {
    id: 3,
    name: 'Caspian Fitted Double Bed Bedsheet (Botanical Leaf)',
    category: 'HANDLOOM',
    subCategory: 'Bedsheets',
    img: caspianBedsheet3,
    price: 649,
    moq: 30,
    rating: 5,
    description: 'Caspian Fitted Double Bed Bedsheet with fresh botanical prints. Features deep 9-inch skirt with heavy-duty elastic band for effortless tucking and zig zag stitched pillow covers.',
    specs: {
      material: 'Ultra-Soft Breathable Cotton Rich',
      bedsheetSize: '72 × 78 + 9 Inches (Fitted Double Bed)',
      pillowCoverSize: '20 × 30 Inches',
      stitching: 'Elegant Zig Zag Stitch Finish',
      mattressFitting: 'Perfect Mattress Fitting up to 9" depth',
      packaging: 'PVC Zipper Book Packaging'
    },
    colors: ['Olive Botanical', 'Cream Forest'],
    isNewArrival: true
  },
  {
    id: 4,
    name: 'Caspian Fitted Double Bed Bedsheet (Classic Paisley)',
    category: 'HANDLOOM',
    subCategory: 'Bedsheets',
    img: caspianBedsheet4,
    price: 649,
    moq: 30,
    rating: 5,
    description: 'Traditional royal motifs with Caspian modern fitted architecture. High GSM fabric with skin-friendly soft texture and zig zag border stitch.',
    specs: {
      material: 'High-Density Glace Cotton Blend',
      bedsheetSize: '72 × 78 + 9 Inches (Fitted Double Bed)',
      pillowCoverSize: '20 × 30 Inches',
      stitching: 'Elegant Zig Zag Stitch Finish',
      mattressFitting: 'Perfect Mattress Fitting up to 9" depth',
      packaging: 'PVC Zipper Book Packaging'
    },
    colors: ['Royal Gold Paisley', 'Vintage Amber'],
    isNewArrival: false
  },
  {
    id: 5,
    name: 'Caspian Fitted Double Bed Bedsheet (Contemporary Bloom)',
    category: 'HANDLOOM',
    subCategory: 'Bedsheets',
    img: caspianBedsheet5,
    price: 649,
    moq: 30,
    rating: 5,
    description: 'Designer bloom printed Caspian fitted bedsheet with 2 matching pillow covers. Color fastness guaranteed through industrial pre-wash cycles.',
    specs: {
      material: 'High-Density Glace Cotton Blend',
      bedsheetSize: '72 × 78 + 9 Inches (Fitted Double Bed)',
      pillowCoverSize: '20 × 30 Inches',
      stitching: 'Elegant Zig Zag Stitch Finish',
      mattressFitting: 'Perfect Mattress Fitting up to 9" depth',
      packaging: 'PVC Zipper Book Packaging'
    },
    colors: ['Dusty Rose', 'Modern Charcoal Bloom'],
    isNewArrival: false
  },
  {
    id: 6,
    name: 'Premium All-Season Printed Cotton Bedsheet Set',
    category: 'HANDLOOM',
    subCategory: 'Bedsheets',
    img: printedBedsheet1,
    price: 549,
    moq: 40,
    rating: 5,
    description: 'Generously sized king flat bedsheet with 2 pillow covers. Woven with 100% fine cotton yarn for year-round breathability and lasting softness.',
    specs: {
      material: '100% Pure Cotton (250 TC)',
      bedsheetSize: '90 × 100 Inches (King Size Flat)',
      pillowCoverSize: '18 × 28 Inches',
      weight: '1.1 kg',
      packaging: 'Polybag with Inset Card'
    },
    colors: ['Earthy Floral', 'Navy Crimson'],
    isNewArrival: true
  },
  {
    id: 7,
    name: 'Luxury Floral Glace Cotton Bedsheet Set',
    category: 'HANDLOOM',
    subCategory: 'Bedsheets',
    img: printedBedsheet2,
    price: 580,
    moq: 40,
    rating: 5,
    description: 'Smooth glace cotton bedsheet offering a silky drape and rich sheen. Features intricate traditional border layouts and 2 matching pillow shams.',
    specs: {
      material: 'Premium Glace Cotton',
      bedsheetSize: '90 × 108 Inches (Super King Flat)',
      pillowCoverSize: '20 × 30 Inches',
      weight: '1.2 kg',
      packaging: 'Luxury Box Packaging'
    },
    colors: ['Blush Peach', 'Aqua Blue Floral'],
    isNewArrival: false
  },

  // ==========================================
  // 2. HANDLOOM BLANKETS
  // ==========================================
  {
    id: 18,
    name: 'Premium Embossed Fleece Blanket (Double Bed)',
    category: 'HANDLOOM',
    subCategory: 'Blankets',
    img: handloomBlanketsImg,
    price: 350,
    moq: 50,
    rating: 5,
    description: 'Our signature double-ply embossed fleece blanket offers exceptional warmth and durability. Crafted with high-grade micro-polyester fibers, it features a luxurious floral embossed pattern that maintains its texture and color even after multiple washings.',
    specs: {
      material: '100% Micro-polyester Fleece',
      size: '220 x 240 cm (Double Bed)',
      weight: '3.5 kg',
      packaging: 'Heavy PVC Zipper Bag'
    },
    colors: ['Wine Red', 'Royal Blue', 'Golden Mustard', 'Forest Green', 'Chocolate Brown'],
    isNewArrival: true
  },

  // ==========================================
  // 3. NEW RELEASES: FITTED BEDSHEETS & LUXURY GLACE COTTON
  // ==========================================
  {
    id: 35,
    name: 'Caspian Feather Motif Fitted Double Bed Bedsheet Set',
    category: 'HANDLOOM',
    subCategory: 'Bedsheets',
    img: featherFittedBedsheet,
    price: 649,
    moq: 30,
    rating: 5,
    description: 'Contemporary multi-colored feather and leaf pattern double bedsheet crafted for luxury and everyday comfort. Designed with 360-degree elastic corners for a wrinkle-free, snug mattress tuck that stays smooth through the night. Includes 2 matching designer pillow shams.',
    specs: {
      material: '100% Super-Soft Glace Cotton Blend',
      bedsheetSize: '72 × 78 + 9 Inches (Fitted Double Bed)',
      pillowCoverSize: '20 × 30 Inches (Set of 2)',
      stitching: 'Full 360° Heavy-Duty Elastic Skirt with Reinforced Seams',
      mattressFitting: 'Snug Grip for up to 9" Mattress Depth',
      colorfastness: 'Guaranteed Reactive Prints - 100% Bleed Resistant',
      packaging: 'PVC Zipper Book Bag with Photographic Inset'
    },
    colors: ['Multicolor Feather Print', 'Ocean Navy Motif', 'Blush Pastel Leaf'],
    isNewArrival: true
  },
  {
    id: 36,
    name: 'Royal Sage Floral Glace Cotton King Bedsheet Set (Grand Jaal)',
    category: 'HANDLOOM',
    subCategory: 'Bedsheets',
    img: sageFloralBedsheet,
    price: 699,
    moq: 30,
    rating: 5,
    description: 'High thread-count glace cotton king bedsheet set featuring an opulent sage-green backdrop with intricate botanical floral jaal prints. Delivers a soft lustrous sheen, silky drape, and cool breathability for premium hospitality and retail boutique collections.',
    specs: {
      material: 'High-GSM Glace Cotton Satin Finish (300 TC Feel)',
      bedsheetSize: '90 × 108 Inches (Super King Flat / Double Bed)',
      pillowCoverSize: '20 × 30 Inches (Set of 2 with Border Flange)',
      threadCount: '300 TC Satin Weave Feel',
      printType: 'High-Definition Digital Botanical Floral Jaal',
      packaging: 'Luxury Rigid Gift / Book Box Packaging'
    },
    colors: ['Sage Green Flora', 'Muted Olive Blossom', 'Dusty Rose Bloom'],
    isNewArrival: true
  },

  // ==========================================
  // 4. NEW RELEASES: BATH MATS & RUGS
  // ==========================================
  {
    id: 37,
    name: 'Ultra-Plush Memory Foam Anti-Skid Bath Mat (Camel Beige)',
    category: 'HANDLOOM',
    subCategory: 'Bath Mats',
    img: bathMatImg,
    price: 220,
    moq: 50,
    rating: 5,
    description: 'Engineered for five-star hotel comfort and modern bathrooms. Crafted with dense quick-drying microfiber pile over a thick resilient memory foam core that cushions feet gently. Features heavy-duty TPR anti-skid rubberized backing for secure floor grip and safety on wet tile floors.',
    specs: {
      material: 'Super-Absorbent Microfiber with High-Density Memory Foam Core',
      size: '40 × 60 cm (16 × 24 Inches)',
      thickness: '15mm Extra Cushioned Rebound',
      backing: 'Anti-Skid TPR / Rubber Grip Backing',
      absorption: 'Rapid 3-Second Water Absorption',
      care: 'Machine Washable on Gentle Cycle',
      packaging: 'Individual Poly Wrap with Header Card'
    },
    colors: ['Camel Beige', 'Charcoal Grey', 'Coffee Brown', 'Sky Blue'],
    isNewArrival: true
  },

  // ==========================================
  // 5. NEW RELEASES: DESIGNER CURTAINS & DRAPES
  // ==========================================
  {
    id: 38,
    name: 'Emerald Foil Leaf Embossed Velvet Curtains (Set of 2)',
    category: 'HANDLOOM',
    subCategory: 'Curtains',
    img: curtain1,
    price: 499,
    moq: 20,
    rating: 5,
    description: 'Opulent sea-green velvet curtains embellished with shimmering gold metallic foil leaf vines. Heavyweight fall with pre-fitted rust-proof stainless steel eyelet rings for smooth sliding on standard curtain rods. Provides 70% light filtering and thermal insulation.',
    specs: {
      material: 'Heavy Crush Velvet with Metallic Gold Foil Work',
      size: '4 × 7 Feet (Door) / 4 × 9 Feet (Long Door)',
      headerType: '8 Rust-Resistant Metal Eyelet Grommets (1.6" Inner Diameter)',
      lightFiltering: '70% Room Darkening & Thermal Insulation',
      setIncludes: 'Pack of 2 Curtain Panels',
      care: 'Dry Clean or Gentle Cold Hand Wash'
    },
    colors: ['Emerald Sea Green', 'Royal Navy Gold', 'Wine Maroon Gold'],
    isNewArrival: true
  },
  {
    id: 39,
    name: 'Mocha Floral Linen-Touch Eyelet Door Curtains (Set of 2)',
    category: 'HANDLOOM',
    subCategory: 'Curtains',
    img: curtain2,
    price: 399,
    moq: 25,
    rating: 5,
    description: 'Earthy mocha-coffee textured curtains printed with delicate botanical autumn branches and floral blossoms in amber, ochre, and white tones. Pre-washed woven texture with brass-finished eyelets, designed for natural light diffusion in modern living rooms and bedrooms.',
    specs: {
      material: 'Linen-Blend Textured Heavy Poly-Cotton',
      size: '4 × 7 Feet (Door) / 4 × 5 Feet (Window)',
      headerType: '8 Premium Eyelet Rings with Metal Lining',
      lightFiltering: '60% Semi-Blackout Light Softening',
      setIncludes: 'Pack of 2 Curtain Panels',
      care: 'Machine Washable on Gentle Cycle'
    },
    colors: ['Mocha Coffee Brown', 'Natural Khaki', 'Slate Grey'],
    isNewArrival: true
  },
  {
    id: 40,
    name: 'Heavy Jacquard Leaf Weave Blackout Curtains (Multicolor Assortment)',
    category: 'HANDLOOM',
    subCategory: 'Curtains',
    img: curtain3,
    price: 450,
    moq: 30,
    rating: 5,
    description: 'Commercial showroom flagship! Dense self-jacquard weave curtains with elegant leaf silhouettes woven directly into the fabric. High thread count, anti-wrinkle drape that resists fading from sunlight exposure. Ideal for retail stores, hotels, and luxury apartments.',
    specs: {
      material: '100% High-Density Jacquard Polyester',
      size: '4 × 7 Feet (Door) / 4 × 9 Feet (Long Door)',
      headerType: 'Eyelet Grommets with High-Tension Stitching',
      lightFiltering: '75% Room Darkening',
      setIncludes: 'Pack of 2 Curtain Panels',
      care: 'Cold Machine Wash, No Bleach'
    },
    colors: ['Burgundy Wine', 'Chocolate Brown', 'Champagne Beige', 'Slate Blue', 'Golden Mocha'],
    isNewArrival: false
  },
  {
    id: 41,
    name: 'Two-Tone Floral Border Heavy Door Curtains (Set of 2)',
    category: 'HANDLOOM',
    subCategory: 'Curtains',
    img: curtain4,
    price: 420,
    moq: 30,
    rating: 5,
    description: 'Architectural two-tone design featuring an elegant printed floral upper border contrasted with rich solid self-textured bottom drapes. Precision stitched with calibrated bottom hem weights for a straight vertical drop and graceful wave folds.',
    specs: {
      material: 'Premium Textured Twill Polyester Blend',
      size: '4 × 7 Feet (Standard Door)',
      headerType: '8 Heavy Metal Grommets',
      stitching: 'Blind Hem Stitch with Heavy Bottom Weight',
      setIncludes: 'Pack of 2 Curtain Panels',
      care: 'Easy Hand or Machine Wash'
    },
    colors: ['Espresso Brown & Beige', 'Teal Blue & Ivory', 'Dark Walnut & Cream'],
    isNewArrival: false
  },
  {
    id: 42,
    name: 'Triple-Weave Thermal Blackout Curtains (Charcoal Black)',
    category: 'HANDLOOM',
    subCategory: 'Curtains',
    img: curtain5,
    price: 549,
    moq: 20,
    rating: 5,
    description: 'True triple-weave blackout technology that blocks out 85%+ of ambient sunlight and UV rays while reducing outside noise. Thick thermal insulation helps keep rooms cooler in summer and warmer in winter. Tailored with antique bronze eyelets for modern minimalist decor.',
    specs: {
      material: 'Triple-Weave Thermal Polyester Blackout Fabric',
      size: '4 × 7 Feet (Door) / 4 × 9 Feet (Long Door)',
      blackoutRating: '85% - 90% Total Light Blocking',
      headerType: '8 Antique Bronze Metal Grommets (1.6" Inner Diameter)',
      thermalProperties: 'Energy Efficient Noise & Temperature Buffer',
      packaging: 'Zipper PVC Bag with Color Inset Card'
    },
    colors: ['Charcoal Black', 'Jet Onyx', 'Anthracite Dark'],
    isNewArrival: true
  },
  {
    id: 43,
    name: 'Luxury Trellis Lattice 3-Piece Living Room Curtain Set (Silver & Gold)',
    category: 'HANDLOOM',
    subCategory: 'Curtains',
    img: curtain6,
    price: 799,
    moq: 15,
    rating: 5,
    description: 'Complete 3-panel designer living room statement set. Includes 2 shimmering silver-grey textured blackout side panels and 1 opulent gold-accented geometric trellis lattice center sheer drape. Creates depth, elegance, and multi-layered light control across large windows and french doors.',
    specs: {
      material: 'Textured Jacquard Poly-Satin (Side) + Gold Foil Trellis Sheer (Center)',
      size: 'Each Panel 4 × 7 Feet (Total Width 12 Feet Coverage)',
      setIncludes: '3 Panels (2 Textured Side Drapes + 1 Geometric Center Drape)',
      headerType: 'Stainless Steel Grommets Across All 3 Panels',
      style: 'Modern Neo-Classical Living Room Setup',
      packaging: 'Luxury Box Packaging with Hanger'
    },
    colors: ['Silver Grey & Gold Lattice', 'Champagne Ivory & Rose Gold'],
    isNewArrival: true
  },
  {
    id: 44,
    name: 'Triple-Weave Thermal Blackout Curtains (Royal Navy Blue)',
    category: 'HANDLOOM',
    subCategory: 'Curtains',
    img: curtain7,
    price: 549,
    moq: 20,
    rating: 5,
    description: 'Deep royal navy blue thermal room-darkening curtain pair. Constructed with interwoven black yarn technology between front and back microfiber layers to create natural blackout performance without stiff chemical coatings. Silky smooth touch with seamless drape.',
    specs: {
      material: 'Triple-Weave Interwoven High-Density Microfiber',
      size: '4 × 7 Feet (Door) / 4 × 9 Feet (Long Door)',
      blackoutRating: '85% - 90% Total Light Blocking',
      headerType: '8 Antique Bronze Metal Grommets',
      features: 'Fade Resistant, Thermal Balanced, Easy Slide',
      packaging: 'Zipper PVC Bag with Color Inset Card'
    },
    colors: ['Royal Navy Blue', 'Deep Midnight Ocean', 'Indigo Cobalt'],
    isNewArrival: true
  }
];

// Active products exported to the entire website (Handloom products only)
export const products = handloomProducts;

export default products;
