import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MenuInfo} from "../../interfaces/IRestaurantMenu";
type CartItem={
    [key:string]:{
        info:MenuInfo,
        count:number
    }
}

const initialState:CartItem={}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action:PayloadAction<CartItem>)=>{
            return {...state,...action.payload}
        },
        increase:(state,action:PayloadAction<string>)=>{
            state[action.payload].count +=1
        },
        
        decrease:(state,action:PayloadAction<string>)=>{
            if(state[action.payload].count>1)
               state[action.payload].count -=1
            else
             delete state[action.payload]
            
        },
        remove:()=>{}

    }
})

export const{add,increase,decrease,remove} =cartSlice.actions

export default cartSlice.reducer