import { ErrorHandler, NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tmdbInterceptor } from './interceptors/tmdb.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { backendInterceptor } from './interceptors/backend.interceptor';
import { GlobalErrorService } from './error/global-error.service';
import { ToastModule } from 'primeng/toast';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { errorHandlingInterceptor } from './error/error-handling.interceptor';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SelectProfileComponent } from './select-profile/select-profile.component';
import { DialogModule } from 'primeng/dialog';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkeletonModule } from 'primeng/skeleton';
import { RecommendationInterceptor } from './layout/service/recommendation.service';
import { ItemMoviesInterceptor } from './layout/components/movies/service/item-movies.service';
import { ItemSeriesInterceptor } from './layout/components/series/service/item-series.service';
import { FavoriteMoviesInterceptor } from './layout/components/movies/service/favorite-movies.service';
import { FavoriteSeriesInterceptor } from './layout/components/series/service/favorite-series.service';
import { SearchMoviesInterceptor } from './layout/components/search/search.service';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
	declarations: [
		AppComponent,
		ErrorPageComponent,
		SelectProfileComponent,
		NotFoundComponent,
  	WelcomeComponent
	],
	imports: [
		AppRoutingModule,
		AppLayoutModule,
		BrowserModule,
		BrowserAnimationsModule,
		ToastModule,
		DialogModule,
		SharedComponentsModule,
		InputTextModule,
		ButtonModule,
		DialogModule,
		ConfirmDialogModule,
		ReactiveFormsModule,
		SkeletonModule,
		FormsModule,
		NgOptimizedImage
	],
	providers: [
		{ provide: ErrorHandler, useClass: GlobalErrorService },
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		provideHttpClient(
			withInterceptors([
				tmdbInterceptor,
				backendInterceptor,
				ItemMoviesInterceptor,
				ItemSeriesInterceptor,
				FavoriteMoviesInterceptor,
				FavoriteSeriesInterceptor,
				SearchMoviesInterceptor,
				errorHandlingInterceptor,
				RecommendationInterceptor
			])
		),
		MessageService,
		ConfirmationService
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
