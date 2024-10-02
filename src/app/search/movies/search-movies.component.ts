import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Genre } from '../api/genres';
import { SearchMoviesService } from './search-movies.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html'
})
export class SearchMoviesComponent {
  private _search = inject(SearchMoviesService);
  //Only search through title of movie
  title = new FormGroup({
    title: new FormControl('')
  })
  //It's for advance filter for search
  filter = new FormGroup({
    genre: new FormControl<{name: string, id: number}>({name: '', id: 0})
  })
  data: Genre[] = [];
  ngOnInit(){
    this._search.getAllGenres().subscribe((genres)=>{
      genres.genres.forEach((genre)=>{
        this.data.push({name: genre.name, id: genre.id})
      })
    })
  }
  ShowResultOfTitle(){
    console.log(this.title);
  }
  ShowResultOfFilter(){
    console.log(this.filter);
  }
}
