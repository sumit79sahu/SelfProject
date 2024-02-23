import React, { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import { Status } from "../enums/Status";
import Simmer from "../components/Simmer";
import RestaurantSearchResult from "../layouts/RestaurantSearchResult";
import DishSearchResult from "../layouts/DishSearchResult";
const Search = () => {
  const [param] = useSearchParams();

  const status = useSearch(
    param.get("query") as string,
    param.get("metadata") as string,
    JSON.parse(param.get("metadata") as string).type
  );
  if (status === Status.pending) return <Simmer />;
  if (status === Status.rejected) return <h1>Something Went Wrong</h1>;
  return (
    <div>
      <div className="font-bold text-lg   sm:text-2xl md:text-3xl ">
        {param.get("query")}
      </div>
      {
        JSON.parse(param.get("metadata") as string).type==="RESTAURANT"?<RestaurantSearchResult/>:<DishSearchResult/>
      }
    </div>
  );
};

export default Search;
