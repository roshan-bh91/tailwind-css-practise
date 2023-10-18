import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { Button, ShoeCard } from "../components";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const handleShoeCardClick = (shoeDetails: {
    thumbnail: string;
    bigShoe: string;
  }) => {
    setBigShoeImg(shoeDetails.bigShoe);
  };
  return (
    <section
      id="home"
      className="w-full max-container flex flex-col xl:flex-row justify-center min-h-screen gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer Collection
        </p>
        <h1 className="text-8xl font-bold mt-10 font-palanquin max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="pr-10 z-10 xl:bg-white xl:whitespace-nowrap relative">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg leading-8 text-slate-gray mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button
          label={"Shop now"}
          IconSrc={{ src: arrowRight, alt: "Arrow right icon" }}
        />
        <div className="flex justify-start items-start mt-20 gap-16 w-full flex-wrap">
          {statistics?.map(({ label, value }) => (
            <div key={label}>
              <p className="font-bold text-4xl font-palanquin">{value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center relative flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Big shoe Image"
          className="object-contain relative z-10"
          width={610}
          height={502}
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((everyShoe) => (
            <div key={everyShoe.bigShoe}>
              <ShoeCard
                imgDetails={everyShoe}
                changeBigShoeImg={handleShoeCardClick}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
