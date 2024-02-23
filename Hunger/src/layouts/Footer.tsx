import React from "react";
import { Link } from "react-router-dom";
import { footerItems } from "../utils/constants";

const Footer = () => {
  return (
    <div className="">
      <footer className=" p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <Link
            to="/"
            className="flex justify-center items-center text-3xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
          >
            HUNGER
          </Link>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Order food online from restaurants and get it delivered. Serving in
            Bangalore.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            {footerItems.map((footerItem) => (
              <li key={footerItem.item}>
                <Link
                  to={footerItem.item}
                  className="mr-4 hover:underline md:mr-6 "
                >
                  {footerItem.item}
                </Link>
              </li>
            ))}
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} QuickSaver Technologies Pvt. Ltd All
            Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
