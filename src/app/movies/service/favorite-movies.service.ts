import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MoviesInfo } from '../api/movie-info.api';
const PATH_DB = environment._ApiDbMovies;
@Injectable({
  providedIn: 'any'
})
export class FavoriteMoviesService {
  private http = inject(HttpClient);
  getAllMoviesOfProfile(idProfile: number):Observable<MoviesInfo>{
    return this.http.get<MoviesInfo>(`${PATH_DB}/get/${idProfile}`);
  }
  AddMovieFavorite(profile_id: number, movie_id: number):Observable<{msg: string, id: number}>{
    return this.http.post<{msg: string, id: number}>(`${PATH_DB}/add`, {profile_id, movie_id});
  }
  isMovieFavorite(idProfile: number | string, idMovie: number | string):Observable<{msg: string, id: number}>{
    return this.http.get<{msg: string, id: number}>(`${PATH_DB}/get/${idProfile}/${idMovie}`);
  }
  deleteFavoriteMovie(idDoc: number | string):Observable<void>{
    return this.http.delete<void>(`${PATH_DB}/delete/${idDoc}`);
  }
}
export function FavoriteMoviesInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn):Observable<HttpEvent<unknown>>{
  if(req.url.includes(PATH_DB)){
    const BASE_URL_IMAGE = environment._BaseUrlImage;
    const newReq = req.clone();
    return next(newReq).pipe(
      map((data: any)=>{
				const {body} = data;
        if(body){
          if('results' in body && Array.isArray(body.results)){
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
    )
  }
  return next(req);
}
