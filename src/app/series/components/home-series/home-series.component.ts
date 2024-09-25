import { Component, inject } from '@angular/core';
import { ItemSeriesService } from '../../service/item-series.service';
import { MenuItem, MessageService } from "primeng/api";
import { Series } from '../../api/series';
import { Observable } from 'rxjs';
import { PageEvent } from 'src/app/layout/api/api-config';
import { Router } from '@angular/router';
import { FavoriteSeriesService } from '../../service/favorite-series.service';
import { ProfileService } from 'src/app/layout/service/profile.service';
@Component({
  selector: 'app-home-series',
  templateUrl: './home-series.component.html',
  styles: `
    ::ng-deep .p-card-title{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .select-item:hover{
      transform: scale(1.05);
    }
  `
})
export class HomeSeriesComponent {
  private _series = inject(ItemSeriesService);
  private _favorite = inject(FavoriteSeriesService);
  private _profile = inject(ProfileService);
  items!: MenuItem[];
  data$!: Observable<Series>;
  indexSection: number = 1;
  indexPage: number = 1;
  loading: boolean = false;
  constructor(private router: Router, private message: MessageService){}
  ngOnInit(){
    if(!history.state.idProfile)
      this.router.navigate(['']);
    this.data$ = this._series.getSeriesPopular();
    this.items = [
      {label: 'Popular', command: ()=>this.ChangeSection(1)},
      {label: 'Airing today', command: ()=>this.ChangeSection(2)},
      {label: 'On the air', command: ()=>this.ChangeSection(3)},
      {label: 'Top reated', command: ()=>this.ChangeSection(4)}
    ]
  }
  ChangeSection(index:number){
    if(this.indexSection == index)
      return;
    switch(index){
      case 1: 
        this.data$ = this._series.getSeriesPopular();
        break;
      case 2:
        this.data$ = this._series.getSeriesAiringToday();
        break;
      case 3:
        this.data$ = this._series.getSeriesOnTheAir();
        break;
      case 4: 
        this.data$ = this._series.getSeriesTopRated();
        break;
    }
    this.indexSection = index;
  }
  ChangePage(event: PageEvent){
    this.indexPage = event.page!+1;
    console.log(this.indexPage);
  }
  AddSerieFavorite(id:number, title: string, poster_path: string, genres: number[]){
    this._favorite.AddSerieFavorite(id, title, poster_path, genres).then((data)=>{
      this._profile.UpdateProfileWithNewItemFavorite(data.id, 'refDocSeries');
      this.message.add({severity: 'success', detail: 'Serie add to favorites'})
    })
  }
}
