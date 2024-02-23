import React from "react";
import { useAppSelector, useAppDispatch } from "../utils/store";
import { Link } from "react-router-dom";
import { add, increase, decrease } from "../utils/slices/cartSlice";
import veg from "../assests/veg.png";
import nonveg from "../assests/non-veg.jpg";
import { DEFAULT_IMG, Food_Image } from "../utils/constants";

const DishCard = ({ data }: any) => {
  console.log(data);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.Cart);
  return (
    <div className="border p-5 rounded-lg">
      <Link
        to={`/restaurant/${
          data?.restaurantInfo?.name + "__" + data?.restaurantInfo?.id
        }`}
        className="border-b pb-2 border-dashed flex flex-col "
      >
        <span className="text-base font-bold text-[#7f8387]">
          By {data?.restaurantInfo?.name}
        </span>
        <div className="flex gap-2 ">
          <span className="text-sm font-normal text-[#7f8387]">
            &#9733; {data?.restaurantInfo?.avgRatingString}
          </span>
          <span className="text-sm font-normal text-[#7f8387]">.</span>
          <span className="text-sm font-normal text-[#7f8387]">
            {data?.restaurantInfo?.sla?.slaString}
          </span>
        </div>
      </Link>
      <div className="mt-4  flex justify-between gap-10 ">
        <div className=" w-[200px] ">
          <div className="w-4 mb-1">
            {data?.dishInfo?.isVeg ? (
              <img src={veg} alt="veg" />
            ) : (
              <img src={nonveg} alt="nonveg" />
            )}
          </div>
          <h4 className="text-base font-medium">{data?.name}</h4>
          <span className="text-sm font-medium">
            ₹ {(data?.dishInfo?.price || data?.dishInfo?.defaultPrice) / 100}
          </span>
          <p className=" mt-2 text-[#686b6f] text-xs">{data?.dishInfo?.description}</p>
        </div>
        <div className=" h-[130px] flex flex-col items-center">
          <img
            className="w-[150px] h-full object-cover rounded-lg"
            src={data?.dishInfo?.imageId ? Food_Image + data?.dishInfo?.imageId : DEFAULT_IMG}
          />
          {cart?.[data?.dishInfo?.name]?.count ? (
            <div className="border text-green-600 rounded-md shadow-md bg-white absolute translate-y-[6rem] py-[0.2rem]  flex justify-evenly w-[60px] items-center gap-1 ">
              <span
                className="cursor-pointer"
                onClick={() => dispatch(decrease(data?.dishInfo?.name))}
              >
                -
              </span>
              <span>{cart[data?.dishInfo?.name].count}</span>
              <span
                className="cursor-pointer"
                onClick={() => dispatch(increase(data?.dishInfo?.name))}
              >
                +
              </span>
            </div>
          ) : (
            <div
              onClick={() =>
                dispatch(
                  add({
                    [data?.dishInfo?.name]: {
                      info: data?.dishInfo,
                      count: 1,
                    },
                  })
                )
              }
              className=" cursor-pointer border text-green-600 rounded-md shadow-md bg-white absolute translate-y-[6rem] py-[0.2rem] flex  justify-center items-center  w-[60px]"
            >
              <span className="">ADD</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DishCard;
