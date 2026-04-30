import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "login",
//         element: !user ? <Login /> : <Navigate to='/'/>,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "post/create",
//         element: <CreatePost />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
