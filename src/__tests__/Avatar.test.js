import React from "react";
import { create } from "react-test-renderer";
import Avatar from "../components/Avatar/Avatar";


describe("Avatar component", () => {
	test("Matches the snapshot", () => {
		const avatar = create(<Avatar avatar="psyduck" />);
		expect(avatar.toJSON()).toMatchSnapshot();
	});

	test("Matches the snapshot2", () => {
		const avatar = create(<Avatar avatar="snorlax" />);
		expect(avatar.toJSON()).toMatchSnapshot();
	});
});