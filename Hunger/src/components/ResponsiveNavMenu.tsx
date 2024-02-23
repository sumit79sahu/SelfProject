import React from "react";
import { Disclosure } from "@headlessui/react";
import { navigation } from "../utils/constants";
import { NavLink } from "react-router-dom";
import { menuItems } from "../utils/constants";
import { useAppSelector } from "../utils/store";
import { useContext } from "react";
import {
  loginContext,
  searchContext,
  userLoggedContext,
} from "../utils/context";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

const ResponsiveNavMenu = () => {
  const Cart = useAppSelector((store) => store.Cart);
  const { open, setOpen } = useContext(searchContext);
  const { show, setShow } = useContext(loginContext);
  const { loggedUser, setLoggedUser } = useContext(userLoggedContext);


  return (
    <div>
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-10 pb-3 pt-2 ">
          {navigation.map((navItem) => (
            <Disclosure.Button
              as={NavLink}
              key={navItem.item}
              to={navItem.to}
              className={({ isActive }: any) =>
                `flex  gap-2 rounded-md px-3 py-2 text-lg font-medium  ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
              aria-current={false ? "page" : undefined}
            >
              <svg
                className="w-6"
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
              {navItem.item}
              {navItem.item === "Cart" && (
                <div className="w-4 text-xs rounded-full text-center bg-red-600 absolute  top-[4.8rem] left-16 ">
                  {Object.keys(Cart).length !== 0
                    ? Object.entries(Cart).reduce(
                        (initial, [key, { count }]) => initial + count,
                        0
                      )
                    : ""}
                </div>
              )}
            </Disclosure.Button>
          ))}
          <Disclosure.Button
            onClick={() => setOpen(true)}
            className={`flex  gap-2 rounded-md px-3 py-2 text-lg font-medium w-full  ${
              open
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
            aria-current={false ? "page" : undefined}
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
            Search
          </Disclosure.Button>
          {loggedUser !== null || (
            <Disclosure.Button
              onClick={() => setShow(true)}
              className={`flex  gap-2 rounded-md px-3 py-2 text-lg font-medium w-full text-gray-300 hover:bg-gray-700 hover:text-white
              `}
              aria-current={false ? "page" : undefined}
            >
              <UserIcon className="h-6 w-6" />
              Sign In
            </Disclosure.Button>
          )}
        </div>
        {loggedUser !== null && (
          <div className="border-t border-gray-600 space-y-1 px-10 py-3 ">
            <div className=" flex items-center">
              <div className=" px-3 py-2 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <img
                  className="h-11 w-11 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-medium">
                  {loggedUser.name}
                </span>
                <span className="text-gray-400 text-base font-medium">
                  {loggedUser.email}
                </span>
              </div>
            </div>

            <Disclosure.Button
              className={`flex  gap-2 rounded-md px-3 py-2 text-lg font-medium w-full text-gray-300 hover:bg-gray-700 hover:text-white`}
              aria-current={false ? "page" : undefined}
              onClick={() => {
                setLoggedUser(null);
                toast.success("Successfully Logout", {
                  position: "bottom-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }}
            >
              <svg
                className="w-5"
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
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                ></path>
              </svg>
              Signout
            </Disclosure.Button>
          </div>
        )}
      </Disclosure.Panel>
    </div>
  );
};

export default ResponsiveNavMenu;
