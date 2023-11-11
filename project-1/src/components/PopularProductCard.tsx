import { star } from "../assets/icons";

interface Props {
  imgUrl: string;
  price: string;
  name: string;
}

const PopularProductCard = ({ imgUrl, price, name }: Props) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
      <img
        src={imgUrl}
        alt={name}
        className="w-[280px] h-[280px] hover:cursor-pointer"
      />
      <div className="flex justify-start mt-8 gap-2.5">
        <img src={star} alt="Rating icon" width={24} height={24} />
        <p className="font-montserrat text-slate-gray leading-normal text-xl">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-semibold font-palanquin text-2xl leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  );
};
export default PopularProductCard;
