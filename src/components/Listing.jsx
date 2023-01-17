import styles from "./../styles/listing.module.css";
import { Stars } from "./Stars";
import { generateIconText } from "../api";

export const Listing = ({ genre, rating, title }) => {
	const iconText = generateIconText(title);
	const iconTextSize =
		iconText.length > 2 ? styles.iconTextSm : styles.iconTextLg;

	return (
		<article className={styles.container}>
			<div className={styles.icon}>
				<span className={iconTextSize}>{iconText}</span>
			</div>
			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.genre}>{genre}</p>
			</div>
			<Stars rating={rating} />
		</article>
	);
};
