import MainLayout from 'layout/MainLayout/index';
import Template from 'pages/Contracts/Template';

import { ROUTENAME } from 'utils/Constant/routeDefination';
import DashboardDefault from "../pages/dashboard"
import Contract from 'pages/Contracts/Contract';
import Client from 'pages/Bussiness/Client';
import Notes from 'pages/Tools/Notes';
import Calculator from 'pages/Tools/Calculator';
import User from 'pages/Portal/user';
import Department from 'pages/Management/Department';
import Designation from 'pages/Management/Designation';
import Attendance from 'pages/Hr/Attendance';
import Employee from 'pages/Hr/Employee';
import Holiday from 'pages/Hr/Holiday';


// ==============================|| MAIN ROUTING ||============================== //

const PrivateRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: ROUTENAME.BASE,
            element: <DashboardDefault />
        },
        {
            path: ROUTENAME.DASHBOARD,
            element: <DashboardDefault />
        },
        {
            path: ROUTENAME.CLIENT,
            element: <Client />
        },
        {
            path: ROUTENAME.TEMPLATES,
            element: <Template />
        },
        {
            path: ROUTENAME.CONTRACT,
            element: <Contract />
        },
        {
            path:ROUTENAME.EMPLOYEES,
            element:<Employee/>
        },
        {
            path:ROUTENAME.HOLIDAY,
            element:<Holiday/>
        },
        {
            path:ROUTENAME.ATTENDANCE,
            element:<Attendance/>
        },

        {
            path:ROUTENAME.DEPARTMENT,
            element:<Department/>
        },
        {
            path:ROUTENAME.DESIGNATION,
            element:<Designation/>
        },
        {
            path:ROUTENAME.USER,
            element:<User/>
        },
        {
            path:ROUTENAME.NOTES,
            element:<Notes/>
        },
        {
            path:ROUTENAME.CALCULATOR,
            element:<Calculator/>
        }
        
    ]
};

export default PrivateRoutes;
