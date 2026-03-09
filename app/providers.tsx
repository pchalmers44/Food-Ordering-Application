"use client";

import { CartProvider } from "./context/CartContext";
import Notification from "./components/Notification";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import React from "react";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <Notification />  
      <Navbar />
      <Menu />
      {children}
      <Footer />
    </CartProvider>
  );
}
