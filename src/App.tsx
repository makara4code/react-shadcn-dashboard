import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "@/layouts";

const Dashboard = lazy(() => import("@/views/Dashboard"));
const Order = lazy(() => import("@/views/Order"));
const Product = lazy(() => import("@/views/Product"));
const Login = lazy(() => import("@/views/Login"));

const routes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/product", element: <Product /> },
      { path: "/order", element: <Order /> },
      { path: "/delivery", element: <Order /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
