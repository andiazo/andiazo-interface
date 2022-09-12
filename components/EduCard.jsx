import React from 'react';
import { Box, IconButton, Heading, Text } from '@chakra-ui/react';
import {  ExternalLinkIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const EduCard = (props) => {
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
			<Heading as="h3" size="md" noOfLines={1}>
				{props.title}
			</Heading>
            <Heading as="h2" size="sm">
                {props.institution} {props.startDate} - {props.endDate}
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

export default EduCard;
