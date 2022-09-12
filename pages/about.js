import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { SocialIcon } from 'react-social-icons';
import { Box, Center, Heading, Text, SimpleGrid, Link } from '@chakra-ui/react';
import Card from '../components/Card';

import styles from '../styles/Home.module.css';
import EduCard from '../components/EduCard';

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
				<Center mt={8} pl={8} pr={8}>
					<Box>
						<Text>
							Soy estudiante de ingeniería de sistemas y computación de la
							Universidad Nacional de Colombia, y actualmente trabajo como
							desarrollador de software en ITRM, desarrollando productos en web3
							e inteligencia artificial.
							<br />
							<br />
							Soy de Colombia, hablo español, un poco de italiano, y estoy
							mejorando mi inglés.
						</Text>
					</Box>
				</Center>
				<Center mt={8}>
					<Heading as="h2" size="md" noOfLines={1}>
						Stack
					</Heading>
				</Center>
				<Center mt={8} pl={8} pr={8}>
					<SimpleGrid columns={{ sm: 2, md: 3 }} spacing="20px">
						<Card title="Javascript" />
						<Card title="Python" />
						<Card title="Trabajo en equipo" />
						<Card title="Comunicación asertiva" />
						<Card title="Visión de negocio" />
					</SimpleGrid>
				</Center>
				<Center mt={8}>
					<Heading as="h2" size="md" noOfLines={1}>
						Educación
					</Heading>
				</Center>
				<Center mt={8}>
					<Box maxW={'lg'}>
						<EduCard
							title="Ingeniería de sistemas y computación"
							institution="Universidad Nacional de Colombia"
							startDate="2018"
							endDate="2023"
							description=""
						/>
						<EduCard
							title="Ethereum Developer Program"
							institution="Platzi"
							startDate="2022"
							endDate="2022"
							description=""
						/>
						<EduCard
							title="DS4A / Colombia"
							institution="MinTIC & Correlation one"
							startDate="Junio 2021"
							endDate="Septiembre 2021"
							description=""
						/>
					</Box>
				</Center>
				<Center mt={8}>
					<Heading as="h2" size="md" noOfLines={1}>
						Me puedes contactar por...
					</Heading>
				</Center>
				<section id="#Contact">
					<Center mt={6}>
						<Box m={3}>
							<SocialIcon url="https://github.com/andiazo" />
						</Box>
						<Box m={3}>
							<SocialIcon url="https://twitter.com/__andiazo__" />
						</Box>
						<Box m={3}>
							<SocialIcon url="https://www.linkedin.com/in/andiazo/" />
						</Box>
						<Box m={3}>
							<SocialIcon url="mailto:andiazo@unal.edu.co" />
						</Box>
					</Center>
				</section>
			</main>
		</div>
	);
};

export default about;
