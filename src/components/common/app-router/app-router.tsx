import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Props } from "./app-router.types";

const AppRouter: React.FunctionComponent<Props> = ({ routes }) => {
	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
};

export default AppRouter;
