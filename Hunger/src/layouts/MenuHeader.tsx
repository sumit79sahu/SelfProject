import React ,{useState} from "react";
import NavigationLink from "../components/NavigationLink";
import { useAppSelector } from "../utils/store";
import RestaurantInfo from "../components/RestaurantInfo";
import VegFilterButton from "../components/VegFilterButton";

const MenuHeader = ({restaurantName}: any) => {
  const { restaurantInfo} = useAppSelector((store) => store.RestaurantMenu);

  return (
    <div>
      <div className="container  w-[75%] my-12 mx-auto">
        <NavigationLink linkName={restaurantName} />
        <div className="mt-10">
          <div className=" flex flex-col gap-5">
            <RestaurantInfo restaurant={restaurantInfo} />
            <VegFilterButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
