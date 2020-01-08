import React, { useEffect } from 'react';
import "./UserInfo.scss";
import { USER_INFO_LS_KEY, AVATAR_NAMES } from "../../../utils/constants";
import storage from "../../../utils/storage";
import Avatar from "../../Avatar/Avatar";

// This component handles user data
const UserInfo = ({ userInfo, setUserInfo }) => {

	useEffect(() => { // Read user data from storage for the first time
		let storedUserInfo = storage.get(USER_INFO_LS_KEY);
		storedUserInfo && setUserInfo(storedUserInfo);
	}, []);

	useEffect(() => { // Keep user info persistent across browser refreshes
			storage.set(USER_INFO_LS_KEY, userInfo);
	}, [userInfo]);

	const handleUsernameChange = (username) => {
		let avatar = generateAvatar(username),
			updatedUserInfo = { avatar, username };
		setUserInfo(updatedUserInfo);
	}

	const generateAvatar = (username) => {
		let lotteryNumber = [...username].reduce((acc, char) => acc += char.charCodeAt(), 0) % 5; // Get's a random number between 0 - 4 by username
		return AVATAR_NAMES[lotteryNumber];
	}

	return (
		<div className="message-box-user-info">
			<Avatar avatar={userInfo.avatar} />
			<input className="message-box-input user-info-username" type="text" value={userInfo.username} onChange={(event) => handleUsernameChange(event.target.value.trim())} placeholder="Enter your name here..." />
		</div>
	)
}

export default UserInfo;