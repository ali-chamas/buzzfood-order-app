import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh+125px)] md:h-[calc(100vh-125px)] flex flex-col justify-around text-yellow-600 md:flex-row md:gap-8 md:items-center mb-20 ">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8 pl-3">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  );
};

export default SingleProductPage;