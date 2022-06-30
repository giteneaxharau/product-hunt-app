import React, { useState } from "react";
import { Card, Row, Col, Divider, Button } from "antd";
import { Input } from "antd";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Reviews from "./Reviews";
import { parsePath } from "react-router";
import { Container } from "@mui/material";

const ProductDetails = ({
	activeProduct,
	products,
	setProducts,
	cartProducts,
	setCartProducts,
	isInCart,
	setIsInCart,
}) => {
	const addingToCart = (id) => {
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
			<Card
				bordered={false}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: 330,
					marginTop: 15,
					marginLeft: 15,
					marginRight: 15,
					borderRadius: 15,
				}}>
				<Row align='center' justify='center' gutter={150}>
					<Col>
						<Card bordered={false}>
							{activeProduct.map((item) => (
								<img
									key={item.title}
									height={300}
									src={`${item.imgSrc}`}
									alt={item.imAlt}></img>
							))}
						</Card>
					</Col>
					<Col>
						{activeProduct.map((item) => (
							<>
								<Card
									key={item.title}
									title={item.title}
									style={{
										width: 800,
										height: 350,
										borderRadius: 15,
										marginBottom: 15,
									}}
									headStyle={{
										backgroundColor: "#1976D2",
										color: "#FFFFFF",
										fontSize: 24,
										textAlign: "center",
										borderRadius: 15,
									}}>
									<Divider></Divider>
									<Input.TextArea
										autoSize={{ minRows: 3, maxRows: 5 }}
										readOnly
										bordered={false}
										value={item.description}
										style={{
											width: 750,
											height: 100,
											textAlign: "left",
											fontSize: 18,
											fontWeight: 500,
										}}></Input.TextArea>
									<Divider orientation='left' orientationMargin={0}>
										<Container
											style={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												gap: 20,
											}}>
											<Button
												disabled={isInCart}
												id={item.id}
												style={{ display: "flex", gap: 10 }}
												type='primary'
												size='large'
												shape='round'
												onClick={(e) => addingToCart(e.currentTarget.id)}>
												{"ADD TO CART"}
												{<ShoppingCartRoundedIcon />}
											</Button>
											{isInCart && (
												<Alert severity='warning' sx={{ width: 500 }}>
													<AlertTitle>Warning</AlertTitle>
													The item you are trying to add is already there —{" "}
													<strong>check it out!</strong>
												</Alert>
											)}
										</Container>
									</Divider>
								</Card>
							</>
						))}
					</Col>
				</Row>
			</Card>
		</>
	);
};

export default ProductDetails;
