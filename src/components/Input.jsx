import styles from "./../styles/input.module.css";
import { Stars } from "./Stars";

export const Input = ({
	label,
	type,
	placeholder,
	selectOptions,
	value,
	onChange,
}) => {
	switch (type) {
		case "select":
			return (
				<SelectInput
					label={label}
					placeholder={placeholder}
					selectOptions={selectOptions}
					value={value}
					onChange={onChange}
				/>
			);
		case "stars":
			return <StarsInput label={label} rating={value} setRating={onChange} />;
		default:
			return (
				<BaseInput
					label={label}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			);
	}
};

const BaseInput = ({ label, type, placeholder, value, onChange }) => (
	<label htmlFor={label} className={styles.container}>
		<div className={styles.label}>{label}</div>
		<div className={styles.inputWrapper}>
			<input
				className={styles.input}
				type={type}
				id={label}
				name={label}
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	</label>
);

const SelectInput = ({
	label,
	placeholder,
	selectOptions,
	value,
	onChange,
}) => (
	<label htmlFor={label} className={styles.container}>
		<div className={styles.label}>{label}</div>
		<div className={styles.selectWrapper}>
			<select
				className={styles.selectInput}
				name={label}
				id={label}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			>
				<option value="" className={styles.selectOption} defaultValue>
					{placeholder}
				</option>
				{selectOptions.map((selectOption) => (
					<option
						key={selectOption.id}
						value={selectOption.id}
						className={styles.selectOption}
					>
						{selectOption.display}
					</option>
				))}
			</select>
		</div>
	</label>
);

const StarsInput = ({ label, rating, setRating }) => {
	const setClasses = (element) => {
		const starPosition = element.parentElement.getAttribute("data-position");
		console.log(starPosition);
		setRating(starPosition);
	};

	return (
		<div
			className={styles.starsContainer}
			onClick={(e) => setClasses(e.target)}
		>
			<div className={styles.label}>{label}</div>
			<Stars rating={rating} />
		</div>
	);
};
