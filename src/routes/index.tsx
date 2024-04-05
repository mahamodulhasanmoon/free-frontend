import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import DashboardOverview from "../pages/Overview/DashboardOverview.tsx";
import NotFound from "../pages/NotFound.tsx";
import Websites from "../pages/websites/Websites.tsx";
import Login from "../pages/Auth/Login.tsx";
import Register from "../pages/Auth/Register.tsx";
import Users from "../pages/admin/Users";
import PrivateRoutes from "./PrivateRoutes.tsx";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<PrivateRoutes><Main/></PrivateRoutes>,
        children:[
            {
                path: '/',
                element:<DashboardOverview/>
            },
            {
                path: '/websites',
                element:<Websites/>
            },
            {
                path: '/users',
                element:<Users/>
            },
            {
                path: '/create-user',
                element:<Register/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'*',
        element:<NotFound/>
    }

])