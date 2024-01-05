export interface FilmProps {
	id: number;
	name: string;
	postImg: string;
	alt: string;
}

export interface FilmDetailsProps extends FilmProps {
	backgroundImg: string;
	backgroundColor: string;
	videoLink: string;
	description: string;
	rating: number;
	scoreCount: number;
	director: string;
	starring: [string];
	runTime: number;
	genre: string;
	released: number;
	isFavorite: boolean;
}
