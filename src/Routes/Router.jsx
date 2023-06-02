import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layouts/Dashboard";


const router = createBrowserRouter([
    {
        path : "/",
        element : <Main />,
        children : [
            {
                path : "/",
                element : <Home />
            }
        ]
    },
    {
        path : "/dashboard",
        element : <Dashboard />,
        children : [
            {
                path : ""
            }
        ]
    }
]);


export default router ;