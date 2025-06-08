import { useState } from "react";
import "./App.css";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <h2>mostafa</h2>
    </>
  );
}

export default App;
