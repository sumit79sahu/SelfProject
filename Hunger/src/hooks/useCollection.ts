import { useEffect, useState } from "react";
import { HOME_API } from "../utils/constants";
import { Status } from "../enums/Status";
import { addCollection } from "../utils/slices/collectionSlice";
import { useAppDispatch } from "../utils/store";
import { IRestaurant } from "../interfaces/IRestaurant";

const useCollection = (searchParams: URLSearchParams) => {
  const [status, setStatus] = useState(Status.pending);
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        HOME_API +
          `&collection=${searchParams.get(
            "collection_id"
          )}&tags=${searchParams.get("tags")}&type=${searchParams.get("type")}`
      );
      const result = await data.json();
      console.log(result?.data?.cards);
      dispatch(
        addCollection({
          collection_title:result?.data?.cards?.[0]?.card?.card?.title,
          collection_description:result?.data?.cards?.[0]?.card?.card?.description,
          collection_data:result?.data?.cards.filter((data: any): boolean =>
          data?.card?.card?.["@type"].includes("Restaurant")
        )
        .map((data:any):IRestaurant => data?.card?.card?.info)

        })
      );

      setStatus(Status.fulfiled);
    } catch (error) {
      setStatus(Status.rejected);
    }
  };
  return status;
};

export default useCollection;
