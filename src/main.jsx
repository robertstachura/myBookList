import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header"
import Main from "./components/main/Main";



createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Nav />
		<Header />
		<Main />
	</StrictMode>
);
