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
import Tasklist from "../pages/Dashboard/Worker/TaskList/Tasklist";
import MySubmission from "../pages/Dashboard/Worker/MySubmission/MySubmission";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageTask from "../pages/Dashboard/Admin/ManageTask/ManageTask";
import TaskCreatorHome from "../pages/Dashboard/TaskCreator/TaskCreatorHome/TaskCreatorHome";
import AddNewTask from "../pages/Dashboard/TaskCreator/AddNewTask/AddNewTask";
import PurchaseCoin from "../pages/Dashboard/TaskCreator/PurchaseCoin/PurchaseCoin";
import PurchaseHistory from "../pages/Dashboard/TaskCreator/PurchaseHistory/PurchaseHistory";
import WorkerRoute from "./WorkerRoute";
  


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
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'userHome',
                element:<PrivateRoute><UserHome></UserHome></PrivateRoute>
            },
            {
                path:'taskList',
                element:<WorkerRoute><Tasklist></Tasklist></WorkerRoute>
            },
            {
                path:'mySubmissions',
                element:<WorkerRoute><MySubmission></MySubmission></WorkerRoute>
            },
            {
                path:'adminHome',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path:'manageUsers',
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path:'manageTasks',
                element:<AdminRoute><ManageTask></ManageTask></AdminRoute>
            },
            {
                path:'taskCreatorHome',
                element:<TaskCreatorRoute><TaskCreatorHome></TaskCreatorHome></TaskCreatorRoute>
            },
            {
                path:'myTask',
                element:<TaskCreatorRoute><MyTask></MyTask></TaskCreatorRoute>
            },
            {
                path:'addNewTask',
                element:<TaskCreatorRoute><AddNewTask></AddNewTask></TaskCreatorRoute>
            },
            {
                path:'purchaseCoin',
                element:<TaskCreatorRoute><PurchaseCoin></PurchaseCoin></TaskCreatorRoute>
            },
            {
                path:'purchaseHistory',
                element:<TaskCreatorRoute><PurchaseHistory></PurchaseHistory></TaskCreatorRoute>
            },
        ]
    }
  ])