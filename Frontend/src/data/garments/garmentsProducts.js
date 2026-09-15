/**
 * ARCHIVED / BACKED UP GARMENTS PRODUCTS CATALOG
 * ----------------------------------------------------------------------
 * Ye file garments products (Ladies Suits, Linen Shirts, Denim Jeans) ka
 * complete safe backup hai.
 * 
 * Jab bhi aapko garments wapas website par live karne hon, aap is file se
 * `garmentsProducts` ko `src/data/products.js` mein re-export ya merge kar sakte hain.
 */

import { 
  SUIT_IMAGES, 
  APPAREL_IMAGES, 
  JEANS_IMAGES 
} from '../imageUrls.js';

// Ladies Suits CDN Assets
const mulCottonSuit1 = SUIT_IMAGES.mulCotton1;
const mulCottonSuit2 = SUIT_IMAGES.mulCotton2;
const embroideredCottonSuit1 = SUIT_IMAGES.embroidered1;
const embroideredCottonSuit2 = SUIT_IMAGES.embroidered2;
const embroideredCottonSuit3 = SUIT_IMAGES.embroidered3;
const embroideredCottonSuit4 = SUIT_IMAGES.embroidered4;
const classicSuit1 = SUIT_IMAGES.classic1;
const classicSuit2 = SUIT_IMAGES.classic2;
const classicSuit3 = SUIT_IMAGES.classic3;
const classicSuit4 = SUIT_IMAGES.classic4;

// Shirts CDN Assets
const garmentsShirtsImg = APPAREL_IMAGES.shirts;

// Denim Jeans CDN Assets (1-15)
const jeans1 = JEANS_IMAGES.jeans1;
const jeans2 = JEANS_IMAGES.jeans2;
const jeans3 = JEANS_IMAGES.jeans3;
const jeans4 = JEANS_IMAGES.jeans4;
const jeans5 = JEANS_IMAGES.jeans5;
const jeans6 = JEANS_IMAGES.jeans6;
const jeans7 = JEANS_IMAGES.jeans7;
const jeans8 = JEANS_IMAGES.jeans8;
const jeans9 = JEANS_IMAGES.jeans9;
const jeans10 = JEANS_IMAGES.jeans10;
const jeans11 = JEANS_IMAGES.jeans11;
const jeans12 = JEANS_IMAGES.jeans12;
const jeans13 = JEANS_IMAGES.jeans13;
const jeans14 = JEANS_IMAGES.jeans14;
const jeans15 = JEANS_IMAGES.jeans15;

