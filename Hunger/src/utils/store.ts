import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeSlice"
import restaurantmenuReducer from "./slices/restaurantmenuSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import cartReducer from "./slices/cartSlice"
import collectionReducer from "./slices/collectionSlice";
import suggestionReducer from "./slices/suggestionSlice";
import searchReducer from "./slices/searchSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    "HomeData":homeReducer,
    "RestaurantMenu":restaurantmenuReducer,
    "Cart":cartReducer,
    "Collection":collectionReducer,
    "Suggestions":suggestionReducer,
    "Search":searchReducer,
    "Users":userReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});


export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector

export const useAppDispatch:()=>(typeof store.dispatch)=useDispatch
