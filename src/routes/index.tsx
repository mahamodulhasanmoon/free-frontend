import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import DashboardOverview from "../pages/Overview/DashboardOverview.tsx";
import NotFound from "../pages/NotFound.tsx";
import Websites from "../pages/websites/Websites.tsx";
import Login from "../pages/Auth/Login.tsx";
import Register from "../pages/Auth/Register.tsx";
import Users from "../pages/admin/Users";
import PrivateRoutes from "./PrivateRoutes.tsx";
import Support from "../pages/Overview/components/Support.tsx";
import AdminOverview from "../pages/Overview/AdminOverview.tsx";

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
                path: '/hide-elements',
                element:<AdminOverview/>
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
            },
            {
                path: '/support',
                element:<Support/>
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