import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={appStore}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
