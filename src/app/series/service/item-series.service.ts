import { HttpClient, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Series } from '../api/series';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SerieInfo } from '../api/serie-info.api';
const BASE_URL_SERIES: string = environment._ApiTmdb + '/tv';
@Injectable({
	providedIn: 'root',
})
export class ItemSeriesService {
	private _http = inject(HttpClient);
	getSeriesAiringToday(page: number = 1): Observable<Series> {
		return this._http.get<Series>(`${BASE_URL_SERIES}/airing_today?language=US&page=${page}`);
	}
	getSeriesOnTheAir(page: number = 1): Observable<Series> {
		return this._http.get<Series>(`${BASE_URL_SERIES}/on_the_air?language=US&page=${page}`);
	}
	getSeriesPopular(page: number = 1): Observable<Series> {
		return this._http.get<Series>(`${BASE_URL_SERIES}/popular?language=US&page=${page}`);
	}
	getSeriesTopRated(page: number = 1): Observable<Series> {
		return this._http.get<Series>(`${BASE_URL_SERIES}/top_rated?language=US&page=${page}`);
	}
	getSerieById(idSerie: number): Observable<SerieInfo> {
		return this._http
			.get<SerieInfo>(
				`${BASE_URL_SERIES}/${idSerie}?append_to_response=videos%2Cimages%2Ccredits%2Csimilar%2Crecommendations&language=US`
			)
			.pipe(tap(console.log));
	}
}
export function ItemSeriesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
	if (req.url.includes(BASE_URL_SERIES)) {
		const BASE_URL_IMAGE = environment._BaseUrlImage;
		const newReq = req.clone();
		return next(newReq).pipe(
			map((data: any) => {
				const { body } = data;
				if (body) {
					if ('results' in body && Array.isArray(body.results)) {
						body.results = body.results
							.filter((item: any) => item.poster_path)
							.map((item: any) => {
								item.poster_path = BASE_URL_IMAGE + item.poster_path;
								return item;
							});
					} else {
						body.poster_path = BASE_URL_IMAGE + body.poster_path;
						if ('similar' in body && Array.isArray(body.similar.results)) {
							body.similar.results = body.similar.results
								.filter((item: any) => item.poster_path)
								.map((item: any) => {
									item.poster_path = BASE_URL_IMAGE + item.poster_path;
									return item;
								});
						}
						if ('recommendations' in body && Array.isArray(body.recommendations.results)) {
							body.recommendations.results = body.recommendations.results
								.filter((item: any) => item.poster_path)
								.map((item: any) => {
									item.poster_path = BASE_URL_IMAGE + item.poster_path;
									return item;
								});
						}
					}
				}
				return data;
			})
		);
	}
	return next(req);
}
