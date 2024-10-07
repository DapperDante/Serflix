import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
@NgModule({
  declarations: [
    HomeMoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    PaginatorModule,
    ProgressSpinnerModule,
    TabMenuModule,
    ToastModule,
    SharedComponentsModule
],
  providers: [
    MessageService,
    FavoriteMoviesService,
    ItemMoviesService
  ]
})
export class MoviesModule { }
