import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Thankyou } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/thankyou/:id",
    element: <Thankyou />,
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

AppRoutes.propTypes = {};

AppRoutes.defaultProps = {};

export default AppRoutes;
