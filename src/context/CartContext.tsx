import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Model3D } from '@/data/models';

interface CartItem {
  model: Model3D;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (model: Model3D) => void;
  removeFromCart: (modelId: string) => void;
  clearCart: () => void;
  isInCart: (modelId: string) => boolean;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((model: Model3D) => {
    setItems(prev => {
      const exists = prev.find(item => item.model.id === model.id);
      if (exists) {
        return prev; // Digital goods, no duplicates
      }
      return [...prev, { model, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((modelId: string) => {
    setItems(prev => prev.filter(item => item.model.id !== modelId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const isInCart = useCallback((modelId: string) => {
    return items.some(item => item.model.id === modelId);
  }, [items]);

  const totalItems = items.length;
  const totalPrice = items.reduce((sum, item) => sum + item.model.price, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      clearCart,
      isInCart,
      totalItems,
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
