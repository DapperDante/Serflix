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

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        provideHttpClient(
            withInterceptors([
                tmdbInterceptor,
                ItemMoviesInterceptor,
                ItemSeriesInterceptor,
                FavoriteMoviesInterceptor
            ])
        )
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
