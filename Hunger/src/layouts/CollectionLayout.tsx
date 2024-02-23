import React from "react";
import { useAppSelector } from "../utils/store";
import { Link } from "react-router-dom";
import RestaurantCard, {
  OfferRestaurantCard,
} from "../components/RestaurantCard";
const CollectionLayout = () => {
  const collection = useAppSelector((store) => store.Collection);
  const RestaurantWithOffers = OfferRestaurantCard(RestaurantCard);

  return (
    <div className="">
        <div>
          <h1 className="font-bold text-lg sm:text-2xl md:text-3xl ">
            {collection.collection_title}
          </h1>
          <span className=" text-[#686b6f] text-lg sm:text-xl">
            {collection.collection_description}
          </span>
        </div>
        <div>
          <div className=" mt-8 text-lg sm:text-2xl md:text-3xl font-bold">
              Top restaurants that server {collection.collection_title} in Banglore
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-5 sm:mt-4">
            {collection.collection_data.map(
              (data): JSX.Element => (
                <Link
                  key={data?.id}
                  to={`/restaurant/${data?.name + "__" + data?.id}`}
                >
                  <RestaurantWithOffers restaurant={data} />
                </Link>
              )
            )}
          </div>
        </div>
    
    </div>
  );
};

export default CollectionLayout;
