import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Center, Text, SimpleGrid, Heading } from '@chakra-ui/react';
import Card from '../components/Card';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

const Blog = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Blog | Andres Diaz</title>
				<meta name="description" content="Andres Diaz Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
			<main>
				<Center>
					<Heading as="h2">Muy pronto ...</Heading>
				</Center>
				<Center>
					<Text mt={5}>
						Por el momento puedes ver mis proyectos o saber más sobre mí
					</Text>
				</Center>
				<Center>
					<SimpleGrid mt={30} columns={{ sm: 2, md: 2 }} spacing="40px">
						<Link href={'projects'}>
							<a>
								<Card
									title="Proyectos"
									description="Mira los proyectos que hecho"
								/>
							</a>
						</Link>
						<Link href={'about'}>
							<a>
								<Card title="Sobre mí" description="Conóceme un poco más" />
							</a>
						</Link>
					</SimpleGrid>
				</Center>
			</main>
		</div>
	);
};

export default Blog;
