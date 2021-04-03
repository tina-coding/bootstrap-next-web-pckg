import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
const Home: React.FC = () => (
	<div className={styles.container}>
		<Head>
			<title>Our Sample App</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.main}>You are a rockstar! Never forget it!</main>

		<footer className={styles.footer}>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
			</a>
		</footer>
	</div>
);
export default Home;
