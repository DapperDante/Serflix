import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { SelectprofileComponent } from './layout/components/select-profile/select-profile.component';
import { isLogged, isNotLogged, isNotSelectedProfile, isSelectedProfile } from './guards/log.guard';
import { HomeAccessComponent } from './layout/components/home-access/home-access.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { error, notError } from './error/error.guard';
import { NotFoundComponent } from './not-found/not-found.component';
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
				loadChildren: () => import('./movies/movies.module').then((m) => m.MoviesModule),
			},
			{
				path: 'serie',
				loadChildren: () => import('./series/series.module').then((m) => m.SeriesModule),
			},
			{
				path: 'profile',
				loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
				title: 'Profile',
			},
			{
				path: 'search',
				loadChildren: () => import('./search/search.module').then((m) => m.SearchMoviesModule),
			},
			{
				path: 'categories',
				loadChildren: () => import('./categories/categories.module').then((m) => m.CategoriesModule)
			}
		],
		canActivate: [isLogged, isSelectedProfile, notError]
	},
	{
		path: 'profile',
		component: SelectprofileComponent,
		title: 'Profiles',
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
		loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
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
