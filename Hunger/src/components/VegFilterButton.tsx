import { Switch } from "@headlessui/react";
import { useContext } from "react";
import { filterContext } from "../utils/context";
const VegFilterButton = () => {

  const {onlyVeg ,setOnlyVeg}=useContext(filterContext)

  return (
    <div className="flex gap-3 items-center ">
      <span className="font-semibold text-[#414449]">Veg Only</span>
      <Switch
        checked={onlyVeg}
        onChange={()=>setOnlyVeg(!onlyVeg)}
        className={`${
          onlyVeg ? "bg-green-700" : "bg-slate-300"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            onlyVeg ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
};

export default VegFilterButton;
