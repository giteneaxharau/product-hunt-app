import React from "react";
import { Outlet } from "react-router";
import HeaderCustom from "./HeaderCustom";

const Layout = ({
	cartProducts,
	setCartProducts,
	products,
	setProducts,
	isInCart,
	setIsInCart,
}) => {
	return (
		<>
			<HeaderCustom
				isInCart={isInCart}
				setIsInCart={setIsInCart}
				cartProducts={cartProducts}
				setCartProducts={setCartProducts}
				products={products}
				setProducts={setProducts}
			/>
			<Outlet />
		</>
	);
};

export default Layout;
