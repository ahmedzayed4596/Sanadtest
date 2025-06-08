import { useState } from "react";
import "./App.css";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([{}])

createBrowserRouter
  return <> <RouterProvider router={router}></RouterProvider> </>
}

export default App;
