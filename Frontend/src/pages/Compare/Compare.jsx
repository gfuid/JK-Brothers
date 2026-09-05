import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiSliders, FiShoppingCart } from 'react-icons/fi';
import { ShopContext } from '../../context/ShopContext';
import { handleImageError } from '../../data/imageUrls';

export default function Compare() {
  const { compare, products, removeFromCompare, addToCart } = useContext(ShopContext);

  const comparedProducts = products.filter(p => compare.includes(p.id));

  if (comparedProducts.length === 0) {
    return (
      <div className="py-20 text-center min-h-screen flex flex-col justify-center items-center px-4">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl mb-4">
          <FiSliders />
        </div>
        <h2 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2 uppercase">No Products to Compare</h2>
        <p className="text-gray-400 text-xs md:text-sm font-semibold max-w-xs mb-8">
          Add up to 3 handloom or garment items from our catalog list to compare their prices, MOQs, and specifications side-by-side.
        </p>
        <div className="flex gap-4">
          <Link 
            to="/handloom"
            className="bg-primary hover:bg-blue-950 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
          >
            Browse Handloom
          </Link>
          <Link 
            to="/garments"
            className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
          >
            Browse Garments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <h1 className="font-serif text-2xl md:text-3.5xl font-black text-primary uppercase tracking-wide mb-8 border-b border-gray-250/20 pb-4">
          Product Comparison
        </h1>

        <div className="bg-white rounded-sm border border-gray-150 shadow-2xs overflow-x-auto no-scrollbar">
          
          <table className="w-full min-w-[600px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 bg-[#FAF9F6]">
                <th className="p-4 font-bold text-gray-500 uppercase tracking-wider w-1/4">Specs / Products</th>
                {comparedProducts.map((p) => (
                  <th key={p.id} className="p-4 w-1/4 border-l border-gray-100 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <img src={p.img} alt={p.name} onError={handleImageError} className="w-24 h-24 object-cover rounded-xs border border-gray-100 shadow-2xs" />
                      <Link to={`/product/${p.id}`} className="font-serif font-bold text-primary hover:text-accent transition-colors leading-tight line-clamp-2 px-2">
                        {p.name}
                      </Link>
                      <button
                        onClick={() => removeFromCompare(p.id)}
                        className="inline-flex items-center gap-1 text-red-500 hover:text-red-700 font-bold uppercase text-[9px] tracking-wider mt-1 cursor-pointer"
                      >
                        <FiTrash2 /> Remove
                      </button>
                    </div>
                  </th>
                ))}
                {/* Pad columns if comparing less than 3 products */}
                {[...Array(3 - comparedProducts.length)].map((_, idx) => (
                  <th key={idx} className="p-4 w-1/4 border-l border-gray-100 text-center text-gray-300 italic font-medium">
                    Empty slot
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              
              {/* Row 1: Category */}
              <tr>
                <td className="p-4 font-bold text-gray-400 uppercase tracking-wider bg-[#FAF9F6]/30">Category</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4 border-l border-gray-100 text-center font-semibold text-gray-700 uppercase tracking-wider">
                    {p.category} ({p.subCategory})
                  </td>
                ))}
                {[...Array(3 - comparedProducts.length)].map((_, idx) => (
                  <td key={idx} className="p-4 border-l border-gray-100"></td>
                ))}
              </tr>

              {/* Row 2: Price */}
              <tr>
                <td className="p-4 font-bold text-gray-400 uppercase tracking-wider bg-[#FAF9F6]/30">Price</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4 border-l border-gray-100 text-center font-sans font-bold text-base text-primary">
                    ₹{p.price.toLocaleString('en-IN')} / Piece
                  </td>
                ))}
                {[...Array(3 - comparedProducts.length)].map((_, idx) => (
                  <td key={idx} className="p-4 border-l border-gray-100"></td>
                ))}
              </tr>

              {/* Row 3: MOQ */}
              <tr>
                <td className="p-4 font-bold text-gray-400 uppercase tracking-wider bg-[#FAF9F6]/30">Minimum Order (MOQ)</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4 border-l border-gray-100 text-center font-bold text-accent">
                    {p.moq} Pcs
                  </td>
                ))}
                {[...Array(3 - comparedProducts.length)].map((_, idx) => (
                  <td key={idx} className="p-4 border-l border-gray-100"></td>
                ))}
              </tr>

              {/* Row 4: Material */}
              <tr>
                <td className="p-4 font-bold text-gray-400 uppercase tracking-wider bg-[#FAF9F6]/30">Material Composition</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4 border-l border-gray-100 text-center text-gray-600 font-semibold leading-relaxed">
                    {p.specs.material}
                  </td>
                ))}
                {[...Array(3 - comparedProducts.length)].map((_, idx) => (
                  <td key={idx} className="p-4 border-l border-gray-100"></td>
                ))}
              </tr>

              {/* Row 5: Size */}
              <tr>
                <td className="p-4 font-bold text-gray-400 uppercase tracking-wider bg-[#FAF9F6]/30">Dimensions / Sizes</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4 border-l border-gray-100 text-center text-gray-650 font-semibold">
                    {p.specs.size}
                  </td>
                ))}
                {[...Array(3 - comparedProducts.length)].map((_, idx) => (
                  <td key={idx} className="p-4 border-l border-gray-100"></td>
                ))}
              </tr>

              {/* Row 6: Weight */}
              <tr>
                <td className="p-4 font-bold text-gray-400 uppercase tracking-wider bg-[#FAF9F6]/30">Spec Weight</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4 border-l border-gray-100 text-center text-gray-650 font-semibold">
                    {p.specs.weight}
                  </td>
                ))}
                {[...Array(3 - comparedProducts.length)].map((_, idx) => (
                  <td key={idx} className="p-4 border-l border-gray-100"></td>
                ))}
              </tr>

              {/* Row 7: Packaging */}
              <tr>
                <td className="p-4 font-bold text-gray-400 uppercase tracking-wider bg-[#FAF9F6]/30">Export Packaging</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4 border-l border-gray-100 text-center text-gray-600 font-semibold">
                    {p.specs.packaging}
                  </td>
                ))}
                {[...Array(3 - comparedProducts.length)].map((_, idx) => (
                  <td key={idx} className="p-4 border-l border-gray-100"></td>
                ))}
              </tr>

              {/* Row 8: Action */}
              <tr>
                <td className="p-4 font-bold text-gray-400 uppercase tracking-wider bg-[#FAF9F6]/30">Add To Cart</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4 border-l border-gray-100 text-center">
                    <button
                      onClick={() => {
                        addToCart(p, p.moq);
                        alert(`Added MOQ (${p.moq} pcs) of ${p.name} to Cart.`);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-4 bg-accent hover:bg-accent-dark text-white text-[10px] font-bold tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
                    >
                      <FiShoppingCart /> Add MOQ
                    </button>
                  </td>
                ))}
                {[...Array(3 - comparedProducts.length)].map((_, idx) => (
                  <td key={idx} className="p-4 border-l border-gray-100"></td>
                ))}
              </tr>

            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}
