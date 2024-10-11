import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>Error</div>,
    children: [
        {
          path: "/",
          element: <Home />
        }
    ],
  },
]);