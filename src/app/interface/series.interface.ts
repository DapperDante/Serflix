export type SerieInfo = SerieBasic & Partial<SerieDetails>;

export type SerieRequest = {
	result: SerieInfo,
	is_favorite: boolean
};

export interface SerieScore{
	id: number;
	profile_id: number;
	serie_id: number;
	score: number;
	review: string;
}

export interface ManySeries {
		page:          number;
		results:       SerieBasic[];
		total_pages:   number;
		total_results: number;
}
export interface SerieBasic {
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:                number;
    origin_country:    string[];
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    first_air_date:    Date;
    name:              string;
    vote_average:      number;
    vote_count:        number;
		type?:						 string;
}


interface SerieDetails extends SerieExtras {
  created_by:           CreatedBy[];
  episode_run_time:     number[];
  genres:               {id:number, name: string}[];
  homepage:             string;
  in_production:        boolean;
  languages:            string[];
  last_air_date:        Date;
  last_episode_to_air:  TEpisodeToAir;
  next_episode_to_air:  TEpisodeToAir;
  networks:             Network[];
  number_of_episodes:   number;
  number_of_seasons:    number;
  production_companies: Network[];
  production_countries: {iso_r3166_1: string, name: string}[];
  seasons:              Season[];
  spoken_languages:     SpokenLanguage[];
  status:               string;
  tagline:              string;
}

interface TEpisodeToAir {
  id:              number;
  name:            string;
  overview:        string;
  vote_average:    number;
  vote_count:      number;
  air_date:        Date;
  episode_number:  number;
  episode_type:    string;
  production_code: string;
  runtime:         null;
  season_number:   number;
  show_id:         number;
  still_path:      string;
}

interface Network {
  id:             number;
  logo_path:      string;
  name:           string;
  origin_country: string;
}

interface Season {
  air_date:      Date | null;
  episode_count: number;
  id:            number;
  name:          string;
  overview:      string;
  poster_path:   null | string;
  season_number: number;
  vote_average:  number;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}

interface CreatedBy {
  id:            number;
  credit_id:     string;
  name:          string;
  original_name: string;
  gender:        number;
  profile_path:  null;
}

interface SerieExtras{
  videos?:               {results: Video[]};
  images?:               {backdrops: any[], logos: any[], posters: any[]};
  credits?:              {cast: Cast[], crew: Cast[]};
  similar?:              ManySeries;
  recommendations?:      ManySeries;
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

interface Cast {
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: Department;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         null | string;
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
  Writing = "Writing",
}
