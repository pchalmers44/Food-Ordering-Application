"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";

type Props = {
  price: number;
  id: number;
  title: string;
  img?: string;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, title, img, options }: Props) => {
  const { addToCart } = useCart();
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  const handleAddToCart = () => {
    const selectedOption = options ? options[selected] : { title: "Default", additionalPrice: 0 };
    addToCart({
      id,
      title,
      img,
      price,
      quantity,
      option: selectedOption,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-2 sm:gap-4 flex-wrap">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-20 sm:min-w-24 p-2 ring-1 ring-red-400 rounded-md text-sm sm:text-base"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500 rounded-md">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button 
          onClick={handleAddToCart}
          className="uppercase w-full sm:w-56 bg-red-500 text-white p-3 ring-1 ring-red-500 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;