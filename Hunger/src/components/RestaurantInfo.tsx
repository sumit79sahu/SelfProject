import React from 'react'
import { Food_Image } from '../utils/constants'

const RestaurantInfo = ({restaurant}:any) => {
  console.log(restaurant)
    const {
        name,
        cuisines,
        avgRatingString,
        locality,
        totalRatingsString,
        sla,
        feeDetails,
        costForTwoMessage,
      } = restaurant
  return (
    <>
        <div className=" flex flex-row justify-between items-center gap-2">
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-semibold pb-2">{name}</h2>
            <span className="text-[#686b6f]">{cuisines.join(", ")}</span>
            <span className="text-[#686b6f]">
              {locality}, {sla.lastMileTravelString}
            </span>
          </div>
          <div>
            <div className="flex flex-col items-center border p-2">
              <span className=" text- sm:text-lg text-green-600 font-semibold">
                &#9733; {avgRatingString}
              </span>
              <span className="border w-full"></span>
              <span className="text-xs sm:text-base text-[#686b6f] font-semibold text-center">
                {totalRatingsString}
              </span>
            </div>
          </div>
        </div>
        <div className="text-[#686b6f] flex gap-1 items-center flex-wrap">
          <span className="flex gap-1 items-center">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu`}
            />
            {sla.lastMileTravelString}
          </span>
          <span> | </span>
          <span>
            &#8377; {feeDetails?.totalFee / 100} Delivery fee will apply
          </span>
        </div>

        <div className=" border-t-2 border-dashed "></div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-8">
            <span className="font-extrabold">
              <i className="bi bi-alarm"></i> {sla.deliveryTime} min
            </span>
            <span className="font-extrabold">{costForTwoMessage}</span>
          </div>
        </div>
      </>
  )
}

export default RestaurantInfo
