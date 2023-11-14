import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampSiteProps {
  backgroundImg: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const CAMP_SITES_DETAILS = [
  {
    title: "Putuk Truno Camp",
    subTitle: "Prigen, Pasuruan",
    peopleJoined: "50+ Joined",
    backgroundImg: "bg-bg-img-1",
  },
  {
    title: "Mountain View Camp",
    subTitle: "Somewhere in the Wilderness",
    peopleJoined: "50+ Joined",
    backgroundImg: "bg-bg-img-2",
  },
];

const CampSite = ({
  backgroundImg,
  title,
  subTitle,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImg} bg-cover bg-no-repeat 2xl:rounded-5xl lg:rounded-r-5xl`}
    >
      <div className="flex flex-col items-start justify-between p-6 h-full lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src={"/folded-map.svg"} alt="map" height={28} width={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-white bold-18">{title}</h4>
            <p className="text-white regular-14">{subTitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((eachPersonUrl) => (
              <Image
                key={eachPersonUrl}
                alt={`Person url: ${eachPersonUrl}`}
                src={eachPersonUrl}
                height={52}
                width={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="flex flex-col relative py-10 2xl:max-container xl:mb-20 lg:mb-10 lg:py-20">
      <div className="flex items-start justify-start w-full gap-8 overflow-x-auto h-[340px] lg:h-[400px] xl:h-[640px] hide-scrollbar">
        {CAMP_SITES_DETAILS.map((everyCampSite) => (
          <CampSite key={everyCampSite.title} {...everyCampSite} />
        ))}
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="p-8 bg-green-50 rounded-3xl relative w-full overflow-hidden lg:max-w-[500px] xl:max-w-[734px] xl:px-16 xl:py-20 xl:rounded-5xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling lost</strong> And not knowing the way?
          </h2>
          <p className="text-white regular-14 mt-5 xl:regular-16">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            alt="Camp quote"
            src="/quote.svg"
            className="camp-quote"
            width={186}
            height={219}
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
