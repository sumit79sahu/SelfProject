import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRestaurant } from "../../interfaces/IRestaurant";
import { IRestaurantMenu } from "../../interfaces/IRestaurantMenu";

type RestaurantMenu={
    restaurantInfo:IRestaurant|null,
    restaurantMenu:IRestaurantMenu[]
}

const initialState:RestaurantMenu={
    restaurantInfo:null,
    restaurantMenu:[]
}
const restaurantmenuSlice=createSlice({
    name:"restaurantMenu",
    initialState,
    reducers:{
        addMenu:(state,action:PayloadAction<RestaurantMenu>)=>{
            return action.payload
        }
    }

})


export const {addMenu}= restaurantmenuSlice.actions
export default restaurantmenuSlice.reducer