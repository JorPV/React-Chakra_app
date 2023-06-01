import {
	Center,
	Flex,
	Image,
	Heading,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { Button } from "./UI/Button";
import { useState } from "react";

export const DrinkModal = ({ drink, clickFn }) => {
	const OverlayOne = () => (
		<ModalOverlay
			bg="blackAlpha.300"
			backdropFilter="blur(10px) hue-rotate(90deg)"
		/>
	);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = useState(<OverlayOne />);

	return (
		// <Center flexDir={"column"} gap={4}>
    <>
    <Button
				onClick={() => {
					setOverlay(<OverlayOne />);
					onOpen();
				}}
			>
				TEST
			</Button>

			<Heading fontSize={"2xl"} color="gray.600">
				Your choice: {drink.name}
			</Heading>
			<Image
				src={drink.imgUrl}
				w={100}
				h={100}
				borderRadius={"2xl"}
				alt={drink.alt}
			/>
			<Text>Your drink will be ready in a few minutes</Text>
			<Flex mt={4}>
				<Button onClick={onOpen} mr={4}>
					Confirm order
				</Button>
				<Button onClick={() => clickFn()} variant="ghost">
					Change selection
				</Button>
			</Flex>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent>
					<ModalHeader>Confirm your order</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>1x {drink.name}</Text>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="teal" mr={4}>
							Confirm
						</Button>
						<Button variant="ghost" onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
      </>
		// </Center>
	);
};
