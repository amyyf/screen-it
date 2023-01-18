import styles from "./../styles/form.module.css";

import { Input } from "./Input";
import { Button } from "./Button";
import { addMovie, getGenres } from "../api";
import { useState } from "react";

export const Form = () => {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [rating, setRating] = useState(0);

	return (
		<form
			className={styles.container}
			onSubmit={(e) => {
				if (!name || !category || !rating) {
					e.preventDefault();
					return window.alert("Some movie data is missing!");
				}
				addMovie(name, category, rating);
			}}
		>
			<Input
				label="Name"
				type="text"
				placeholder="Name of the movie"
				value={name}
				onChange={setName}
				required
			/>
			<Input
				label="Category"
				type="select"
				placeholder="Select a category"
				selectOptions={getGenres()}
				value={category}
				onChange={setCategory}
				required
			/>
			<Input type="stars" label="Rating" value={rating} onChange={setRating} />
			<Button text="Add Movie" type="submit" />
		</form>
	);
};
