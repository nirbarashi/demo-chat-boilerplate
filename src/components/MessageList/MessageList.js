import React from 'react';
// import ScrollToBottom from 'react-scroll-to-bottom';
import "./MessageList.scss";
import Message from "../Message/Message";

const dummyMessage = { };
const dummyMessage2 = { isSelf: true };

const MessageList = ({ messages }) => {

	const renderMessages = () => {
		return messages.map((message, i) => <Message message={message} key={i}/>);
	}

	return (
		<main className="chat-messages">
			<ol className="chat-messages-list">
				<Message message={dummyMessage}/>
				<Message message={dummyMessage2}/>
				{renderMessages()}
			</ol>
		</main>
	)
}

export default MessageList;