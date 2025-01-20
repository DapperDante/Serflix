import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SerieInfo, SeriesInfo } from '../api/serie-info.api';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { SuccessHandlingService } from 'src/app/service/success-handling.service';

const PATH: string = environment.API_BACKEND_SERIE;

@Injectable({
	providedIn: 'platform'
})
export class FavoriteSeriesService implements Service{
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	private readonly _succesful = inject(SuccessHandlingService);
	constructor(){
		console.log(`Service ${this.constructor.name} is ready`);
	}
	getSeriesProfile(): Observable<SeriesInfo> {
		return this._http.get<SeriesInfo>(`${PATH}/get`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	addSerie(idSerie: number): Observable<{ msg: string; id: number, goal?: {id: number, name: string, detail: string, url: string} }> {
		const serie = {idSerie};
		return this._http.post<{ msg: string; id: number, goal: {id: number, name: string, detail: string, url: string} }>(`${PATH}/add`, serie)
		.pipe(
			catchError(this.ErrorHandler),
			tap({
				error: (error)=>this.ShowError(error),
				next: (value)=>{
					if(value.goal)
						this._succesful.showGoalMessage(value.goal);
					this._succesful.showAddItemMessage('Serie added to favorite');
				}
			})
		);
	}
	getSerieProfile(idSerie: number | string): Observable<{id: number, results: SerieInfo}> {
		return this._http.get<{id: number, results: SerieInfo}>(`${PATH}/get/${idSerie}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	deleteSerie(idDoc: number | string): Observable<void> {
		return this._http.delete<void>(`${PATH}/delete/${idDoc}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({
				error: (error)=>this.ShowError(error),
				next: ()=> this._succesful.showDeleteItemMessage('Serie deleted from favorite')
			})
		);
	}
	ShowError(error: Error): void {
		this._error.ShowError(error.message);
	}
	ErrorHandler(error: HttpErrorResponse): Observable<never> {
		let message = '';
		switch(error.status){
			case 404:
				message = 'Not find serie';
				break;
			case 500:
				message = 'Internal server error';
				break;
			default:
				message = 'Server disconnected';
				break;
		}
		return throwError(()=>new Error(message));
	}
}
export function FavoriteSeriesInterceptor(
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
