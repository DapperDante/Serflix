import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSeriesComponent } from './search-series.component';
import { SearchSeriesRoutingModule } from './search-series-routing.module';
import { SearchSeriesService } from './search-series.service';



@NgModule({
  declarations: [
    SearchSeriesComponent
  ],
  imports: [
    CommonModule,
    SearchSeriesRoutingModule
  ],
  providers: [
    SearchSeriesService
  ]
})
export class SearchSeriesModule { }
