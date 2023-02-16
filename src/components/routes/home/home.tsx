import React from "react";
import { useAppSelector } from "../../../redux";
import { catApi } from "../../../redux/apis";

const Home: React.FunctionComponent = () => {
	const { fact } = useAppSelector((state) => state.cat);

	catApi.useGetFactQuery();

	return <div data-testid="home">{fact}</div>;
};

export default Home;
