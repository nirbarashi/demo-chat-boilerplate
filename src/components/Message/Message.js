import React from 'react';
import "./Message.scss";

const Message = ({ isSelf }) => {
	return (
		<li className={`chat-message ${isSelf ? 'is-self': ''}`}>
			<header className="profile">
				<img className="profile-image" src="" alt="" />
				<span className="profile-name">Eliezer Ben Yehuda</span>
			</header>
			<p className="chat-message-content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis fugiat eos sit eius. Quo nulla qui corrupti libero dolore voluptas dignissimos aliquam optio iure, omnis eaque magnam consequuntur placeat?
			</p>
		</li>
	)
}

export default Message;