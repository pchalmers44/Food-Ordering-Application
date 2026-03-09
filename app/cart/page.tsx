"use client";

import React from 'react'
import Image from 'next/image'
import { useCart } from '@/app/context/CartContext'
import Link from 'next/link'

const CartPage = () => {
  const { cart, removeFromCart, updateCartItem } = useCart();

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => {
    const itemPrice = item.price + item.option.additionalPrice;
    return total + itemPrice * item.quantity;
  }, 0);

  // Calculate service cost (example: 10% of subtotal, minimum $0)
  const serviceCost = subtotal > 0 ? subtotal * 0.1 : 0;

  // Calculate delivery cost
  const deliveryCost = subtotal > 0 && subtotal < 50 ? 5 : 0;

  // Calculate total
  const total = subtotal + serviceCost + deliveryCost;

  return (
    <div className="min-h-[calc(100dvh-3rem)] md:min-h-[calc(100dvh-6rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="p-4 flex flex-col justify-start overflow-y-auto lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={`${item.id}-${item.option.title}`} className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-red-200 pb-4">
              {item.img && (
                <Image src={item.img} alt={item.title} width={100} height={100} />
              )}
              <div className="">
                <h1 className="uppercase text-xl font-bold">{item.title}</h1>
                <span>{item.option.title}</span>
              </div>
              <h2 className="font-bold">
                ${((item.price + item.option.additionalPrice) * item.quantity).toFixed(2)}
              </h2>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => updateCartItem(item.id, item.option.title, item.quantity - 1)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateCartItem(item.id, item.option.title, item.quantity + 1)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  +
                </button>
              </div>
              <span 
                className="cursor-pointer font-bold text-lg hover:text-red-700"
                onClick={() => removeFromCart(item.id, item.option.title)}
              >
                X
              </span>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <p className="text-2xl">Your cart is empty</p>
            <Link href="/menu/all" className="bg-red-500 text-white px-4 py-2 rounded-md">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({cart.length} items)</span>
          <span className="">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">${serviceCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className={deliveryCost === 0 ? "text-green-500" : ""}>
            {deliveryCost === 0 ? "FREE!" : `$${deliveryCost.toFixed(2)}`}
          </span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        <button 
          disabled={cart.length === 0}
          className="bg-red-500 text-white p-3 rounded-md w-full sm:w-1/2 self-end disabled:opacity-50 disabled:cursor-not-allowed"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;