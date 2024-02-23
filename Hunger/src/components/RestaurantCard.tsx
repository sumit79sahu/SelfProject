import React from "react";
import { IRestaurant } from "../interfaces/IRestaurant";
import { Food_Image } from "../utils/constants";

const RestaurantCard = ({ restaurant }: any) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    sla,
  }: IRestaurant = restaurant;
  return (
    <div>
      <div className="">
        <div className="w-[12rem]  sm:w-[14rem] h-[8rem] md:w-[17.0625rem] md:h-[11.375rem] rounded-2xl relative ">
          <img
            src={Food_Image + cloudinaryImageId}
            alt={name}
            className=" object-cover w-full h-full rounded-2xl"
          />
        </div>
        <div className="ml-3  mt-2  text-[#414449] w-[11.3rem] sm:w-[13.2rem] md:w-[15.25rem] ">
          <div className="w-[100%] flex flex-col">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold  whitespace-nowrap overflow-hidden text-ellipsis">
              {name}
            </h3>
            <div className="  flex gap-1 text-xs sm:text-sm md:text-base font-semibold items-center  my-1">
              <div className="flex items-center gap-1 ">
                <div className="bg-green-600 h-4 md:h-5 text-xs md:text-sm rounded-full w-[17px] md:w-[20px] pb-[0.1rem] md:pb-[0.2rem] font-bold  text-white flex justify-center items-center">
                  &#9733;
                </div>
                {avgRating}
              </div>
              <span>•</span>
              <span>{sla.slaString}</span>
            </div>
            <span className="text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
              {cuisines.join(", ")}
            </span>
            <span className="text-xs sm:text-sm md:text-base">{areaName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OfferRestaurantCard = (RestaurantCard: any) => {
  return ({ restaurant }: any) => {
    return (
      <div className=" transition-transform duration-200 hover:scale-95 relative">
        <RestaurantCard restaurant={restaurant} />
        <div className="pt-6 rounded-b-2xl absolute -translate-y-[8rem] sm:-translate-y-[9.2rem] md:-translate-y-[11.1rem] h-[21%] w-[12rem]  sm:w-[14rem]  md:w-[17.0625rem]  bg-gradient-to-t from-black to-transparent">
          {restaurant?.aggregatedDiscountInfoV3 ? (
            <span className=" text-white ml-3 font-bold text-base sm:text-xl md:text-2xl">
              {(restaurant?.aggregatedDiscountInfoV3?.header || "") +
                " " +
                (restaurant?.aggregatedDiscountInfoV3?.subHeader || "")}
            </span>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    );
  };
};

export default RestaurantCard;
