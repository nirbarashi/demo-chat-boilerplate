import React from 'react';
// import ScrollToBottom from 'react-scroll-to-bottom';
import "./MessageList.scss";
import Message from "./Message/Message";

const MessageList = ({ messages, username }) => {

	const renderMessages = () => {
		return messages.map((message, i) => <Message message={message} username={username} key={i}/>);
	}

	return (
		<main className="chat-messages">
			<ol className="chat-messages-list">
				{renderMessages()}
			</ol>
		</main>
	)
}

export default MessageList;