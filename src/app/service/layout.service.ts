import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ErrorHandlingService } from '../error/error-handling.service';
import { Service } from '../interface/service.interface';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';

const PATH = environment.API_BACKEND_LAYOUT;

@Injectable({
  providedIn: 'root'
})
export class LayoutService implements Service{
	private readonly _http = inject(HttpClient)
	private readonly _error = inject(ErrorHandlingService);
	posters$: BehaviorSubject<string[] | undefined>;
	constructor() {
		this.posters$ = new BehaviorSubject<string[] | undefined>(undefined);
		this.getPosters()
		.subscribe(
			(res)=>{
				this.posters$.next(res.result);
			}
		);
	}
  getPosters(): Observable<{msg: string, result: string[]}>{
		return this._http.get<{msg: string, result: string[]}>(`${PATH}/posters`)
		.pipe(
			catchError(this.errorHandler),
			tap({
				error: (error) => {
					this.showError(error);
				}
			})
		)
	}
	errorHandler(error: HttpErrorResponse): Observable<never> {
		return throwError(()=> new Error(error.error.msg));
	}
	showError(error: Error): void {
		this._error.ShowError(error.message);
	}
}
