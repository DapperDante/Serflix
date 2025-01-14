import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { MovieInfo, MoviesInfo } from '../api/movie-info.api';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';

const PATH = environment.ApiDbMovies;

@Injectable({
	providedIn: 'platform'
})
export class FavoriteMoviesService implements Service{
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	constructor(){
		console.log(`Service ${this.constructor.name} is ready`);
	}
	getMoviesProfile(): Observable<MoviesInfo> {
		return this._http.get<MoviesInfo>(`${PATH}/get`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	addMovie(idMovie: number): Observable<{ msg: string; id: number }> {
		const movie = {idMovie};
		return this._http.post<{ msg: string; id: number }>(`${PATH}/add`,movie).pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		)
	}
	getMovieProfile(idMovie: number | string): Observable<{id:number, results: MovieInfo}> {
		return this._http.get<{id:number, results: MovieInfo}>(`${PATH}/get/${idMovie}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	deteleMovie(idDoc: number | string): Observable<void> {
		return this._http.delete<void>(`${PATH}/delete/${idDoc}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	ShowError(error: Error): void {
		this._error.ShowError(error.message);
	}
	ErrorHandler(error: HttpErrorResponse){
		let message = '';
		switch (error.status) {
			case 404:
				message = 'Movie not found';
				break;
			case 500:
				message = 'Server error';
				break;
			default:
				message = 'Server disconnected';
		}
		return throwError(()=> new Error(message));
	}
}
export function FavoriteMoviesInterceptor(
	req: HttpRequest<unknown>,
	next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
	if (!req.url.includes(PATH)) return next(req);
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
							return item;
						});
				}
			}
			return data;
		})
	);
}
