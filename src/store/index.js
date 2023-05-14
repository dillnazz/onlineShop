import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";

const rootReducer = combineReducers({
	products: productsReducer,
  basket: cartReducer
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