export const garmentsProducts = [
  // ==========================================
  // 1. LADIES SUITS (Direct Client Spec)
  // ==========================================
  {
    id: 8,
    name: 'Mul Cotton Suit with Lining & Applique Embroidery (Mustard)',
    category: 'GARMENTS',
    subCategory: 'Ladies Suits',
    img: mulCottonSuit1,
    price: 2499,
    moq: 10,
    rating: 5,
    description: 'Premium Mul cotton 3-piece ladies suit set with breathable attached inner lining and fine handcrafted Applique embroidery. Lightweight, luxurious drape designed for festive and boutique collections.',
    specs: {
      material: '100% Pure Mul Cotton with Attached Inner Lining',
      embroidery: 'Handcrafted Applique Embroidery & Detailed Neckline',
      size: '38, 40, 42, 44, 46 (Full Size Range 38 to 46)',
      setIncludes: 'Embroidered Kurti, Attached Lining, Pants / Bottom, Pure Dupatta',
      care: 'Dry Clean or Gentle Hand Wash'
    },
    colors: ['Golden Mustard', 'Warm Ochre'],
    isNewArrival: true
  },
  {
    id: 9,
    name: 'Mul Cotton Suit with Lining & Applique Embroidery (Rose Pink)',
    category: 'GARMENTS',
    subCategory: 'Ladies Suits',
    img: mulCottonSuit2,
    price: 2499,
    moq: 10,
    rating: 5,
    description: 'Exquisite Mul cotton suit set featuring delicate floral applique needlework with soft cotton lining. Comes with tailored pants and a printed mul dupatta.',
    specs: {
      material: '100% Pure Mul Cotton with Attached Inner Lining',
      embroidery: 'Handcrafted Applique Embroidery & Border Work',
      size: '38, 40, 42, 44, 46 (Full Size Range 38 to 46)',
      setIncludes: 'Embroidered Kurti, Attached Lining, Trousers, Dupatta',
      care: 'Dry Clean or Gentle Hand Wash'
    },
    colors: ['Dusty Rose Pink', 'Coral Peach'],
    isNewArrival: true
  },
  {
    id: 10,
    name: 'Silky Cotton Suit with Lining & Embroidery (Navy Blue)',
    category: 'GARMENTS',
    subCategory: 'Ladies Suits',
    img: embroideredCottonSuit1,
    price: 1246,
    moq: 15,
    rating: 5,
    description: 'Restocked client favorite! Silky cotton 3-piece suit set with attached inner lining and detailed resham thread embroidery. High quality finish at factory-direct wholesale pricing.',
    specs: {
      material: 'Silky Soft Cotton Fabric with Cotton Lining',
      embroidery: 'Intricate Resham Thread & Zari Needlework',
      size: '38, 40, 42, 44, 46 (Full Size Range 38 to 46)',
      status: 'Restocked Best-Seller',
      setIncludes: 'Embroidered Kurti with Lining, Bottom, Dupatta'
    },
    colors: ['Royal Navy Blue', 'Deep Indigo'],
    isNewArrival: true
  },
  {
    id: 11,
    name: 'Silky Cotton Suit with Lining & Embroidery (Maroon Wine)',
    category: 'GARMENTS',
    subCategory: 'Ladies Suits',
    img: embroideredCottonSuit2,
    price: 1246,
    moq: 15,
    rating: 5,
    description: 'Restocked silky cotton suit with lining and fine embroidery on yoke and hemline. Rich maroon tone suitable for wedding guests and formal events.',
    specs: {
      material: 'Silky Soft Cotton Fabric with Cotton Lining',
      embroidery: 'Intricate Resham Thread & Zari Needlework',
      size: '38, 40, 42, 44, 46 (Full Size Range 38 to 46)',
      status: 'Restocked Best-Seller',
      setIncludes: 'Embroidered Kurti with Lining, Bottom, Dupatta'
    },
    colors: ['Maroon Wine', 'Burgundy'],
    isNewArrival: true
  },
  {
    id: 12,
    name: 'Silky Cotton Suit with Lining & Embroidery (Emerald Green)',
    category: 'GARMENTS',
    subCategory: 'Ladies Suits',
    img: embroideredCottonSuit3,
    price: 1246,
    moq: 15,
    rating: 5,
    description: 'Vibrant emerald green silky cotton suit with attached inner lining and floral embroidery. Clean tailored silhouette in sizes 38 through 46.',
    specs: {
      material: 'Silky Soft Cotton Fabric with Cotton Lining',
      embroidery: 'Intricate Thread Work & Fine Neckline Detailing',
      size: '38, 40, 42, 44, 46 (Full Size Range 38 to 46)',
      status: 'Restocked Best-Seller',
      setIncludes: 'Embroidered Kurti with Lining, Bottom, Dupatta'
    },
    colors: ['Emerald Green', 'Forest Teal'],
    isNewArrival: false
  },
  {
    id: 13,
    name: 'Silky Cotton Suit with Lining & Embroidery (Golden Olive)',
    category: 'GARMENTS',
    subCategory: 'Ladies Suits',
    img: embroideredCottonSuit4,
    price: 1246,
    moq: 15,
    rating: 5,
    description: 'Classic earthy olive tone with premium thread work. Includes silky cotton kurti with lining, matching cigarette pants, and lightweight dupatta.',
    specs: {
      material: 'Silky Soft Cotton Fabric with Cotton Lining',
      embroidery: 'Intricate Resham Thread Work',
      size: '38, 40, 42, 44, 46 (Full Size Range 38 to 46)',
      status: 'Restocked Best-Seller',
      setIncludes: 'Embroidered Kurti with Lining, Bottom, Dupatta'
    },
    colors: ['Golden Olive', 'Antique Beige'],
    isNewArrival: false
  },
  {
    id: 14,
    name: 'Classic Chanderi Silk Embroidered Suit Set',
    category: 'GARMENTS',
    subCategory: 'Ladies Suits',
    img: classicSuit1,
    price: 1450,
    moq: 20,
    rating: 5,
    description: 'Festive Chanderi silk ladies suit set featuring traditional zari work, premium inner lining, and a glossy woven border dupatta.',
    specs: {
      material: 'Chanderi Silk Blend with Soft Cotton Lining',
      embroidery: 'Traditional Zari & Thread Work',
      size: '38, 40, 42, 44, 46',
      setIncludes: 'Kurti, Pant, Dupatta'
    },
    colors: ['Teal Blue', 'Royal Wine'],
    isNewArrival: false
  },
  {
    id: 15,
    name: 'Boutique Festive Embroidered Salwar Suit',
    category: 'GARMENTS',
    subCategory: 'Ladies Suits',
    img: classicSuit2,
    price: 1550,
    moq: 20,
    rating: 5,
    description: 'Boutique-ready ladies suit with heavy neckline ornamentation and soft inner lining. Tailored for wedding celebrations and premium retail stores.',
    specs: {
      material: 'Premium Cotton Silk with Lining',
      embroidery: 'Heavy Zari Embroidery & Stone Accents',
      size: '38, 40, 42, 44, 46',
      setIncludes: 'Kurti, Salwar, Dupatta'
    },
    colors: ['Crimson Red', 'Mustard Gold'],
    isNewArrival: true
  },
  {
    id: 16,
    name: 'Handloom Cotton Silk Designer Suit',
    category: 'GARMENTS',
    subCategory: 'Ladies Suits',
    img: classicSuit3,
    price: 1380,
    moq: 20,
    rating: 4,
    description: 'Panipat woven cotton silk suit with subtle thread embroidery on neckline and hem. Breathable comfort for daily office and family gatherings.',
    specs: {
      material: 'Handloom Cotton Silk with Breathable Lining',
      embroidery: 'Subtle Thread Work & Motif Details',
      size: '38, 40, 42, 44, 46',
      setIncludes: 'Kurti, Bottom, Dupatta'
    },
    colors: ['Sky Blue', 'Pastel Peach'],
    isNewArrival: false
  },
  {
    id: 17,
    name: 'Royal Traditional Zari Work Ladies Suit',
    category: 'GARMENTS',
    subCategory: 'Ladies Suits',
    img: classicSuit4,
    price: 1650,
    moq: 20,
    rating: 5,
    description: 'Luxurious evening suit crafted with rich zari borders, comfortable inner lining, and an embroidered organza dupatta.',
    specs: {
      material: 'Silk Blend with Attached Inner Lining',
      embroidery: 'Intricate Zari Floral Jaal',
      size: '38, 40, 42, 44, 46',
      setIncludes: 'Kurti with Lining, Pants, Organza Dupatta'
    },
    colors: ['Plum Purple', 'Midnight Blue'],
    isNewArrival: true
  },

  // ==========================================
  // 2. CASUAL SHIRTS
  // ==========================================
  {
    id: 19,
    name: 'Linen Casual Men Slim Fit Shirt',
    category: 'GARMENTS',
    subCategory: 'Shirts',
    img: garmentsShirtsImg,
    price: 280,
    moq: 80,
    rating: 5,
    description: 'A summer-friendly, highly breathable casual button-down shirt for men. Crafted with premium linen-cotton blends, it has pre-washed softness, a neat spread collar, and double-stitched buttons.',
    specs: {
      material: '55% Organic Linen / 45% Cotton',
      size: 'S, M, L, XL, XXL (Standard Fit)',
      weight: '180 gsm',
      packaging: 'Individual Polybag with Collar Card'
    },
    colors: ['Crisp White', 'Sky Blue', 'Olive Green', 'Peach', 'Khaki'],
    isNewArrival: true
  },

  // ==========================================
  // 3. DENIM JEANS (All 15 WebP Assets)
  // ==========================================
  {
    id: 20,
    name: 'Premium Slim Fit Denim Jeans (Indigo)',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans1,
    price: 390,
    moq: 100,
    rating: 5,
    description: 'High-stretch, breathable denim jeans designed for everyday rugged comfort. Styled with a classic five-pocket layout, metal rivets, and YKK zipper fly.',
    specs: {
      material: '98% Cotton Denim / 2% Spandex Lycra',
      size: '28, 30, 32, 34, 36, 38, 40 (Waist)',
      weight: '12 Oz Heavy Denim',
      packaging: 'Corrugated Box Carton packs'
    },
    colors: ['Dark Indigo', 'Classic Blue Wash', 'Charcoal Black'],
    isNewArrival: true
  },
  {
    id: 21,
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
    id: 22,
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
    id: 23,
    name: 'Bootcut Indigo Stretch Jeans',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans4,
    price: 430,
    moq: 100,
    rating: 5,
    description: 'Bootcut opening profile crafted with stretch denim. Classic design with modern flexibility.',
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
    name: 'Premium Corduroy Texture Denim',
    category: 'GARMENTS',
    subCategory: 'Jeans',
    img: jeans12,
    price: 450,
    moq: 80,
    rating: 5,
    description: 'Unique corduroy-denim blended weave for winter catalog collections. Soft touch with fine cord vertical stripes.',
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
    id: 32,
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
    id: 33,
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
    id: 34,
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

export default garmentsProducts;
