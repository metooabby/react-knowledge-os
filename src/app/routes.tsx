import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "../pages/Home";
import Knowledge from "../pages/Knowledge";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import PerformanceLab from "../pages/PerformanceLab";
import TrashComponent from "../pages/TrashComponent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "knowledge", element: <Knowledge /> },
            { path: "settings", element: <Settings /> },
            { path: "performanceLab", element: <PerformanceLab /> },
            { path: "trashComponent", element: <TrashComponent /> },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
