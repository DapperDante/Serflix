import {
	HttpClient,
	HttpErrorResponse,
	HttpEvent,
	HttpHandlerFn,
	HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { ManyMovies } from 'src/app/interface/movies.interface';
import { Service } from 'src/app/interface/service.interface';
import { environment } from 'src/environments/environment.development';

const PATH = environment.API_BACKEND_SEARCH;

@Injectable({
	providedIn: 'platform',
})
export class SearchService implements Service {
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	getItemsByQuery(
		query: string,
		times: number | string,
		itemsRelation: number | string
	): Observable<ManyMovies> {
		return this._http
			.get<ManyMovies>(
				`${PATH}?query=${query}&times=${times}&itemsRelation=${itemsRelation}`
			)
			.pipe(
				catchError(this.errorHandler),
				tap({
					error: (error) => this.showError(error),
				})
			);
	}
	showError(error: Error): void {
		this._error.ShowError(error.message);
	}
	errorHandler(error: HttpErrorResponse): Observable<never> {
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
	const BASE_IMG = environment.API_TMDB_IMAGE_REDUX;
	const newReq = req.clone();
	return next(newReq).pipe(
		map((data: any) => {
			if (!data?.body) return data;
			const { body } = data;
			if (body?.results && Array.isArray(body.results)) {
				body.results.map((value: any) => {
					if (value.poster_path) value.poster_path = `${BASE_IMG}/${value.poster_path}`;
					return value;
				});
			}
			return data;
		})
	);
}
