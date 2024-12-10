import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemFavorite } from 'src/app/api/item-favorite';
import { environment } from 'src/environments/environment.development';

// const PATH_DB = environment._ApiDbSeries;

@Injectable({
  providedIn: 'root'
})
export class FavoriteSeriesService {
  private idProfile: number | undefined;
  private idUser: number | undefined;
  private http = inject(HttpClient);
  constructor(private router: Router) { 
    this.idProfile = history.state.idProfile;
    this.idUser = history.state.idUser;
  }
  /* AddSerieFavorite(id: number, title: string, poster_path: string, genres: number[], idProfile: number):Observable<void>{
    let newPosterPath = '/'+poster_path.split('/').at(-1);
    return this.http.post<void>(`${PATH_DB}/add-favorite`, favorite);
  }
  getMoviesOfProfile():Observable<ItemFavorite[]>{
    return this.http.get<ItemFavorite[]>(`${PATH_DB}/get-all-favorite`);
  } */
}
