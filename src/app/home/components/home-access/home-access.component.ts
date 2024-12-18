import { Component, inject } from '@angular/core';
import { ItemMoviesService } from 'src/app/movies/service/item-movies.service';
import { map, Observable, tap } from 'rxjs';
import { Movies } from 'src/app/movies/api/movies';
import { Series } from 'src/app/series/api/series';
import { ItemSeriesService } from 'src/app/series/service/item-series.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesInfo } from 'src/app/movies/api/movie-info';
import { FavoriteMoviesService } from 'src/app/movies/service/favorite-movies.service';
@Component({
  selector: 'app-home-access',
  templateUrl: './home-access.component.html'
})
export class HomeAccessComponent {
  private _movies = inject(ItemMoviesService);
  private _series = inject(ItemSeriesService);
  private _movieFavorite = inject(FavoriteMoviesService);
  mainEntertaiment!: Observable<Movies>;
  moviesData!: Observable<Movies>;
  moviesFavoriteData!: Observable<MoviesInfo>;
  serieData!: Observable<Series>;
  waitingDataFavoriteMovies: boolean = false;
  idProfile!: number;
  constructor(private router: Router, private routerCurrent: ActivatedRoute){}
  ngOnInit(){
    this.idProfile = Number(localStorage.getItem('idProfile'));
    this.moviesData = this._movies.getMoviesPopular();
    this.serieData = this._series.getSeriesPopular();
    this.mainEntertaiment = this._movies.getMoviesTopReated()
    .pipe(
      map((data)=>{
        data.results = data.results.slice(0, 4);
        return data;
      }));
    this.moviesFavoriteData = this._movieFavorite.getAllMoviesOfProfile(this.idProfile);
  }
  SelectedMovie(idMovie: number){
    this.router.navigate(['movies', idMovie], {relativeTo: this.routerCurrent});
  }
  SelectedSerie(idSerie: number){
    this.router.navigate(['series', idSerie], {relativeTo: this.routerCurrent});
  }
}
