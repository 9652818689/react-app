import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import './index.css';
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contactus from "./src/components/Contactus";
import RestaurantMenu from "./src/components/RestaurantMenu";


const AppLayout = ()=>{
    return (
        <div className="app">
          <Header />
          <Outlet />
        </div>
    )
}
const appRouter  = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:"/contactus",
        element:<Contactus />
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu />
      }
    ],
    errorElement:<Error />
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)

