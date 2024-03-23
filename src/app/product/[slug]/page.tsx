"use client";

import { getSpecficProduct } from "@/lib/util";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

const Page = ({ params }: { params: { slug: string } }) => {
  const [activeSize, setActiveSize] = useState("S");
  const [activeColor, setActiveColor] = useState("black");

  const product = getSpecficProduct(
    params.slug.toUpperCase().replace(/-/g, " ")
  );

  if (!product) {
    return (
      <div className="w-screen h-[80vh] flex justify-center items-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex lg:flex-row flex-col">
      <div className="w-1/2 h-full flex p-8 border-r">
        <div className="div w-1/4 h-5/6 px-8">
          {product.image.map((image) => (
            <div key={image} className="h-1/4 bg-zinc-900 rounded-lg"></div>
          ))}
        </div>
        <div className="w-2/3 h-5/6 bg-zinc-900 rounded-lg"></div>
      </div>
      <div className="w-1/2 h-full flex flex-col p-8 gap-4">
        <h1 className="text-2xl font-bold">
          {product.name}
          <span className="text-gray-400 text-lg"> • ${product.price}</span>
        </h1>
        <p className="text-lg">{product.description}</p>
        <div className="flex gap-2 items-center">
          {Object.entries(product.sizes).map(([size, stock]) => {
            return (
              <div
                key={size}
                onClick={() => setActiveSize(size)}
                className={`border ${
                  activeSize === size
                    ? "border-white text-white"
                    : "border-gray-400 text-gray-400"
                } rounded-lg px-4 hover:text-white hover:border-white cursor-pointer`}
              >
                {size} ({stock})
              </div>
            );
          })}
        </div>
        {/* <div className="flex gap-2 items-center">
          {product.colors.map((color) => {
            return (
              <div
                key={color}
                onClick={() => setActiveColor(color)}
                className={`border flex justify-center items-center gap-2 py-1 ${
                  activeColor === color
                    ? "border-white text-white"
                    : "border-gray-400 text-gray-400"
                } rounded-lg px-4 hover:text-white hover:border-white cursor-pointer`}
              >
                <div
                  className={`border border-gray-400 rounded-full w-4 h-4 bg-${color}`}
                />
                <p>{color}</p>
              </div>
            );
          })}
        </div> */}
        <div className="flex w-full gap-2 my-8">
          <div className="bg-zinc-900 w-full text-center text-gray-400 px-4 py-2 rounded-lg hover:text-white cursor-pointer">
            Add to Cart
          </div>
          {/* <div className="flex justify-center items-center bg-zinc-900 w-[8%] text-gray-400 px-4 py-2 rounded-lg">
            <IoHeartOutline />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
