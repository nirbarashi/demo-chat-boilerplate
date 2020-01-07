import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import InputBox from "../components/InputBox/InputBox";

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});
let userInfo = { username: 'Nir', avatar: 'pikachu' };
const sendMessage = () => console.log('message sent'),
	setUserInfo = (data) => userInfo = data;

describe('Input Box Component', () => {
	it("render case", () => {
		act(() => {
			render(<InputBox userInfo={userInfo} setUserInfo={setUserInfo} sendMessage={sendMessage}/>, container);
		});
		const [ usernameEl, messageEl ] = container.getElementsByTagName("input");
		expect(usernameEl.textContent).toBe("Nir");
		expect(messageEl.textContent).toBe("");
	});
});
