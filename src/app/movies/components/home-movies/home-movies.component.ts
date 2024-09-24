import { Component, inject } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ItemMoviesService } from '../../service/item-movies.service';
import { Movies, MoviesWithDate } from '../../api/movies';
import { Observable } from 'rxjs';
import { PageEvent } from '../../../layout/api/api-config'
import { FavoriteMoviesService } from '../../service/favorite-movies.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/layout/service/profile.service';
@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styles: `
    ::ng-deep .p-card-title{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
})
export class HomeMoviesComponent {
  private _movies = inject(ItemMoviesService);
  private _favorite = inject(FavoriteMoviesService);
  private _profile = inject(ProfileService);
  items!: MenuItem[];
  activeItem!: MenuItem;
  data$!: Observable<MoviesWithDate | Movies>;
  indexSection: number = 1;
  indexPage: number = 1;
  loading: boolean = false;
  constructor(private router: Router, private message: MessageService){}
  ngOnInit(){
    if(!history.state.idProfile)
      this.router.navigate(['']);
    this.data$ = this._movies.getMoviesPopular();
    this.items = [
      {label: 'Popular', command: ()=>this.ChangeSection(1)},
      {label: 'Now playing', command: ()=>this.ChangeSection(2)},
      {label: 'Top reated', command: ()=>this.ChangeSection(3)},
      {label: 'Upcoming', command: ()=>this.ChangeSection(4)},
    ]
    this.activeItem = this.items[0];
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
  AddMovieFavorite(id: number, title: string, poster_path: string, genres: number[]){
    this._favorite.AddMovieFavorite(id, title, poster_path, genres).then((data)=>{
      this._profile.UpdateProfileWithNewItemFavorite(data.id, 'refDocMovies');
      this.message.add({severity: 'success', detail: 'Movie add to favorites'});
    });
  }
}
