"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCart } from "@/app/context/CartContext";

const CartIcon = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="flex items-center gap-2 md:gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span className="text-base md:text-sm lg:text-base">Cart ({totalItems})</span>
    </Link>
  );
};

export default CartIcon;