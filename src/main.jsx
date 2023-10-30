import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// page components

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Articles";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
      },
      {
        path: "/articles/:id/:name",
        element: <Article />,
      },
    ],
  },
  // {
  //   element: <Admin />,
  //   path: "/admin",
  //   children: [
  //     {
  //       path: "/user",
  //       element : <User />
  //     }
  //   ]
  // }
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);