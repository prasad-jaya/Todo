import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import Account from "../pages/Account";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
    {
       path:'/',
       element:<Login/>
    },
    {
        path: '/account',
        element: <PrivateRoutes />,
        children: [
          {
            path: '/account',
            element: <Account />
          }
        ]
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
]);