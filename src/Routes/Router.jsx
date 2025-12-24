import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Plants from "../Pages/Plants";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {index: true, Component: Home},
        {path: "plants", Component: Plants}

    ]
  },
])

export default router