import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout"
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Nazm from "../pages/Nazm";
import Nasr from "../pages/Nasr";
import Maqola from "../pages/Maqola";
import Forum from "../pages/Forum";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/nasr",
                element: <Nasr />,
            },
            {
                path: "/nazm",
                element: <Nazm />,
            },
            {
                path: "/maqolalar",
                element: <Maqola />,
            },
            {
                path: "/forum",
                element: <Forum/>
            }
        ]
    }
]);

export default router