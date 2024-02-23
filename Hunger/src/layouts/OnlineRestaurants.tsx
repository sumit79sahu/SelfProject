import React from "react";
import { useAppSelector} from "../utils/store";
import { IRestaurant } from "../interfaces/IRestaurant";
import { Link } from "react-router-dom"
import OnlineRestaurantCard ,{OfferOnlineRestaurantCard} from "../components/OnlineRestaurantCard";

const OnlineRestaurants = () => {
  const {Online_Restaurants}=useAppSelector(store=>store.HomeData)
  const RestaurantWithOffers=OfferOnlineRestaurantCard(OnlineRestaurantCard)
  return (
    <div className="">
      <div className="font-bold text-lg   sm:text-2xl md:text-3xl ">
        Restaurants with online food delivery in Bangalore
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px] mt-2 sm:mt-4">
        {Online_Restaurants.map((restaurant:IRestaurant):JSX.Element => (
          <Link to={`/restaurant/${(restaurant.name)+"__"+restaurant.id}`} key={restaurant.id}>
            <RestaurantWithOffers restaurant={restaurant}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OnlineRestaurants;
