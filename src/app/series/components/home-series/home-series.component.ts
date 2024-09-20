import { Component, inject } from '@angular/core';
import { ItemSeriesService } from '../../service/item-series.service';
import { MenuItem } from "primeng/api";
import { Series } from '../../api/series';
import { Observable } from 'rxjs';
import { PageEvent } from 'src/app/layout/api/api-config';
@Component({
  selector: 'app-home-series',
  templateUrl: './home-series.component.html'
})
export class HomeSeriesComponent {
  items!: MenuItem[];
  _series = inject(ItemSeriesService);
  data$!: Observable<Series>;
  indexSection: number = 1;
  indexPage: number = 1;
  loading: boolean = false;
  ngOnInit(){
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
  AddSerieFavorite(){
    
  }
}
