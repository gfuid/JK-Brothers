import handloomBlanketsImg from '../assets/handloom_blankets.webp';
import garmentsShirtsImg from '../assets/garments_shirts.webp';

// Import all 15 Jeans WebP assets
import jeans1 from '../assets/jeans_1.webp';
import jeans2 from '../assets/jeans_2.webp';
import jeans3 from '../assets/jeans_3.webp';
import jeans4 from '../assets/jeans_4.webp';
import jeans5 from '../assets/jeans_5.webp';
import jeans6 from '../assets/jeans_6.webp';
import jeans7 from '../assets/jeans_7.webp';
import jeans8 from '../assets/jeans_8.webp';
import jeans9 from '../assets/jeans_9.webp';
import jeans10 from '../assets/jeans_10.webp';
import jeans11 from '../assets/jeans_11.webp';
import jeans12 from '../assets/jeans_12.webp';
import jeans13 from '../assets/jeans_13.webp';
import jeans14 from '../assets/jeans_14.webp';
import jeans15 from '../assets/jeans_15.webp';

export const products = [
  {
    id: 1,
    name: 'Premium Embossed Fleece Blanket',
    category: 'HANDLOOM',
    subCategory: 'Blankets',
    img: handloomBlanketsImg,
    price: 350,
    moq: 50,
    rating: 5,
    description: 'Our signature double-ply embossed fleece blanket offers exceptional warmth and durability. Crafted with high-grade micro-polyester fibers, it features a luxurious floral embossed pattern that maintains its texture and color even after multiple washings. Perfect for distributor chains and wholesale retail.',
    specs: {
      material: '100% Micro-polyester Fleece',
      size: '220 x 240 cm (Double Bed)',
      weight: '3.5 kg',
      packaging: 'Heavy PVC Zipper Bag'
    },
    colors: ['Wine Red', 'Royal Blue', 'Golden Mustard', 'Forest Green', 'Chocolate Brown'],
    isNewArrival: true
  },
  {
    id: 2,
    name: 'Luxury Cotton Towel Set (6-Piece)',
    category: 'HANDLOOM',
    subCategory: 'Towels',
    img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80',
    price: 480,
    moq: 100,
    rating: 5,
    description: 'Add spa-like elegance to retail catalogs with our Turkish ring-spun cotton towels. Highly absorbent, ultra-plush, and quick-drying, this set includes 2 bath towels, 2 hand towels, and 2 washcloths. Woven with double-stitched borders for long-lasting structural integrity in hotels and homes.',
    specs: {
      material: '100% Turkish Ring-Spun Cotton',
      size: '70 x 140 cm (Bath), 50 x 90 cm (Hand)',
      weight: '600 GSM',
      packaging: 'Eco-friendly PP Wrap'
    },
    colors: ['Soft Ivory', 'Slate Gray', 'Navy Blue', 'Sage Green', 'Blush Pink'],
    isNewArrival: false
  },
  {
    id: 3,
    name: 'Royal Heritage Jacquard Bedsheet Set',
    category: 'HANDLOOM',
    subCategory: 'Bedsheets',
    img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
    price: 650,
    moq: 40,
    rating: 4,
    description: 'An exquisite collection of premium high-thread-count jacquard bedsheets. Features intricate traditional motifs woven directly into the fabric, providing a subtle shimmer and soft finish. Each pack contains one super-king bedsheet and two matching pillow shams with gold border details.',
    specs: {
      material: '70% Cotton / 30% Silk Blend',
      size: '275 x 275 cm (Super King)',
      weight: '1.2 kg',
      packaging: 'Luxury Box Packaging'
    },
    colors: ['Royal Gold', 'Imperial Ivory', 'Crimson Red', 'Silver Blue'],
    isNewArrival: true
  },
  {
    id: 4,
    name: 'Kashmiri Hand-Woven Floral Carpet',
    category: 'HANDLOOM',
    subCategory: 'Carpets',
    img: 'https://images.unsplash.com/photo-1576016770956-debb63d900ad?auto=format&fit=crop&w=600&q=80',
    price: 3200,
    moq: 10,
    rating: 5,
    description: 'Meticulously crafted hand-knotted wool carpet displaying vintage Persian floral medallions. The high knot density delivers absolute comfort, floor protection, and aesthetic heritage. Ideal for premium boutiques and high-end exporters.',
    specs: {
      material: '80% Fine New Zealand Wool / 20% Art Silk',
      size: '5 x 7 Feet',
      weight: '8.4 kg',
      packaging: 'Waterproof Canvas Roll'
    },
    colors: ['Ruby Red-Gold', 'Navy-Ivory', 'Emerald-Beige'],
    isNewArrival: false
  },
  {
    id: 5,
    name: 'Linen Casual Men Slim Fit Shirt',
    category: 'GARMENTS',
    subCategory: 'Shirts',
    img: garmentsShirtsImg,
    price: 280,
    moq: 80,
    rating: 5,
    description: 'A summer-friendly, highly breathable casual button-down shirt for men. Crafted with premium linen-cotton blends, it has pre-washed softness, a neat spread collar, and double-stitched buttons. Perfect casual couture for brands seeking premium private label imports.',
    specs: {
      material: '55% Organic Linen / 45% Cotton',
      size: 'S, M, L, XL, XXL (Standard Fit)',
      weight: '180 gsm',
      packaging: 'Individual Polybag with Collar Card'
    },
    colors: ['Crisp White', 'Sky Blue', 'Olive Green', 'Peach', 'Khaki'],
    isNewArrival: true
  },
  {
    id: 6,
    name: 'Traditional Jaipuri Cotton Kurti',
    category: 'GARMENTS',
    subCategory: 'Kurtis',
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    price: 220,
    moq: 120,
    rating: 4,
    description: 'Stunning everyday ethnic kurti featuring hand-block prints of classic Rajasthani flowers. Stitched with breathable cotton, it is tailored with a three-quarter sleeve, keyhole neck detail, and side slits. Offers absolute retail comfort and vibrant styling.',
    specs: {
      material: '100% Cambric Cotton',
      size: 'XS, S, M, L, XL, 2XL',
      weight: '140 gsm',
      packaging: 'Flat Carton Packs'
    },
    colors: ['Indigo Indigo', 'Ruby Crimson', 'Mango Yellow'],
    isNewArrival: false
  },
  {
    id: 7,
    name: 'Designer Silk Evening Gown',
    category: 'GARMENTS',
    subCategory: 'Gowns',
    img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80',
    price: 1100,
    moq: 30,
    rating: 5,
    description: 'An elegant floor-length evening gown made of premium silk taffeta. Crafted with an embellished mesh overlay bodice, flowy pleated skirt, and an invisible back zipper. Exquisite formal fashion catalog addition.',
    specs: {
      material: 'Premium Taffeta Silk & Embroidered Net',
      size: 'S, M, L, XL',
      weight: '650g',
      packaging: 'Zipper Gown Hanger Bag'
    },
    colors: ['Burgundy Wine', 'Navy Midnight', 'Champagne Gold', 'Emerald Green'],
    isNewArrival: true
  },
  {
    id: 8,
    name: 'Premium Slim Fit Denim Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans1,
    price: 390,
    moq: 100,
    rating: 5,
    description: 'High-stretch, breathable denim jeans designed for everyday rugged comfort. Styled with a classic five-pocket layout, metal rivets, and YKK zipper fly. Durable washes ensure color fastness and zero shrinkage.',
    specs: {
      material: '98% Cotton Denim / 2% Spandex Lycra',
      size: '28, 30, 32, 34, 36, 38, 40 (Waist)',
      weight: '12 Oz Heavy Denim',
      packaging: 'Corrugated Box Carton packs'
    },
    colors: ['Dark Indigo', 'Classic Blue Wash', 'Charcoal Black', 'Light Wash Blue'],
    isNewArrival: true
  },
  {
    id: 9,
    name: 'Premium Semi-Sheer Linen Curtains',
    category: 'HANDLOOM',
    subCategory: 'Curtains',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    price: 290,
    moq: 60,
    rating: 4,
    description: 'Elegant linen panel curtains designed to filter light gently while maintaining indoor privacy. Heavy-duty nickel grommets ensure easy sliding. Machine washable, wrinkle-resistant.',
    specs: {
      material: '40% Linen / 60% Polyester',
      size: '54 x 84 Inches per panel',
      weight: '400g per panel',
      packaging: 'PVC Poly Pack'
    },
    colors: ['Natural Beige', 'Pure White', 'Taupe Gray', 'Soft Teal'],
    isNewArrival: true
  },
  {
    id: 10,
    name: 'Artisan Embroidered Cushion Covers',
    category: 'HANDLOOM',
    subCategory: 'Pillow Covers',
    img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
    price: 90,
    moq: 150,
    rating: 5,
    description: 'Vibrant hand-embroidered pillow and cushion covers in geometric layouts. Features a heavy back canvas with a concealed matching zipper. Excellent decorative home textile merchandise.',
    specs: {
      material: '100% Khadi Cotton Base, Wool Thread Embroidered',
      size: '45 x 45 cm (18 x 18 Inches)',
      weight: '150g',
      packaging: 'Bulk Polybag'
    },
    colors: ['Multicolor Warm', 'Multicolor Cool', 'Monochrome Gray'],
    isNewArrival: false
  },
  {
    id: 11,
    name: 'Classic Casual Crewneck T-Shirt',
    category: 'GARMENTS',
    subCategory: 'T-Shirts',
    img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    price: 130,
    moq: 200,
    rating: 4,
    description: 'Lightweight combed-cotton everyday plain crewnecks. Styled with ribbed neckline and double-needle sleeves. Fully customizable for branding print / embroidery.',
    specs: {
      material: '100% Combed Cotton',
      size: 'S, M, L, XL, XXL, XXXL',
      weight: '160 gsm',
      packaging: '10-piece Bundle Packs'
    },
    colors: ['Pitch Black', 'Sport Gray', 'Navy Blue', 'Red Wine', 'Forest Green'],
    isNewArrival: true
  },
  {
    id: 12,
    name: 'Slim Fit Flat Front Formal Trousers',
    category: 'GARMENTS',
    subCategory: 'Formal Pants',
    img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
    price: 360,
    moq: 80,
    rating: 5,
    description: 'Perfect corporate and formal pants for men. Engineered with moisture-wicking stretch cotton-poly blend, flat front, hook-bar closures, and slash pockets. Retains crisp creases.',
    specs: {
      material: '65% Polyester / 33% Viscose / 2% Lycra',
      size: '30, 32, 34, 36, 38, 40',
      weight: '240 gsm',
      packaging: 'Hanger Carton Packing'
    },
    colors: ['Charcoal Gray', 'Jet Black', 'Navy Blue', 'Beige Khaki'],
    isNewArrival: false
  },
  // Added remaining 14 Jeans items using WebP assets
  {
    id: 13,
    name: 'Classic Regular Fit Denim Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans2,
    price: 410,
    moq: 100,
    rating: 5,
    description: 'Traditional straight fit denim jeans built for maximum comfort and durability. Standard waist with button closure and heavy-duty stitching.',
    specs: {
      material: '100% Cotton Raw Indigo Denim',
      size: '30, 32, 34, 36, 38 (Waist)',
      weight: '13 Oz Heavy Denim',
      packaging: 'Individually wrapped in polybags'
    },
    colors: ['Classic Indigo Blue', 'Deep Indigo'],
    isNewArrival: false
  },
  {
    id: 14,
    name: 'Relaxed Fit Stonewash Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans3,
    price: 420,
    moq: 80,
    rating: 4,
    description: 'Stonewashed blue denim jeans featuring a relaxed seat and thigh. Provides vintage looks and soft wear texture right out of the box.',
    specs: {
      material: '99% Cotton / 1% Elastane',
      size: '30, 32, 34, 36, 38, 40',
      weight: '12.5 Oz Denim',
      packaging: 'Carton pack of 20'
    },
    colors: ['Vintage Stonewash', 'Light Blue Wash'],
    isNewArrival: true
  },
  {
    id: 15,
    name: 'Bootcut Indigo Stretch Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans4,
    price: 430,
    moq: 100,
    rating: 5,
    description: 'Bootcut opening profile crafted with stretch denim. Classic design with modern flexibility. Ideal B2B supply for casual wear catalogs.',
    specs: {
      material: '97% Cotton / 3% Lycra Spandex',
      size: '28, 30, 32, 34, 36',
      weight: '11.8 Oz Denim',
      packaging: 'Carton packs of 30'
    },
    colors: ['Deep Midnight Blue', 'Classic Indigo'],
    isNewArrival: false
  },
  {
    id: 16,
    name: 'Super-Skinny Charcoal Black Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans5,
    price: 395,
    moq: 120,
    rating: 5,
    description: 'Sleek super-skinny fit black denim with heavy spandex recovery. Remains shape-retentive throughout high wear cycles.',
    specs: {
      material: '95% Cotton / 4% Polyester / 1% Spandex',
      size: '28, 30, 32, 34',
      weight: '11 Oz Stretch Denim',
      packaging: 'Corrugated cartons'
    },
    colors: ['Charcoal Black', 'Faded Gray'],
    isNewArrival: true
  },
  {
    id: 17,
    name: 'Distressed Biker Denim Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans6,
    price: 460,
    moq: 50,
    rating: 4,
    description: 'Premium biker styled denim with ribbed knee panels, light distressing, and stonewashed details.',
    specs: {
      material: '98% Cotton Denim / 2% Elastane',
      size: '30, 32, 34, 36',
      weight: '12 Oz Denim',
      packaging: 'Polybag packs'
    },
    colors: ['Ash Gray Distressed', 'Indigo Distressed'],
    isNewArrival: false
  },
  {
    id: 18,
    name: 'Comfort Jogger Fit Denim Pants',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans7,
    price: 380,
    moq: 100,
    rating: 5,
    description: 'Ergonomic jogger styled denim pants featuring elastic drawstrings, cuffed ankles, and lightweight stretch.',
    specs: {
      material: '90% Cotton / 8% Polyester / 2% Spandex',
      size: 'S, M, L, XL',
      weight: '10 Oz Comfort Denim',
      packaging: 'Flat bundle packing'
    },
    colors: ['Classic Blue', 'Slate Blue'],
    isNewArrival: true
  },
  {
    id: 19,
    name: 'Heavyweight Raw Selvage Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans8,
    price: 520,
    moq: 40,
    rating: 5,
    description: 'Premium unwashed raw selvage denim. Develops custom character creases and fades uniquely over time.',
    specs: {
      material: '100% Cotton Ring-Spun Selvage',
      size: '30, 32, 34, 36, 38',
      weight: '14.5 Oz Heavy Denim',
      packaging: 'Custom branded boxes'
    },
    colors: ['Raw Rigid Indigo'],
    isNewArrival: false
  },
  {
    id: 20,
    name: 'Athletic Tapered Denim Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans9,
    price: 415,
    moq: 90,
    rating: 4,
    description: 'Designed for athletic builds with extra room in the seat and thigh, tapering down to a clean ankle opening.',
    specs: {
      material: '98% Cotton / 2% Lycra',
      size: '32, 34, 36, 38, 40',
      weight: '12 Oz Denim',
      packaging: 'Standard polybags'
    },
    colors: ['Dark Wash', 'Medium Wash'],
    isNewArrival: false
  },
  {
    id: 21,
    name: 'Vintage Light Wash Denim Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans10,
    price: 390,
    moq: 100,
    rating: 5,
    description: 'Classic 90s inspired light wash denim. Bleach washed texture with clean hems and comfortable straight fit.',
    specs: {
      material: '100% Cotton',
      size: '28, 30, 32, 34, 36, 38',
      weight: '12 Oz Denim',
      packaging: 'Carton packs'
    },
    colors: ['Light Bleach Blue'],
    isNewArrival: true
  },
  {
    id: 22,
    name: 'Carpenter Utility Work Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans11,
    price: 440,
    moq: 70,
    rating: 5,
    description: 'Rugged utility work jeans equipped with tool loops, dual side pockets, and triple-needle flat-fell stitching.',
    specs: {
      material: '100% Cotton Heavy Duck Denim',
      size: '30, 32, 34, 36, 38, 40',
      weight: '13.8 Oz Heavy Denim',
      packaging: 'Bulk carton bundles'
    },
    colors: ['Classic Denim Blue', 'Raw Indigo'],
    isNewArrival: false
  },
  {
    id: 23,
    name: 'Premium Corduroy Texture Denim',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans12,
    price: 450,
    moq: 80,
    rating: 5,
    description: 'Unique corduroy-denim blended weave for winter catalog warm collections. Soft touch with fine cord vertical stripes.',
    specs: {
      material: '60% Cotton / 38% Polyester / 2% Elastane',
      size: '30, 32, 34, 36, 38',
      weight: '11.5 Oz Blend',
      packaging: 'PVC zipper bags'
    },
    colors: ['Tan Gold', 'Espresso Brown', 'Charcoal'],
    isNewArrival: true
  },
  {
    id: 24,
    name: 'Fleece-Lined Winter Denim Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans13,
    price: 495,
    moq: 60,
    rating: 5,
    description: 'Heavyweight denim jeans internally bonded with thermal fleece backing. Maximum insulation for cold climate sales.',
    specs: {
      material: 'Denim Cotton exterior, Polyester Fleece lining',
      size: '30, 32, 34, 36, 38, 40',
      weight: '15 Oz Insulated',
      packaging: 'Heavy poly packs'
    },
    colors: ['Dark Charcoal Black', 'Deep Indigo Wash'],
    isNewArrival: false
  },
  {
    id: 25,
    name: 'Modern Straight Fit Dark Blue Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans14,
    price: 405,
    moq: 100,
    rating: 5,
    description: 'Clean, wash-free look denim jeans for corporate-casual wardrobes. Sits flat on the waist with straight legs.',
    specs: {
      material: '98% Cotton / 2% Spandex',
      size: '28, 30, 32, 34, 36, 38',
      weight: '12 Oz Denim',
      packaging: 'Standard cartons'
    },
    colors: ['Raw Ink Blue', 'Midnight Denim'],
    isNewArrival: false
  },
  {
    id: 26,
    name: 'Urban Hip-Hop Loose Fit Denim',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans15,
    price: 425,
    moq: 80,
    rating: 4,
    description: 'Baggy styled streetwear denim jeans featuring wide cuffs, custom wash fade gradients, and deep pockets.',
    specs: {
      material: '100% Cotton Denim',
      size: '30, 32, 34, 36, 38',
      weight: '13 Oz Denim',
      packaging: 'Hanger bundles'
    },
    colors: ['Vintage Faded Blue', 'Acid Wash Black'],
    isNewArrival: true
  }
];
