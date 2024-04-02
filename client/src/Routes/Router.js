import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./../pages/Home/Home";
import Contact from "./../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

export default router;
