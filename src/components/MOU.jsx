import Image from "next/image";
import React from "react";

const MOU = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold">
        MOU with research centers
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <Image
          src={"/icar-logo.png"}
          alt="ICAR Logo"
          height={150}
          width={150}
        />
        <Image
          src={"/csrti-logo.png"}
          alt="ICAR Logo"
          height={150}
          width={150}
        />
        <Image
          src={"/iihr-logo.jpg"}
          alt="ICAR Logo"
          height={150}
          width={150}
        />

        <Image
          src={"/nbair-logo.jpg"}
          alt="ICAR Logo"
          height={150}
          width={150}
        />
      </div>
    </>
  );
};

export default MOU;
