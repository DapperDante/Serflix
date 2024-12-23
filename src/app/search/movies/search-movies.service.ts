import { HttpClient, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movies } from 'src/app/movies/api/movies.api';
import { environment } from 'src/environments/environment.development';
const PATH_DB = environment._ApiDbSearch;
@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {
  constructor(private _http: HttpClient) { }
  getMoviesByQuery(query: string, times: number | string, manyItemsRelation: number | string):Observable<Movies>{
      return this._http.get<Movies>(`${PATH_DB}/movies?query=${query}&times=${times}&manyItemsRelation=${manyItemsRelation}`);
  }
}
export function SearchMoviesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn):Observable<HttpEvent<unknown>>{
  if(req.url.includes(PATH_DB)){
    const BASE_URL_IMAGE = environment._BaseUrlImage;
    const newReq = req.clone();
    return next(newReq).pipe(
      map((data:any)=>{
        if(data.body){
          if('results' in data.body){
            data.body.results.map((value: any)=>{
              value.poster_path = BASE_URL_IMAGE+value.poster_path;
              value.backdrop_path = BASE_URL_IMAGE+value.backdrop_path;
              return value;
            })
          }
        }
        return data;
      })
    );
  }
  return next(req);
}
