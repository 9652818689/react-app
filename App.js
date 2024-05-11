import React from "react";
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

const Grocery = lazy(() => import('./src/components/Grocery'));
const About = lazy(() =>import("./src/components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
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

