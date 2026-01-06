import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Plants from "../Pages/Plants";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyProfile from "../Pages/MyProfile";
import Signup from "../Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/plants", Component: Plants },
      { path: "*", element: <div>404 Not Found</div> },
      { path: "/profile", Component: MyProfile },
      { path: "/login", Component: Login },
      { path: "/signup", Component: Signup },


    ]
  },
])

export default router