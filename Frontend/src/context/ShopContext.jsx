/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';
import { products } from '../data/products';

export const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  // Load initial states from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('zk_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('zk_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('zk_orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [compare, setCompare] = useState(() => {
    const savedCompare = localStorage.getItem('zk_compare');
    return savedCompare ? JSON.parse(savedCompare) : [];
  });

  // Sync state changes with localStorage
  useEffect(() => {
    localStorage.setItem('zk_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('zk_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('zk_orders', JSON.stringify(orders));
  }, [orders]);

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('zk_compare', JSON.stringify(compare));
  }, [compare]);

  // Cart Functions
  const addToCart = (product, quantity, color = '') => {
    setCart((prevCart) => {
      const selectedColor = color || (product.colors && product.colors[0]) || 'Standard';
      const existingItemIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.color === selectedColor
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += Number(quantity);
        return newCart;
      } else {
        return [...prevCart, { product, quantity: Number(quantity), color: selectedColor }];
      }
    });
    setCartDrawerOpen(true);
  };

  const removeFromCart = (productId, color) => {
    setCart((prevCart) => prevCart.filter(
      (item) => !(item.product.id === productId && item.color === color)
    ));
  };

  const updateCartQty = (productId, color, quantity) => {
    if (Number(quantity) <= 0) {
      removeFromCart(productId, color);
      return;
    }
    setCart((prevCart) => {
      return prevCart.map((item) => 
        item.product.id === productId && item.color === color
          ? { ...item, quantity: Number(quantity) }
          : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist Functions
  const addToWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) return prev;
      return [...prev, productId];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  const isWishlisted = (productId) => {
    return wishlist.includes(productId);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  // Order Functions
  const placeOrder = (shippingDetails) => {
    const orderNumber = `ZK-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      id: orderNumber,
      date: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      items: [...cart],
      shippingDetails,
      total: getCartTotal(),
      status: 'Processing',
    };

    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    clearCart();
    return orderNumber;
  };

  const getCartCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  const addToCompare = (productId) => {
    setCompare((prev) => {
      if (prev.includes(productId)) return prev;
      if (prev.length >= 3) {
        alert('You can compare a maximum of 3 products at a time.');
        return prev;
      }
      return [...prev, productId];
    });
  };

  const removeFromCompare = (productId) => {
    setCompare((prev) => prev.filter((id) => id !== productId));
  };

  const toggleCompare = (productId) => {
    setCompare((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        if (prev.length >= 3) {
          alert('You can compare a maximum of 3 products at a time. Please remove an item first.');
          return prev;
        }
        return [...prev, productId];
      }
    });
  };

  const isCompared = (productId) => {
    return compare.includes(productId);
  };

  return (
    <ShopContext.Provider value={{
      products,
      cart,
      wishlist,
      orders,
      compare,
      cartDrawerOpen,
      setCartDrawerOpen,
      addToCart,
      removeFromCart,
      updateCartQty,
      clearCart,
      addToWishlist,
      removeFromWishlist,
      isWishlisted,
      toggleWishlist,
      placeOrder,
      getCartCount,
      getCartTotal,
      addToCompare,
      removeFromCompare,
      toggleCompare,
      isCompared,
    }}>
      {children}
    </ShopContext.Provider>
  );
}
