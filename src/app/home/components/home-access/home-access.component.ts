import { Component, inject } from '@angular/core';
import { ItemMoviesService } from 'src/app/movies/service/item-movies.service';
import { map, Observable } from 'rxjs';
import { Movies } from 'src/app/movies/api/movies';
import { Series } from 'src/app/series/api/series';
import { ItemSeriesService } from 'src/app/series/service/item-series.service';
@Component({
  selector: 'app-home-access',
  templateUrl: './home-access.component.html'
})
export class HomeAccessComponent {
  private _movies = inject(ItemMoviesService);
  private _series = inject(ItemSeriesService);
  mainEntertaiment!: Observable<Movies>;
  moviesData!: Observable<Movies>;
  serieData!: Observable<Series>;
  console = console;
  ngOnInit(){
    this.moviesData = this._movies.getMoviesPopular();
    this.serieData = this._series.getSeriesPopular();
    this.mainEntertaiment = this._movies.getMoviesTopReated()
    .pipe(
      map((data)=>{
        data.results = data.results.slice(0, 4);
        return data;
      }));
  }
}
