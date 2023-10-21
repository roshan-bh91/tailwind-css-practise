import { PopularProductCard } from "../components";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin font-bold text-4xl">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-slate-gray font-montserrat lg:max-w-lg mt-2">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-14">
        {products.map((product) => {
          return <PopularProductCard {...product} />;
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
