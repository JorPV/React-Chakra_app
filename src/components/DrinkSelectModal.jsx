import {
    Button as CButton,
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
		<Center flexDir={'column'} gap={4}>
			<Heading fontSize="2rem" mb={5} color="gray.600">
				Your choice: {drink.name}
			</Heading>
			<Image
				src={drink.imgUrl}
				w={100}
				h={100}
				borderRadius={'2xl'}
				alt={drink.alt}
			/>
			{/* <Text fontSize="1.5rem" mt="5">Your drink will be ready in a few minutes</Text> */}
			<Flex mt={4}>
				    <Button onClick={onOpen} mr={4} fontSize="20">
				    	Confirm order
				    </Button>
				    <Button onClick={() => clickFn()} fontSize="20">
				    	Change selection
				    </Button>
			</Flex>

			<Modal size={['full', 'sm']} isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent>
					<ModalHeader>Confirm your order</ModalHeader>
					<ModalCloseButton />
					<ModalBody
                        height={['full', 'fit-content']}
                        display="flex"
                        justifyContent="center"
                        alignItems={['center']}
                        flexDir="column"
                    >
						<Text fontSize="1.5em" textAlign={['left', 'center']} mb={3}>1x {drink.name}</Text>
                        <Image
				            src={drink.imgUrl}
				            w={100}
				            h={100}
				            borderRadius={'2xl'}
				            alt={drink.alt}
			            />
					</ModalBody >
					<ModalFooter justifyContent="center" alignItems={['center']} gap={10}>
						    <CButton colorScheme="teal" fontSize="1.2em" variant="ghost" onClick={onClose}>
						    	Confirm
						    </CButton>
						    <CButton colorScheme="teal" fontSize="1.2em"variant="ghost" onClick={onClose}>
						    	Cancel
						    </CButton>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Center>
	);
};
