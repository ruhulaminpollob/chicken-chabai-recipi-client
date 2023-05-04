import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home"
import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Recipe from "../components/Recipe/Recipe";
import NotFound from "../components/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader:()=>{fetch("http://localhost:5000/chef")}
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "recipe/:recipeId",
                element: <PrivateRoute><Recipe /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.recipeId}`),
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }

])

export default router;