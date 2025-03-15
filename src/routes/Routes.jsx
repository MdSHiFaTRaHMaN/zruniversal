import Home from "../pages/homepage/Home";
import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import ServicePage from "../pages/services/ServicePage";
import PortFolioPage from "../pages/portfolio/PortFolioPage";
import ContactPage from "../pages/contact/ContactPage";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <ServicePage />
      },
      {
        path: "/portfolio",
        element: <PortFolioPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ],
  },
]);

export default Routes;
