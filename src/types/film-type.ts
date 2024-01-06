export interface IFilmProps {
	id: number;
	name: string;
	postImg: string;
	alt: string;
}

export interface IFilmDetailsProps extends IFilmProps {
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
