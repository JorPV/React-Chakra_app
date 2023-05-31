import { DrinkItem } from "./DrinkItem";
import { Flex } from "@chakra-ui/react";

export const DrinkList = ({ drinks, clickFn }) => {
	return (
		<Flex w="100%" flexWrap="wrap" justify={"start"}>
			{drinks.map((drink) => (
				<DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
			))}
		</Flex>
	);
};
