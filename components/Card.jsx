import React from 'react';
import { Box, IconButton, Heading, Text } from '@chakra-ui/react';
import {  ExternalLinkIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Card = (props) => {
	return (
		<Box
			p={4}
			m={2}
			borderWidth="1px"
			borderColor={'black'}
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
				<a href={props.link} target='_external'><IconButton bg={'transparent'} aria-label='Ver mas' icon={<ArrowForwardIcon />} /></a>
				
			) : (
				''
			)}
		</Box>
	);
};

export default Card;
