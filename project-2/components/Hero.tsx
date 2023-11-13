import Image from "next/image";
import { Button } from ".";

const Hero = () => {
  return (
    <section className="padding-container max-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      {/* Left */}
      <div className="flex flex-col xl:w-1/2 flex-1 relative z-20">
        <Image
          src={"/camp.svg"}
          alt="camp"
          loading="lazy"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="lg:bold-88 bold-52">Putuk Truno Camp Area</h1>
        <p className="text-gray-30 regular-16 mt-6 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  height={24}
                  width={24}
                  alt={"star"}
                  loading="lazy"
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            variant="btn_white_text"
            icon="/play.svg"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 items-start relative">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src={"/close.svg"} alt="close" height={24} width={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
