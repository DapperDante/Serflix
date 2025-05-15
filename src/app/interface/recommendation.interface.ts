import { ManyMovies, MovieBasic, MovieInfo } from "./movies.interface";
import { ManySeries, SerieInfo } from "./series.interface";

export interface RecByProfile {
	last_viewed: MovieInfo & SerieInfo,
	recommendations: ManyMovies[]
}
export interface RecGlobal {
	results: (MovieBasic & MovieBasic)[]
	// results: (ManyMovies | ManySeries)
}
