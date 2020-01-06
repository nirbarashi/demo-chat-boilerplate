import React, { useEffect, useState } from 'react';
import io from "socket.io-client";
import { cl, SOCKET_ENDPOINT, SEND_MESSAGE_EVENT } from "../../utils/constants";
import "./Chat.scss";
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import InputBox from "../InputBox/InputBox"

let socket;

const Chat = () => {
	const
		[ messages, setMessages ] = useState([{ username: 'Nir', text: 'Welcome!', avatar: 'pikachu'}, { username: 'Alon22', text: 'Thank you sir', avatar: 'snorlax'}]),
		[ message, setMessage ] = useState(''), // Current message text
		[ userInfo, setUserInfo ] = useState({ username: 'Nir', avatar: 'pikachu' }); // Current user

	useEffect(() => {
		socket = io(SOCKET_ENDPOINT);
		socket.on("connect", () => {
			// socket.emit('spotim/chat', { text: 'Hello World !'}, (data) => cl(data));
			cl("connected to chat server!");
		});
		socket.on("disconnect", () => cl("disconnected from chat server!"));
	}, []);

	useEffect(() => {
		socket.on(SEND_MESSAGE_EVENT, (message) => {
			setMessages([...messages, message ]);
		});
	}, [messages]);

	const sendMessage = () => {
		// cl('send message', event);
		let { username, avatar } = userInfo;

		if (username && avatar && message) {
			socket.emit(SEND_MESSAGE_EVENT, {...userInfo, text: message}); // Send message to socket with current state whom includes { username, avatar, text }
			setMessage(''); // Clear input field after sending a message
		}
	}

	return (
		<div className="chat">
			<Header/>
			<MessageList messages={messages} username={userInfo.username}/>
			<InputBox userInfo={userInfo} setUserInfo={setUserInfo} message={message} setMessage={setMessage} sendMessage={sendMessage}/>
		</div>
	)
}

export default Chat;