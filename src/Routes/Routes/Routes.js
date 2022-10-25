import { createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import Blog from "../../BlogPage/Blog/Blog";
import Courses from "../../CoursePage/Courses/Courses";
import FAQ from "../../FAQ/FAQ";
import Home from "../../HomePage/Home/Home";
import Main from "../../Layouts/Main/Main";
import Login from "../../RegistrationPage/Login/Login";
import Register from "../../Register.js/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ])


    }




])