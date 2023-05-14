import { createSlice } from "@reduxjs/toolkit";

const cartState = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState: cartState,
	reducers: {
		addItemToCart(state, action) {
			const newGoods = {
				...action.payload, //  {id:1, title:'bag name'}
				quantity: 1,
			};

			const hasInCart = state.cart.find(el => el.id === action.payload.id);

			if (hasInCart) {
				hasInCart.quantity = hasInCart.quantity + 1;
			} else {
				state.cart.push(newGoods);
			}
		},

		removeItem(state, action) {},
	},
});

export const { addItemToCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
