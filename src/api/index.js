import { GENRES, STARTER_DATA } from "./data";
import uniqid from "uniqid";

export const getGenres = () =>
	Object.keys(GENRES).map((genre) => ({
		id: genre,
		display: GENRES[genre],
	}));

export const getStarterData = () => STARTER_DATA;

// even though this is just setting state, I am still trying to keep the data separation illusion here
export const addMovie = (name, category, rating, movieData, setMovieData) => {
	setMovieData([
		{
			title: name,
			id: uniqid(),
			genre: GENRES[category],
			rating: rating,
		},
		...movieData,
	]);
};

const articles = ["a", "an", "the"];
export const generateIconText = (text) => {
	const lowerCased = text.toLowerCase(); // let's not factor in capitalization, in case of typos etc
	let transformedArr = lowerCased
		.split(" ")
		.map((word) => (articles.includes(word) ? "" : word[0])) // ignore first letter of articles
		.filter((el) => el.match(/\w/)); // filter out any non-letter characters
	return transformedArr.join("");
};
