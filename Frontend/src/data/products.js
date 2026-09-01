import handloomBlanketsImg from '../assets/products/handloom/handloom_blankets.webp';
import garmentsShirtsImg from '../assets/products/garments/garments_shirts.webp';

// Bedsheets WebP Assets
import caspianBedsheet1 from '../assets/products/bedsheets/caspian_fitted_bedsheet_1.webp';
import caspianBedsheet2 from '../assets/products/bedsheets/caspian_fitted_bedsheet_2.webp';
import caspianBedsheet3 from '../assets/products/bedsheets/caspian_fitted_bedsheet_3.webp';
import caspianBedsheet4 from '../assets/products/bedsheets/caspian_fitted_bedsheet_4.webp';
import caspianBedsheet5 from '../assets/products/bedsheets/caspian_fitted_bedsheet_5.webp';
import printedBedsheet1 from '../assets/products/bedsheets/printed_bedsheet_1.webp';
import printedBedsheet2 from '../assets/products/bedsheets/printed_bedsheet_2.webp';

// Ladies Suits WebP Assets
import mulCottonSuit1 from '../assets/products/suits/mul_cotton_applique_suit_1.webp';
import mulCottonSuit2 from '../assets/products/suits/mul_cotton_applique_suit_2.webp';
import embroideredCottonSuit1 from '../assets/products/suits/embroidered_cotton_suit_1.webp';
import embroideredCottonSuit2 from '../assets/products/suits/embroidered_cotton_suit_2.webp';
import embroideredCottonSuit3 from '../assets/products/suits/embroidered_cotton_suit_3.webp';
import embroideredCottonSuit4 from '../assets/products/suits/embroidered_cotton_suit_4.webp';
import classicSuit1 from '../assets/products/suits/classic_suit_1.webp';
import classicSuit2 from '../assets/products/suits/classic_suit_2.webp';
import classicSuit3 from '../assets/products/suits/classic_suit_3.webp';
import classicSuit4 from '../assets/products/suits/classic_suit_4.webp';

// Jeans WebP Assets (1-15)
import jeans1 from '../assets/products/jeans/jeans_1.webp';
import jeans2 from '../assets/products/jeans/jeans_2.webp';
import jeans3 from '../assets/products/jeans/jeans_3.webp';
import jeans4 from '../assets/products/jeans/jeans_4.webp';
import jeans5 from '../assets/products/jeans/jeans_5.webp';
import jeans6 from '../assets/products/jeans/jeans_6.webp';
import jeans7 from '../assets/products/jeans/jeans_7.webp';
import jeans8 from '../assets/products/jeans/jeans_8.webp';
import jeans9 from '../assets/products/jeans/jeans_9.webp';
import jeans10 from '../assets/products/jeans/jeans_10.webp';
import jeans11 from '../assets/products/jeans/jeans_11.webp';
import jeans12 from '../assets/products/jeans/jeans_12.webp';
import jeans13 from '../assets/products/jeans/jeans_13.webp';
import jeans14 from '../assets/products/jeans/jeans_14.webp';
import jeans15 from '../assets/products/jeans/jeans_15.webp';

export const products = [
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
  // 2. LADIES SUITS (Direct Client Spec)
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
  // 3. HANDLOOM BLANKETS & GARMENTS SHIRTS
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
  // 4. DENIM JEANS (All 15 WebP Assets)
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
