import React from 'react'

import { Navigate, useRoutes } from "react-router-dom";
import AppLayout from '../AppLayout'
import Home from '../Pages/Home';
import Table from '../Pages/Table';
import Settings from '../Pages/Settings';

const Router = () => {
  return useRoutes([
    {
        path: "/",
        element: <AppLayout />,
        children: [
       
          { path:"", element: <Home /> },
          { path: "table", element: <Table /> },
          { path: "settings", element: <Settings /> },
         
        ],
      },
  ]
  )
}

export default Router
