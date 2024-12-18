import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HomeMoviesComponent } from './components/home-movies/home-movies.component';
import { TabMenuModule } from 'primeng/tabmenu'
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { FavoriteMoviesService } from './service/favorite-movies.service';
import { ItemMoviesService } from './service/item-movies.service';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { SkeletonModule } from 'primeng/skeleton';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { RatingModule } from "primeng/rating";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeMoviesComponent,
    MovieInfoComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    PaginatorModule,
    ProgressSpinnerModule,
    TabMenuModule,
    ToastModule,
    SkeletonModule,
    SharedComponentsModule,
    NgOptimizedImage,
    YouTubePlayerModule,
    RatingModule,
    InputTextareaModule,
    DataViewModule,
    ButtonModule,
    ReactiveFormsModule
],
  providers: [
    MessageService,
    FavoriteMoviesService,
    ItemMoviesService
  ]
})
export class MoviesModule { }
