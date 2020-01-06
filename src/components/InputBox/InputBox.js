import React from 'react';
import "./InputBox.scss";
import Avatar from "../Avatar/Avatar";

const InputBox = ({ userInfo: {username, avatar}, setUsername, message, setMessage, sendMessage }) => {
	return (
		<div className="message-box">
			<Avatar avatar={avatar} />
			<input className="" type="text" value={username} onChange={(event) => setUsername(event.target.value.trim())} placeholder="Enter your name here..." />
			<input className="message-box-input" type="text" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Type your message here..." />
			<button className="message-box-button" onClick={(event) => sendMessage(event)}></button>
		</div>
	)
}

export default InputBox;