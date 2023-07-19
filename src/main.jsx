import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./components/NotFound.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        // errorElement: <ErrorPage/>,
    },
    {
        path: "*",
        element: <NotFound/>,
        // errorElement: <ErrorPage/>,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
