import Image from "next/image";
import { Button } from ".";

const GetApp = () => {
  return (
    <section className="flexCenter flex-col w-full pb-[100px]">
      <div className="get-app">
        <div className="flex flex-1 flex-col justify-center items-start gap-12 w-full z-20">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="w-full flex flex-col xl:flex-row gap-3 whitespace-nowrap">
            <Button
              type="button"
              title={"App Store"}
              icon="/apple.svg"
              variant="btn_white"
              full
            />

            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image
            src={"/phones.png"}
            alt="Multiple phones"
            height={870}
            width={550}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
