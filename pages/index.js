import { SimpleGrid, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/Card';
import Header from '../components/Header';
import Hero from '../components/Hero';
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
				<Hero />
				<SimpleGrid mt={30} columns={{ sm: 2, md: 3 }} spacing="40px">
					<Link href={'projects'}>
						<a>
							<Card
								title="Proyectos"
								description="Mira los proyectos que hecho"
							/>
						</a>
					</Link>
					<Link href={'blog'}>
						<a>
							<Card title="Blog" description="A veces escribo!" />
						</a>
					</Link>
					<Link href={'about'}>
						<a>
							<Card title="Sobre mí" description="Conóceme un poco más" />
						</a>
					</Link>
				</SimpleGrid>
			</main>
		</div>
	);
}
