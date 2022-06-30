import React from "react";
import { List, Rate, Button, Spin, Image, Card, Popover } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useState } from "react";

const ProductRow = ({
	products,
	activeProduct,
	setActiveProduct,
	cartProducts,
	setCartProducts,
	isInCart,
	setIsInCart,
}) => {
	const [spinning, setSpinning] = useState(false);
	let navigation = useNavigate();

	const navigationHandler = (title) => {
		setSpinning(true);
		console.log(title);
		setTimeout(() => {
			navigation(`${title}`);
			setSpinning(false);
		}, 800);
	};
	const activeProductHandler = (id) => {
		const activeObj = products.filter((obj) => {
			return parseInt(obj.id) === parseInt(id);
		});
		console.log(activeObj);
		setActiveProduct(activeObj);
	};

	const addingToCart = (id) => {
		console.log(id);
		const cartProductActive = products[parseInt(id)];
		if (cartProducts.length === 0) {
			setCartProducts([cartProductActive]);
			setIsInCart(true);
		} else if (parseInt(cartProducts.at(-1).id) === parseInt(id)) {
			return;
		} else {
			setCartProducts([...cartProducts, cartProductActive]);
			setIsInCart(true);
		}
	};
	return (
		<>
			<Spin spinning={spinning} tip='loading...'>
				<List
					grid={{
						gutter: 16,
					}}
					size='small'
					style={{ marginTop: 30, marginBottom: 30, marginLeft: 55 }}
					dataSource={products}
					renderItem={(item) => (
						<>
							<List.Item>
								<Card
									hoverable={spinning}
									style={{ width: 400, borderRadius: 15 }}
									size='large'
									cover={
										<Image
											aria-valuetext={item.title}
											id={item.id}
											onClick={(e) => {
												navigationHandler(e.currentTarget.ariaValueText);
												activeProductHandler(e.currentTarget.id);
											}}
											style={{
												aspectRatio: "auto",
												width: 400,
												borderRadius: 15,
											}}
											preview={false}
											src={`${item.imgSrc}`}
											alt={item.imAlt}></Image>
									}
									actions={[
										<ShoppingCartRoundedIcon
											id={item.id}
											onClick={(e) => {
												addingToCart(e.currentTarget.id);
											}}></ShoppingCartRoundedIcon>,
									]}>
									<Card.Meta
										aria-valuetext={item.title}
										id={item.id}
										title={item.title}
										description={item.description}
										avatar={
											<Rate
												style={{ fontSize: "150%" }}
												allowHalf={true}
												disabled
												defaultValue={
													Math.round(
														(item.reviews
															.map((review) => {
																return review.rating;
															})
															.reduce((a, b) => a + b, 0) /
															item.reviews.length) *
															2
													) / (2).toFixed(1)
												}
											/>
										}
										onClick={(e) => {
											navigationHandler(e.currentTarget.ariaValueText);
											activeProductHandler(e.currentTarget.id);
										}}></Card.Meta>
								</Card>
							</List.Item>
						</>
					)}></List>
			</Spin>
		</>
	);
};

export default ProductRow;
