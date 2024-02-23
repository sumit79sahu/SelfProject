import NavMenu from "../components/NavMenu";
import NavItems from "../components/NavItems";
import { Disclosure } from "@headlessui/react";
import ResponsiveNavMenu from "../components/ResponsiveNavMenu";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import { loginContext } from "../utils/context";
import { useContext } from "react";
import { userLoggedContext } from "../utils/context";
import { toast } from "react-toastify";
const Navbar = () => {
  const { show, setShow } = useContext(loginContext);
  const { loggedUser, setLoggedUser } = useContext(userLoggedContext);
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-10 sm:px-14 lg:px-16">
            <div className="relative  h-16 flex items-center justify-between ">
              <NavItems />
              {loggedUser !== null ? (
                <NavMenu setLoggedUser={setLoggedUser} />
              ) : (
                <div className="hidden sm:ml-6 sm:block">
                  <button
                    onClick={() => {
                      setShow(true);
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
                    className={`rounded-md px-3 py-2 sm:text-base md:text-lg font-medium flex items-center justify-center gap-2 text-gray-300 hover:bg-gray-700 hover:text-white
               `}
                  >
                    <UserIcon className="h-6 w-6" />
                    Sign In
                  </button>
                </div>
              )}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <ResponsiveNavMenu />
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
