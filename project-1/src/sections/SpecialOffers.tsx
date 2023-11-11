import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffers = () => {
  return (
    <section className="max-container flex justify-between items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="Offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="text-5xl font-bold font-palanquin ">
          <span className="text-coral-red"> Special </span> Offer
        </h2>
        <p className="mt-6 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-4 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          {/* <Button label={"View Details"} /> */}
          <Button
            label={"Shop now"}
            IconSrc={{ src: arrowRight, alt: "Arrow right icon" }}
          />

          <Button
            label={"Learn more"}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
