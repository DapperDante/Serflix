import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ItemMoviesService } from '../../service/item-movies.service';
import { Movies, MoviesWithDate } from '../../api/movies';
import { Observable } from 'rxjs';
interface PageEvent{
  first?: number,
  rows?: number,
  page?: number,
  pageCount?: number
}
@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html'
})
export class HomeMoviesComponent {
  items!: MenuItem[];
  _movies = inject(ItemMoviesService);
  
  data$!: Observable<MoviesWithDate | Movies>;
  indexSection: number = 1;
  indexPage: number = 1;
  loading: boolean = false;
  ngOnInit(){
    this.data$ = this._movies.getMoviesPopular();
    this.items = [
      {label: 'Popular', command: ()=>this.ChangeSection(1)},
      {label: 'Now playing', command: ()=>this.ChangeSection(2)},
      {label: 'Top reated', command: ()=>this.ChangeSection(3)},
      {label: 'Upcoming', command: ()=>this.ChangeSection(4)},
    ]
  }
  ChangeSection(index: number){
    //Evitar que tenga que volver a recargar la misma seccion
    if(this.indexSection == index)
      return;
    switch(index){
      case 1: 
        this.data$ = this._movies.getMoviesPopular();
        break;
      case 2:
        this.data$ = this._movies.getMoviesNowPlaying();
        break;
      case 3:
        this.data$ = this._movies.getMoviesTopReated();
        break;
      case 4: 
        this.data$ = this._movies.getMoviesUpcoming();
        break;
    }
    this.indexSection = index;
  }
  ChangePage(event: PageEvent){
    this.indexPage = event.page!+1;
    console.log(this.indexPage);
  }
  AddMovieFavorite(){

  }
}
