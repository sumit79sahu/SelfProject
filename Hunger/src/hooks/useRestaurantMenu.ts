import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";
import { Status } from "../enums/Status";
import { addMenu } from "../utils/slices/restaurantmenuSlice";
import { useAppDispatch } from "../utils/store";
import { IRestaurantMenu } from "../interfaces/IRestaurantMenu";

export const useRestaurantMenu = (restaurant_id: string) => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState(Status.pending);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await fetch(RESTAURANT_MENU_API(restaurant_id));
      const data = await result.json();

      dispatch(
        dispatch(
          addMenu({
            restaurantInfo: data?.data?.cards?.[0]?.card?.card?.info,
            restaurantMenu:
              data?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                .filter(
                  (data: any): boolean =>
                    data?.card?.card?.["@type"].includes("ItemCategory") ||
                    data?.card?.card?.["@type"].includes("NestedItemCategory")
                )
                .map((data: any) => ({
                  title: data?.card?.card?.title,
                  [data?.card?.card?.itemCards ? "menu" : "categories"]: data
                    ?.card?.card?.itemCards
                    ? data?.card?.card?.itemCards.map((data: any) => data?.card?.info)
                    : data?.card?.card?.categories.map((data: any) => ({
                        title: data.title,
                        menu: data.itemCards.map(
                          (data: any) => data?.card?.info
                        ),
                      })),
                })),
          })
        )
      );
      // console.log(
      //   data?.data?.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards
      // );

      setStatus(Status.fulfiled);
    } catch (error) {
      console.log(error);
      setStatus(Status.rejected);
    }
  };
  return status;
};
