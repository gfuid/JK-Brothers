// JK Brothers Real Product & Brand Asset Registry
// Restored directly from original JK Brothers / ZK Brother product collection

// Brand & Factory Assets
import heroBanner from '../assets/hero/hero_banner.webp';
import heroImg from '../assets/hero/hero.webp';
import aboutFactory from '../assets/about/about_factory.webp';

// Handloom Bedsheet Assets
import caspian1 from '../assets/products/bedsheets/caspian_fitted_bedsheet_1.webp';
import caspian2 from '../assets/products/bedsheets/caspian_fitted_bedsheet_2.webp';
import caspian3 from '../assets/products/bedsheets/caspian_fitted_bedsheet_3.webp';
import caspian4 from '../assets/products/bedsheets/caspian_fitted_bedsheet_4.webp';
import caspian5 from '../assets/products/bedsheets/caspian_fitted_bedsheet_5.webp';
import printed1 from '../assets/products/bedsheets/printed_bedsheet_1.webp';
import printed2 from '../assets/products/bedsheets/printed_bedsheet_2.webp';

// Apparel & Blankets Assets
import shirtsImg from '../assets/products/garments/garments_shirts.webp';
import blanketsImg from '../assets/products/handloom/handloom_blankets.webp';

// Designer Suits Assets
import mulCotton1 from '../assets/products/suits/mul_cotton_applique_suit_1.webp';
import mulCotton2 from '../assets/products/suits/mul_cotton_applique_suit_2.webp';
import embroidered1 from '../assets/products/suits/embroidered_cotton_suit_1.webp';
import embroidered2 from '../assets/products/suits/embroidered_cotton_suit_2.webp';
import embroidered3 from '../assets/products/suits/embroidered_cotton_suit_3.webp';
import embroidered4 from '../assets/products/suits/embroidered_cotton_suit_4.webp';
import classic1 from '../assets/products/suits/classic_suit_1.webp';
import classic2 from '../assets/products/suits/classic_suit_2.webp';
import classic3 from '../assets/products/suits/classic_suit_3.webp';
import classic4 from '../assets/products/suits/classic_suit_4.webp';

// Denim Jeans Assets (Jeans 1 to 15)
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

// Fallback Luxury SVG
export const FALLBACK_IMAGE = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="%230B2144"/><path d="M150 450 L300 250 L450 450 Z" fill="%23C5A85C" opacity="0.4"/><circle cx="420" cy="200" r="40" fill="%23C5A85C" opacity="0.6"/><text x="50%25" y="82%25" text-anchor="middle" fill="%23FFFFFF" font-family="sans-serif" font-size="24" font-weight="bold" letter-spacing="2">JK BROTHERS TEXTILES</text></svg>';

export const handleImageError = (e) => {
  if (e?.currentTarget && e.currentTarget.src !== FALLBACK_IMAGE) {
    e.currentTarget.src = FALLBACK_IMAGE;
  }
};

// Brand & Layout Images
export const BRAND_IMAGES = {
  logo: '/logo.webp',
  heroBanner,
  heroTexture: heroImg,
  aboutFactory,
};

// Handloom & Bedding Images
export const BEDSHEET_IMAGES = {
  caspian1,
  caspian2,
  caspian3,
  caspian4,
  caspian5,
  printed1,
  printed2,
};

// Designer Suits Images
export const SUIT_IMAGES = {
  mulCotton1,
  mulCotton2,
  embroidered1,
  embroidered2,
  embroidered3,
  embroidered4,
  classic1,
  classic2,
  classic3,
  classic4,
};

// Apparel & Blankets Images
export const APPAREL_IMAGES = {
  shirts: shirtsImg,
  blankets: blanketsImg,
};

// Denim Jeans Images
export const JEANS_IMAGES = {
  jeans1,
  jeans2,
  jeans3,
  jeans4,
  jeans5,
  jeans6,
  jeans7,
  jeans8,
  jeans9,
  jeans10,
  jeans11,
  jeans12,
  jeans13,
  jeans14,
  jeans15,
};
