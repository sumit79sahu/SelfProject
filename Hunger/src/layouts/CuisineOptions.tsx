import React from "react";
import { useAppSelector } from "../utils/store";
import Cuisines from "../components/Cuisines";

const CuisineOptions = () => {
  const { Cuisine_Options } = useAppSelector((store) => store.HomeData);
  return (
    <div>
      <div className="">
        <h1 className=" text-[1.7rem] sm:text-3xl font-bold">
          Best Cuisines Near Me
        </h1>
      </div>
      <Cuisines cuisines={Cuisine_Options}/>
    </div>
  );
};

export default CuisineOptions;
