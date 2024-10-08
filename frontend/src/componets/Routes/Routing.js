import Home from '../Home/Home'
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Layout from '../Layout/layout'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import "./App.css";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path:"/projects",
        element:<Projects />
    },
    {
        path:"/resume",
        element:<Resume />
    },
    {   
        path:'/links',
        element:<Links/>
    }
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );


export default routes;