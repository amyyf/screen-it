import styles from "./styles/index.module.css";

import { getMovies } from "./api";
import { Listing } from "./components/Listing";
import { Form } from "./components/Form";

function App() {
	const data = getMovies();

	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<h1>Screen it</h1>
			</header>
			<main>
				<Form />
				<section>
					<ul className={styles.list}>
						{data.map((listing) => (
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
