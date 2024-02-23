import { useState, useEffect } from "react";
import { Status } from "../enums/Status";
import { SEARCH_API } from "../utils/constants";
import { addSearchResult } from "../utils/slices/searchSlice";
import { useAppDispatch } from "../utils/store";
import { IRestaurant } from "../interfaces/IRestaurant";
import { MenuInfo } from "../interfaces/IRestaurantMenu";
const useSearch = (str: string, metadata: string, type: string) => {
  const [status, setStatus] = useState(Status.pending);
  const dispatch = useAppDispatch();
  const fetchSearch = async () => {
    try {
      const data = await fetch(SEARCH_API(str, metadata));
      const result = await data.json();
      console.log(result?.data?.cards
        ?.filter((data:any):boolean => data?.groupedCard)?.[0]
        ?.groupedCard?.cardGroupMap?.DISH?.cards)

      dispatch(
        addSearchResult(
          type === "RESTAURANT"
            ? {
                Dishes: [],
                Restaurants: result?.data?.cards
                  ?.filter((data:any):boolean => data?.groupedCard)?.[0]
                  ?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.[1]?.card?.card?.restaurants?.map(
                    (data:any):IRestaurant => data?.info
                  ),
              }
            : {
                Restaurants: [],
                Dishes: result?.data?.cards
                  ?.filter((data:any):boolean => data?.groupedCard)?.[0]
                  ?.groupedCard?.cardGroupMap?.DISH?.cards?.filter((data:any):boolean =>
                    data?.card?.card?.["@type"].includes("Dish")
                  )
                  .map((data:any) => ({dishInfo:data?.card?.card?.info,restaurantInfo:data?.card?.card?.restaurant?.info})),
              }
        )
      );
      setStatus(Status.fulfiled);
    } catch (error) {
      setStatus(Status.rejected);
    }
  };
  useEffect(() => {
    setStatus(Status.pending);
    fetchSearch();
  }, [metadata]);

  return status;
};
export default useSearch;
