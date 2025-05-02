import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app.layout.component';
import { isNotSelectedProfile, isSelectedProfile } from '../guards/profile.guard';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./components/select-profile/select-profile.module').then((m) => m.SelectProfileModule),
		canActivate: [isNotSelectedProfile],
		title: 'Profile | Serflix'
	},
	{
		path: 'access',
		component: AppLayoutComponent,
		canActivateChild: [isSelectedProfile],
		children: [
			{
				path: '',
				loadChildren: () => import('./components/home-access/home-access.module').then((m) => m.HomeAccessModule),
				title: 'Home | Serflix'
			},
			{
				path: 'movie',
				loadChildren: () => import('./components/movies/movies.module').then((m) => m.MoviesModule),
			},
			{
				path: 'serie',
				loadChildren: () => import('./components/series/series.module').then((m) => m.SeriesModule),
			},
			{
				path: 'profile',
				loadChildren: () => import('./components/profile/profile.module').then((m) => m.ProfileModule),
			},
			{
				path: 'search',
				loadChildren: () => import('./components/search/search.module').then((m) => m.SearchMoviesModule),
			},
			{
				path: 'categories',
				loadChildren: () => import('./components/categories/categories.module').then((m) => m.CategoriesModule)
			},
			{
				path: 'setting',
				loadChildren: () => import('./components/setting-account/setting-account.module').then((m) => m.SettingAccountModule)
			},
		]
	},
]

@NgModule({
  imports: [
    CommonModule,
		RouterModule.forChild(routes)
  ]
})
export class AppLayoutRoutingModule { }
