import React, { useState, createElement } from "react";
import { Avatar, Comment, Rate, Tooltip } from "antd";
import moment from "moment";
import {
	DislikeFilled,
	DislikeOutlined,
	LikeFilled,
	LikeOutlined,
	UserOutlined,
} from "@ant-design/icons";

const Reviews = ({ comment, rating, author }) => {
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [action, setAction] = useState(null);

	const like = () => {
		setLikes(likes + 1);
		setDislikes(0);
		setAction("liked");
	};

	const dislike = () => {
		setLikes(0);
		setDislikes(1);
		setAction("disliked");
	};
	const actions = [
		<Rate
			disabled
			defaultValue={rating}
			style={{ fontSize: 18, margin: 0, padding: 0 }}
		/>,
	];
	return (
		<Comment
			actions={actions}
			author={<a>{author}</a>}
			avatar={<Avatar icon={<UserOutlined />} alt='Han Solo' />}
			content={<p>{comment}</p>}
			datetime={
				<Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
					<span>{moment().fromNow()}</span>
				</Tooltip>
			}
		/>
	);
};

export default Reviews;
