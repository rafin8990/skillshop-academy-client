import { createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import Blog from "../../BlogPage/Blog/Blog";
import CheakOut from "../../CoursePage/CheakOut/CheakOut";
import CourseDetails from "../../CoursePage/CourseDetails/CourseDetails";
import Courses from "../../CoursePage/Courses/Courses";
import FAQ from "../../FAQ/FAQ";
import Home from "../../HomePage/Home/Home";
import Main from "../../Layouts/Main/Main";
import Login from "../../RegistrationPage/Login/Login";
import Register from "../../RegistrationPage/Register.js/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/all-courses')
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
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)

            },
            {
                path:'/categories/:id',
                element:<CheakOut></CheakOut>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ])


    }




])