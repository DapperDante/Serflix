import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackendInterceptorService } from './interceptors/backend.interceptor.service';
import { TmdbInterceptorService } from './interceptors/tmdb.interceptor.service';
import { ErrorInterceptorService } from './interceptors/error.interceptor.service';
@NgModule({
	declarations: [AppComponent],
	imports: [AppRoutingModule, BrowserAnimationsModule, BrowserModule, ToastModule],
	providers: [
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		{ provide: HTTP_INTERCEPTORS, useClass: BackendInterceptorService, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: TmdbInterceptorService, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
		provideHttpClient(),
		MessageService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
