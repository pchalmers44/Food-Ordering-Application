import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black min-h-[calc(100dvh-3rem)] flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:min-h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-6 p-6 md:p-10">
        <h1 className="text-white text-3xl font-bold sm:text-4xl xl:text-6xl">Delicious Burger & French Fry</h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown/>
        <button className="bg-red-500 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative min-h-[40vh] md:min-h-0 md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;