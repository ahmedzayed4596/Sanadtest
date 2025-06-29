import { useState } from "react";
import "./App.css";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import About from "./Component/About/About";
import Servcies from "./Component/Servcies/Servcies";
import Contact from "./Component/Contact/Contact";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Partner from "./Component/Partner/Partner";
import AllServices from "./Component/AllServices/AllServices";
import UserContextProvider from "../Context/UserContext";
import Orders from "./Component/Orders/Orders";
import Profile from "./Component/Profile/Profile";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { index: true, element: <Home></Home> },
        { path: "/About", element: <About></About> },
        { path: "/Servcies", element: <Servcies></Servcies> },
        { path: "/Contact", element: <Contact></Contact> },
        { path: "/Register", element: <Register></Register> },
        { path: "/Login", element: <Login></Login> },
        { path: "/Partner", element: <Partner></Partner> },
        { path: "/allservcies", element: <AllServices></AllServices> },
        { path: "/Orders", element: <Orders></Orders> },
        { path: "/Profile", element: <Profile></Profile> },
      ],
    },
  ]);

  return (
    <>
    <UserContextProvider >
  <RouterProvider router={router} ></RouterProvider>
  </UserContextProvider>
    </>
  );
}

export default App;
