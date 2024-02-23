import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISuggestion } from "../../interfaces/ISuggestion";

type Suggestions={
    suggestions:ISuggestion[]
}

const initialState:Suggestions={
    suggestions:[]
}

const suggestionSlice=createSlice({
    name:"suggestions",
    initialState,
    reducers:{
        addSuggestions:(state,action:PayloadAction<Suggestions>)=>{
            return action.payload
        }
    }
})

export const {addSuggestions}=suggestionSlice.actions
export default suggestionSlice.reducer