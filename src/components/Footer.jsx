import Link from "next/link";
import React from "react";
import CategoryList from "./CategoryList";

const Footer = () => {
  return (
    <>
      <div className="flex sm:flex-row  justify-evenly items-center flex-col bg-slate-800 text-white p-5 ">
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
            <CategoryList />
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
