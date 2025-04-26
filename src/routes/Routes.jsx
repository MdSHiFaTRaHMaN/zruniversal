import Home from "../pages/homepage/Home";
import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import ServicePage from "../pages/services/ServicePage";
import PortFolioPage from "../pages/portfolio/PortFolioPage";
import ContactPage from "../pages/contact/ContactPage";
import TermsAndCondition from "../pages/termsandconditions/TermsAndCondition";
import GalleryPage from "../pages/gallery/GalleryPage";


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
        path: "/gallery",
        element: <GalleryPage />
      },
      {
        path: "/portfolio",
        element: <PortFolioPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/terms-conditions",
        element: <TermsAndCondition />
      }
    ],
  },
]);

export default Routes;
