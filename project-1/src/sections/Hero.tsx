import { arrowRight } from "../assets/icons";
import { Button } from "../components";
import { statistics } from "../constants";

const Hero = () => {
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
    </section>
  );
};

export default Hero;
