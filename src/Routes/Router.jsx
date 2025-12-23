import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import Plants from "../Pages/Plants";

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