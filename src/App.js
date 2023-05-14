import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
};

export default App;
