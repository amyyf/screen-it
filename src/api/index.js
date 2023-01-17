import { GENRES, STARTER_DATA } from "./data";

export const getGenres = () =>
	Object.keys(GENRES).map((genre) => ({
		id: genre,
		display: GENRES[genre],
	}));

export const getStarterData = () => STARTER_DATA;

const articles = ["a", "an", "the"];
export const generateIconText = (text) => {
	const lowerCased = text.toLowerCase(); // let's not factor in capitalization, in case of typos etc
	let transformedArr = lowerCased
		.split(" ")
		.map((word) => (articles.includes(word) ? "" : word[0])) // ignore first letter of articles
		.filter((el) => el.match(/\w/)); // filter out any non-letter characters
	return transformedArr.join("");
};
