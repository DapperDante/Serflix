import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { HomeSeriesComponent } from './components/home-series/home-series.component';
import { FavoriteSeriesService } from './service/favorite-series.service';
import { SerieInfoComponent } from './components/serie-info/serie-info.component';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ScoreSeriesService } from './service/score-series.service';
import { SkeletonModule } from 'primeng/skeleton';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
@NgModule({
	declarations: [HomeSeriesComponent, SerieInfoComponent],
	imports: [
		CommonModule,
		SeriesRoutingModule,
		SharedComponentsModule,
		SkeletonModule,
		RatingModule,
		ReactiveFormsModule,
		InputTextareaModule,
		YouTubePlayerModule,
		NgOptimizedImage,
		ButtonModule,
		DataViewModule,
		FormsModule
	],
	providers: [FavoriteSeriesService, ScoreSeriesService],
})
export class SeriesModule {}
