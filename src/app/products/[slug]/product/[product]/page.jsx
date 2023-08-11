import ImageSlider from "@/components/ImageSlider";
export default async function Page({ params }) {
  const data = await fetch(
    `https://agopl.vercel.app/api/products-list?slug=${params.product}`
  );
  const res = await data.json();

  return (
    <div>
      <div className="container  flex flex-row">
        <div className="productSlider w-[45%] min-h-screen flex justify-center items-center ml-8">
          <ImageSlider images={res.images} />
        </div>

        <div className="productDescription w-[55%] min-h-screen m-6 flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl text-center">
            {res.slug.toUpperCase()}
          </h1>
          <h2 className="text-lg mb-2">
            Pheromones lure for{" "}
            <span className="font-semibold">{res.pest_name}</span>
          </h2>
          <h2 className="p-3">{res.description}</h2>
          <h2 className="font-bold">{res.tip}</h2>
          <div className="detailsContainer m-4 flex justify-center p-6 bg-slate-100">
            <div class="grid grid-cols-2 gap-4">
              <div class="text-lg font-semibold">
                <div class="mb-2">Field viability:</div>
                <div class="mb-2">Trap used :</div>
                <div class="mb-2">No. of traps per acre:</div>
                <div class="mb-2">Shelf life:</div>
                <div class="mb-2">​Target crop:</div>
              </div>

              <div className="">
                <div className="mb-2">{res.field_viability}</div>
                <div className="mb-2">{res.recommended_trap}</div>
                <div className="mb-2">{res.trap_density}</div>
                <div className="mb-2"></div>
                <div className="mb-2"></div>
                <div className="mb-2"> 1 year from the date of manufacture</div>
                <div className="mb-2">{res.target_crop}</div>
              </div>
            </div>
          </div>
          <button className="text-green-500 border border-green-400 rounded-md p-3 pl-5 pr-5">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
