import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Card = (props) => {
	console.log('> Card:', props);
	return (
		<Box
			p={4}
			m={4}
			borderWidth="1px"
			width={'full'}
			_hover={{
				background: 'black',
				color: 'white',
				cursor: 'pointer',
			}}
		>
			<Heading as="h2" size="md" noOfLines={1}>
				{props.title}
			</Heading>
			<Text>{props.description}</Text>
			{props.link ? (
					<a href={props.link} target='_external'>Ver más</a>
			) : (
				''
			)}
		</Box>
	);
};

export default Card;
