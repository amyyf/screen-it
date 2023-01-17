import styles from "./../styles/button.module.css";

export const Button = ({ text, type }) => (
	<button className={styles.button} type={type}>
		{text}
	</button>
);
