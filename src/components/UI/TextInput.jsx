import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
	return (
		<Input
			variant="filled"
			size="lg"
			mt={6}
			p={3}
			focusBorderColor="pink.400"
			placeholder="What would you like to drink?"
			_placeholder={{ opacity: 0.6, color: "inherit" }}
			onChange={changeFn}
			{...props}
		></Input>
	);
};
