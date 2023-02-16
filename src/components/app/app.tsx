import React from "react";
import AppProvider from "../common/app-provider";
import AppRouter from "../common/app-router";
import routes from "../routes";

const App: React.FunctionComponent = () => {
	return (
		<AppProvider>
			<AppRouter routes={routes} />
		</AppProvider>
	);
};

export default App;
