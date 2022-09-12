import { Image, Flex, Button, HStack, chakra } from '@chakra-ui/react';
import Logo from '../public/favicon.ico';
import Link from 'next/link';
import React from 'react';
import MobileDrawer from './MobileDrawer';

const CTA = 'Contactáme';

const data = [
	{ label: 'Inicio', href: '' },
	{ label: 'Proyectos', href: 'projects'},
	{ label: 'Blog', href: 'blog' },
	{ label: 'Sobre mí', href: 'about' },
];

export default function Header() {
	return (
		<chakra.header id="header" sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', bgColor:'white', borderColor:'gray.300'}}>
			<Flex w="100%" px="6" py="5" align="center" justify="space-between"  >
				<HStack as="nav" spacing="5"  display={{ base: "none", md: "flex" }}>
					{data.map((item, i) => (
						<Link key={i} href={`/${item.href}`}>
							<Button
								borderRadius={0}
								variant="nav"
								_hover={{
									background: 'black',
									color: 'white',
									cursor: 'pointer',
								}}
							>
								{' '}
								{item.label}{' '}
							</Button>
						</Link>
					))}
				</HStack>
				<HStack>
					<MobileDrawer />
				</HStack>
			</Flex>
		</chakra.header>
	);
}
