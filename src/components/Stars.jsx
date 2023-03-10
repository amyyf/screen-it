import styles from "./../styles/stars.module.css";

export const Stars = ({ rating, onSelect }) => {
	const total = 5;
	let fills = [];

	while (rating > 0) {
		fills.push("fill");
		rating--;
	}
	while (fills.length < total) {
		fills.push("");
	}

	// handles the stars as input
	if (onSelect) {
		return (
			<span
				className={styles.container}
				onClick={(e) => onSelect(e.target)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						onSelect(e.target);
					}
				}}
			>
				{fills.map((filled, i) => (
					<label htmlFor={`star-${i}`} key={i}>
						<input
							type="radio"
							name="star"
							id={`star-${i}`}
							className={styles.visuallyHidden}
						/>
						<Star filled={filled} position={i + 1} button />
						<span className={styles.visuallyHidden}>{`${i + 1} star`}</span>
					</label>
				))}
			</span>
		);
	}

	// handles the stars as presentation
	return (
		<span className={styles.container}>
			{fills.map((filled, i) => (
				<Star key={i} filled={filled} position={i + 1} />
			))}
		</span>
	);
};

const Star = ({ filled, position, button }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 576 512"
			className={styles.star}
			data-position={position}
			tabIndex={button && 0}
		>
			{/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
			<path
				className={filled ? styles.starFilled : styles.starEmpty}
				d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
			/>
		</svg>
	);
};
