import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { isLogged, isNotLogged } from './guards/log.guard';
import { error, notError } from './guards/error.guard';

const routerOptions: ExtraOptions = {
	anchorScrolling: 'enabled',
	scrollPositionRestoration: 'enabled',
};

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
		canActivate: [isNotLogged, notError],
	},
	{
		path: 'home',
		loadChildren: () => import('./layout/app.layout.module').then((m) => m.AppLayoutModule),
		canActivate: [isLogged, notError],
	},
	{
		path: 'error',
		loadChildren: () => import('./error/error.module').then((m) => m.ErrorModule),
		canActivate: [error],
	},
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, routerOptions)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
