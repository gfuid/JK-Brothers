# Garments & Apparel Backup Folder

Is folder me Garments division ke saare products (Ladies Suits, Denim Jeans, Shirts) safely store hain.

## Files
- `garmentsProducts.js`: Isme total 26 garments products hain:
  - 10 Ladies Suits (IDs 8-17)
  - 1 Casual Linen Shirt (ID 19)
  - 15 Denim Jeans (IDs 20-34)

## How to restore / re-enable on website
Agar kabhi bhi garments products wapas website par live karne hon:
1. `src/data/products.js` me import karein:
   ```js
   import { garmentsProducts } from './garments/garmentsProducts.js';
   ```
2. Aur `products` array me spread kar dein:
   ```js
   export const products = [
     ...handloomProducts,
     ...garmentsProducts
   ];
   ```
3. `Navbar.jsx` aur `Collections.jsx` me Khadi Fashion / Garments section un-comment kar dein.
