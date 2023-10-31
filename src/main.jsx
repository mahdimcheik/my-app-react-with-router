import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// page components

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import Form from "./pages/Form";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/:id",
        element: <Home />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${params.id}`
          );
          return await response.json();
        },
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
        path: "/form",
        element: <Form />,
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
