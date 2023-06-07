import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
import { publicRoutes } from "./PublicRoutes";

export default function Routes({ isLoggedIn }) {

  console.log("prvateR",PrivateRoutes)

  const [activeRotues, setActiveRoutes] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      setActiveRoutes([PrivateRoutes]);
    } else {
      setActiveRoutes([publicRoutes]);
    }
  }, [isLoggedIn]);
  return useRoutes(activeRotues)
}
