import React from 'react'
import { Form ,Formik,Field,ErrorMessage} from 'formik'
import * as Yup from "yup"
import { LOGIN_IMG } from '../utils/constants'
import { useContext } from 'react'
import { loginContext,userLoggedContext } from '../utils/context'
import { toast} from 'react-toastify'
import { useAppSelector } from '../utils/store'

const SignIn = ({setSignUp}:any) => {
    const {show,setShow}=useContext(loginContext)
    const {loggedUser,setLoggedUser}=useContext(userLoggedContext)
    const users=useAppSelector(store=>store.Users)
  return (
    <div>
      <div className="ml-2">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className=" font-semibold text-3xl">Login</h1>
            <span>
              or{" "}
              <span
                onClick={() => setSignUp(true)}
                className="text-blue-700 cursor-pointer"
              >
                create an account
              </span>
            </span>
          </div>
          <div className="w-[25%] mr-10">
            <img src={LOGIN_IMG} alt="login" />
          </div>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("invalid email address")
              .required("email is required"),
            password: Yup.string().required("password is required"),
          })}
          onSubmit={(values,{resetForm}) =>{
            if(users?.[values.email])
            {
              if(users?.[values.email].password===values?.password)
              {
                setLoggedUser({email:values.email,name:users?.[values.email].name})
                resetForm(true)
                setShow(false)
                toast.success("Successfully Login", {
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
              else
              toast.error("Invalid Password", {
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
            else
            {
              toast.error("Email dosen't exists", {
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
            <div className="flex flex-col gap-10">
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
              <div className="flex flex-col gap-1">
                <button
                  type="sumbit"
                  className="border w-[80%] p-3 bg-blue-700 text-white text-xl font-medium"
                >
                  Login
                </button>
                <span className="w-[81%] text-sm">
                  <span className="text-gray-500">
                    By clicking on Login, I accept the{" "}
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
}

export default SignIn
