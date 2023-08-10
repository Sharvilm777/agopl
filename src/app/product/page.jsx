"use client";
import ImageSlider from "@/components/ImageSlider";

import React from "react";

const product = () => {
  const images = [
    {
      original:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
      thumbnail:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      original:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
      thumbnail:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      original:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
      thumbnail:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div>
      <div className="container  flex flex-row">
        <div className="productSlider w-[45%] min-h-screen flex justify-center items-center ml-8">
          <ImageSlider images={images} />
        </div>
        <div className="productDescription w-[55%] min-h-screen m-6 flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl text-center">TUTA -TOMATO</h1>
          <h2 className="text-xl">Pheromones lure</h2>
          <div className="detailsContainer m-4 flex justify-center p-4 bg-slate-400">
            <div class="grid grid-cols-2 gap-4">
              <div class="text-md font-semibold">
                <div class="mb-2">Field viability:</div>
                <div class="mb-2">Trap used :</div>
                <div class="mb-2">No. of traps per acre:</div>
                <div class="mb-2">Distance between traps:</div>
                <div class="mb-2">Shelf life:</div>
                <div class="mb-2">​Target crop:</div>
              </div>

              <div className="">
                <div className="mb-2">60 days</div>
                <div className="mb-2">Insect Water Trap 1.6 L</div>
                <div className="mb-2">12-16 traps</div>
                <div className="mb-2"></div>
                <div className="mb-2"> Uniform distribution</div>
                <div className="mb-2"> 1 year from the date of manufacture</div>
                <div className="mb-2">Tomato,Brinjal, Potato</div>
              </div>
            </div>
          </div>
          <button className="text-green-500 border border-green-400 rounded-md p-3 pl-5 pr-5">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default product;
