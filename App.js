import React from "react";
import Home from "./pages/Home";
import { useRoutes } from "react-router-dom";
import Bmi from "./components/Bmi";
import Calc from "./components/Calc";
import Grade from "./components/Grade";
import Login from "./components/Login";
import Join from "./components/Join";

  export default function App(){
  return useRoutes([
    { path: "/", element:<Home/> },
    { path: "/bmi", element:<Bmi/> },
    { path: "/calc", element:<Calc/> },
    { path: "/grade", element:<Grade/> },
    { path: "/join", element:<Join/> },
    { path: "/login", element:<Login/> }
  ]);
}
