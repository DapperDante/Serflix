import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { SuccessHandlingService } from 'src/app/service/success-handling.service';
import { SerieRequest } from 'src/app/interface/series.interface';
import { Goal } from 'src/app/interface/account.interface';

const PATH: string = environment.API_BACKEND_SERIE;

@Injectable({
	providedIn: 'platform',
})
export class FavoriteSeriesService implements Service {
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	private readonly _succesful = inject(SuccessHandlingService);
	addSerie(idSerie: number): Observable<{ msg: string; id: number; goal?: Goal }> {
		const serie = { idSerie };
		return this._http.post<{ msg: string; id: number; goal: Goal }>(`${PATH}/add`, serie).pipe(
			catchError(this.ErrorHandler),
			tap({
				error: (error) => this.ShowError(error),
				next: (value) => {
					if (value.goal) this._succesful.showGoalMessage(value.goal);
					this._succesful.showAddItemMessage('Serie added to favorite');
				},
			})
		);
	}
	getSerieByProfile(idSerie: number | string): Observable<SerieRequest> {
		return this._http
			.get<SerieRequest>(`${PATH}/get/${idSerie}`)
			.pipe(catchError(this.ErrorHandler), tap({ error: (error) => this.ShowError(error) }));
	}
	deleteSerie(idSerie: number | string): Observable<void> {
		return this._http.delete<void>(`${PATH}/delete/${idSerie}`).pipe(
			catchError(this.ErrorHandler),
			tap({
				error: (error) => this.ShowError(error),
				next: () => this._succesful.showDeleteItemMessage('Serie deleted from favorite'),
			})
		);
	}
	ShowError(error: Error): void {
		this._error.ShowError(error.message);
	}
	ErrorHandler(error: HttpErrorResponse): Observable<never> {
		let message = '';
		switch (error.status) {
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
		return throwError(() => new Error(message));
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
				if('result' in body){
					body.result.backdrop_path = `${BASE_IMG}${body.result.backdrop_path}`;
					body.result.poster_path = `${BASE_IMG}${body.result.poster_path}`;
					if('production_companies' in body.result){
						body.result.production_companies.map((element: any) => {
							if(element.logo_path)
								element.logo_path = `${BASE_IMG}${element.logo_path}`;
						});
					}
					if('similar' in body.result){
						body.result.similar.results.map((element: any) => {
							if(element.backdrop_path)
								element.backdrop_path = `${BASE_IMG}${element.backdrop_path}`;
							if(element.poster_path)
								element.poster_path = `${BASE_IMG}${element.poster_path}`;
						});
					}
					if('recommendations' in body.result){
						body.result.recommendations.results.map((element: any) => {
							if(element.backdrop_path)
								element.backdrop_path = `${BASE_IMG}${element.backdrop_path}`;
							if(element.poster_path)
								element.poster_path = `${BASE_IMG}${element.poster_path}`;
						});
					}
				}
			}
			return data;
		})
	);
}
