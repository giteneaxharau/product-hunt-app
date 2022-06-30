import React, { useEffect, useState } from "react";
import { Card, Divider, Button, Popover, Typography } from "antd";
import AddCircle from "@mui/icons-material/AddCircle";
//Component
import ProductDetails from "./ProductDetails";
import Reviews from "./Reviews";
import AddReview from "./AddReview";
import { backdropClasses } from "@mui/material";
import { borderRadius } from "@mui/system";

const Product = ({
	activeProduct,
	setActiveProduct,
	products,
	setProducts,
	cartProducts,
	setCartProducts,
	isInCart,
	setIsInCart,
}) => {
	const [visible, setVisible] = useState(false);

	const hide = () => {
		setVisible(false);
	};

	const handleVisibleChange = (newVisible) => {
		setVisible(newVisible);
	};

	return (
		<>
			<Card
				bordered={false}
				style={{
					marginLeft: 100,
					marginTop: 5,
					width: 1700,
					height: 900,
					borderRadius: 15,
				}}>
				<Divider orientation='left' style={{ margin: 0, padding: 0 }}>
					<Typography>
						<Typography.Title
							style={{
								textAlign: "left",
								fontFamily: "monospace",
								marginLeft: 50,
								marginBottom: 5,
								color: "#1976D2",
							}}>
							PRODUCT DETAILS
						</Typography.Title>
					</Typography>
				</Divider>
				<ProductDetails
					isInCart={isInCart}
					setIsInCart={setIsInCart}
					cartProducts={cartProducts}
					setCartProducts={setCartProducts}
					products={products}
					setProducts={setProducts}
					activeProduct={activeProduct}
					setActiveProduct={setActiveProduct}
				/>
				<Divider orientation='left' style={{ margin: 0, padding: 0 }}>
					<Typography>
						<Typography.Title
							style={{
								textAlign: "left",
								fontFamily: "monospace",
								marginTop: 5,
								marginLeft: 50,
								marginBottom: 5,
								color: "#1976D2",
							}}>
							REVIEWS
						</Typography.Title>
					</Typography>
				</Divider>

				<Card
					hoverable
					style={{
						display: "flex",
						alignItems: "flex-start",
						justifyContent: "flex-start",
						flexDirection: "column",
						height: 330,
						marginTop: 15,
						marginLeft: 15,
						marginRight: 15,
						marginBottom: 15,
						borderRadius: 15,
						overflow: "auto",
					}}>
					{activeProduct.map((item) =>
						item.reviews.map((obj) => (
							<Reviews
								key={obj.id.toString()}
								author={obj.author}
								comment={obj.comment}
								rating={obj.rating}
							/>
						))
					)}
				</Card>
				<Divider orientation='left' orientationMargin={16}>
					<Popover
						placement='rightTop'
						content={
							<AddReview
								activeProduct={activeProduct}
								setActiveProduct={setActiveProduct}
								visible={visible}
								setVisible={setVisible}
								products={products}
								setProducts={setProducts}
							/>
						}
						title='Title'
						trigger='click'
						visible={visible}
						onVisibleChange={handleVisibleChange}>
						<Button
							type='primary'
							shape='round'
							size='large'
							style={{ display: "flex", gap: 10 }}>
							{"Add Comment"}
							{<AddCircle />}
						</Button>
					</Popover>
				</Divider>
			</Card>
		</>
	);
};

export default Product;
