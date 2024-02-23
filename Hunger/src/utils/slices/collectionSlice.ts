import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRestaurant } from "../../interfaces/IRestaurant";



type CollectionData={
    collection_title:String,
    collection_data:IRestaurant[],
    collection_description:string
}
const initialState:CollectionData={
    collection_title:"",
    collection_data:[],
    collection_description:""
}

const collectionSlice=createSlice(
    {
        name:"collection",
        initialState,
        reducers:{
            addCollection:(state,action:PayloadAction<CollectionData>)=>{
                return action.payload
            }
        }
    }
)

export const {addCollection}=collectionSlice.actions
export default collectionSlice.reducer