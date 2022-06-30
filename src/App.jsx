import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
//Components

import Home from "./components/Home";
import Layout from "./components/Layout";
import Store from "./components/store/Store";
import Product from "./components/Products/Product";
import AddProduct from "./components/AddProduct";

const productsObj = [
	{
		imgSrc: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f",
		imgAlt: "product 1",
		title: "Product1",
		description: "THIS IS A SAMPLE TEXT. THIS IS A SAMPLE TEXT.",
		id: "0",
		reviews: [
			{
				id: "0",
				author: "Enea",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 4,
			},
			{
				id: "1",
				author: "Daniel",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 5,
			},
			{
				id: "2",
				author: "Jason",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 3,
			},
			{
				id: "3",
				author: "James",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 1,
			},
		],
	},
	{
		imgSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
		imgAlt: "product 2",
		title: "Product2",
		description: "THIS IS A SAMPLE TEXT. THIS IS A SAMPLE TEXT.",
		id: "1",
		reviews: [
			{
				id: "0",
				author: "Enea",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 3,
			},
			{
				id: "1",
				author: "Daniel",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 2,
			},
			{
				id: "2",
				author: "Jason",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 1,
			},
			{
				id: "3",
				author: "James",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 1,
			},
		],
	},
	{
		imgSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
		imgAlt: "product 3",
		title: "Product3",
		description: "THIS IS A SAMPLE TEXT. THIS IS A SAMPLE TEXT.",
		id: "2",
		reviews: [
			{
				id: "0",
				author: "Enea",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 5,
			},
			{
				id: "1",
				author: "Daniel",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 5,
			},
			{
				id: "2",
				author: "Jason",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 5,
			},
			{
				id: "3",
				author: "James",
				comment:
					"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
				rating: 5,
			},
		],
	},
];

const App = () => {
	const [products, setProducts] = useState(
		// JSON.parse(localStorage.getItem("Products-flex"))
		productsObj
	);
	const [activeProduct, setActiveProduct] = useState(
		JSON.parse(localStorage.getItem("activeProduct-flex"))
	);
	const [cartProducts, setCartProducts] = useState([]);
	const [isInCart, setIsInCart] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("Products-flex") === null) {
			localStorage.setItem("Products-flex", JSON.stringify([]));
		} else if (localStorage.getItem("Products-flex") === undefined) {
			localStorage.setItem("Products-flex", JSON.stringify([]));
		} else {
			localStorage.setItem("Products-flex", JSON.stringify(products));
		}
	}, [products]);

	useEffect(() => {
		if (localStorage.getItem("activeProduct-flex") === null) {
			localStorage.setItem("activeProduct-flex", JSON.stringify([]));
		} else if (localStorage.getItem("activeProduct-flex") === undefined) {
			localStorage.setItem("activeProduct-flex", JSON.stringify([]));
		} else {
			localStorage.setItem("activeProduct-flex", JSON.stringify(activeProduct));
		}
	}, [activeProduct, setActiveProduct]);

	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={
						<Layout
							isInCart={isInCart}
							setIsInCart={setIsInCart}
							cartProducts={cartProducts}
							setCartProducts={setCartProducts}
							products={products}
							setProducts={setProducts}
						/>
					}>
					<Route index element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route
						path='/store'
						element={
							<Store
								isInCart={isInCart}
								setIsInCart={setIsInCart}
								activeProduct={activeProduct}
								setActiveProduct={setActiveProduct}
								products={products}
								cartProducts={cartProducts}
								setCartProducts={setCartProducts}
							/>
						}
					/>

					<Route
						path='/store/:itemTitle'
						element={
							<Product
								isInCart={isInCart}
								setIsInCart={setIsInCart}
								cartProducts={cartProducts}
								setCartProducts={setCartProducts}
								activeProduct={activeProduct}
								setActiveProduct={setActiveProduct}
								products={products}
								setProducts={setProducts}
							/>
						}
					/>
					<Route path='/store/?' element={<AddProduct />}></Route>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
