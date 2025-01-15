import { ErrorHandler, NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tmdbInterceptor } from './interceptors/tmdb.interceptor';
import { ItemMoviesInterceptor } from './movies/service/item-movies.service';
import { ItemSeriesInterceptor } from './series/service/item-series.service';
import { FavoriteMoviesInterceptor } from './movies/service/favorite-movies.service';
import { SearchMoviesInterceptor } from './search/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoriteSeriesInterceptor } from './series/service/favorite-series.service';
import { backendInterceptor } from './interceptors/backend.interceptor';
import { GlobalErrorService } from './error/global-error.service';
import { ToastModule } from 'primeng/toast';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { errorHandlingInterceptor } from './error/error-handling.interceptor';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SelectprofileComponent } from './layout/components/select-profile/select-profile.component';
import { DialogModule } from 'primeng/dialog';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent, ErrorPageComponent, SelectprofileComponent],
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
		ReactiveFormsModule
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
			])
		),
		MessageService,
		ConfirmationService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
