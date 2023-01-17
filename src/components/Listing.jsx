import styles from "./../styles/listing.module.css";
import { Stars } from "./Stars";

export const Listing = ({ genre, rating, title }) => (
	<article className={styles.container}>
		<div className={styles.icon}></div>
		<div className={styles.info}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.genre}>{genre}</p>
		</div>
		<Stars rating={rating} />
	</article>
);
