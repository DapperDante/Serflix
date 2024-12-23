import { Component, inject } from '@angular/core';
import { ItemMoviesService } from 'src/app/movies/service/item-movies.service';
import { map, Observable } from 'rxjs';
import { Movies } from 'src/app/movies/api/movies.api';
import { Series } from 'src/app/series/api/series';
import { ItemSeriesService } from 'src/app/series/service/item-series.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesInfo } from 'src/app/movies/api/movie-info.api';
import { FavoriteMoviesService } from 'src/app/movies/service/favorite-movies.service';
import { FavoriteSeriesService } from 'src/app/series/service/favorite-series.service';
import { SeriesInfo } from 'src/app/series/api/serie-info.api';
@Component({
  selector: 'app-home-access',
  templateUrl: './home-access.component.html'
})
export class HomeAccessComponent {
  private _movies = inject(ItemMoviesService);
  private _series = inject(ItemSeriesService);
  private _movieFavorite = inject(FavoriteMoviesService);
	private _serieFavorite = inject(FavoriteSeriesService);
  mainEntertaiment$!: Observable<Movies>;
  moviesData$!: Observable<Movies>;
  moviesFavoriteData$!: Observable<MoviesInfo>;
	seriesFavoriteData$!: Observable<SeriesInfo>;
  serieData$!: Observable<Series>;
  waitingDataFavoriteMovies: boolean = false;
  idProfile!: number;
  constructor(private router: Router, private routerCurrent: ActivatedRoute){}
  ngOnInit(){
    this.idProfile = Number(localStorage.getItem('idProfile'));
    this.moviesData$ = this._movies.getMoviesPopular();
    this.serieData$ = this._series.getSeriesPopular();
    this.mainEntertaiment$ = this._movies.getMoviesTopReated()
    .pipe(
      map((data)=>{
        data.results = data.results.slice(0, 4);
        return data;
      }));
    this.moviesFavoriteData$ = this._movieFavorite.getAllMoviesOfProfile(this.idProfile);
		this.seriesFavoriteData$ = this._serieFavorite.getAllSeriesOfProfile(this.idProfile);
  }
  SelectedMovie(idMovie: number){
    this.router.navigate(['movie', idMovie], {relativeTo: this.routerCurrent});
  }
  SelectedSerie(idSerie: number){
    this.router.navigate(['serie', idSerie], {relativeTo: this.routerCurrent});
  }
}
