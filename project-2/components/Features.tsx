import { FEATURES } from "@/constants";
import Image from "next/image";

interface FeatureItemProps {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex flex-1 flex-col items-start w-full">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h2 className="capitalize mt-5 bold-20 lg:bold-32">{title}</h2>
      <p className="bg-white/80 lg:bg-none regular-16 mt-5 lg:mt-[30px] text-gray-30">
        {description}
      </p>
    </li>
  );
};

const Features = () => {
  return (
    <section className="bg-feature-bg bg-center bg-no-repeat flexCenter flex-col py-24 overflow-hidden">
      <div className="max-container padding-container flex justify-end w-full relative">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src={"/phone.png"}
            alt="Phone"
            className="feature-phone"
            width={440}
            height={1000}
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              height={50}
              width={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((everyFeature) => (
              <FeatureItem key={everyFeature.title} {...everyFeature} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
