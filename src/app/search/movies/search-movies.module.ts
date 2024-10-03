import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMoviesComponent } from './search-movies.component';
import { SearchMoviesRoutingModule } from './search-movies-routing.module';
import { SearchSeriesService } from '../series/search-series.service';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@NgModule({
  declarations: [
    SearchMoviesComponent
  ],
  imports: [
    CommonModule,
    SearchMoviesRoutingModule,
    InputIconModule, 
    IconFieldModule,
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  providers: [
    SearchSeriesService
  ]
})
export class SearchMoviesModule { }
