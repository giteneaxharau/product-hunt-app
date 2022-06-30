import { List, Card, Image, Divider, Button } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const CartDetails = ({
	cartProducts,
	setCartProducts,
	isInCart,
	setIsInCart,
}) => {
	const deleteCartProducts = (id) => {
		setCartProducts(
			cartProducts.filter((obj) => parseInt(obj.id) !== parseInt(id))
		);
		setIsInCart(false);
	};

	return (
		<>
			<List
				grid={{
					gutter: 16,
					xs: 2,
				}}
				style={{ width: 400, height: 500, marginLeft: 12 }}
				size='small'
				dataSource={cartProducts}
				renderItem={(item) => (
					<List.Item key={item.title}>
						<Card
							style={{ width: 150, borderRadius: 15 }}
							cover={
								<Image
									aria-valuetext={item.title}
									id={item.id}
									onClick={(e) => {
										activeProductHandler(e.currentTarget.id);
									}}
									style={{
										aspectRatio: "auto",
										width: 150,
										borderRadius: 15,
									}}
									preview={false}
									src={`${item.imgSrc}`}
									alt={item.imAlt}></Image>
							}>
							<Card.Meta
								title={item.title}
								description={item.description}></Card.Meta>
						</Card>
						<Divider orientation='right'>
							<Button
								id={item.id}
								type='danger'
								size='large'
								shape='circle'
								onClick={(e) => deleteCartProducts(e.currentTarget.id)}>
								<DeleteIcon id={item.id} />
							</Button>
						</Divider>
					</List.Item>
				)}></List>
		</>
	);
};

export default CartDetails;
