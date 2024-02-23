import { IRestaurant } from "../interfaces/IRestaurant";
import { useEffect, useState } from "react";

export const useFilter = (filterName: string, restaurantData: IRestaurant[]):IRestaurant[] => {
const [filterData,setFilterData]=useState<IRestaurant[]>([])
  const fetchFilterData = () => {
    if(filterName ==="offers"){
      setFilterData(restaurantData.filter((data: IRestaurant) => data?.aggregatedDiscountInfoV3))
    }
    else{
    setFilterData(restaurantData.filter((data: IRestaurant) =>
      data?.cuisines.includes(filterName.replace(" Food", ""))
    ));
    }
  };
  useEffect(()=>{
    fetchFilterData()
  },[filterName])

  return filterData
};
