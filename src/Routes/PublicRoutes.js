import LoginLayout from "layout/loginLayout/index";
import Login from "pages/authentication/Login";
import { Navigate } from "react-router-dom";
import { ROUTENAME } from "utils/Constant/routeDefination";

export const publicRoutes={
  element : <LoginLayout/>,
  children:[
    {
      path:ROUTENAME.BASE,
      element:<Login/>
    },

  ]
}
