import React from 'react';
import { create } from 'react-test-renderer';
import App from '../components/App/App';


describe("App", () => {
	test("Matches the snapshot", () => {
		const app = create(<App />);
		expect(app.toJSON()).toMatchSnapshot();
	});
});