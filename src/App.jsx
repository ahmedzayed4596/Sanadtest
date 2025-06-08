import { useState } from "react";
import "./App.css";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import About from "./Component/About/About";
import Servcies from "./Component/Servcies/Servcies";
import Contact from "./Component/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);
<<<<<<< HEAD
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { index: true, element: <Home></Home> },
        { path: "/About", element: <About></About> },
        { path: "/Servcies", element: <Servcies></Servcies> },
        { path: "/Contact", element: <Contact></Contact> },
      ],
    },
  ]);
=======
  const router = createBrowserRouter([{
    element : lay 
  }])
>>>>>>> ed90595908da1e1b952339744576cc36e8c3f664

  createBrowserRouter;
  return (
    <>
      {" "}
      <RouterProvider router={router}></RouterProvider>{" "}
    </>
  );
}

export default App;
