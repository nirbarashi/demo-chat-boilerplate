import React from 'react';
import "./Message.scss";
import Avatar from "../../Avatar/Avatar";

const Message = ({ message, username }) => {
	let isSentByCurrentUser = message.username === username;

	return (
		<li className={`chat-message ${isSentByCurrentUser ? 'is-self': ''}`}>
			<header className="profile">
				<Avatar avatar={message.avatar} />
				<span className="profile-name">{username}</span>
			</header>
			<p className="chat-message-content">{message.text}</p>
		</li>
	)
}

export default Message;