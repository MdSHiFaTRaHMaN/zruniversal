import Home from "../pages/homepage/Home";
import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Routes;
