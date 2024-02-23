import React from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import RestaurantMenu from "./pages/RestaurantMenu";
import "./index.css"
import Filter from "./pages/Filter";
import Search from "./pages/Search";
import PrivateRoute from "./route/PrivateRoute";
import "react-toastify/dist/ReactToastify.css";


const router=createBrowserRouter([{
    element:<App/>,
    path:"/",
    children:[
        {
            element:<Home/>,
            path:""
        },
        {
            element:<PrivateRoute element={<RestaurantMenu/>}/>,
            path:"/restaurant/:restaurant"
        }
        ,
        {
            element: <PrivateRoute element={<Cart/>}/>,
            path:"/cart"
        },
        {
            element:<PrivateRoute element={<Collection/>}/>,
            path:"/collection/:collectionId"

        },
        {
            path: "/filter/:filterName",
            element: <PrivateRoute element={<Filter/>}/>,
        },
        {
            path:"/search",
            element:<PrivateRoute elment={<Search/>}/>
        }
    ]
}])

const root=ReactDOM.createRoot(document.querySelector("#root")!)
root.render(<RouterProvider router={router}/>)