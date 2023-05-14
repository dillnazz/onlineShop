import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
	const request = await fetch("https://fakestoreapi.com/products");
	const response = await request.json(); // JSON.parse()
	return response;
});
// STATE = {}
const productsState = {
	goods: [],
	status: "",
	error: "",
};

// Reducer () => {}
const productSlice = createSlice({
	name: "products",
	initialState: productsState,
	extraReducers: {
		[getProducts.pending]: (state, action) => {
			state.status = "pending";
			state.error = "";
		},
		[getProducts.fulfilled]: (state, action) => {
			console.log(action, "----:action");
			state.goods = action.payload; // [20]
			state.status = "success";
		},
		[getProducts.rejected]: (state, action) => {
			state.error = "";
		},
	},
});

export default productSlice.reducer