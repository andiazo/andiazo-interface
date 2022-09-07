import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Card from './Card';

const ListCard = ({items}) => {
    console.log(items)
	return (
		<SimpleGrid mt={30} columns={{ sm: 2, md: 3 }} spacing="40px">
            {items.map((item, index) => {
                return <Card key={index} title={item.title} description={item.description} link={item.link}/>
            })}
		</SimpleGrid>
	);
};

export default ListCard;
