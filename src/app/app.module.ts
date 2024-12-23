import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tmdbInterceptor } from './interceptors/tmdb.interceptor';
import { ItemMoviesInterceptor } from './movies/service/item-movies.service';
import { ItemSeriesInterceptor } from './series/service/item-series.service';
import { FavoriteMoviesInterceptor } from './movies/service/favorite-movies.service';
import { SearchMoviesInterceptor } from './search/movies/search-movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoriteSeriesInterceptor } from './series/service/favorite-series.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        provideHttpClient(
            withInterceptors([
                tmdbInterceptor,
                ItemMoviesInterceptor,
                ItemSeriesInterceptor,
                FavoriteMoviesInterceptor,
								FavoriteSeriesInterceptor,
                SearchMoviesInterceptor
            ])
        )
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
