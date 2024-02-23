import React from "react";
import { useAppDispatch, useAppSelector } from "../utils/store";
import DishCard from "../components/DishCard";

const DishSearchResult = () => {
  const dishes = useAppSelector((store) => store.Search);
  console.log(dishes)
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-[32px] mt-2 sm:mt-4">
        {dishes?.Dishes.map((data: any) => (
          <DishCard key={data?.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default DishSearchResult;
