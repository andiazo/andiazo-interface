import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Center, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import ListCard from '../components/ListCard';

import styles from '../styles/Home.module.css';

const projectsToSet = [
	{
		title: 'Platzi Punks',
		description: 'Platzi Punks',
		link: 'https://andiazo-platzi-punks-interface.vercel.app/',
	},
	{
		title: 'Web3 Libs',
		description:
			'Interfaz que permite usar ethers.js o web3.js para interactuar con un contrato',
		link: 'https://platzi-web3-libs-andiazo.vercel.app/',
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
				<Center>
					<Heading as="h1" size="lg" noOfLines={1}>
						Proyectos
					</Heading>
				</Center>
				<Center>
					{projects ? (
						<ListCard items={projects} />
					) : (
						<Text mt={5}>No hay proyectos, por el momento ...</Text>
					)}
				</Center>
			</main>
		</div>
	);
};

export default projects;
