import styles from "./../styles/input.module.css";
import { Stars } from "./Stars";

export const Input = ({ label, type, placeholder, selectOptions }) => {
	switch (type) {
		case "select":
			return (
				<SelectInput
					label={label}
					placeholder={placeholder}
					selectOptions={selectOptions}
				/>
			);
		case "stars":
			return <StarsInput label={label} />;
		default:
			return <BaseInput label={label} placeholder={placeholder} />;
	}
};

const BaseInput = ({ label, type, placeholder }) => (
	<label htmlFor={label} className={styles.container}>
		<div className={styles.label}>{label}</div>
		<div className={styles.inputWrapper}>
			<input
				className={styles.input}
				type={type}
				id={label}
				name={label}
				placeholder={placeholder}
			/>
		</div>
	</label>
);

const SelectInput = ({ label, placeholder, selectOptions }) => (
	<label htmlFor={label} className={styles.container}>
		<div className={styles.label}>{label}</div>
		<div className={styles.selectWrapper}>
			<select className={styles.selectInput} name={label} id={label}>
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

const StarsInput = ({ label }) => {
	return (
		<div className={styles.starsContainer}>
			<div className={styles.label}>{label}</div>
			<Stars rating="0" />
		</div>
	);
};
