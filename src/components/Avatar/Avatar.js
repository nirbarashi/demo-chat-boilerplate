import React from 'react';
import "./Avatar.scss";
import avatarsMap from "./avatarsMap";

const Avatar = ({ avatar }) => {
	return (
		<img className="profile-image" src={avatarsMap[avatar]} alt="" />
	)
}

export default Avatar;