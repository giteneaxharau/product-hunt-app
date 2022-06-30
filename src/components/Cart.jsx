import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link, Outlet } from "react-router-dom";
import { Popover } from "@mui/material";
import CartDetails from "./CartDetails";
import { Divider } from "antd";

const Cart = ({ cartProducts, setCartProducts, isInCart, setIsInCart }) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<>
			<Tooltip title='Open cart'>
				<IconButton
					sx={{ mr: 3, bgcolor: "#BDBDBD" }}
					onClick={handleOpenUserMenu}>
					<ShoppingCartRoundedIcon
						sx={{ fontSize: "100%", color: "#FFFFFF" }}
					/>
				</IconButton>
			</Tooltip>
			<Menu
				PaperProps={{ style: { borderRadius: 13 } }}
				sx={{ mt: "50px", overflow: "auto" }}
				id='menu-appbar'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}>
				<CartDetails
					isInCart={isInCart}
					setIsInCart={setIsInCart}
					cartProducts={cartProducts}
					setCartProducts={setCartProducts}
				/>
			</Menu>
		</>
	);
};

export default Cart;
