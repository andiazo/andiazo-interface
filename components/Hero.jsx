import React from 'react';
import { Box, Heading, SimpleGrid, Center } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
	return (
		<SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={10}>
			<Center>
				<Box>
					<Heading as="h1" size="lg" noOfLines={1}>
						Hola! soy Andrés Díaz
					</Heading>
					<Heading as="h1" size="md">
						Desarrollador de{' '}
						<TypeAnimation
							// Same String at the start will only be typed once, initially
							sequence={[
								'Software',
								1000,
								'IA',
								1000,
								'Blockchain',
								1000,
								'Web3',
								1000,
								'Soluciones',
								1000,
								'Impacto',
								1000,
								'Amistades',
								1000,
							]}
							speed={10} // Custom Speed from 1-99 - Default Speed: 40
							style={{ color: 'blue' }}
							wrapper="span" // Animation will be rendered as a <span>
							repeat={Infinity} // Repeat this Animation Sequence infinitely
						/>
					</Heading>
				</Box>
			</Center>
			<Center>
				<Box w="200px" h={'200px'} bg={'gray.800'}></Box>
			</Center>
		</SimpleGrid>
	);
};

export default Hero;
