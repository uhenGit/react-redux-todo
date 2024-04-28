import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Description from "../pages/description";
import NotFoundPage from "../pages/notFoundPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/description',
    element: <Description />,
  },
]);

export default router;
