import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ScoreSerie } from '../api/score-serie.api';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';

const PATH: string = `${environment.API_BACKEND_SCORE}/serie`;

@Injectable({
	providedIn: 'platform',
})
export class ScoreSeriesService implements Service {
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	constructor(){
		console.log(`Service ${this.constructor.name} is ready`);
	}
	addNewReview(idSerie: number, score: number, review: string): Observable<any> {
		const resp = {
			idSerie,
			score,
			review,
		};
		return this._http
			.post<any>(`${PATH}/add`, resp)
			.pipe(catchError(this.ErrorHandler), tap({ error: (error)=>this.ShowError(error) }));
	}
	getReviewsOfSerie(idSerie: string | number): Observable<ScoreSerie[]> {
		return this._http
			.get<ScoreSerie[]>(`${PATH}/get/${idSerie}`)
			.pipe(catchError(this.ErrorHandler), tap({ error: (error)=>this.ShowError(error) }));
	}
	ShowError(error: Error): void {
		this._error.ShowError(error.message);
	}
	ErrorHandler(error: HttpErrorResponse): Observable<never> {
		let message = '';
		switch (error.status) {
			default:
				message = 'Server disconnected';
		}
		return throwError(() => new Error(message));
	}
}
