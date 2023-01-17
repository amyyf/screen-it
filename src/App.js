import styles from "./styles/index.module.css";
import { getStarterData } from "./api";
import { Listing } from "./components/Listing";

function App() {
	return (
		<div className={styles.app}>
			<header className="App-header">
				<h1>Screen it</h1>
			</header>
			<main>
				<section>
					<form></form>
				</section>
				<section>
					<ul className={styles.list}>
						{getStarterData().map((listing) => (
							<li key={listing.id}>
								<Listing
									genre={listing.genre}
									rating={listing.rating}
									title={listing.title}
								/>
							</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
