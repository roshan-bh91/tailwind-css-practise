import { star } from "../assets/icons";

interface Props {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({ imgURL, customerName, rating, feedback }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt={`${customerName} photo`}
        width={120}
        height={120}
        className="rounded-full object-contain"
      />
      <p className="mt-6 info-text max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          className="object-contain m-0"
          alt="rating star"
          width={24}
          height={24}
        />
        <p className="text-slate-gray font-montserrat text-xl">({rating})</p>
      </div>
    </div>
  );
};

export default ReviewCard;
