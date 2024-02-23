import { useEffect, useState } from "react";
import { HOME_API } from "../utils/constants";
import { Status } from "../enums/Status";
import { addData } from "../utils/slices/homeSlice";
import { useAppDispatch } from "../utils/store";

const useHome = () => {
  const [status, setStatus] = useState(Status.pending);
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(HOME_API);
      const result = await data.json();
      dispatch(
        addData({
          Food_Choice:
            result?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle
              ?.info,
          Top_Restaurants:
            result?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants.map((data:any)=>data.info),
          Online_Restaurants:
          result?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants.map((data:any)=>data.info),
          Cuisine_Options:result?.data?.cards?.[7]?.card?.card?.brands
        })
      );

      setStatus(Status.fulfiled);
    } catch (error) {
      setStatus(Status.rejected);
    }
  };
  return status;
};

export default useHome;
