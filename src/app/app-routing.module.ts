import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { SelectProfileComponent } from './select-profile/select-profile.component';
import { isLogged, isNotLogged, isNotSelectedProfile, isSelectedProfile } from './guards/log.guard';
import { HomeAccessComponent } from './layout/components/home-access/home-access.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { error, notError } from './guards/error.guard';
const routerOptions: ExtraOptions = {
	anchorScrolling: 'enabled',
	scrollPositionRestoration: 'enabled',
};
const routes: Routes = [
	{
		path: 'home',
		component: AppLayoutComponent,
		children: [
			{ path: '', component: HomeAccessComponent },
			{
				path: 'movie',
				loadChildren: () => import('./layout/components/movies/movies.module').then((m) => m.MoviesModule),
			},
			{
				path: 'serie',
				loadChildren: () => import('./layout/components/series/series.module').then((m) => m.SeriesModule),
			},
			{
				path: 'profile',
				loadChildren: () => import('./layout/components/profile/profile.module').then((m) => m.ProfileModule),
				title: 'Profile',
			},
			{
				path: 'search',
				loadChildren: () => import('./layout/components/search/search.module').then((m) => m.SearchMoviesModule),
			},
			{
				path: 'categories',
				loadChildren: () => import('./layout/components/categories/categories.module').then((m) => m.CategoriesModule)
			},
			{
				path: 'setting',
				loadChildren: () => import('./layout/components/setting-account/setting-account.module').then((m) => m.SettingAccountModule)
			}
		],
		canActivate: [isLogged, isSelectedProfile, notError]
	},
	{
		path: 'profile',
		component: SelectProfileComponent,
		title: 'Profiles | Serflix',
		canActivate: [isLogged, isNotSelectedProfile, notError]
	},
	{
		path: 'error',
		component: ErrorPageComponent,
		title: 'Error',
		canActivate: [error]
	},
	{
		path: '',
		loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
		canActivate: [isNotLogged, notError]
	},
	{ path: '**',
		component: NotFoundComponent,
		title: 'Not Found'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, routerOptions)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
