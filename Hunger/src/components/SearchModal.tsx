import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { searchContext } from "../utils/context";
import { useContext } from "react";
import { useAppSelector } from "../utils/store";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSuggestion } from "../hooks/useSuggestion";
import { ISuggestion } from "../interfaces/ISuggestion";
import { Food_Image } from "../utils/constants";
import { Link } from "react-router-dom";
export default function SearchModal() {
  const { open, setOpen } = useContext(searchContext);
  const [query, setQuery] = useState("");
  const status = useSuggestion(query);
  const suggestions = useAppSelector((store) => store.Suggestions);

  const clearClose=()=>{
    setOpen(false)
    setQuery("")
  }
  return (
    <>
      <Transition appear show={open} as={Fragment} >
        <Dialog
          as="div"
          className="relative z-10"
          onClose={clearClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all h-[30rem] ">
                  <div className="flex items-center justify-between pb-2 ">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-semibold leading-6 text-gray-900"
                    >
                      Hunger Search
                    </Dialog.Title>
                    <button
                      onClick={() => setOpen(false)}
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-300 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-300 dark:hover:text-white"
                      data-modal-hide="default-modal"
                    >
                      <XMarkIcon className="h-6 w-6 text-gray-500" />
                    </button>
                  </div>

                  <div className="mt-2 border border-slate-300 flex">
                    <input
                      type="text"
                      placeholder="Search for restaurants and food"
                      className=" w-[90%] p-3 outline-none font-semibold"
                      onChange={(e) => setQuery(e.target.value)}
                      value={query}
                    />
                    <span className="font-semibold p-3 flex items-center">
                      {query ? (
                        <button type="button" onClick={() => setQuery("")}>
                          <XMarkIcon className="h-6 w-6 text-gray-500" />
                        </button>
                      ) : (
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                      )}
                    </span>
                  </div>

                  <div className="mt-4 h-[20rem] overflow-y-auto">
                    {query ? (
                      suggestions?.suggestions.length === 1 ? (
                        <span className="font-medium text-xl text-slate-500 flex justify-center">{suggestions?.suggestions?.[0]?.text}</span>
                      ) : (
                        suggestions.suggestions?.map(
                          (data: ISuggestion, index: number): JSX.Element => { 
                            return(
                            <Link to={`/search?query=${data?.text}&metadata=${data?.metadata}`} onClick={clearClose} key={index} className="flex gap-6 m-3 hover:bg-slate-200 p-2">
                              <div className="w-16">
                                <img
                                  className=" h-16 object-cover aspect-square"
                                  src={Food_Image + data?.cloudinaryId}
                                />
                              </div>

                              <div className="flex flex-col  w-[75%]">
                                <span className="font-medium text-base whitespace-nowrap overflow-hidden text-ellipsis ">{data?.text}</span>
                                <span className="font-medium text-xs text-slate-500">{data?.type}</span>
                              </div>
                            </Link>
                          )}
                        )
                      )
                    ) : (
                      <div className="font-medium text-xl text-slate-500 text-center flex justify-center ">No recent Search</div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
