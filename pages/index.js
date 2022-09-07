import { SimpleGrid, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home | Andres Diaz</title>
				<meta name="description" content="Andres Diaz Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
			<main className={styles.main}>
			
				<Heading as="h1" size="lg" noOfLines={1}>
					Andres Díaz
				</Heading>

				<SimpleGrid columns={{ sm: 2, md: 3 }} spacing="40px">
					<Card title="Proyectos" description="" />
					<Card title="Blog" description=""/>
					<Card title="Sobre mí" description=""/>
				</SimpleGrid>
			</main>
		</div>
	);
}
