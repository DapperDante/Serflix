import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tmdbInterceptor } from './interceptors/tmdb.interceptor';
import { ItemMoviesInterceptor } from './movies/service/item-movies.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

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
                ItemMoviesInterceptor
            ])
        ),
        provideFirebaseApp(() => initializeApp(environment._firebaseConfig)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore())
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
