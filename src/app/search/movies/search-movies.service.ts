import { HttpClient, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movies } from 'src/app/movies/api/movies';
import { environment } from 'src/environments/environment';
import { Genres } from '../api/genres';
import { Companies } from '../api/companies';
import { FilterMovie, sortBy } from '../api/filter';

const BASE_URL_SEARCH: string = environment._BaseUrlSearch;
const BASE_URL_DISCOVER: string = environment._BaseUrlDiscover;
const BASE_URL_GENRES: string = environment._BaseUrlGenre;

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {
  constructor(private http: HttpClient) { }
  SearchMovieForTitle(title: string, page: number = 1):Observable<Movies>{
    return this.http.get<Movies>(`${BASE_URL_SEARCH}/movie?query=${title}&include_adult=false&language=en-US&page=${page}`)
  }
  SearchAdvanceFilterMovie(sort: sortBy=sortBy.popularityDesc,page: number = 1, ...value: FilterMovie[]):Observable<Movies>{
    let values = value.flatMap((item) => (Array.isArray(item) ? item : Object.values(item))).toString().replaceAll(',', '');
    return this.http.get<Movies>(`${BASE_URL_DISCOVER}/movie&language=en-US&page=${page}&sort_by=${sort}${values}`);
  }
  getAllGenres():Observable<Genres>{
    return this.http.get<Genres>(`${BASE_URL_GENRES}/movie/list?language=en`);
  }
  getCompanyForTitle(title: string, page: number = 1):Observable<Companies>{
    return this.http.get<Companies>(`${BASE_URL_SEARCH}/company?query=${title}&page=${page}`)
  }
}
export function SearchMoviesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn):Observable<HttpEvent<unknown>>{
  if(req.url.includes(BASE_URL_SEARCH) || req.url.includes(BASE_URL_DISCOVER)){
    const BASE_URL_IMAGE = environment._BaseUrlImage;
    const newReq = req.clone();
    return next(newReq).pipe(
      map((data: any)=>{
        if(data.body){
          if('results' in data.body && Array.isArray(data.body.results)){
            data.body.results = data.body.filter((item:any)=>item.poster_path);
            data.body.results.map((item:any)=>{
              item.poster_path = BASE_URL_IMAGE+item.poster_path;
              return item;
            })
          }
        }
        return data;
    }))
  }
  return next(req);
}
