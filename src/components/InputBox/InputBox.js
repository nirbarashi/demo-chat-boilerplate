import React, { useState } from 'react';
import "./InputBox.scss";
import Avatar from "../Avatar/Avatar";

const InputBox = ({ userInfo: {username, avatar}, setUsername, sendMessage }) => {
	const [ message, setMessage ] = useState(''); // Current message text

	const handleSendMessage = () => {
		sendMessage(message);
		setMessage(''); // Clear input field after sending a message
	}

	return (

		<div className="message-box">
			<Avatar avatar={avatar} />
			<input className="" type="text" value={username} onChange={(event) => setUsername(event.target.value.trim())} placeholder="Enter your name here..." />
			<input className="message-box-input" type="text" value={message} onKeyPress={event => event.key === 'Enter' ? handleSendMessage(message) : null} onChange={(event) => setMessage(event.target.value)} placeholder="Type your message here..." />
			<button className="message-box-button" onClick={(event) => handleSendMessage(message)}></button>
		</div>
	)
}

export default InputBox;