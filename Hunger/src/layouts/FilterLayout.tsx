import React from "react";
import NavigationLink from "../components/NavigationLink";
import { useAppSelector } from "../utils/store";
import { IRestaurant } from "../interfaces/IRestaurant";
import { Link } from "react-router-dom";
import RestaurantCard, {
  OfferRestaurantCard,
} from "../components/RestaurantCard";
import { useFilter } from "../hooks/useFilter";

const FilterLayout = ({ filterName }: any) => {
  const homeData = useAppSelector((store) => store.HomeData);
  const RestaurantWithOffers = OfferRestaurantCard(RestaurantCard);
  const filterData=useFilter(filterName,homeData.Top_Restaurants)
  
  return (
    <div className="">
      <NavigationLink linkName={filterName} />
      <div className="my-5">
        <h1 className="  font-bold text-3xl sm:text-[2rem] text-black mb-2   ">
          Restaurants With Great {filterName} Around You
        </h1>
      </div>

      {filterData.length === 0 ? (
        <div className="w-full flex justify-center items-center flex-col pt-[8.2rem]">
          <h1 className="text-2xl text-[#686b6f] font-semibold">
            {"No Restaurants with " + filterName + " around you"}
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-8 sm:mt-4 grid-auto-cols-auto-fit">
          {filterData.map((data: IRestaurant):JSX.Element => (
            <Link
              key={data?.id}
              to={`/restaurant/${data?.name + "__" + data?.id}`}
              className=""
            >
              <RestaurantWithOffers restaurant={data} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterLayout;
