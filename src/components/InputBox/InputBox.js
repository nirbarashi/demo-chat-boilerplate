import React from 'react';
import "./InputBox.scss";

const InputBox = ({ sendMessage }) => {
	return (
		<div className="message-box">
			<div className="message-box-input" contentEditable="true"></div>
			<button className="message-box-button" onClick={sendMessage}></button>
		</div>
	)
}

export default InputBox;