import { Component, inject } from '@angular/core';
import { SearchMoviesService } from './search-movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/movies/api/movies.api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  private _search = inject(SearchMoviesService);
  movies$!: Observable<Movies>
  constructor(private currentRoute: ActivatedRoute, private router: Router){}
  ngOnInit(){
    this.currentRoute.queryParams.subscribe((params)=>{
      const {query} = params;
      if(!query)
        this.router.navigate(['../'], {relativeTo: this.currentRoute});
      this.movies$ = this._search.getMoviesByQuery(query, 4, 5);
    })
  }
  SelectedMovie(idMovie: number){
    this.router.navigate(['../','movie', idMovie], {relativeTo: this.currentRoute})
  }
}
