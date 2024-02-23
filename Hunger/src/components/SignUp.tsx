import React from "react";
import { LOGIN_IMG } from "../utils/constants";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { toast } from "react-toastify";
import { addUser } from "../utils/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../utils/store";
import * as Yup from "yup";

const SignUp = ({ setSignUp }:any) => {
  const dispatch=useAppDispatch()
  const users=useAppSelector(store=>store.Users)
  return (
    <div>
      <div className="ml-2">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className=" font-semibold text-3xl">Sign Up</h1>
            <span>
              or{" "}
              <span
                onClick={() => setSignUp(false)}
                className="text-blue-700 cursor-pointer"
              >
                login to your account
              </span>
            </span>
          </div>
          <div className="w-[25%] mr-10">
            <img src={LOGIN_IMG} alt="login" />
          </div>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("invalid email address")
              .required("email is required"),
            password: Yup.string()
              .required("password is required")
              .min(8, "Password must be 8 characters long")
              .matches(/[0-9]/, "Password requires a number")
              .matches(/[a-z]/, "Password requires a lowercase letter")
              .matches(/[A-Z]/, "Password requires an uppercase letter")
              .matches(/[^\w]/, "Password requires a symbol"),
            confirmPassword: Yup.string()
              .required("confirm password is required")
              .oneOf(
                [Yup.ref("password"), null],
                `Confirm Password Doesn't match`
              ),

            name: Yup.string()
              .required("name is required")
              
          })}
          onSubmit={(values, { resetForm }) => {
            if (users?.[values.email]) {
              toast.error("User already exists", {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            } else {
              dispatch(
                addUser({
                    email:values.email,
                    password: values.password,
                    name: values.name,
                  
                })
              );
              resetForm(false);
              setSignUp(false);
              toast.success("Successfully Sign Up", {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          }}
        >
          <Form>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col w-[80%] ">
                <Field
                  name="name"
                  type="text"
                  className=" border border-gray-300 p-3 font-medium outline-none"
                  placeholder="Name"
                />
                <div className="text-sm text-red-500 ">
                  <ErrorMessage name="phoneNo" />
                </div>
              </div>
              <div className="flex flex-col w-[80%] ">
                <Field
                  name="email"
                  type="email"
                  className=" border border-gray-300 p-3 font-medium outline-none"
                  placeholder="Email Address"
                />
                <div className="text-sm text-red-500 ">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div className="flex flex-col w-[80%]">
                <Field
                  name="password"
                  type="password"
                  className=" border p-3 border-gray-300 font-medium outline-none"
                  placeholder="Password"
                />
                <div className="text-sm text-red-500 ">
                  <ErrorMessage name="password" />
                </div>
              </div>
              <div className="flex flex-col w-[80%]">
                <Field
                  name="confirmPassword"
                  type="password"
                  className=" border p-3 border-gray-300 font-medium outline-none"
                  placeholder="Confirm Password"
                />
                <div className="text-sm text-red-500 ">
                  <ErrorMessage name="confirmPassword" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  type="sumbit"
                  className="border w-[80%] p-3 bg-blue-700 text-white text-xl font-medium"
                >
                  Sign Up
                </button>
                <span className="w-[81%] text-sm">
                  <span className="text-gray-500">
                    By creating an account, I accept the{" "}
                  </span>
                  Terms & Conditions & Privacy Policy
                </span>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
