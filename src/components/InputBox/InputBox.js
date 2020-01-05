import React from 'react';
import "./InputBox.scss";

const InputBox = ({ sendMessage }) => {
	return (
		<div className="message-box">
			<div className="message-box-input" placeholder="Type your message here..." contentEditable="true"></div>
			<button className="message-box-button" onClick={(event) => sendMessage(event)}></button>
		</div>
	)
}

export default InputBox;