import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomeMoviesComponent } from './components/home-movies/home-movies.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { SkeletonModule } from 'primeng/skeleton';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ScoreMoviesService } from './service/score-movies.service';
import { FavoriteMoviesService } from './service/favorite-movies.service';
@NgModule({
	declarations: [HomeMoviesComponent, MovieInfoComponent],
	imports: [
		CommonModule,
		MoviesRoutingModule,
		SkeletonModule,
		SharedComponentsModule,
		NgOptimizedImage,
		YouTubePlayerModule,
		RatingModule,
		InputTextareaModule,
		ButtonModule,
		DataViewModule,
		ReactiveFormsModule,
	],
	providers: [FavoriteMoviesService, ScoreMoviesService],
})
export class MoviesModule {}
