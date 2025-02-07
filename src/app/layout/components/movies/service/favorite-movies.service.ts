import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { SuccessHandlingService } from 'src/app/service/success-handling.service';
import { MovieRequest } from 'src/app/interface/movies.interface';

const PATH = environment.API_BACKEND_MOVIE;
@Injectable({
	providedIn: 'platform'
})
export class FavoriteMoviesService implements Service{
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	private readonly _sucessful = inject(SuccessHandlingService);
	addMovie(idMovie: number): Observable<{ msg: string; id: number, goal?: {id: number, name: string, detail: string, url: string} }> {
		const movie = {idMovie};
		return this._http.post<{ msg: string; id: number, goal?: {id: number, name: string, detail: string, url: string} }>(`${PATH}/add`,movie).pipe(
			catchError(this.ErrorHandler),
			tap({
				error: (error)=>this.ShowError(error),
				next: (value)=>{
					if(value.goal)
						this._sucessful.showGoalMessage(value.goal);
					this._sucessful.showAddItemMessage('Movie added to favorite');
				}
			})
		)
	}
	getMovieByProfile(idMovie: number | string): Observable<MovieRequest> {
		return this._http.get<MovieRequest>(`${PATH}/get/${idMovie}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	deteleMovie(idMovie: number | string): Observable<void> {
		return this._http.delete<void>(`${PATH}/delete/${idMovie}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({
				error: (error)=>this.ShowError(error),
				next: ()=>this._sucessful.showDeleteItemMessage('Movie deleted from favorite')
			})
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
	const BASE_IMG = environment.API_TMDB_IMAGE;
	const newReq = req.clone();
	return next(newReq).pipe(
		map((data: any) => {
			const { body } = data;
			if (body) {
				if ('results' in body && Array.isArray(body.results)) {
					body.results = body.results
						.map((item: any) => {
							item.poster_path = `${BASE_IMG}${item.poster_path}`;
							return item;
						});
				}
				if('result' in body){
					if(body.result.poster_path)
						body.result.poster_path = `${BASE_IMG}${body.result.poster_path}`;
					if(body.result.backdrop_path)
						body.result.backdrop_path = `${BASE_IMG}${body.result.backdrop_path}`;
					body.result.production_companies.map((company: any) => {
						if(company.logo_path)
							company.logo_path = `${BASE_IMG}${company.logo_path}`;
						return company;
					});
					if ('similar' in body.result && Array.isArray(body.result.similar.results)) {
						body.result.similar.results
							.map((item: any) => {
								if(item.poster_path)
									item.poster_path = `${BASE_IMG}${item.poster_path}`
								return item;
							});
					}
					if ('recommendations' in body.result && Array.isArray(body.result.recommendations.results)) {
						body.result.recommendations.results
							.map((item: any) => {
								if(item.poster_path)
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
