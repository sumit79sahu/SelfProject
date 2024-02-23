import { Food_Image ,DEFAULT_IMG } from "../utils/constants";
import veg from "../assests/veg.png"
import nonveg from "../assests/non-veg.jpg"
import { MenuInfo } from "../interfaces/IRestaurantMenu";
import { useAppSelector ,useAppDispatch } from "../utils/store";
import {add,decrease ,increase} from "../utils/slices/cartSlice";
const MenuItems = ({showCard ,foodItems}:any) => {

  const Cart=useAppSelector(store=>store.Cart)
  const dispatch=useAppDispatch()
  return (
    <div>
    {showCard &&
      foodItems.map((data:MenuInfo, index:number) => (
        <div key={data?.id}>
          <div className="mt-4 mb-8 flex justify-between gap-10">
            <div className=" w-[80%]">
              <div className="w-5 mb-1">
                {data?.isVeg ? (
                  <img src={veg} alt="veg" />
                ) : (
                  <img src={nonveg} alt="nonveg" />
                )}
              </div>
              <h4 className="text-lg font-medium">
                {data?.name}
              </h4>
              <span className="text-base font-medium">
                ₹ {(data?.price || data?.defaultPrice) / 100}
              </span>
              <p className=" mt-2 text-[#686b6f] text-sm">
                {data?.description}
              </p>
            </div>
            <div className=" h-[130px] flex flex-col items-center">
              <img
                className="w-[150px] h-full object-cover rounded-lg"
                src={data?.imageId?Food_Image +data?.imageId:DEFAULT_IMG}
              />
              {Cart?.[data?.name]?.count ? (
                <div className="border text-green-600 rounded-md shadow-md bg-white absolute translate-y-[7rem] py-[0.2rem]  flex justify-evenly w-[60px] items-center gap-1 ">
                  <span
                    className="cursor-pointer"
                    onClick={() => dispatch(decrease(data?.name))}
                  >
                    -
                  </span>
                  <span>{Cart?.[data?.name].count}</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => dispatch(increase(data?.name))}
                  >
                    +
                  </span>
                </div>
              ) : (
                <div
                  onClick={() =>
                    dispatch(
                      add({
                        [data?.name]: {
                          info: data,
                          count: 1,
                        },
                      })
                    )
                  }
                  className=" cursor-pointer border text-green-600 rounded-md shadow-md bg-white absolute translate-y-[7rem] py-[0.2rem] flex  justify-center items-center  w-[60px]"
                >
                  <span className="">ADD</span>
                </div>
              )}
            </div>
          </div>
          {index !== foodItems.length - 1 && <div className="border"></div>}
        </div>
      ))}
  </div>
  );
};

export default MenuItems;
