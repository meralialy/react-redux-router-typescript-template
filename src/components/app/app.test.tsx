import React from "react";
import { render } from "@testing-library/react";
import App from "./app";

const setup = () => {
	const component = render(<App />);

	return component;
};

describe("<App />", () => {
	it("should render", () => {
		const component = setup();

		expect(component).toBeTruthy();
	});
});
