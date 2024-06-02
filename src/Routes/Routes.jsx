import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import TaskCreatorRoute from "./TaskCreatorRoute";
import MyTask from "../pages/Dashboard/TaskCreator/MyTasks/MyTask";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
  


  export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'userHome',
                element:<PrivateRoute><UserHome></UserHome></PrivateRoute>
            },
            {
                path:'manageUsers',
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path:'myTask',
                element:<TaskCreatorRoute><MyTask></MyTask></TaskCreatorRoute>
            }
        ]
    }
  ])