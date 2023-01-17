import styles from "./styles/index.module.css";
import formStyles from "./styles/form.module.css";

import { getGenres, getStarterData } from "./api";
import { Listing } from "./components/Listing";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

function App() {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<h1>Screen it</h1>
			</header>
			<main>
				<form className={formStyles.container}>
					<Input label="Name" type="text" placeholder="Name of the movie" />
					<Input
						label="Category"
						type="select"
						placeholder="Select a category"
						selectOptions={getGenres()}
					/>
					<Input type="stars" label="Rating" />
					<Button text="Add Movie" type="submit" />
				</form>

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
