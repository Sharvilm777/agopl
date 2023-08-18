import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const data = await fetch(
    `https://agopl.vercel.app/api/products-list?slug=${params.slug}`
  );
  const res = await data.json();

  return (
    <>
      <div className="text-center font-bold text-3xl m-5">
        {params.slug.toUpperCase()}
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-5">
        {res.products.map((product) => {
          return (
            <div
              key={product.product_slug}
              className="w-56 flex flex-col bg-white rounded-lg  "
            >
              <Link href={`${params.slug}/product/${product.product_slug}`}>
                <Image
                  className="rounded-t-lg w-fit "
                  //
                  src={`/${product.product_slug}/${product.product_slug}-thumbnail.jpeg`}
                  alt={`${product.product_slug} image`}
                  width={200}
                  height={200}
                />
              </Link>
              <div className="p-2 flex-grow">
                <Link href={`${params.slug}/product/${product.product_slug}`}>
                  <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.product_slug.toUpperCase()}
                  </h5>
                </Link>
                <p className="mb-2 text-md text-gray-700 dark:text-gray-400">
                  {product.pest_name}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Target crop{": "}
                  <span className="font-semibold">{product.target_crop}</span>
                </p>
              </div>
              <div
                className="flex-grow
            m-2"
              >
                <Link
                  href={`${params.slug}/product/${product.product_slug}`}
                  className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 "
                >
                  Buy now
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
