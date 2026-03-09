import Price from "@/app/components/Price";
import { singleProduct } from "@/app/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 min-h-[calc(100dvh-3rem)] md:min-h-[calc(100dvh-6rem)] flex flex-col justify-center gap-6 text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-[40vh] md:h-[70vh]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="w-full flex flex-col gap-4 md:w-1/2 md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price 
          price={singleProduct.price} 
          id={singleProduct.id} 
          title={singleProduct.title}
          img={singleProduct.img}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
