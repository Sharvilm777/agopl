import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex sm:flex-row  justify-evenly flex-col bg-slate-800 text-white p-5 ">
        <div className="contactDetails sm:w-1/3 m-2 ">
          <div className="font-bold text-2xl">Contact: +91 9066445564</div>
          <div className="address ">
            <div className="font-bold text-2xl">Address</div> #51/5, 2 Nd Cross,
            Bikasipura Main Road, J C Industrial Area, Yelachenahalli,
            Bangalore-62
          </div>
        </div>
        <div className="whyAgo  sm:w-1/3 m-2 ">
          <div className="font-bold text-2xl">Why AGO ? </div> AGO is The Core
          Manufacturer For Wide Range Of Insect Pheromones (Sex Pheromones,
          Aggregation Pheromone) Assuring High Purity With Best Price.
        </div>
        <div className="products m-2">
          <div className="font-bold text-2xl">Products</div>
          <div className="content">
            <Link
              href={"/products/pheromones-blend"}
              className="hover:text-green-500 my-1 sm:my-0"
            >
              <li>Pheromones Blend </li>
            </Link>
            <Link
              href={"/products/pheromones-lure-kit"}
              className="hover:text-green-500 my-1 sm:my-0"
            >
              <li>Pheromones Lure & Kit</li>
            </Link>
            <Link
              href={"/products/pheromones-traps"}
              className="hover:text-green-500 my-1 sm:my-0"
            >
              <li>Pheromones Traps</li>
            </Link>
            <Link
              href={"/products/fastra"}
              className="hover:text-green-500 my-1 sm:my-0"
            >
              <li>Fastra</li>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 text-center text-white p-2">
        ℗ Reserved 2021 A G Organicz
      </div>
    </>
  );
};

export default Footer;
