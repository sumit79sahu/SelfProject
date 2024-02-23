import React from "react";
import { NavLink, Link } from "react-router-dom";
import { navigation } from "../utils/constants";
import { useAppSelector } from "../utils/store";
import { useContext } from "react";
import { searchContext } from "../utils/context";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const NavItems = () => {
  const Cart = useAppSelector((store) => store.Cart);
  const { open, setOpen } = useContext(searchContext);


  return (
    <div className="flex  flex-1 items-center justify-between sm:items-stretch sm:justify-start">
      <div className="flex  items-center">
        <Link
          className="text-white text-3xl sm:text-2xl md:text-3xl   py-2 font-bold"
          to={"/"}
        >
          HUNGER
        </Link>
      </div>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex  space-x-4 mt-1">
          {navigation.map(
            (navItem): JSX.Element => (
              <NavLink
                key={navItem.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 sm:text-base md:text-lg font-medium flex items-center justify-center gap-2  ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
                to={navItem.to}
              >
                <svg
                  className="sm:w-5 md:w-6"
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={navItem.icon}
                  ></path>
                </svg>
                {navItem.item === "Cart" && (
                  <div className="w-4 text-xs rounded-full text-center bg-red-600 absolute top-4 md:top-3 start-[8.6rem] md:start-[10.5rem] ml-2">
                    {Object.keys(Cart).length !== 0
                      ? Object.entries(Cart).reduce(
                          (initial, [key, { count }]) => initial + count,
                          0
                        )
                      : ""}
                  </div>
                )}

                {navItem.item}
              </NavLink>
            )
          )}
          <button
            onClick={() => setOpen(true)}
            className={`rounded-md px-3 py-2 sm:text-base md:text-lg font-medium flex items-center justify-center gap-2 ${
              open
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            } `}
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
