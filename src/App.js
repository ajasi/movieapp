import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/Details";
import List from "./pages/List";

function App() {
  const router = createBrowserRouter([
    {
      path: "/list/:discover/:type",
      element: <List />,
    },
    {
      path: "/details/:type/:id",
      element: <Details />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
