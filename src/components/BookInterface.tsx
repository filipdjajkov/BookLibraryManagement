import {Genre} from "./Genre";

interface BookInterface {
	ISBN: string;
	image: string;
	title: string;
	author: string;
	genre: Genre;
	pages: number;
}

export default BookInterface;
