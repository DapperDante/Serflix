import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DeferModule } from 'primeng/defer';
import { HomeMoviesComponent } from './components/home-movies/home-movies.component';
import { TabMenuModule } from 'primeng/tabmenu'
@NgModule({
  declarations: [
    HomeMoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CardModule,
    PaginatorModule,
    ButtonModule,
    ProgressSpinnerModule,
    DeferModule,
    TabMenuModule
  ]
})
export class MoviesModule { }
