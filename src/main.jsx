import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.querySelector(".wrapper")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
