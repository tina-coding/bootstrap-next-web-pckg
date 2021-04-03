import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Card } from "components/common";
import { useTheme } from "next-themes";
import LightbulbOff from "components/icon/LightbulbOff";
import LightbulbOn from "components/icon/LightbulbOn";

const Home: React.FC = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className={styles.container}>
			<Head>
				<title>Our Sample App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<button
					className="bg-white-500 dark:bg-gray-700 rounded p-3 h-10 w-10 shadow-lg hover:shadow transition:shadow"
					type="button"
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				>
					{theme === "light" ? <LightbulbOn /> : <LightbulbOff />}
				</button>
				<Card />
			</main>

			<footer className={styles.footer}>
				<div>
					Icons made by{" "}
					<a href="https://www.freepik.com" title="Freepik">
						Freepik
					</a>{" "}
					from{" "}
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
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
};
export default Home;
