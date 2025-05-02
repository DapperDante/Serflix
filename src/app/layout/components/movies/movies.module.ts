import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomeMoviesComponent } from './components/home-movies/home-movies.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { SkeletonModule } from 'primeng/skeleton';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { ScoreMoviesService } from './service/score-movies.service';
import { FavoriteMoviesInterceptor, FavoriteMoviesService } from './service/favorite-movies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ListItemsModule } from '../list-items/list-items.module';
import { PanelItemsModule } from '../panel-items/panel-items.module';
@NgModule({
	declarations: [HomeMoviesComponent, MovieInfoComponent],
	imports: [
		MoviesRoutingModule,
		CommonModule,
		SkeletonModule,
		NgOptimizedImage,
		YouTubePlayerModule,
		RatingModule,
		InputTextareaModule,
		CardModule,
		ButtonModule,
		DataViewModule,
		ReactiveFormsModule,
		FormsModule,
		ListItemsModule,
		PanelItemsModule
	],
	providers: [
		FavoriteMoviesService,
		provideHttpClient(
			withInterceptorsFromDi(),
			withInterceptors([
				FavoriteMoviesInterceptor
			])
		),
		ScoreMoviesService],
})
export class MoviesModule {}
