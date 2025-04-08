import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { Service } from 'src/app/interface/service.interface';
import { environment } from 'src/environments/environment.development';
import { RecByProfile, RecGlobal } from 'src/app/interface/recommendation.interface';
import { ManyMovies, MovieBasic } from 'src/app/interface/movies.interface';
import { ManySeries, SerieBasic } from 'src/app/interface/series.interface';

const PATH: string = environment.API_BACKEND_RECOMMENDATION;

@Injectable({
  providedIn: 'any'
})
export class RecommendationService implements Service{
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	getRecommendationsByProfile(): Observable<RecByProfile> {
		return this._http.get<RecByProfile>(`${PATH}/get-profile`)
		.pipe(
			catchError(this.errorHandler),
			tap({error: (error)=>this.showError(error)})
		)
	}
	getRecommendations(): Observable<RecGlobal>{
		return this._http.get<RecGlobal>(`${PATH}/get`)
		.pipe(
			catchError(this.errorHandler),
			tap({error: (error)=>this.showError(error)})
		)
	}
	showError(error: Error): void {
		this._error.ShowError(error.message);
	}
	errorHandler(error: HttpErrorResponse): Observable<never> {
		let message = '';
		switch(error.status){
			default:
				message = 'Error';
		return throwError(()=>new Error(message));
		}
	}
}
export function RecommendationInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
	if(!(req.url.includes(environment.API_BACKEND_RECOMMENDATION))) return next(req);
	const BASE_IMG = environment.API_TMDB_IMAGE;
	const newReq = req.clone();
	return next(newReq).pipe(
		map((data: any) =>{
			const { body } = data;
			if(body){
				if(body.last_viewed)
					body.last_viewed.recommendations.results.map((item: MovieBasic | SerieBasic) => {
						if(item.poster_path)
							item.poster_path = `${BASE_IMG}${item.poster_path}`;
						return item;
					});
				if(body.recommendations)
					body.recommendations
					.map((items: ManyMovies & ManySeries) => {
						items.results.map((item: MovieBasic | SerieBasic) => {
							if(item.poster_path)
								item.poster_path = `${BASE_IMG}${item.poster_path}`;
							return item;
						});
						return items;
					});
				if(body?.results){
					body.results
					.map((item: MovieBasic & SerieBasic) => {
						if(item.backdrop_path)
							item.backdrop_path = `${BASE_IMG}${item.backdrop_path}`;
						return item;
					});
				}
			}
			return data;
		})
	)
}
