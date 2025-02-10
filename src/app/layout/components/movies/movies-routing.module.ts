import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMoviesComponent } from './components/home-movies/home-movies.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';

const routes: Routes = [
	{
		path: '',
		component: HomeMoviesComponent,
		title: 'Movies',
	},
	{
		path: ':id',
		component: MovieInfoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MoviesRoutingModule {}
