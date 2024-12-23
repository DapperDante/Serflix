import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
const BASE_URL_SCORE_MOVIE: string = environment._ApiDbScore;
@Injectable({
  providedIn: 'root'
})
export class ScoreMoviesService {
  private _http = inject(HttpClient);
  addNewReview(profile_id: number, movie_id: number, score: number, review: string): Observable<any>{
    const resp = {
      profile_id,
      movie_id,
      score,
      review
    }
    return this._http.post<any>(`${BASE_URL_SCORE_MOVIE}/movie/add`, resp);
  }
  getReviewsOfMovie(idMovie: string | number): Observable<any>{
    return this._http.get<any>(`${BASE_URL_SCORE_MOVIE}/movie/get/${idMovie}`);
  }
}
