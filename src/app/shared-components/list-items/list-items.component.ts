import { Component, input, output } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesInfo } from 'src/app/movies/api/movie-info';
import { Movies } from 'src/app/movies/api/movies';
import { Series } from 'src/app/series/api/series';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {
  items = input.required<Observable<Movies | Series | MoviesInfo>>();
  title = input.required<String>();
  getId = output<number>();
  console = console;
}
