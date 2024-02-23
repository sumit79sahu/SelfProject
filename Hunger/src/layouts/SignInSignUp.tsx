import React, { useState, useEffect } from "react";
import { loginContext } from "../utils/context";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
const SignInSignUp = () => {
  const { show, setShow } = useContext(loginContext);
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (show) body.style.overflow = "hidden";
      else {
        body.style.overflowY = "scroll";
      }
    }
  }, [show]);
  return (
    <div
      className={` w-full h-full fixed  top-0 z-20 backdrop-brightness-50 ${
        show ? "visible" : "invisible"
      }`}
    >
      <div
        className={`transition-all duration-700 ease-in-out  sm:w-[449px] h-full bg-white right-0 absolute  ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className={`pt-5 px-10 h-full`}>
          <button
            onClick={() => {
              setShow(false);
              setSignUp(false);
            }}
            className="text-4xl"
          >
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
          {signUp ? (
            <SignUp setSignUp={setSignUp} />
          ) : (
            <SignIn setSignUp={setSignUp} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
