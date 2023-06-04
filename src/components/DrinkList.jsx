import { DrinkItem } from "./DrinkItem";
import { Flex } from "@chakra-ui/react";

export const DrinkList = ({ drinks, clickFn }) => {
	return (
		<Flex w={['full', '100%']} flexDir={['column', 'row']} flexWrap="wrap" justify="center" alignItems="center">
			{drinks.map((drink) => (
				<DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
			))}
		</Flex>
	);
};
