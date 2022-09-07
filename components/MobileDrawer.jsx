import {
	useDisclosure,
	Flex,
	Box,
	Button,
	VStack,
	Icon,
	HStack,
	Link as ChakraLink,
} from '@chakra-ui/react';
import Drawer from './Drawer';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import React from 'react';

const data = [
	{ label: 'Inicio', href: '' },
	{ label: 'Proyectos', href: '' },
	{ label: 'Blog', href: '' },
	{ label: 'Sobre mí', href: '' },
];

export default function MobileDrawer() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<Flex display={{ base: 'flex', md: 'none' }}>
			<Button ref={btnRef} onClick={onOpen}>
				<HamburgerIcon w={6} h={6} />
			</Button>

			<Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
				<VStack alignItems="left">
					{data.map((item, i) => (
						<Link key={i} href={`/${item.href}`}>
							<Button variant="text"> {item.label} </Button>
						</Link>
					))}
				</VStack>
			</Drawer>
		</Flex>
	);
}
