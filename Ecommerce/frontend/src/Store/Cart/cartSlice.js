import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice(
    {
        name:'cart',
        initialState:[],
        reducers:{
            add(state,action)
            {
                return[...state,action.payload]
            },
            remove(state,action)
            {
                return state.filter(data=>data.productId!==action.payload)
            },
            changePrice(state,action)
            {
                state=state.filter(data=>data.productId!==action.payload.productId)
                return[...state,action.payload]
            }
        }
    }
)
export const {add,remove,changePrice}=cartSlice.actions;
export default cartSlice.reducer;