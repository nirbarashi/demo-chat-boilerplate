import React, { useEffect, useState } from 'react';
import io from "socket.io-client";
import { cl, SOCKET_ENDPOINT, SEND_MESSAGE_EVENT, USER_INFO_LS_KEY, CONNECT_EVENT, DISCONNECT_EVENT } from "../../utils/constants";
import storage from "../../utils/storage";
import "./Chat.scss";
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import InputBox from "../InputBox/InputBox"

let socket;

const Chat = () => {
	const
		[ messages, setMessages ] = useState([{ username: 'Nir', text: 'Welcome!', avatar: 'pikachu'}, { username: 'Alon22', text: 'Thank you sir', avatar: 'snorlax'}]),
		[ userInfo, setUserInfo ] = useState({}); // Current user

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

	useEffect(() => { // Read user data from storage for the first time
		let storedUserInfo = storage.get(USER_INFO_LS_KEY);
		storedUserInfo && setUserInfo(storedUserInfo);
	}, []);

	useEffect(() => { // Keep user info persistent across browser refreshes
		if (userInfo.username && userInfo.avatar) { // No need to save if empty (first load)
			storage.set(USER_INFO_LS_KEY, userInfo);
		}
	}, [userInfo]);

	const sendMessage = (text) => {
		// event.preventDefault();
		// cl('send message', event);
		let { username, avatar } = userInfo;

		if (username && avatar && text) {
			socket.emit(SEND_MESSAGE_EVENT, {...userInfo, text}); // Send message to socket with current state whom includes { username, avatar, text }
		}
	}

	const updateUserInfoByUsername = (username) => {
		// generate avatar
		let avatar = 'pikachu',
			updatedUserInfo = { avatar, username };
		setUserInfo(updatedUserInfo);
	}

	return (
		<div className="chat">
			<Header/>
			<MessageList messages={messages} username={userInfo.username}/>
			<InputBox userInfo={userInfo} setUsername={updateUserInfoByUsername} sendMessage={sendMessage}/>
		</div>
	)
}

export default Chat;