import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Center, Text, Heading, Box } from '@chakra-ui/react';
import ListCard from '../components/ListCard';

import styles from '../styles/Home.module.css';

const projectsToSet = [
	{
		title: 'Platzi Punks',
		description:
			'Interface creada con web3js y react, interactúa con un contrato inteligente que te permite mintear NFTs con adns únicos basados en tu wallet.',
		link: 'https://andiazo-platzi-punks-interface.vercel.app/',
	},
	{
		title: 'Web3 Libs',
		description:
			'Interfaz que permite usar ethers.js o web3.js para interactuar con un contrato',
		link: 'https://platzi-web3-libs-andiazo.vercel.app/',
	},
	{
		title: 'Solidity Eth Challenge',
		description:
			'Contrato inteligente que mintea pokemons con poderes y distintos datos',
		link: 'https://github.com/andiazo/solidity-eth-challenge/tree/main',
	},
	{
		title: 'Dynamic NFT',
		description: 'Contrato ERC721 con metadata actualizable.',
		link: 'https://github.com/andiazo/platziretoDNFT',
	},
];

const projects = () => {
	const [projects, setProjects] = useState();

	useEffect(() => {
		setProjects(projectsToSet);
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Proyectos | Andres Diaz</title>
				<meta name="description" content="Proyectos de Andres Diaz" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
			<main>
				<Box ml="9" mr="9">
					<Center>
						<Heading as="h1" size="lg" noOfLines={1}>
							Proyectos
						</Heading>
					</Center>
					<Center>
						<Text mt={3}>
							Esta es una selección de algunos de los proyectos que he hecho,
							puedes encontrar otros más en mi github. Hay más proyectos en los
							que estoy trabajando, una vez terminados aquí los mostraré
						</Text>
					</Center>
					<Center>
						{projects ? (
							<ListCard items={projects} />
						) : (
							<Text mt={5}>No hay proyectos, por el momento ...</Text>
						)}
					</Center>
				</Box>
			</main>
		</div>
	);
};

export default projects;
