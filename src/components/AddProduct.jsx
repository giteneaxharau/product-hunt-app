import React from "react";
import FileBase64 from "react-file-base64";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
	Button,
	Checkbox,
	Col,
	Form,
	InputNumber,
	Radio,
	Rate,
	Row,
	Select,
	Slider,
	Switch,
	Upload,
	Card,
	Modal,
	Input,
} from "antd";
import { useState } from "react";

const { Option } = Select;
const formItemLayout = {
	labelCol: {
		span: 6,
	},
	wrapperCol: {
		span: 14,
	},
};

const AddProduct = ({ products, setProducts }) => {
	//STATES
	const [isVisible, setIsVisible] = useState(false);
	const [titleTemp, setTitleTemp] = useState("");
	const [descTemp, setDescTemp] = useState("");
	const [imageTemp, setImageTemp] = useState();
	const [imageAltTemp, setImageAltTemp] = useState("");

	const getFiles = (files) => {
		setImageTemp({ files: files });
	};

	const onFinish = () => {
		const newBase64 = imageTemp.replace(/(\r\n|\n|\r)/gm, "");
		const newState = [
			...products,
			{
				imgSrc: newBase64,
				imgAlt: imageAltTemp,
				title: titleTemp,
				description: descTemp,
				id: (parseInt(products.at(-1).id) + 1).toString(),
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
				],
				// imgSrc: newBase64,
				// imgAlt: imageAltTemp,
				// title: titleTemp,
				// description: descTemp,
				// id: (parseInt(products.at(-1).id) + 1).toString(),
				// reviews: [],
			},
		];
		setProducts(newState);
		setTimeout(() => {
			setImageTemp(null);
			setImageAltTemp("");
			setTitleTemp("");
			setDescTemp("");
		}, 200);
	};

	const closeModal = () => {
		setIsVisible(!isVisible);
	};
	return (
		<>
			<Button
				type='secondary'
				style={{
					marginTop: 0,
					color: "#1976D2",
					backgroundColor: "#FFFFFF",
					borderRadius: 20,
					display: "flex",
					alignItems: "center",
					gap: 10,
				}}
				onClick={() => setIsVisible(!isVisible)}>
				{"Add Product "}
				{<AddCircleRoundedIcon />}
			</Button>
			<Modal
				centered
				closable={false}
				bodyStyle={{ height: 360, padding: 0 }}
				width={700}
				visible={isVisible}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
				onOk={() => {
					onFinish();
					setTimeout(() => {
						closeModal();
					}, 200);
				}}
				onCancel={closeModal}>
				<Card
					title='ADD PRODUCT'
					headStyle={{
						textAlign: "center",
						fontSize: "200%",
						fontFamily: "monospace",
						fontWeight: 600,
						backgroundColor: "#1976D2",
						color: "#FFFFFF",
					}}>
					<Form name='validate_other' {...formItemLayout}>
						<Form.Item label='Title'>
							<Input
								placeholder='Enter the Title of the product ... '
								value={titleTemp}
								onChange={(e) => setTitleTemp(e.target.value)}></Input>
						</Form.Item>
						<Form.Item label='Description'>
							<Input.TextArea
								value={descTemp}
								placeholder="Enter the item's description ..."
								autoSize={{ minRows: 3, maxRows: 5 }}
								onChange={(e) => setDescTemp(e.target.value)}></Input.TextArea>
						</Form.Item>
						<Form.Item
							name='upload'
							label='Upload Image'
							extra='Size needs to be below 5MB'>
							<FileBase64
								onDone={(e) => {
									setImageTemp(e.base64);
									setImageAltTemp(e.name);
								}}></FileBase64>
						</Form.Item>
					</Form>
				</Card>
			</Modal>
		</>
	);
};

export default AddProduct;
