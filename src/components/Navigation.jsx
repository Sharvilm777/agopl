"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <button
          className="flex md:hidden text-gray-500 focus:outline-none "
          onClick={handleMobileMenuToggle}
        >
          Menu
        </button>
        <div className="NavContent bg-slate-50  hidden md:flex md:w-full flex-col sm:flex-row justify-evenly items-center h-10 m-1">
          <Link href={"/"} className="hover:text-green-500 my-1 sm:my-0">
            Home
          </Link>
          <Link href={"/about"} className="hover:text-green-500 my-1 sm:my-0">
            About
          </Link>
          <Link
            href={"/products/pheromones-blend"}
            className="hover:text-green-500 my-1 sm:my-0"
          >
            pheromones-blend
          </Link>
          <Link
            href={"/products/pheromones-lure-kit"}
            className="hover:text-green-500 my-1 sm:my-0"
          >
            pheromones-lure-kit
          </Link>
          <Link
            href={"/products/pheromones-traps"}
            className="hover:text-green-500 my-1 sm:my-0"
          >
            pheromones-traps
          </Link>
          <Link
            href={"/products/fastra"}
            className="hover:text-green-500 my-1 sm:my-0"
          >
            fastra
          </Link>
          <Link href={"/contact"} className="hover:text-green-500 my-1 sm:my-0">
            Contact
          </Link>
        </div>
      </div>
      <div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="NavContent bg-slate-50  w-full flex flex-col justify-center items-center  ">
              <Link href={"/"} className="hover:text-green-500 my-1 sm:my-0">
                Home
              </Link>
              <Link
                href={"/about"}
                className="hover:text-green-500 my-1 sm:my-0"
              >
                About
              </Link>
              <Link
                href={"/products/pheromones-blend"}
                className="hover:text-green-500 my-1 sm:my-0"
              >
                pheromones-blend
              </Link>
              <Link
                href={"/products/pheromones-lure-kit"}
                className="hover:text-green-500 my-1 sm:my-0"
              >
                pheromones-lure-kit
              </Link>
              <Link
                href={"/products/pheromones-traps"}
                className="hover:text-green-500 my-1 sm:my-0"
              >
                pheromones-traps
              </Link>
              <Link
                href={"/products/fastra"}
                className="hover:text-green-500 my-1 sm:my-0"
              >
                fastra
              </Link>
              <Link
                href={"/contact"}
                className="hover:text-green-500 my-1 sm:my-0"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
