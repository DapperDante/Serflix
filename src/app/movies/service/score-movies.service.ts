import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ScoreMovie } from '../api/score-movie.api';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';

const PATH: string = `${environment.ApiDbScore}/movie`;

@Injectable({
	providedIn: 'platform'
})
export class ScoreMoviesService implements Service{
  private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	constructor(){
		console.log(`Service ${this.constructor.name} is ready`);
	}
  addNewReview(idMovie: number, score: number, review: string): Observable<any>{
    const resp = {
      idMovie,
      score,
      review
    }
    return this._http.post<any>(`${PATH}/add`, resp);
  }
  getReviewsOfMovie(idMovie: string | number): Observable<ScoreMovie[]>{
    return this._http.get<ScoreMovie[]>(`${PATH}/get/${idMovie}`);
  }
	ShowError(error: Error): void {
		this._error.ShowError(error.message);
	}
	ErrorHandler(error: HttpErrorResponse): Observable<never> {
		let message = '';
		switch(error.status){
			default:
				message = 'Server disconnected';
		}
		return throwError(() => new Error(message));
	}
}
