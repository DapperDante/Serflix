import { HttpClient, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Movies, MoviesWithDate } from '../api/movies.api';
import { environment } from 'src/environments/environment.development';
import { MovieInfo, VideosResult } from '../api/movie-info.api';
const BASE_URL_MOVIES: string = environment._ApiTmdb + '/movie';
@Injectable({
	providedIn: 'root',
})
export class ItemMoviesService {
	private _http = inject(HttpClient);
	getMoviesNowPlaying(page: number = 1): Observable<MoviesWithDate> {
		return this._http.get<MoviesWithDate>(`${BASE_URL_MOVIES}/now_playing?language=en-US&page=${page}`);
	}
	getMoviesPopular(page: number = 1): Observable<Movies> {
		return this._http.get<Movies>(`${BASE_URL_MOVIES}/popular?language=en-US&page=${page}`);
	}
	getMoviesTopReated(page: number = 1): Observable<Movies> {
		return this._http.get<Movies>(`${BASE_URL_MOVIES}/top_rated?language=en-US&page=${page}`);
	}
	getMoviesUpcoming(page: number = 1): Observable<Movies> {
		return this._http.get<Movies>(`${BASE_URL_MOVIES}/upcoming?language=en-US&page=${page}`);
	}
	getMovieById(id: string | number): Observable<MovieInfo> {
		return this._http
			.get<MovieInfo>(
				`${BASE_URL_MOVIES}/${id}?append_to_response=videos%2Cimages%2Ccredits%2Csimilar%2Crecommendations&language=en-US`
			)
			.pipe(
				map((data) => {
					data.videos.results = [data.videos.results.find((video: VideosResult) => (video.type = 'Trailer'))!];
					return data;
				})
			);
	}
}
export function ItemMoviesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
	if (req.url.includes(BASE_URL_MOVIES)) {
		const BASE_URL_IMAGE = environment._BaseUrlImage;
		const newReq = req.clone();
		return next(newReq).pipe(
			map((data: any) => {
				const { body } = data;
				if (body) {
					if ('results' in body && Array.isArray(body.results)) {
						body.results = body.results
							.filter((item: any) => item.poster_path)
							.map((item: any) => {
								item.poster_path = BASE_URL_IMAGE + item.poster_path;
								item.backdrop_path = BASE_URL_IMAGE + item.backdrop_path;
								return item;
							});
					} else {
						body.poster_path = BASE_URL_IMAGE + body.poster_path;
						if ('similar' in body && Array.isArray(body.similar.results)) {
							body.similar.results = body.similar.results
								.filter((item: any) => item.poster_path)
								.map((item: any) => {
									item.poster_path = BASE_URL_IMAGE + item.poster_path;
									return item;
								});
						}
						if ('recommendations' in body && Array.isArray(body.recommendations.results)) {
							body.recommendations.results = body.recommendations.results
								.filter((item: any) => item.poster_path)
								.map((item: any) => {
									item.poster_path = BASE_URL_IMAGE + item.poster_path;
									return item;
								});
						}
					}
				}
				return data;
			})
		);
	}
	return next(req);
}
