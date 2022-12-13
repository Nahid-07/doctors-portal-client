import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/about/About";
import Appointment from "../pages/appointment/Appointment";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import SignIn from "../pages/login/SignIn";
import Reviews from "../pages/reviews/Reviews";
import Signup from "../pages/SignUp/Signup";


export const router = createBrowserRouter([
    {
        path :'/', element:<Main></Main>,
        children : [
            {
                path:'/' , element:<Home></Home>
            },
            {
                path : '/about', element:<About></About>
            },
            {
                path : '/appointment', element:<Appointment></Appointment>
            },
            {
                path : '/reviews', element:<Reviews></Reviews>
            },
            {
                path : '/login', element:<SignIn></SignIn>
            }, 
            {
                path : '/signup', element:<Signup></Signup>
            }, 
        ]
    }
])