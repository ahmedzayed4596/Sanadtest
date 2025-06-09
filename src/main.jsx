import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // ✅ this should exist in src/
import "flowbite"; // ✅ this will be bundled by Vite

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
