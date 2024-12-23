import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabMenuModule } from 'primeng/tabmenu'
import { HomeSeriesComponent } from './components/home-series/home-series.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { ItemSeriesService } from './service/item-series.service';
import { FavoriteSeriesService } from './service/favorite-series.service';
import { SerieInfoComponent } from './components/serie-info/serie-info.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    HomeSeriesComponent,
    SerieInfoComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    PaginatorModule,
    ProgressSpinnerModule,
    TabMenuModule,
    ToastModule,
    SharedComponentsModule,
		NgOptimizedImage,
		YouTubePlayerModule,
		ButtonModule,
		RatingModule,
		ReactiveFormsModule,
		DataViewModule,
		SkeletonModule,
		InputTextareaModule
  ],
  providers: [
    MessageService,
    FavoriteSeriesService,
    ItemSeriesService
  ]
})
export class SeriesModule { }
