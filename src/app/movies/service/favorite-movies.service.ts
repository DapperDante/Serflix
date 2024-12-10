import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../api/movies';
const PATH_DB = environment._ApiDbMovies;
const PATH_TMDB = environment._BaseUrlMovie;
@Injectable({
  providedIn: 'any'
})
export class FavoriteMoviesService {
  private http = inject(HttpClient);
  getAllMoviesOfProfile(idProfile: number){
    
  }
  AddMovieFavorite(idProfile: number, idMovie: number){
    return this.http.post<any>(`${PATH_DB}/add-favorite-movie`, {idProfile, idMovie});
  }
}
