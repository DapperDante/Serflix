import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Service } from 'src/app/interface/service.interface';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { ManySeries, SerieInfo } from 'src/app/interface/series.interface';

const PATH: string = `${environment.API_TMDB}/tv`;
const PATH_DISCOVER: string = `${environment.API_TMDB}/discover/tv`;
@Injectable({
	providedIn: 'platform'
})
export class ItemSeriesService implements Service{
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	getSeriesAiringToday(page: number | string = 1): Observable<ManySeries> {
		return this._http.get<ManySeries>(`${PATH}/airing_today?language=US&page=${page}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		)
	}
	getSeriesOnTheAir(page: number | string = 1): Observable<ManySeries> {
		return this._http.get<ManySeries>(`${PATH}/on_the_air?language=US&page=${page}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	getSeriesPopular(page: number | string = 1): Observable<ManySeries> {
		return this._http.get<ManySeries>(`${PATH}/popular?language=US&page=${page}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	getSeriesTopRated(page: number | string = 1): Observable<ManySeries> {
		return this._http.get<ManySeries>(`${PATH}/top_rated?language=US&page=${page}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
		);
	}
	getSerieById(id: number): Observable<SerieInfo> {
		return this._http
			.get<SerieInfo>(
				`${PATH}/${id}?append_to_response=videos%2Cimages%2Ccredits%2Csimilar%2Crecommendations&language=US`
			)
			.pipe(
				map((data)=>{
					if(data.videos){
						const trailer = data.videos.results.find((video) => (video.type = 'Trailer'))!;
						data.videos.results = trailer ? [trailer] : [];
					}
					return data;
				}),
				catchError(this.ErrorHandler),
				tap({
					error: (error)=>this.ShowError(error)
				})
			);
	}
	getSeriesByGenre(idGenre: number | string, page: number | string = 1): Observable<ManySeries> {
		return this._http.get<ManySeries>(`${PATH_DISCOVER}?with_genres=${idGenre}&page=${page}`)
		.pipe(
			catchError(this.ErrorHandler),
			tap({error: (error)=>this.ShowError(error)})
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
		return new Observable<never>(observer => observer.error(new Error(message)));
	}
}
export function ItemSeriesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
	if (!req.url.includes(PATH) && !req.url.includes(PATH_DISCOVER)) return next(req);
		const BASE_IMG = environment.API_TMDB_IMAGE;
		const newReq = req.clone();
		return next(newReq).pipe(
			map((data: any) => {
				const { body } = data;
				if (body) {
					if ('results' in body && Array.isArray(body.results)) {
						body.results
							.map((item: any) => {
								if(item.poster_path)
									item.poster_path = `${BASE_IMG}${item.poster_path}`;
								return item;
							});
					}
				}
				return data;
			})
		);
}
