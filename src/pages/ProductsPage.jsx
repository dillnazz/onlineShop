import React, { useEffect } from "react";
import { Button, Card, Spin } from "antd";
import { getProducts } from "../store/productsSlice";
import { addItemToCart } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const { Meta } = Card;

const ProductsPage = () => {
	const products = useSelector(state => state.products.goods);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);

  const addToCart = (things)=>{
    dispatch(addItemToCart(things));
  }

	if (products.length === 0) {
		return (
			<Spin tip="Loading" size="large">
				<div className="content" />
			</Spin>
		);
	}

	return (
		<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
			{products.map(el => (
				<Card
					hoverable
					style={{
						width: 240,
					}}
					cover={<img alt="example" src={el.image} />}>
					<Meta title={el.title} />
					<p>
						Price: <b> {el.price} $ </b>
					</p>
					<Button onClick={()=>{
            addToCart(el)
          }}>+ add to cart</Button>
				</Card>
			))}
		</div>
	);
};

export default ProductsPage;
