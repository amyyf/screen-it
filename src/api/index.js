import { GENRES, STARTER_DATA } from "./data";

export const getGenres = () =>
	Object.keys(GENRES).map((genre) => ({
		id: genre,
		display: GENRES[genre],
	}));

export const getStarterData = () => STARTER_DATA;
