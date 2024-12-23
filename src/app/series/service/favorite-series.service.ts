import { HttpClient, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SeriesInfo } from '../api/serie-info.api';

const PATH_DB = environment._ApiDbSeries;

@Injectable({
	providedIn: 'root',
})
export class FavoriteSeriesService {
	private http = inject(HttpClient);
	getAllSeriesOfProfile(idProfile: number): Observable<SeriesInfo> {
		return this.http.get<SeriesInfo>(`${PATH_DB}/get/${idProfile}`).pipe(tap(console.log));
	}
	AddSerieFavorite(profile_id: number, serie_id: number): Observable<{ msg: string; id: number }> {
		return this.http.post<{ msg: string; id: number }>(`${PATH_DB}/add`, {
			profile_id,
			serie_id,
		});
	}
	isSerieFavorite(idProfile: number | string, idSerie: number | string): Observable<{ msg: string; id: number }> {
		return this.http.get<{ msg: string; id: number }>(`${PATH_DB}/get/${idProfile}/${idSerie}`);
	}
	deleteFavoriteSerie(idDoc: number | string): Observable<void> {
		return this.http.delete<void>(`${PATH_DB}/delete/${idDoc}`);
	}
}
export function FavoriteSeriesInterceptor(
	req: HttpRequest<unknown>,
	next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
	if (req.url.includes(PATH_DB)) {
		const BASE_URL_IMAGE = environment._BaseUrlImage;
		const newReq = req.clone();
		return next(newReq).pipe(
			map((data: any) => {
				const { body } = data;
				if (body) {
					if ('results' in body && Array.isArray(body.results)) {
						body.results = body.results
						.filter((item:any)=>item.poster_path)
						.map((item:any)=>{
							item.poster_path = BASE_URL_IMAGE+item.poster_path;
							return item;
						})
					}
				}
				return data;
			})
		);
	}
	return next(req);
}
