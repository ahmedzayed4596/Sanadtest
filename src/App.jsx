import { useState } from "react";
import "./App.css";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";
import { createBrowserRouter } from "react-router-dom";
createBrowserRouter
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Nav/>
    </>
  );
}

export default App;
