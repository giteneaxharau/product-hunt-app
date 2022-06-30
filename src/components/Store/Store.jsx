import React, { useState } from "react";

import Card from "antd/lib/card/Card";
//components
import ProductRow from "../Products/ProductRow";

const Store = ({
	products,
	activeProduct,
	setActiveProduct,
	cartProducts,
	setCartProducts,
	isInCart,
	setIsInCart,
}) => {
	return (
		<>
			<ProductRow
				isInCart={isInCart}
				setIsInCart={setIsInCart}
				cartProducts={cartProducts}
				setCartProducts={setCartProducts}
				products={products}
				activeProduct={activeProduct}
				setActiveProduct={setActiveProduct}
			/>
		</>
	);
};

export default Store;
