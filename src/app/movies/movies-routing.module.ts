import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMoviesComponent } from './components/home-movies/home-movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMoviesComponent,
    title: 'Movies'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
