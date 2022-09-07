
import React from 'react'
import Head from 'next/head';
import Header from '../components/Header';
import { Center, Text } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

const blog = () => {
  return (
    <div className={styles.container}>
			<Head>
				<title>Home | Andres Diaz</title>
				<meta name="description" content="Andres Diaz Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
      <main>
        <Center>
          <Text>
            Muy pronto ...
          </Text>
        </Center>
      </main>
      </div>
  )
}

export default blog