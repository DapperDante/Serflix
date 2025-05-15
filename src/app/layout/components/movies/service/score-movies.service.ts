import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { SuccessHandlingService } from 'src/app/service/success-handling.service';
import { MovieScore } from 'src/app/interface/movies.interface';

const PATH: string = `${environment.API_BACKEND_SCORE}/movie`;

@Injectable({
	providedIn: 'platform',
})
export class ScoreMoviesService implements Service {
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	private readonly _sucessful = inject(SuccessHandlingService);
	addNewReview(idMovie: number, score: number, review: string): Observable<{msg: string}> {
		const resp = {
			idMovie,
			score,
			review,
		};
		console.log(resp);
		return this._http.post<{msg: string}>(PATH, resp).pipe(
			catchError(this.errorHandler),
			tap({
				error: (error)=>this.showError(error),
				next: ()=>this._sucessful.showAddItemMessage('Review added')
			})
		);
	}
	getReviewsOfMovie(idMovie: string | number): Observable<MovieScore> {
		return this._http.get<MovieScore>(`${PATH}/${idMovie}`)
		.pipe(
			catchError(this.errorHandler),
			tap({error: (error) => this.showError(error)})
		);
	}
	showError(error: Error): void {
		this._error.ShowError(error.message);
	}
	errorHandler(error: HttpErrorResponse): Observable<never> {
		let message = '';
		switch (error.status) {
			default:
				message = 'Server disconnected';
		}
		return throwError(() => new Error(message));
	}
}
