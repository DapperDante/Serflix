import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ItemMoviesService } from '../../service/item-movies.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ManyMovies } from 'src/app/interface/movies.interface';
import { PageEvent } from 'src/app/layout/api/api-config';
@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
	standalone: false
})
export class HomeMoviesComponent {
  private readonly _movies = inject(ItemMoviesService);
  //Variable to tabmenu
  items: MenuItem[] = [
		{label: 'Popular', command: ()=>this.ChangeSection(1)},
		{label: 'Now playing', command: ()=>this.ChangeSection(2)},
		{label: 'Top reated', command: ()=>this.ChangeSection(3)},
		{label: 'Upcoming', command: ()=>this.ChangeSection(4)},
	];
  activeItem: MenuItem = this.items[0];
  movies$!: Observable<ManyMovies>;
  //It's for control of what show to user about types of movies
  indexSection: number = 1;
  //Those variables is for get control through the paginator
  indexPage: number = 1;
  totalMovies!: number;
  //How many movies will show for page
  numberOfMoviesForShow: number = 20;
  controlStatePaginator: number = 0;
  constructor(private router: Router, private currentRouter: ActivatedRoute){}
  ngOnInit(){
    this.movies$ = this._movies.getMoviesPopular()
    .pipe(map((movies)=>{
      //The api not allow request greater that 500 pages when do request, so put limit 500 page for navigate
      if(movies.total_pages > 500)
        this.totalMovies = 500*20;
      else
        this.totalMovies = movies.total_results;
      return movies;
    }));
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
  //For give control when update data of movies
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
