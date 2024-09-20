import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { SelectprofileComponent } from './layout/selectprofile.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: 'home', component: AppLayoutComponent,
        children: [
            { path: 'movies', data: {breadcrumb: 'Movies'},loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
            { path: 'series', data: {breadcrumb: 'Series'},loadChildren: () => import('./series/series.module').then(m => m.SeriesModule) },
        ],
        ...canActivate(()=>redirectUnauthorizedTo(['']))
    },
    {
        path: 'profile',
        component: SelectprofileComponent,
        title: 'Profile',
        ...canActivate(()=>redirectUnauthorizedTo(['']))
    },
    { 
        path: '', 
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        ...canActivate(()=>redirectLoggedInTo(['home']))
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }