import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Card = (props) => {
	return (
		<Box
			p={4}
			m={4}
			borderWidth="1px"
            width={'full'}
			_hover={{
				background: 'black',
				color: 'white',
                cursor: 'pointer'
			}}
		>
			<Heading as="h2" size="md" noOfLines={1}>
				{props.title}
			</Heading>
            <Text>
                {props.description}
            </Text>
		</Box>
	);
};

export default Card;
