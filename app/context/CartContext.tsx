"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  id: number;
  title: string;
  img?: string;
  price: number;
  quantity: number;
  option: { title: string; additionalPrice: number };
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, optionTitle: string) => void;
  updateCartItem: (id: number, optionTitle: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.id === item.id && cartItem.option.title === item.option.title
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.option.title === item.option.title
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }

      return [...prevCart, item];
    });
  };

  const removeFromCart = (id: number, optionTitle: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === id && item.option.title === optionTitle)
      )
    );
  };

  const updateCartItem = (id: number, optionTitle: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, optionTitle);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.option.title === optionTitle
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
