import { HttpClient, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Movies, MoviesWithDate } from '../api/movies';
import { environment } from 'src/environments/environment';
const BASE_URL_MOVIES: string = environment._BaseUrlMovie;
@Injectable({
  providedIn: 'any'
})
export class ItemMoviesService {
  constructor(private _http: HttpClient) { }
  getMoviesNowPlaying(page: number = 1):Observable<MoviesWithDate>{
    return this._http.get<MoviesWithDate>(`${BASE_URL_MOVIES}/now_playing?language=en-US&page=${page}`);
  }
  getMoviesPopular(page: number = 1):Observable<Movies>{
    return this._http.get<Movies>(`${BASE_URL_MOVIES}/popular?language=en-US&page=${page}`);
  }
  getMoviesTopReated(page: number = 1):Observable<Movies>{
    return this._http.get<Movies>(`${BASE_URL_MOVIES}/top_rated?language=en-US&page=${page}`);
  }
  getMoviesUpcoming(page: number = 1){
    return this._http.get<Movies>(`${BASE_URL_MOVIES}/upcoming?language=en-US&page=${page}`)
  }
}
export function ItemMoviesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn):Observable<HttpEvent<unknown>>{
  if(req.url.includes(BASE_URL_MOVIES)){
    const BASE_URL_IMAGE = environment._BaseUrlImage;
    const newReq = req.clone();
    return next(newReq).pipe(
      map((data: any)=>{
        if(data.body){
          if('results' in data.body && Array.isArray(data.body.results)){
            //It's discard movies without url in poster_path
            data.body.results = data.body.results.filter((item:any)=>item.poster_path);
            data.body.results.map((item: any)=>{
              item.poster_path = BASE_URL_IMAGE+item.poster_path;
              return item;
            })
          }
        }
        return data
      }),
      )
  }
  return next(req);
}
