import React from "react";
import { Link } from "react-router-dom";

const NavigationLink = ({ linkName }: any) => {
  return (
    <div className="overflow-hidden text-ellipsis text-xl">
      <Link
        className="text-[#686b6f] whitespace-nowrap hover:text-black"
        to={"/"}
      >
        Home
      </Link>
      <span className="text-[#686b6f] whitespace-nowrap"> / </span>
      <Link
        className="text-[#686b6f] whitespace-nowrap hover:text-black"
        to={"/"}
      >
        Banglore
      </Link>
      <span className="text-[#686b6f] whitespace-nowrap"> / </span>
      <span className="whitespace-nowrap">{linkName}</span>
    </div>
  );
};

export default NavigationLink;
