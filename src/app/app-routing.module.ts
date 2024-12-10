import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { SelectprofileComponent } from './layout/selectprofile.component';
import { isLogged, isNotSelectedProfile, viewContent } from './guards/log.guard';
import { HomeAccessComponent } from './home/components/home-access/home-access.component';
const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: 'home', component: AppLayoutComponent,
        children: [
            {path: '', component: HomeAccessComponent},
            { path: 'movies', data: {breadcrumb: 'Movies'},loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
            { path: 'series', data: {breadcrumb: 'Series'},loadChildren: () => import('./series/series.module').then(m => m.SeriesModule) },
            { path: 'profile', loadChildren: ()=> import('./profile/profile.module').then(m => m.ProfileModule), title: 'Profile'},
            { path: 'search-movies', data: {breadcrumb: 'search'}, loadChildren: ()=> import('./search/movies/search-movies.module').then(m=> m.SearchMoviesModule)},
            { path: 'search-series', data: {breadcrumb: 'search'}, loadChildren: ()=> import('./search/series/search-series.module').then(m=> m.SearchSeriesModule)}
        ],
        canActivate: [viewContent]
    },
    {
        path: 'profile',
        component: SelectprofileComponent,
        title: 'Profiles',
        canActivate: [isLogged]
    },
    { 
        path: '', 
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [isNotSelectedProfile]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }