import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFoodChoice } from "../../interfaces/IFoodChoice";
import { IRestaurant } from "../../interfaces/IRestaurant";
import { ICuisine } from "../../interfaces/ICuisine";

type HomeData={
    Food_Choice:IFoodChoice[],
    Top_Restaurants:IRestaurant[],
    Online_Restaurants:IRestaurant[],
    Cuisine_Options:ICuisine[]

}
const initialState:HomeData={
    Food_Choice:[],
    Top_Restaurants:[],
    Online_Restaurants:[],
    Cuisine_Options:[]
}
const homeSlice=createSlice({
    name:"HomeData",
    initialState,
    reducers:{
        addData:(state,action:PayloadAction<HomeData>)=>{
            return action.payload
        }
    }
})


export const {addData}=homeSlice.actions
export default homeSlice.reducer