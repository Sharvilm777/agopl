import Link from "next/link";
import React from "react";

const Dropdown = () => {
  return (
    <>
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="hover:text-green-500 rounded-lg px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Products{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownHover"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-56 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          <li>
            <Link
              href="/products/pheromones-blend"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Pheromone blend
            </Link>
          </li>
          <li>
            <Link
              href="/products/pheromones-lure"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Pheromone lure and Kits
            </Link>
          </li>
          <li>
            <Link
              href="/products/pheromones-traps"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Pheromone traps
            </Link>
          </li>
          <li>
            <Link
              href="/products/bio-fertilizers"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Bio-fertilizers
            </Link>
          </li>
          <li>
            <Link
              href="/products/micro-nutrients"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Micro-Nutrients
            </Link>
          </li>
          <li>
            <Link
              href="/products/neem-seed-powder"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Neem seed Powder and pillets
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
