// import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from "./components/DrinkSearch";
import { useState } from "react";
import { Center, Heading, Text } from "@chakra-ui/react";
import { DrinkModal } from "./components/DrinkSelectModal";

export const App = () => {
	const greetings = (
		<Heading
			display="flex"
			justify="center"
			mb={"4rem"}
			fontSize="7xl"
			color="purple.700"
		>
			Welcome to my first<i>React</i> app!
		</Heading>
	);
	// const userDrink = undefined;
	const [userDrink, setUserDrink] = useState();
	const date = new Date();
	const weekday = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = weekday[date.getDay()];

	return (
		<Center h="100vh" flexDir="column">
			{userDrink ? (
				// <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
				<DrinkModal drink={userDrink} clickFn={setUserDrink} />
			) : (
				<>
					<Heading mt={5}>{greetings}</Heading>
					<div className="date-wrapper">
						<Text fontWeight="600" fontSize="1.5rem" mb={20}>
							{" "}
							Today is {day}, {date.toLocaleDateString()}{" "}
						</Text>
					</div>
					<DrinkSearch clickFn={setUserDrink} />
				</>
			)}
		</Center>
	);
};
