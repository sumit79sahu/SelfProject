import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRestaurant } from "../../interfaces/IRestaurant";
import { MenuInfo } from "../../interfaces/IRestaurantMenu";


type IDishResult={dishInfo:MenuInfo[],restaurantInfo:IRestaurant[]}
 
interface ISearchResult{
    Restaurants:IRestaurant[],
    Dishes:IDishResult[]
}

const initialState:ISearchResult={
    Restaurants:[],
    Dishes:[]
}


const searchSlice=createSlice({
    name:"searchResult",
    initialState,
    reducers:{
        addSearchResult:(state,action:PayloadAction<ISearchResult>)=>{
            return action.payload
        }
    }
})

export const {addSearchResult} =searchSlice.actions
export default searchSlice.reducer