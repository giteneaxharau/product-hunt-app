import { Card } from "@mui/material";
import { Image, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Store from "./store/Store";

const Home = () => {
	return (
		<>
			<Card
				raised
				sx={{
					marginLeft: 10,
					marginTop: 5,
					marginBottom: 5,
					width: 1750,
					height: 800,
					borderRadius: 4,
				}}>
				<Image
					style={{ aspectRatio: "auto", width: 1750 }}
					preview={false}
					alt='background image'
					src='https://img.freepik.com/free-photo/laptop-blank-screen-hopping-cart-full-gifts-with-copyspace-online-shopping-concept_1423-89.jpg?t=st=1655141078~exp=1655141678~hmac=1b566a836f77800ad2e82512f786922280cf7ddddee3eaa14e04c554fdf934b1&w=1380'></Image>
				<Typography.Title
					level={1}
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						fontSize:"1000%",
						color: "#FFFFFF",
						textShadow: '2px 2px 8px darkgray'
					}}>
					Product Hunt
				</Typography.Title>
			</Card>
		</>
	);
};

export default Home;
