import React, { useEffect, useRef, useState } from "react";
import TitleWithScrollBox from "../components/TitleWithScrollBox";
import { IFoodChoice } from "../interfaces/IFoodChoice";
import { Food_Image } from "../utils/constants";
import { useAppSelector } from "../utils/store";
import { Link } from "react-router-dom";
const FoodChoice = () => {
  const slider = useRef<HTMLDivElement>(null);
  const { Food_Choice } = useAppSelector((store) => store.HomeData);

  return (
    <div className="">
      <TitleWithScrollBox title={"What's on your mind? "} slider={slider} />
      <div className="flex overflow-hidden  scroll-smooth" ref={slider}>
        <div className="flex gap-4 md:gap-8">
          {Food_Choice.map((choice: IFoodChoice): JSX.Element => {
            const url = new URL(choice.action.link);
            return (
              <Link
                data-testid="food-choice-link"
                to={`/collection/${url.searchParams.get(
                  "collection_id"
                )}?collection_id=${url.searchParams.get(
                  "collection_id"
                )}&tags=${url.searchParams.get(
                  "tags"
                )}&type=${url.searchParams.get("type")}`}
                className="w-[100px] sm:w-[120px] md:w-[144px]"
                key={choice.id}
              >
                <img
                  className=" h-[120px] sm:h-[150px]  md:h-[180px]"
                  src={Food_Image + choice.imageId}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodChoice;
