import React, { useState, useEffect } from "react";
import { useAppSelector } from "../utils/store";
import MenuItems from "../components/MenuItems";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { IRestaurantMenu} from "../interfaces/IRestaurantMenu";
import { useContext } from "react";
import { filterContext } from "../utils/context";
import useVegFilter from "../hooks/useVegFilter";

const Menu = () => {
  const { restaurantMenu } = useAppSelector((store) => store.RestaurantMenu);
  const { onlyVeg } = useContext(filterContext);
 

  return (
    <div className="container  w-[75%] my-12 mx-auto">
      <MenuList restaurantMenu={restaurantMenu} onlyVeg={onlyVeg} />
    </div>
  );
};

const MenuList = ({ restaurantMenu, onlyVeg }: any) => {
  const [showCard, setShowCard] = useState<number | null>(null);
  const filteredMenu=useVegFilter(restaurantMenu,onlyVeg)
  return (
    <>
      {filteredMenu.map((data: IRestaurantMenu, index: number) => (
         (data?.menu?.length===0 || data?.categories?.length===0) ||
        <div className={`shadow-md mt-2 mb-8 p-3 rounded-lg`} key={data?.title}>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() =>
              setShowCard((prevIndex: number | null) =>
                prevIndex === index ? null : index
              )
            }
          >
            <h3 className="text-xl font-bold text-[#414449] whitespace-nowrap text-ellipsis overflow-hidden">
              {data?.title} (
              {data?.menu ? data?.menu.length : data?.categories?.length})
            </h3>

            {data?.menu ? (
              showCard === index ? (
                <ChevronDownIcon className="h-6 w-6 text-[#414449]" />
              ) : (
                <ChevronUpIcon className="h-6 w-6 text-[#414449]" />
              )
            ) : (
              ""
            )}
          </div>
          {data.menu ? (
            <MenuItems
              showCard={showCard === index}
              foodItems={data.menu}
              onlyVeg={onlyVeg}
            />
          ) : (
            <MenuList restaurantMenu={data.categories} onlyVeg={onlyVeg} />
          )}
        </div>
      ))}
    </>
  );
};
export default Menu;
