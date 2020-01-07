import React, { useEffect, createRef } from 'react';
import "./MessageList.scss";
import Message from "./Message/Message";

const MessageList = ({ messages, username }) => {

	const messageListRef = createRef();

	const renderMessages = () => {
		return messages.map((message, i) => <Message message={message} username={username} key={i}/>);
	}

	useEffect(() => {
		messageListRef.current.scrollTo({ top: messageListRef.current.scrollHeight, behavior: 'smooth' }); // Scroll to bottom if needed upon new messages
	}, [messages]);

	return (
		<main className="chat-messages" ref={messageListRef}>
			<ol className="chat-messages-list">
				{renderMessages()}
			</ol>
		</main>
	)
}

export default MessageList;