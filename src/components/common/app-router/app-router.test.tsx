import React from "react";
import { render } from "@testing-library/react";
import AppRouter from "./app-router";

const dataTestId = "app-router";

const routes = [
	{
		path: "/",
		element: <div data-testid={dataTestId} />,
	},
];

const setup = () => {
	const component = render(<AppRouter routes={routes} />);
	const element = component.getByTestId(dataTestId);

	expect(element).toBeInTheDocument();

	return component;
};

describe("<AppRouter />", () => {
	it("should render", () => {
		const component = setup();

		expect(component).toBeTruthy();
	});
});
