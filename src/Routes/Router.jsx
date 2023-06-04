import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layouts/Dashboard";
import Contact from "../Pages/Contact/Contact/Contact";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import Login from "../Pages/Login/Login";
import Login_register from "../Layouts/Login_register";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/shop",
                element: <Shop />
            },
        ]
    },
    {
        path: "/loginRegister",
        element: <Login_register />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: ""
            }
        ]
    }
]);


export default router;