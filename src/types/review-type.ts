export interface IReviewProps {
	id: string;
	date: string | Date;
	user: string;
	comment: string;
	rating: number;
}

export interface IUserReview {
	id: number;
	comment: string;
	user: string;
	date: Date;
	rating: number;
}

export interface AddUserReview {
	movieId: string;
	comment: string;
	rating: number;
}
