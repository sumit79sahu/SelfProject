import React, { useRef } from "react";
import TitleWithScrollBox from "../components/TitleWithScrollBox";
import { useAppSelector } from "../utils/store";
import { IRestaurant } from "../interfaces/IRestaurant";
import { Link } from "react-router-dom";
import { Food_Image } from "../utils/constants";
import RestaurantCard from "../components/RestaurantCard";
import { OfferRestaurantCard } from "../components/RestaurantCard";

const TopRestaurants = () => {
  const slider = useRef<HTMLDivElement>(null);
  const { Top_Restaurants } = useAppSelector((store) => store.HomeData);
  const RestaurantWithOffers = OfferRestaurantCard(RestaurantCard);
  // console.log(Top_Restaurants);
  return (
    <div>
      <TitleWithScrollBox
        title={"Top restaurant chains in Bangalore"}
        slider={slider}
      />
      <div className="flex overflow-hidden scroll-smooth" ref={slider}>
        <div className="flex gap-8">
          {Top_Restaurants.map(
            (restaurant: IRestaurant): JSX.Element => (
              <Link to={`/restaurant/${restaurant.name+"__"+restaurant.id}`} key={restaurant.id}>
                  <RestaurantWithOffers restaurant={restaurant} />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TopRestaurants;
