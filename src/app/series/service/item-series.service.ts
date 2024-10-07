import { HttpClient, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Series } from '../api/series';
import { Observable, map, tap} from "rxjs";
import { environment } from 'src/environments/environment';
const BASE_URL_SERIES: string = environment._BaseUrlSerie;
@Injectable({
  providedIn: 'any'
})
export class ItemSeriesService {
  private _http = inject(HttpClient);
  getSeriesAiringToday(page: number = 1):Observable<Series>{
    return this._http.get<Series>(`${BASE_URL_SERIES}/airing_today?language=en-US&page=${page}`);
  }
  getSeriesOnTheAir(page: number = 1):Observable<Series>{
    return this._http.get<Series>(`${BASE_URL_SERIES}/on_the_air?language=en-US&page=${page}`);
  }
  getSeriesPopular(page: number = 1):Observable<Series>{
    return this._http.get<Series>(`${BASE_URL_SERIES}/popular?language=en-US&page=${page}`);
  }
  getSeriesTopRated(page: number = 1):Observable<Series>{
    return this._http.get<Series>(`${BASE_URL_SERIES}/top_rated?language=en-US&page=${page}`);
  }
}
export function ItemSeriesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn):Observable<HttpEvent<unknown>>{
  if(req.url.includes(BASE_URL_SERIES)){
    const BASE_URL_IMAGE = environment._BaseUrlImage;
    const newReq = req.clone();
    return next(newReq).pipe(
      map((data:any)=>{
        if(data.body){
          if('results' in data.body && Array.isArray(data.body.results)){
            data.body.results = data.body.results.filter((item:any)=>item.poster_path);
            data.body.results.map((item:any)=>{
              item.poster_path = BASE_URL_IMAGE + item.poster_path;
              return item;
            })
          }
        }
        return data;
      })
    )
  }
  return next(req);
}
