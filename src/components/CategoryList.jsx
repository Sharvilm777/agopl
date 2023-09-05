import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <>
      <Link
        href="/products/pheromones-blend"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Pheromone blend
      </Link>

      <Link
        href="/products/pheromones-lure"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Pheromone lure and Kits
      </Link>

      <Link
        href="/products/pheromones-traps"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Pheromone traps
      </Link>

      <Link
        href="/products/bio-fertilizers"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Bio-fertilizers
      </Link>

      <Link
        href="/products/micro-nutrients"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Micro-Nutrients
      </Link>

      <Link
        href="/products/neem-seed-powder"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Neem seed Powder and pillets
      </Link>
    </>
  );
};

export default CategoryList;
