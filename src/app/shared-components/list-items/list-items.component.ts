import { animate, style, transition, trigger } from '@angular/animations';
import { Component, input, output } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesInfo } from 'src/app/movies/api/movie-info.api';
import { Movies } from 'src/app/movies/api/movies.api';
import { SeriesInfo } from 'src/app/series/api/serie-info.api';
import { Series } from 'src/app/series/api/series';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  animations: [
    trigger('showItems', [
      transition(':enter', [
        style({opacity: 0}),
        animate(2500, style({opacity: 1}))
      ])
    ])
  ]
})
export class ListItemsComponent {
  items = input.required<Observable<Movies | Series | MoviesInfo | SeriesInfo>>();
  title = input.required<String>();
  getId = output<number>();
}
