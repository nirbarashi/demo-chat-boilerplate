import React, { useEffect } from 'react';
import io from "socket.io-client";
import Header from "../Header/Header"


const Chat = () => {
	const SOCKET_URL 	= 'https://spotim-demo-chat-server.herokuapp.com',
		cl 				= console.log;

	useEffect(() => {
		let socket = io(SOCKET_URL);
		socket.on("connect", () => {
			// socket.emit('spotim/chat', { text: 'Hello World !'}, (data) => cl(data));
			cl("connected to chat server!");
		});
		socket.on("disconnect", () => cl("disconnected from chat server!"));
	});

	return (
		<div className="chat">
			<Header/>
			<h1>Nir's Chat App2</h1>
		</div>
	)
}

export default Chat;