import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const cart = useSelector(state => state.basket.cart);

  const totalSum = cart.reduce((total, item)=> total + (item.price * item.quantity) , 0)

	return (
		<header>
			<nav style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<h3>
						<Link to="/products">Products</Link>
					</h3>
				</div>
				<div>Logo</div>
				<div>
					<ul>
						<li>
							<Link to="/cart">
								<AiOutlineShoppingCart /> {totalSum.toFixed(2)} $
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
