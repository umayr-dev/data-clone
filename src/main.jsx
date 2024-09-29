import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import App from "./App.jsx";

createRoot(document.querySelector(".wrapper")).render(<App />);
