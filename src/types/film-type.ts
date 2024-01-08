export interface IFilmProps {
	id: number;
	name: string;
	previewImg: string;
	previewVideoLink: string;
	genre: string;
	alt: string;
}

export interface IFilmPromo {
	id: string;
	name: string;
	postImg: string;
	backgroundImg: string;
	videoLink: string;
	genre: string;
	released: number;
	isFavorite: boolean;
}

export interface IFilmDetailsProps extends IFilmPromo {
	backgroundColor: string;
	description: string;
	rating: number;
	scoreCount: number;
	director: string;
	starring: [string];
	runTime: number;
}
