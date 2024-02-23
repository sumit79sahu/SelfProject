import React, { useState } from "react";
import { Status } from "../enums/Status";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Simmer from "../components/Simmer";
import MenuHeader from "../layouts/MenuHeader";
import Menu from "../layouts/Menu";
import { filterContext } from "../utils/context";

const RestaurantMenu = () => {
  const { restaurant } = useParams();
  const [restaurntName, restaurantId] = (restaurant as string).split("__");
  const [onlyVeg ,setOnlyVeg]=useState(false)

  const status = useRestaurantMenu(restaurantId);
  if (status === Status.pending) return <Simmer />;
  if (status === Status.rejected) return <h1>Something Went Wrong</h1>;

  return (
    <div>
      <filterContext.Provider value={{ onlyVeg ,setOnlyVeg}}>
        <MenuHeader restaurantName={restaurntName} />
        <div className="border w-[75%] mx-auto"></div>
        <Menu />
      </filterContext.Provider>
    </div>
  );
};

export default RestaurantMenu;
