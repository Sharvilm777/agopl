import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div>
      <div className="upperPart w-full  bg-gray-900 flex flex-col sm:flex-row justify-between sm:h-16 md:h-12 xl:h-10">
        <div className="px-8 py-1 text-white sm:text-xs md:text-lg xl:text-xl self-center">
          Eco-Friendly, Nontoxic Insect Pheromones.
        </div>
        <div className="text-white py-1 px-2 self-center">
          Follow us: Instagram | Twitter | Whatsapp
        </div>
      </div>

      <div className="w-full">
        <div className="middlepart flex flex-col items-center md:flex-row md:items-center justify-between py-4 px-6">
          <div className="logoContainer">
            <Image
              src={"/AGOPL-LOGO.png.png"}
              width={125}
              height={125}
              alt="AG Organics logo"
            />
          </div>
          <div className="searchBox w-full md:w-1/2">
            <input
              type="text"
              className="p-2 bg-slate-200 w-full rounded"
              placeholder="Search"
            />
          </div>
          <div className="contactBox flex flex-col text-center mt-4 md:mt-0">
            <div className="contact text-2xl font-bold">
              Contact: +91 9606 116 151
            </div>
            <span>Call/Message from 9am to 7pm (Mon to Fri)</span>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Navbar;
