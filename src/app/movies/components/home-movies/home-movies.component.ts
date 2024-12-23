import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ItemMoviesService } from '../../service/item-movies.service';
import { Movies } from '../../api/movies.api';
import { Observable, map, tap } from 'rxjs';
import { PageEvent } from '../../../layout/api/api-config'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styles: `
    ::ng-deep .card-custom .p-card-title{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .select-item:hover{
      transform: scale(1.05);
    }
  `,
})
export class HomeMoviesComponent {
  private _movies = inject(ItemMoviesService);
  //Variable to tabmenu
  items!: MenuItem[];
  activeItem!: MenuItem;
  movies$!: Observable<Movies>;
  //It's for control of what show to user about types of movies
  indexSection: number = 1;
  //Those variables is for get control through the paginator 
  indexPage: number = 1;
  totalMovies!: number;
  //How many movies will show for page
  numberOfMoviesForShow!: number;
  controlStatePaginator: number = 0;
  constructor(private router: Router, private currentRouter: ActivatedRoute){}
  ngOnInit(){
    this.movies$ = this._movies.getMoviesPopular()
    .pipe(map((movies)=>{
      //The api not allow request greater that 500 pages when do request, so put limit to 500 page for navigate
      if(movies.total_pages > 500)
        this.totalMovies = 500*20;
      else
        this.totalMovies = movies.total_results;
      this.numberOfMoviesForShow = 20;
      return movies;
    }));
    this.items = [
      {label: 'Popular', command: ()=>this.ChangeSection(1)},
      {label: 'Now playing', command: ()=>this.ChangeSection(2)},
      {label: 'Top reated', command: ()=>this.ChangeSection(3)},
      {label: 'Upcoming', command: ()=>this.ChangeSection(4)},
    ]
    //It'll show first in the section
    this.activeItem = this.items[0];
  }
  ChangeSection(index: number){
    if(this.indexSection == index)
      return;
    this.UpdateRequest(index);
    this.controlStatePaginator = 0;
    this.indexSection = index;
  }
  ChangePage(event: PageEvent){
    this.indexPage = event.page!+1;
    this.controlStatePaginator = event.first!;
    this.UpdateRequest(this.indexSection, this.indexPage);
  }
  SelectedMovie(idMovie: number){
    this.router.navigate([idMovie], {relativeTo: this.currentRouter});
  }
  //For give control of when update data of request
  private UpdateRequest(index: number, page: number = 1){
    switch(index){
      case 1: 
        this.movies$ = this._movies.getMoviesPopular(page)
        .pipe(map((movies)=>{
          if(movies.total_pages > 500)
            this.totalMovies = 500*20;
          else
            this.totalMovies = movies.total_results;
          return movies;
        }));
        break;
      case 2:
        this.movies$ = this._movies.getMoviesNowPlaying(page)
        .pipe(map((movies)=>{
          if(movies.total_pages > 500)
            this.totalMovies = 500*20;
          else
            this.totalMovies = movies.total_results;
          return movies;
        }));
        break;
      case 3:
        this.movies$ = this._movies.getMoviesTopReated(page)
        .pipe(map((movies)=>{
          if(movies.total_pages > 500)
            this.totalMovies = 500*20;
          else
            this.totalMovies = movies.total_results;
          return movies;
        }));
        break;
      case 4: 
        this.movies$ = this._movies.getMoviesUpcoming(page)
        .pipe(map((movies)=>{
          if(movies.total_pages > 500)
            this.totalMovies = 500*20;
          else
            this.totalMovies = movies.total_results;
          return movies;
        }));
        break;
    }
  }
}
