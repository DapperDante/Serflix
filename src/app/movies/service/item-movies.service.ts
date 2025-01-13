import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Movies } from '../api/movies.api';
import { environment } from 'src/environments/environment.development';
import { MovieInfo, VideosResult } from '../api/movie-info.api';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';

const PATH: string = `${environment.ApiTmdb}/movie`;
const PATH_DISCOVER: string = `${environment.ApiTmdb}/discover/movie`;

@Injectable({
	providedIn: 'platform'
})
export class ItemMoviesService implements Service {
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	constructor() {
		console.log(`Service ${this.constructor.name} is ready`);
	}
	getMoviesNowPlaying(page: number | string = 1): Observable<Movies> {
		return this._http.get<Movies>(`${PATH}/now_playing?language=en-US&page=${page}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	getMoviesPopular(page: number | string = 1): Observable<Movies> {
		return this._http.get<Movies>(`${PATH}/popular?language=en-US&page=${page}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	getMoviesTopReated(page: number | string = 1): Observable<Movies> {
		return this._http.get<Movies>(`${PATH}/top_rated?language=en-US&page=${page}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	getMoviesUpcoming(page: number | string = 1): Observable<Movies> {
		return this._http.get<Movies>(`${PATH}/upcoming?language=en-US&page=${page}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	getMovieById(id: string | number): Observable<MovieInfo> {
		return this._http
			.get<MovieInfo>(
				`${PATH}/${id}?append_to_response=videos%2Cimages%2Ccredits%2Csimilar%2Crecommendations&language=en-US`
			)
			.pipe(
				map((data) => {
					if(data.videos)
						data.videos.results = [data.videos.results.find((video: VideosResult) => (video.type = 'Trailer'))!];
					return data;
				}),
				catchError(this.ErrorHandler),
				tap({error: (error)=>this.ShowError(error)})
			);
	}
	getMoviesByGenre(idGenre: string | number, page: number | string = 1): Observable<Movies> {
		return this._http.get<Movies>(`${PATH_DISCOVER}?with_genres=${idGenre}&page=${page}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	ShowError(error: Error): void {
		this._error.ShowError(error.message);
	}
	ErrorHandler(error: HttpErrorResponse): Observable<never> {
		let message = '';
		switch (error.status) {
			default:
				message = 'Server disconnected';
				break;
		};
		return throwError(() => new Error(message));
	}
}
export function ItemMoviesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
	if (!(req.url.includes(PATH) || req.url.includes(PATH_DISCOVER))) return next(req);
	const BASE_IMG = environment.ApiTmdbImage;
	const newReq = req.clone();
	return next(newReq).pipe(
		map((data: any) => {
			const { body } = data;
			if (body) {
				if ('results' in body && Array.isArray(body.results)) {
					body.results = body.results
						.filter((item: any) => item.poster_path)
						.map((item: any) => {
							item.poster_path = `${BASE_IMG}${item.poster_path}`;
							item.backdrop_path = `${BASE_IMG}${item.backdrop_path}`;
							return item;
						});
				} else {
					body.poster_path = `${BASE_IMG}${body.poster_path}`;
					body.backdrop_path = `${BASE_IMG}${body.backdrop_path}`;
					if ('similar' in body && Array.isArray(body.similar.results)) {
						body.similar.results = body.similar.results
							.filter((item: any) => item.poster_path)
							.map((item: any) => {
								item.poster_path = `${BASE_IMG}${item.poster_path}`
								return item;
							});
					}
					if ('recommendations' in body && Array.isArray(body.recommendations.results)) {
						body.recommendations.results = body.recommendations.results
							.filter((item: any) => item.poster_path)
							.map((item: any) => {
								item.poster_path = `${BASE_IMG}${item.poster_path}`
								return item;
							});
					}
				}
			}
			return data;
		})
	);
}
