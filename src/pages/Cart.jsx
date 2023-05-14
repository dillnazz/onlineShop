import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";

const dataSource = [
	{
		key: "1",
		image: "image",
		title: "Lorem ipsum",
		description: "dsdsdsdsdgh",
		price: 3232,
	},
];

const columns = [
	{
		title: "Image",
		dataIndex: "image",
		key: "name",
		render: url => <img width={80} src={url} alt="img" />,
	},
	{
		title: "Quantity",
		dataIndex: "quantity",
		key: "quantity",
		render: count => <h3> X {count} </h3>,
	},
	{
		title: "Name",
		dataIndex: "title",
		key: "name",
	},
	{
		title: "Description",
		dataIndex: "description",
		key: "age",
	},
	{
		title: "Price",
		dataIndex: "price",
		key: "age",
		render: (price, item) => <p style={{ width: "100px" }}>{price * item.quantity} $</p>,
	},
];

const Cart = () => {
	const cart = useSelector(state => state.basket.cart);

	const totalSum = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div>
			<Table columns={columns} dataSource={cart} />
			<h2>Total: {totalSum} $</h2>
		</div>
	);
};

export default Cart;
