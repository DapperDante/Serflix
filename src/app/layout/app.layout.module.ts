import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { AppLayoutComponent } from './app.layout.component';
import { AppMenuProfileComponent } from './app.menuprofile.component';
import { AppTopbarComponent } from './app.topbar.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppSidebarComponent } from './app.sidebar.component';
import { AppFooterComponent } from './app.footer.component';
import { MenuModule } from 'primeng/menu';
import { SkeletonModule } from 'primeng/skeleton';
import { ItemMoviesInterceptor, ItemMoviesService } from './components/movies/service/item-movies.service';
import { ItemSeriesInterceptor, ItemSeriesService } from './components/series/service/item-series.service';
import { AppLayoutRoutingModule } from './app.layout-routing.module';
import { RecommendationService } from './service/recommendation.service';
import { ProfileService } from '../service/profile.service';
import { ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
@NgModule({
	declarations: [
		AppLayoutComponent,
		AppMenuProfileComponent,
		AppTopbarComponent,
		AppMenuComponent,
		AppSidebarComponent,
		AppMenuitemComponent,
		AppFooterComponent
	],
	imports: [
		AppLayoutRoutingModule,
		InputTextModule,
		FormsModule,
		ButtonModule,
		SidebarModule,
		MenuModule,
		SkeletonModule,
		RippleModule,
		CommonModule
	],
	providers: [
		provideHttpClient(
			withInterceptorsFromDi(),
			withInterceptors([
				ItemMoviesInterceptor,
				ItemSeriesInterceptor
			])),
		ItemMoviesService,
		ItemSeriesService,
		RecommendationService,
		ProfileService,
		ConfirmationService
	],
})
export class AppLayoutModule {}
