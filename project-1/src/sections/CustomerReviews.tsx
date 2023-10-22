import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-5xl text-center">
        What our<span className="text-coral-red"> Customers </span> Say?
      </h3>
      <p className="info-text mt-6">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 max-lg:flex-col justify-evenly items-center gap-14">
        {reviews.map((review) => (
          <ReviewCard {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
