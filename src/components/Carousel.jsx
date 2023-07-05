"use client";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((prevCurr) => {
      const updatedCurr = prevCurr === 0 ? slides.length - 1 : prevCurr - 1;
      return updatedCurr;
    });

  const next = () =>
    setCurr((prevCurr) => {
      const updatedCurr = prevCurr === slides.length - 1 ? 0 : prevCurr + 1;
      return updatedCurr;
    });

  return (
    <div className="relative overflow-hidden ">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex justify-between items-center p-2">
        <button
          onClick={prev}
          className="bg-white/70 shadow  hover:bg-white m-2 p-1 rounded-full"
        >
          <AiOutlineArrowLeft className="text-3xl" />
        </button>
        <button
          onClick={next}
          className="bg-white/70 shadow  hover:bg-white m-2 p-1 rounded-full"
        >
          <AiOutlineArrowRight className="text-3xl" />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => {
            return (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-white rounded-full
            ${curr === i ? "p-3" : "bg-opacity-50"}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
