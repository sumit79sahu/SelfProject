import { useState ,useEffect } from "react";
import { IRestaurantMenu } from "../interfaces/IRestaurantMenu";
import { MenuInfo } from "../interfaces/IRestaurantMenu";
const useVegFilter=(restaurantMenu:IRestaurantMenu[],onlyVeg:boolean)=>{
    const [filteredMenu, setFilteredMenu] = useState<IRestaurantMenu[]>(restaurantMenu);
    useEffect(() => {
      try {
        setFilteredMenu(():IRestaurantMenu[] => 
          onlyVeg
              ? restaurantMenu.map((data: IRestaurantMenu) => ({
                  title: data?.title,
                  [data?.menu ? "menu" : "categories"]: data?.menu
                      ? data.menu.filter((data: MenuInfo) => data.isVeg === 1)
                      : data.categories?.map((data: IRestaurantMenu) =>(
                        {
                          title:data?.title, [data?.menu ? "menu" : "categories"]: data?.menu?.filter((data: MenuInfo) => data.isVeg === 1)
                        }
                      )                     
                      ),
              }))
              : restaurantMenu
      )
      } catch (error) {
        console.log(error);
      }
    }, [onlyVeg]);
    return filteredMenu
}
export default useVegFilter;