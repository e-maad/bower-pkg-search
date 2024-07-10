import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Search from "./pages/Search/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/search" replace /> },
      {
        path: "search",
        element: <Search />,
      },
      {
        index: true,
        path: "*",
        element: <Navigate replace to="/search" />,
      },
    ],
  },
]);
