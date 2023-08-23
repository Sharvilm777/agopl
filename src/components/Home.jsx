import React from "react";

import CallBackForm from "@/components/CallBackForm";

import ImageSlider from "@/components/ImageSlider";
import MOU from "./MOU";

const HomeScreen = () => {
  const images = [{ original: "/slide1.gif" }, { original: "/slide2.jpg" }];
  return (
    <div>
      <div className="container mt-2">
        <ImageSlider images={images} />
      </div>
      <div className="content flex flex-col items-center justify-center mt-4">
        <h1 className="text-3xl font-bold text-center">
          WELCOME TO A G ORGANICZ
        </h1>
        <h2 className="text-center  font-semibold ml-16 mr-16 mt-2">
          A G ORGANICZ provides novel technology for the evelopment in organic
          farming by promoting Integrated pest management (IPM) through
          manufacturing eco-friendly, nontoxic Insect pheromones
        </h2>
      </div>
      <div
        style={{
          background: "rgba(58,108,54,0.84)",
        }}
        className=" flex flex-col justify-evenly p-4 mt-4"
      >
        <div className="heading ">
          <h1 className="text-left text-3xl font-bold">
            Advantage Organic Pesticides
          </h1>
        </div>
        <div className="content flex sm:flex-row flex-col justify-around mt-1 gap-4 ">
          <div className="sm:w-2/3 ">
            Organic farming contributes better health through their crops by
            reducing pesticide exposure and also will increase nutritional
            quality. Organic pesticides, particularly biologicals (e.g.,
            insecticides containing Bacillus thuringiensis), may be chosen
            because they are selective in what pests they control.This is
            helpful because it can reduce potential harm to non-target species
            (e.g., pollinators and other beneficial insects).AGO is the core
            manufacturer for wide range of insect pheromones assuring high
            purity with best price.
          </div>
          <div className="sm:w-1/4  ">
            <li>Food Productivity.</li>
            <li>No Harmful Chemical </li>
            <li> We ensure good health </li>
            <li> Provide Quality Product</li>
            <li>100% Natural & Toxins free</li>
            <li>Preventing food-related illnesses </li>
            <li>Reduce polluting the soil or water</li>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-center text-6xl mr-5 ml-5 p-4">
          Most Efficient Ways To Control Insect Population’s
        </h1>
      </div>
      <div>
        <MOU />
      </div>
      <div>
        <CallBackForm />
      </div>
    </div>
  );
};

export default HomeScreen;
