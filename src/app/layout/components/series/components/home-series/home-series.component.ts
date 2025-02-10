import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ItemSeriesService } from '../../service/item-series.service';
import { MenuItem } from "primeng/api";
import { map, Observable } from 'rxjs';
import { PageEvent } from 'src/app/layout/api/api-config';
import { ActivatedRoute, Router } from '@angular/router';
import { ManySeries } from 'src/app/interface/series.interface';
//The ng-deep is for access to styles of component by primeng and change properties
@Component({
  selector: 'app-home-series',
  templateUrl: './home-series.component.html',
	standalone: false,
  styles: `
    ::ng-deep .p-card-title{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .select-item:hover{
      transform: scale(1.05);
    }
  `,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSeriesComponent {
  private readonly _series = inject(ItemSeriesService);
  //Variable to tabmenu
  items: MenuItem[] = [
		{label: 'Popular', command: ()=>this.ChangeSection(1)},
		{label: 'Airing today', command: ()=>this.ChangeSection(2)},
		{label: 'On the air', command: ()=>this.ChangeSection(3)},
		{label: 'Top reated', command: ()=>this.ChangeSection(4)}
	];
  activeItem: MenuItem = this.items[0];
  series$!: Observable<ManySeries>;
  //It's for control of what show to user about types of series
  indexSection: number = 1;
  //Those variables is for get control through the paginator
  indexPage: number = 1;
  totalSeries!: number;
  //How many series will show for page
  numberOfSeriesForShow: number = 20;
  controlStatePaginator: number = 0;
  constructor(private router: Router, private currentRouter: ActivatedRoute){}
  ngOnInit(){
    this.series$ = this._series.getSeriesPopular()
    .pipe(map((series)=>{
      if(series.total_pages > 500)
        this.totalSeries = 500*20;
      else
        this.totalSeries = series.total_results;
      this.numberOfSeriesForShow = 20;
      return series;
    }));
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
  SelectedSerie(idSerie: number){
    this.router.navigate([idSerie], {relativeTo: this.currentRouter});
  }
  //For give control of when update data of request
  private UpdateRequest(index: number, page: number = 1){
    switch(index){
      case 1:
        this.series$ = this._series.getSeriesPopular(page)
        .pipe(map((series)=>{
          if(series.total_pages > 500)
            this.totalSeries = 500*20;
          else
            this.totalSeries = series.total_results;
          return series;
        }));
        break;
      case 2:
        this.series$ = this._series.getSeriesAiringToday(page)
        .pipe(map((series)=>{
          if(series.total_pages > 500)
            this.totalSeries = 500*20;
          else
            this.totalSeries = series.total_results;
          return series;
        }));
        break;
      case 3:
        this.series$ = this._series.getSeriesOnTheAir(page)
        .pipe(map((series)=>{
          if(series.total_pages > 500)
            this.totalSeries = 500*20;
          else
            this.totalSeries = series.total_results;
          return series;
        }));
        break;
      case 4:
        this.series$ = this._series.getSeriesTopRated(page)
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
}
