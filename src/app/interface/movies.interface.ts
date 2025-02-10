export type MovieInfo = MovieBasic & Partial<MovieDetails>;

export type MovieRequest = {
	result: MovieInfo,
	is_favorite: boolean
};

export interface MovieScore {
	id: number,
	profile_id: number,
	movie_id: number,
	score: number,
	review: string
}

export interface ManyMovies{
	dates?: 			 Dates;
	page: 				 number;
	results:       MovieBasic[];
	total_pages:   number;
	total_results: number;
}

interface Dates {
		maximum: Date;
		minimum: Date;
}
export interface MovieBasic {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
		type?: 						 string;
}

interface MovieDetails extends MovieExtras {
		belongs_to_collection: null;
		budget:                number;
		genres:                {id: number, name: string}[];
		homepage:              string;
		imdb_id:               string;
		origin_country:        string[];
		production_companies:  ProductionCompany[];
		production_countries:  {iso_3166_1: string, name: string}[];
		revenue:               number;
		runtime:               number;
		spoken_languages:      {english_name:string, iso_639_1: string, name: string}[];
		status:                string;
		tagline:               string;
}
interface ProductionCompany {
	id:             number;
	logo_path:      null | string;
	name:           string;
	origin_country: string;
}
interface MovieExtras{
		videos?:                {results: Video[]};
    images?:                Images;
    credits?:               Credits;
    similar?:               ManyMovies;
    recommendations?:       ManyMovies;
}
interface Video {
	iso_639_1:    string;
	iso_3166_1:   string;
	name:         string;
	key:          string;
	published_at: Date;
	site:         string;
	size:         number;
	type:         string;
	official:     boolean;
	id:           string;
}
interface Images {
	backdrops: any[];
	logos:     any[];
	posters:   any[];
}

interface Credits {
	cast: Cast[];
	crew: Cast[];
}

interface Cast {
	adult:                boolean;
	gender:               number;
	id:                   number;
	known_for_department: Department;
	name:                 string;
	original_name:        string;
	popularity:           number;
	profile_path:         null | string;
	cast_id?:             number;
	character?:           string;
	credit_id:            string;
	order?:               number;
	department?:          Department;
	job?:                 string;
}

enum Department {
	Acting = "Acting",
	Camera = "Camera",
	Directing = "Directing",
	Editing = "Editing",
	Production = "Production",
	Sound = "Sound",
	Writing = "Writing",
}

enum OriginalLanguage {
    CN = "cn",
    En = "en",
    Hi = "hi",
    Zh = "zh",
}
