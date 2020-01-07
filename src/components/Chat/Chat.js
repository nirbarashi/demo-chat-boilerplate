import React, { useEffect, useState } from 'react';
import io from "socket.io-client";
import { cl, SOCKET_ENDPOINT, SEND_MESSAGE_EVENT, CONNECT_EVENT, DISCONNECT_EVENT } from "../../utils/constants";
import "./Chat.scss";
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import InputBox from "../InputBox/InputBox"

let socket;

const Chat = () => {
	const
		[ messages, setMessages ] = useState([{ username: 'Nir', text: 'Welcome friend, feel free to send messages ', avatar: 'pikachu'}, { username: 'Alon22', text: 'Thank you !', avatar: 'snorlax'}]),
		[ userInfo, setUserInfo ] = useState({ username: '', avatar: 'pikachu' }); // Current user

	useEffect(() => {
		socket = io(SOCKET_ENDPOINT);

		// Socket handlers
		socket.on(CONNECT_EVENT, () => cl("connected to chat server!"));
		socket.on(DISCONNECT_EVENT, () => cl("disconnected from chat server!"));
		socket.on(SEND_MESSAGE_EVENT, (message) => setMessages(prevMessages => [...prevMessages, message]));

		return () => {
			socket.emit(DISCONNECT_EVENT);
			socket.off();
		}
	}, []);

	const sendMessage = (text) => {
		let { username, avatar } = userInfo;

		if (username && avatar && text) {
			socket.emit(SEND_MESSAGE_EVENT, {...userInfo, text}); // Send message to socket with current state whom includes { username, avatar, text }
		}
	}

	return (
		<div className="chat">
			<Header/>
			<MessageList messages={messages} username={userInfo.username}/>
			<InputBox userInfo={userInfo} setUserInfo={setUserInfo} sendMessage={sendMessage}/>
		</div>
	)
}

export default Chat;