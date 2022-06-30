import { Avatar, Button, Comment, Form, Input, List, Rate, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import React, { useState } from "react";
const { TextArea } = Input;

const Editor = ({
	onChangeTextArea,
	onChangeInput,
	onSubmit,
	submitting,
	value,
	author,
	rating,
	onChangeRating,
}) => (
	<>
		<Form.Item>
			<Input
				value={author}
				onChange={onChangeInput}
				placeholder='Enter Name ...'></Input>
		</Form.Item>
		<Form.Item>
			<TextArea
				rows={4}
				onChange={onChangeTextArea}
				value={value}
				placeholder='Enter your comment ...'
			/>
		</Form.Item>
		<Form.Item>
			<Rate allowHalf value={rating} onChange={onChangeRating}></Rate>
			<Button
				style={{ marginLeft: 400 }}
				htmlType='submit'
				loading={submitting}
				onClick={onSubmit}
				type='primary'>
				Add Comment
			</Button>
		</Form.Item>
	</>
);

const AddReview = ({
	activeProduct,
	setActiveProduct,
	visible,
	setVisible,
	products,
	setProducts,
}) => {
	const [submitting, setSubmitting] = useState(false);
	const [author, setAuthor] = useState("");
	const [value, setValue] = useState("");
	const [rating, setRating] = useState(0);

	const handleSubmit = () => {
		if (!value) return;
		setSubmitting(true);
		setTimeout(() => {
			activeProductHandler();
			setSubmitting(false);
			setValue("");
			setAuthor("");
			setRating(0);
			setVisible(!visible);
		}, 700);
		updateProductHandler();
	};

	const activeProductHandler = () => {
		if (activeProduct[0].reviews.length === 0) {
			setActiveProduct((prevState) => {
				return [
					{
						...prevState[0],
						reviews: [
							{
								id: "0",
								author: author,
								comment: value,
								rating: rating,
							},
						],
					},
				];
			});
		} else {
			const newState = activeProduct[0].reviews.concat({
				id: (parseInt(activeProduct[0].reviews.at(-1).id) + 1).toString(),
				author: author,
				comment: value,
				rating: rating,
			});
			setActiveProduct((prevState) => {
				return [
					{
						...prevState[0],
						reviews: newState,
					},
				];
			});
		}
	};

	const updateProductHandler = () => {
		setProducts((prevState) => {
			const newState = prevState.map((obj) => {
				if (parseInt(obj.id) === parseInt(activeProduct[0].id)) {
					return activeProduct[0];
				}
				return obj;
			});
			return newState;
		});
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleAuthorChange = (e) => {
		setAuthor(e.target.value);
	};
	const handleRatingChange = (e) => {
		setRating(e);
	};

	return (
		<>
			<Spin spinning={submitting}>
				<Comment
					style={{ width: 700 }}
					avatar={<Avatar icon={<UserOutlined />} alt='Han Solo' />}
					content={
						<Editor
							onChangeTextArea={handleChange}
							onChangeInput={handleAuthorChange}
							onSubmit={handleSubmit}
							submitting={submitting}
							value={value}
							author={author}
							rating={rating}
							onChangeRating={handleRatingChange}
						/>
					}
				/>
			</Spin>
		</>
	);
};

export default AddReview;
