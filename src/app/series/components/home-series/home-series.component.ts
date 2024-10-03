import { Component, inject } from '@angular/core';
import { ItemSeriesService } from '../../service/item-series.service';
import { MenuItem, MessageService } from "primeng/api";
import { Series } from '../../api/series';
import { map, Observable } from 'rxjs';
import { PageEvent } from 'src/app/layout/api/api-config';
import { Router } from '@angular/router';
import { FavoriteSeriesService } from '../../service/favorite-series.service';
import { ProfileService } from 'src/app/layout/service/profile.service';
//The ng-deep is for access to styles of component by primeng and change property
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
  activeItem!: MenuItem;
  data$!: Observable<Series>;
  //It's for control of what show to user about types of series
  indexSection: number = 1;
  //Those variables is for get control through the paginator 
  indexPage: number = 1;
  totalSeries!: number;
  //How many series will show for page
  numberOfSeriesForShow!: number;
  controlStatePaginator: number = 0;
  constructor(private router: Router, private message: MessageService){}
  ngOnInit(){
    if(!history.state.idProfile)
      this.router.navigate(['']);
    this.data$ = this._series.getSeriesPopular()
    .pipe(map((series)=>{
      if(series.total_pages > 500)
        this.totalSeries = 500*20;
      else
        this.totalSeries = series.total_results;
      this.numberOfSeriesForShow = 20;
      return series;
    }));
    this.items = [
      {label: 'Popular', command: ()=>this.ChangeSection(1)},
      {label: 'Airing today', command: ()=>this.ChangeSection(2)},
      {label: 'On the air', command: ()=>this.ChangeSection(3)},
      {label: 'Top reated', command: ()=>this.ChangeSection(4)}
    ]
    //It'll show first in the section
    this.activeItem = this.items[0];
  }
  ChangeSection(index:number){
    //Avoid repeat request if It's same page
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
  //For give control of when update data of request
  private UpdateRequest(index: number, page: number = 1){
    switch(index){
      case 1: 
        this.data$ = this._series.getSeriesPopular(page)
        .pipe(map((series)=>{
          if(series.total_pages > 500)
            this.totalSeries = 500*20;
          else
            this.totalSeries = series.total_results;
          return series;
        }));
        break;
      case 2:
        this.data$ = this._series.getSeriesAiringToday(page)
        .pipe(map((series)=>{
          if(series.total_pages > 500)
            this.totalSeries = 500*20;
          else
            this.totalSeries = series.total_results;
          return series;
        }));
        break;
      case 3:
        this.data$ = this._series.getSeriesOnTheAir(page)
        .pipe(map((series)=>{
          if(series.total_pages > 500)
            this.totalSeries = 500*20;
          else
            this.totalSeries = series.total_results;
          return series;
        }));
        break;
      case 4: 
        this.data$ = this._series.getSeriesTopRated(page)
        .pipe(map((series)=>{
          if(series.total_pages > 500)
            this.totalSeries = 500*20;
          else
            this.totalSeries = series.total_results;
          return series;
        }));
        break;
    }
  }
  AddSerieFavorite(event: {id: number, title: string, poster_path: string, genresId: number[]}){
    this._favorite.AddSerieFavorite(event.id, event.title, event.poster_path, event.genresId).then((data)=>{
      this._profile.UpdateProfileWithNewItemFavorite(data.id, 'refDocSeries');
      this.message.add({severity: 'success', detail: 'Serie add to favorites'})
    })
  }
}
