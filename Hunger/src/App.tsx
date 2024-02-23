import React, { useEffect, useState } from "react";
import Navbar from "./layouts/Navbar";
import { Outlet } from "react-router-dom";
import { store } from "./utils/store";
import { Provider } from "react-redux";
import Footer from "./layouts/Footer";
import {
  searchContext,
  loginContext,
  userLoggedContext,
} from "./utils/context";
import SearchModal from "./components/SearchModal";
import SignInSignUp from "./layouts/SignInSignUp";
import { ToastContainer } from "react-toastify";
const App = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [loggedUser, setLoggedUser] = useState<{email:string,name:string}|null>(()=>(sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user") as string):null));
  useEffect(()=>{
    sessionStorage.setItem("user",JSON.stringify(loggedUser))
  },[loggedUser])
  return (
    <Provider store={store}>
      <loginContext.Provider value={{ show, setShow }}>
        <searchContext.Provider value={{ open, setOpen }}>
          <userLoggedContext.Provider value={{ loggedUser, setLoggedUser }}>
            <div>
              <Navbar />
              <div className="my-14 mx-auto max-w-7xl px-10 sm:px-14 lg:px-16">
                <Outlet />
                <SearchModal />
              </div>
              <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <SignInSignUp />
              <Footer />
            </div>
          </userLoggedContext.Provider>
        </searchContext.Provider>
      </loginContext.Provider>
    </Provider>
  );
};

export default App;
