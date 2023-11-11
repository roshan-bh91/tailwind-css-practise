interface Props {
  imgDetails: {
    thumbnail: string;
    bigShoe: string;
  };
  changeBigShoeImg: (bigShoeToSet: {
    thumbnail: string;
    bigShoe: string;
  }) => void;
  bigShoeImg: string;
}

const ShoeCard = ({ imgDetails, bigShoeImg, changeBigShoeImg }: Props) => {
  const handleClick = () => {
    if (bigShoeImg !== imgDetails.bigShoe) {
      changeBigShoeImg(imgDetails);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgDetails.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-cover bg-center bg-card sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={imgDetails.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
