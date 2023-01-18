import { GENRES, STARTER_DATA } from "./data";
import uniqid from "uniqid";

export const getGenres = () =>
	Object.keys(GENRES).map((genre) => ({
		id: genre,
		display: GENRES[genre],
	}));

const getStarterData = () => STARTER_DATA;

export const getMovies = () => {
	const currentData = window.localStorage.getItem("screen-it");

	if (currentData) return JSON.parse(currentData);

	window.localStorage.setItem("screen-it", JSON.stringify(getStarterData()));

	return JSON.parse(window.localStorage.getItem("screen-it"));
};

export const addMovie = (name, category, rating) => {
	const currentData = getMovies();
	currentData.unshift({
		title: name,
		id: uniqid(),
		genre: GENRES[category],
		rating: rating,
	});
	window.localStorage.setItem("screen-it", JSON.stringify(currentData));
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
