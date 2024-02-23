import React from "react";
import { useAppSelector } from "../utils/store";
import OnlineRestaurantCard, {
  OfferOnlineRestaurantCard,
} from "../components/OnlineRestaurantCard";
import { IRestaurant } from "../interfaces/IRestaurant";
import { Link } from "react-router-dom";

const RestaurantSearchResult = () => {
  const restaurant = useAppSelector((store) => store.Search);

  const RestaurantWithOffers = OfferOnlineRestaurantCard(OnlineRestaurantCard);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px] mt-2 sm:mt-4">
      {restaurant.Restaurants.map(
        (restaurant: IRestaurant): JSX.Element => (
          <Link
            to={`/restaurant/${restaurant.name + "__" + restaurant.id}`}
            key={restaurant.id}
          >
            <RestaurantWithOffers restaurant={restaurant} />
          </Link>
        )
      )}
    </div>
  );
};

export default RestaurantSearchResult;
