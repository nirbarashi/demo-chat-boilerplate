import React, { useEffect, useState } from 'react';
import io from "socket.io-client";
import "./Chat.scss";
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import InputBox from "../InputBox/InputBox"

const cl = console.log;
let socket;

const Chat = () => {
	const SOCKET_ENDPOINT = 'https://spotim-demo-chat-server.herokuapp.com',
		[ messages, setMessages ] = useState([]);

	useEffect(() => {
		socket = io(SOCKET_ENDPOINT);
		socket.on("connect", () => {
			// socket.emit('spotim/chat', { text: 'Hello World !'}, (data) => cl(data));
			cl("connected to chat server!");
		});
		socket.on("disconnect", () => cl("disconnected from chat server!"));
	});

	useEffect(() => {
		socket.on('spotim/chat', (message) => {
			setMessages([...messages, message ]);
		});
	}, [messages]);

	const sendMessage = (e) => {
		cl('send message', e);
	}

	return (
		<div className="chat">
			<Header/>
			<MessageList messages={messages}/>
			<InputBox sendMessage={sendMessage}/>
		</div>
	)
}

export default Chat;