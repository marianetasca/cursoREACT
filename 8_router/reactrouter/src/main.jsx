import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import ContactDetails from "./routes/ContactDetails";
import Contact from "./routes/Contact";
import Product from "./routes/Product";
import Info from "./routes/Info";
import NotFound from "./routes/NotFound";
import Search from "./routes/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 5 - nested routes - identificador unico
      {
        path: "contact/:id",
        element: <ContactDetails />,
      },
      {
        path: "products/:id",
        element: <Product />,
      },
      {
        path: "products/:id/info",
        element: <Info />,
      },
      {
        // navigate para paginas nao existentes
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
      // search
      {
        path: "search",
        element: <Search />,
      },
      // no match route
      {
        path: "/company",
        element: <Navigate to="/about" />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
