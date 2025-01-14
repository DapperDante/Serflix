import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { Service } from 'src/app/interface/service.interface';
import { Movies } from 'src/app/movies/api/movies.api';
import { environment } from 'src/environments/environment.development';

const PATH = environment.ApiDbSearch;

@Injectable({
	providedIn: 'platform',
})
export class SearchService implements Service {
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	constructor() {
		console.log(`Service ${this.constructor.name} is ready`);
	}
	getItemsByQuery(query: string, times: number | string, manyItemsRelation: number | string): Observable<Movies> {
		return this._http
			.get<Movies>(`${PATH}?query=${query}&times=${times}&manyItemsRelation=${manyItemsRelation}`)
			.pipe(catchError(this.ErrorHandler), tap({ error: (error)=>this.ShowError(error) }));
	}
	ShowError(error: Error): void {
		this._error.ShowError(error.message);
	}
	ErrorHandler(error: HttpErrorResponse): Observable<never> {
		let message = '';
		switch (error.status) {
			case 404: {
				message = 'Not found results';
				break;
			}
			default: {
				message = 'Server disconnected';
			}
		}
		return throwError(() => new Error(message));
	}
}
export function SearchMoviesInterceptor(
	req: HttpRequest<unknown>,
	next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
	if (!req.url.includes(PATH)) return next(req);
	const BASE_IMG = environment.ApiTmdbImage;
	const newReq = req.clone();
	return next(newReq).pipe(
		map((data: any) => {
			if (data.body) {
				if ('results' in data.body) {
					data.body.results.map((value: any) => {
						value.poster_path = `${BASE_IMG}/${value.poster_path}`;
						value.backdrop_path = `${BASE_IMG}/${value.backdrop_path}`;
						return value;
					});
				}
			}
			return data;
		})
	);
}
