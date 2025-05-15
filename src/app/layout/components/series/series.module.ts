import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { HomeSeriesComponent } from './components/home-series/home-series.component';
import { FavoriteSeriesInterceptor, FavoriteSeriesService } from './service/favorite-series.service';
import { SerieInfoComponent } from './components/serie-info/serie-info.component';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ScoreSeriesService } from './service/score-series.service';
import { SkeletonModule } from 'primeng/skeleton';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ListItemsModule } from '../list-items/list-items.module';
import { PanelItemsModule } from '../panel-items/panel-items.module';
@NgModule({
	declarations: [HomeSeriesComponent, SerieInfoComponent],
	imports: [
		SeriesRoutingModule,
		CommonModule,
		ListItemsModule,
		PanelItemsModule,
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
	providers: [
		FavoriteSeriesService,
		ScoreSeriesService,
		provideHttpClient(
			withInterceptorsFromDi(),
			withInterceptors([
				FavoriteSeriesInterceptor
			])
		)
	],
})
export class SeriesModule {}
