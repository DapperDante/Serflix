import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { MoviesInfo } from '../api/movie-info';
const PATH_DB = environment._ApiDbFavoriteMovies;
@Injectable({
  providedIn: 'any'
})
export class FavoriteMoviesService {
  private http = inject(HttpClient);
  getAllMoviesOfProfile(idProfile: number):Observable<MoviesInfo>{
    return this.http.get<MoviesInfo>(`${PATH_DB}/get-favorite/${idProfile}`).pipe(tap(console.log))
  }
  AddMovieFavorite(profile_id: number, movie_id: number):Observable<{msg: string, id: number}>{
    return this.http.post<{msg: string, id: number}>(`${PATH_DB}/add-favorite`, {profile_id, movie_id});
  }
  isMovieFavorite(idProfile: number | string, idMovie: number | string):Observable<{msg: string, id: number}>{
    return this.http.get<{msg: string, id: number}>(`${PATH_DB}/get-favorite/${idProfile}/${idMovie}`);
  }
  deleteFavoriteMovie(idDoc: number | string):Observable<void>{
    return this.http.delete<void>(`${PATH_DB}/delete-favorite/${idDoc}`);
  }
}
export function FavoriteMoviesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn):Observable<HttpEvent<unknown>>{
  if(req.url.includes(PATH_DB)){
    const BASE_URL_IMAGE = environment._BaseUrlImage;
    const newReq = req.clone();
    return next(newReq).pipe(
      map((data: any)=>{
        if(data.body){
          if('results' in data.body && Array.isArray(data.body.results)){
            data.body.results = data.body.results.filter((item: any)=>item.poster_path);
            data.body.results.map((item:any)=>{
              item.poster_path = BASE_URL_IMAGE+item.poster_path;
              item.backdrop_path = BASE_URL_IMAGE+item.backdrop_path;
              return item;
            });
          }
        }
        return data;
      })
    )
  }
  return next(req);
}
