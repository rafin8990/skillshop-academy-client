import { createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import Blog from "../../BlogPage/Blog/Blog";
import CheakOut from "../../CoursePage/CheakOut/CheakOut";
import CourseDetails from "../../CoursePage/CourseDetails/CourseDetails";
import Courses from "../../CoursePage/Courses/Courses";
import ErrorPage from "../../ErrorPage/ErrorPage";
import FAQ from "../../FAQ/FAQ";
import Home from "../../HomePage/Home/Home";
import Main from "../../Layouts/Main/Main";
import PrivateRoute from "../../PrivateRoute/PrivateRoute/PrivateRoute";
import Login from "../../RegistrationPage/Login/Login";
import Register from "../../RegistrationPage/Register.js/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: ([
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://skill-shop-academy-server.vercel.app/all-courses')
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
            },
            {
                path:'/categories/:id',
                element:<PrivateRoute><CheakOut></CheakOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://skill-shop-academy-server.vercel.app/categories/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://skill-shop-academy-server.vercel.app/courses/${params.id}`)

            }
           
        ])


    }




])