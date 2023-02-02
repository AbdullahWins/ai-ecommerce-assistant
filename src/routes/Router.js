import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import ProductDescription from "../components/Modules/ProductDescription";
import BlogPost from "../components/Modules/BlogPost";
import MarketingEmail from "../components/Modules/MarketingEmail";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/pd",
        element: <ProductDescription></ProductDescription>,
      },
      {
        path: "/bp",
        element: <BlogPost></BlogPost>,
      },
      {
        path: "/me",
        element: <MarketingEmail></MarketingEmail>,
      },
    ],
  },

  {
    path: "*",
    element: <h2>lalala</h2>,
  },
]);
