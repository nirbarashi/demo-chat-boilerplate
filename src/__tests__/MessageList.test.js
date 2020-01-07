import React from "react";
import { create } from "react-test-renderer";
import MessageList from "../components/MessageList/MessageList";


describe("MessageList component", () => {
	test("Matches the snapshot", () => {
		const ml = create(<MessageList messages={[{ username: 'Nir', text: 'Welcome friend, feel free to send messages ', avatar: 'pikachu'}, { username: 'Alon22', text: 'Thank you !', avatar: 'snorlax'}]} username="Nir" />);
		expect(ml.toJSON()).toMatchSnapshot();
	});
});