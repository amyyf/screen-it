import uniqid from "uniqid";

const ACTION = "Action/Adventure";
const COMEDY = "Comedy";
const DRAMA = "Drama";

export const GENRES = { ACTION, COMEDY, DRAMA };

export const STARTER_DATA = [
	{
		title: "Death Becomes Her",
		id: uniqid(),
		genre: GENRES.COMEDY,
		rating: 3,
	},
	{
		title: "Ghostbusters",
		id: uniqid(),
		genre: GENRES.COMEDY,
		rating: 5,
	},
	{
		title: "Harry Potter - Sorceror's Stone",
		id: uniqid(),
		genre: GENRES.DRAMA,
		rating: 4,
	},
	{
		title: "Jurassic Park",
		id: uniqid(),
		genre: GENRES.ACTION,
		rating: 4,
	},
	{
		title: "The Sandlot",
		id: uniqid(),
		genre: GENRES.COMEDY,
		rating: 4,
	},
];
