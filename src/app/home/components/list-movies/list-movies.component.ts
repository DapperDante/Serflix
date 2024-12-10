import { Component, Input, input } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/movies/api/movies';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html'
})
export class ListMoviesComponent {
  movies = input.required<Observable<Movies>>();
  title = input.required<String>();
}
