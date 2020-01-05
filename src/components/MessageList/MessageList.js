import React from 'react';
import "./MessageList.scss";
import Message from "../Message/Message";

const MessageList = () => {
	return (
		<main className="chat-messages">
			<ol className="chat-messages-list">
				<Message />
				<Message isSelf={true}/>
			</ol>
		</main>
	)
}

export default MessageList;