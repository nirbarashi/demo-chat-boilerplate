import React, { useState } from 'react';
import "./InputBox.scss";
import UserInfo from "./UserInfo/UserInfo";

const InputBox = ({ userInfo, setUserInfo, sendMessage }) => {
	const [ message, setMessage ] = useState(''); // Current message text

	const handleSendMessage = () => {
		if (message) {
			sendMessage(message);
			setMessage(''); // Clear input field after sending a message
		}
	}

	return (

		<div className="message-box">
			<UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
			<input className="message-box-input" type="text" value={message} onKeyPress={event => event.key === 'Enter' ? handleSendMessage(message) : null} onChange={(event) => setMessage(event.target.value)} placeholder="Type your message here..." />
			<button className="message-box-button" onClick={(event) => handleSendMessage(message)}></button>
		</div>
	)
}

export default InputBox;