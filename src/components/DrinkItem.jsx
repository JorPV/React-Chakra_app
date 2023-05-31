import { Center, Button, Image, Text, WrapItem } from "@chakra-ui/react";

export const DrinkItem = ({ drink, clickFn }) => {
	return (
		// <WrapItem>
			<Button
			variant="outline"
			bg="white"
			_hover={{ bg: "#fff", borderColor: "darkgoldenrod" }}
			mr={12}
			mt={20}
			w={200}
			h={70}
			onClick={() => clickFn(drink)}
		>
			{/* <Center gap={8} cursor={"pointer"} onClick={() => clickFn(drink)}> */}
				<Image
					src={drink.imgUrl}
					width={12}
					height={12}
					mr={3}
					alt={drink.alt}
				/>
				<Text>{drink.name}</Text>
			{/* </Center> */}
			</Button>
		// </WrapItem>
	);
};
