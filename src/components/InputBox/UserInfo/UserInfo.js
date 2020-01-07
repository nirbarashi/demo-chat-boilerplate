import React, { useEffect } from 'react';
import "./UserInfo.scss";
import { USER_INFO_LS_KEY } from "../../../utils/constants";
import storage from "../../../utils/storage";
import Avatar from "../../Avatar/Avatar";

const avatarsNames = ['snorlax', 'psyduck', 'pikachu', 'jigglypuff', 'bullbasaur'];

// This component handles user data
const UserInfo = ({ userInfo, setUserInfo }) => {

	useEffect(() => { // Read user data from storage for the first time
		let storedUserInfo = storage.get(USER_INFO_LS_KEY);
		storedUserInfo && setUserInfo(storedUserInfo);
	}, []);

	useEffect(() => { // Keep user info persistent across browser refreshes
		if (userInfo.username && userInfo.avatar) { // No need to save if empty (first load)
			storage.set(USER_INFO_LS_KEY, userInfo);
		}
	}, [userInfo]);

	const handleUsernameChange = (username) => {
		let avatar = generateAvatar(username),
			updatedUserInfo = { avatar, username };
		setUserInfo(updatedUserInfo);
	}

	const generateAvatar = (username) => {
		let lotteryNumber = Math.floor(Math.random() * Math.floor(5)); // Get's a random number between 0 - 4
		return avatarsNames[lotteryNumber];
	}

	return (
		<div className="message-box-user-info">
			<Avatar avatar={userInfo.avatar} />
			<input className="" type="text" value={userInfo.username} onChange={(event) => handleUsernameChange(event.target.value.trim())} placeholder="Enter your name here..." />
		</div>
	)
}

export default UserInfo;