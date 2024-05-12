import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./src/components/About";
import Error from "./src/components/Error";
import Contactus from "./src/components/Contactus";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import('./src/components/Grocery'));
const About = lazy(() =>import("./src/components/About"));

const AppLayout = () => {
  const [userName,setUserName] = useState();

  useEffect(()=>{ 
    //make an API call and send username and password
      const data = {
        name:"Vijay kumar"
      };
      setUserName(data.name);
  },[]);

  return (
    <div>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
        )
      },
      {
        path: "/contactus",
        element: <Contactus />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h>Loading...</h>}><Grocery /></Suspense>
        )
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)

