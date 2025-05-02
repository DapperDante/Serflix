import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { Service } from 'src/app/interface/service.interface';
import { environment } from 'src/environments/environment.development';
import { RecByProfile, RecGlobal } from 'src/app/interface/recommendation.interface';

const PATH: string = environment.API_BACKEND_RECOMMENDATION;
const PATH_IMAGE_ORIGINAL: string = environment.API_TMDB_IMAGE_ORIGINAL;
const PATH_IMAGE_REDUX: string = environment.API_TMDB_IMAGE_REDUX;
@Injectable({
  providedIn: 'platform'
})
export class RecommendationService implements Service{
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	getRecommendationsByProfile(): Observable<RecByProfile> {
		return this._http.get<RecByProfile>(`${PATH}/get-profile`)
		.pipe(
			catchError(this.errorHandler),
			tap({error: (error)=>this.showError(error)}),
			map((response) => {
				response.last_viewed?.recommendations?.results
				.map((item)=>{
					item.poster_path = `${PATH_IMAGE_REDUX}${item.poster_path}`;
				})
				response.recommendations.map((item)=>{
					item.results.map((subItem)=>{
						subItem.poster_path = `${PATH_IMAGE_REDUX}${subItem.poster_path}`;
					})
				})
				return response;
			})
		)
	}
	getRecommendations(): Observable<RecGlobal>{
		return this._http.get<RecGlobal>(`${PATH}/get`)
		.pipe(
			catchError(this.errorHandler),
			tap({error: (error)=>this.showError(error)}),
			map((response)=>{
				response.results.map((item)=>{
					item.backdrop_path = `${PATH_IMAGE_ORIGINAL}${item.backdrop_path}`;
				})
				return response;
			})
		)
	}
	showError(error: Error): void {
		this._error.ShowError(error.message);
	}
	errorHandler(error: HttpErrorResponse): Observable<never> {
		return throwError(()=>new Error(error.error.msg));
	}
}
