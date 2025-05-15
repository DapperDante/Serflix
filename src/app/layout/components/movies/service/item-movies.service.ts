import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { ManyMovies, MovieInfo } from 'src/app/interface/movies.interface';

const PATH: string = `${environment.API_TMDB}/movie`;
const PATH_DISCOVER: string = `${environment.API_TMDB}/discover/movie`;

@Injectable({
	providedIn: 'platform'
})
export class ItemMoviesService implements Service {
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	getMoviesNowPlaying(page: number | string = 1): Observable<ManyMovies> {
		return this._http.get<ManyMovies>(`${PATH}/now_playing?language=en-US&page=${page}`)
		.pipe(
			catchError(this.errorHandler),
			tap({error: (error)=>this.showError(error)})
		);
	}
	getMoviesPopular(page: number | string = 1): Observable<ManyMovies> {
		return this._http.get<ManyMovies>(`${PATH}/popular?language=en-US&page=${page}`)
		.pipe(
			catchError(this.errorHandler),
			tap({error: (error)=>this.showError(error)})
		);
	}
	getMoviesTopReated(page: number | string = 1): Observable<ManyMovies> {
		return this._http.get<ManyMovies>(`${PATH}/top_rated?language=en-US&page=${page}`)
		.pipe(
			catchError(this.errorHandler),
			tap({error: (error)=>this.showError(error)})
		);
	}
	getMoviesUpcoming(page: number | string = 1): Observable<ManyMovies> {
		return this._http.get<ManyMovies>(`${PATH}/upcoming?language=en-US&page=${page}`)
		.pipe(
			catchError(this.errorHandler),
			tap({error: (error)=>this.showError(error)})
		);
	}
	getMovieById(id: string | number): Observable<MovieInfo> {
		return this._http
			.get<MovieInfo>(
				`${PATH}/${id}?append_to_response=videos%2Cimages%2Ccredits%2Csimilar%2Crecommendations&language=en-US`
			)
			.pipe(
				map((data) => {
					if(data.videos){
						const trailer = data.videos.results.find((video) => (video.type = 'Trailer'))!;
						data.videos.results = trailer ? [trailer] : [];
					}
					return data;
				}),
				catchError(this.errorHandler),
				tap({error: (error)=>this.showError(error)})
			);
	}
	getMoviesByGenre(idGenre: string | number, page: number | string = 1): Observable<ManyMovies> {
		return this._http.get<ManyMovies>(`${PATH_DISCOVER}?with_genres=${idGenre}&page=${page}`)
		.pipe(
			catchError(this.errorHandler),
			tap({error: (error)=>this.showError(error)})
		);
	}
	showError(error: Error): void {
		this._error.ShowError(error.message);
	}
	errorHandler(error: HttpErrorResponse): Observable<never> {
		let message = '';
		switch (error.status) {
			default:
				message = 'Error';
				break;
		};
		return throwError(() => new Error(message));
	}
}
export function ItemMoviesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
	if (!(req.url.includes(PATH) || req.url.includes(PATH_DISCOVER))) return next(req);
	const BASE_IMG = environment.API_TMDB_IMAGE_REDUX;
	const newReq = req.clone();
	return next(newReq).pipe(
		map((data: any) => {
			if(!data?.body)
				return data;
			const { body } = data;
			//Multiple movies
			if (body?.results && Array.isArray(body.results)) {
				body.results
					.map((item: MovieInfo) => {
						if(item.poster_path)
							item.poster_path = `${BASE_IMG}${item.poster_path}`;
						return item;
					});
			}
			return data;
		})
	);
}
