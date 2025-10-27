import 'bootstrap/dist/css/bootstrap.min.css';      // ① Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ② Bootstrap JS (includes Popper)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);