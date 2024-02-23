import React, { useState } from "react";
import { ICuisine } from "../interfaces/ICuisine";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Navigate, useNavigate } from "react-router-dom";

const Cuisines = ({ cuisines }: any) => {
  const [index, setIndex] = useState(11);
  const [showMore, setshowMore] = useState(true);
  const navigate=useNavigate()
  
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[32px] mt-2 sm:mt-4">
        {cuisines.slice(0, index).map((data: ICuisine) => (
          <button
            onClick={() => navigate(`/filter/${data.text.replace("Restaurant Near Me","Food")}`)}
            key={data.text}
            className="text-[#414449] text-sm lg:text-base font-semibold border p-4 rounded-xl  whitespace-nowrap text-ellipsis overflow-hidden"
          >
            {data.text}
          </button>
        ))}
        {false}
        {showMore && (
          <button
            className="text-black text-sm lg:text-base font-semibold border p-4 rounded-xl  whitespace-nowrap text-ellipsis overflow-hidden flex justify-center items-center gap-5"
            onClick={() => {
              setIndex(cuisines.length);
              setshowMore(false);
            }}
          >
            <ChevronDownIcon className="h-5 w-5  text-gray-500" />
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Cuisines;
