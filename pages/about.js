import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Center, Heading, Text } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

const about = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sobre mi | Andres Diaz</title>
				<meta name="description" content="Acerca de Andres Diaz" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
			<main>
				<Center mt={8}>
					<Heading as="h1" size="lg" noOfLines={1}>
						Hola, soy Andrés Díaz
					</Heading>
				</Center>
				<Center mt={8}>
					<Text>
						Actualmente soy desarrollador de software en ITRM y estudiante de
						ingeniería de sistemas y computación de la Universidad Nacional de
						Colombia
					</Text>
				</Center>
			</main>
		</div>
	);
};

export default about;
