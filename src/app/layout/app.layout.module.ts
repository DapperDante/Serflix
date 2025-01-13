import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { AppConfigModule } from './config/app.config.module';
import { AppLayoutComponent } from './app.layout.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppMenuProfileComponent } from './app.menuprofile.component';
import { AppTopbarComponent } from './app.topbar.component';
import { AppRightMenuComponent } from './app.rightmenu.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppSidebarComponent } from './app.sidebar.component';
import { AppFooterComponent } from './app.footer.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { StyleClassModule } from 'primeng/styleclass';
import { SelectprofileComponent } from './components/select-profile/select-profile.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { HomeAccessComponent } from './components/home-access/home-access.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { CarouselModule } from 'primeng/carousel';
import { NgOptimizedImage } from '@angular/common';
import { ItemMoviesService } from '../movies/service/item-movies.service';
import { ItemSeriesService } from '../series/service/item-series.service';
@NgModule({
	declarations: [
		AppLayoutComponent,
		AppBreadcrumbComponent,
		AppMenuProfileComponent,
		AppTopbarComponent,
		AppRightMenuComponent,
		AppMenuComponent,
		AppSidebarComponent,
		AppMenuitemComponent,
		AppFooterComponent,
		SelectprofileComponent,
		HomeAccessComponent
	],
	imports: [
		BrowserModule,
		ToastModule,
		FormsModule,
		BrowserAnimationsModule,
		StyleClassModule,
		InputTextModule,
		SidebarModule,
		BadgeModule,
		RadioButtonModule,
		InputSwitchModule,
		TooltipModule,
		MegaMenuModule,
		RippleModule,
		RouterModule,
		ButtonModule,
		MenuModule,
		AppConfigModule,
		ProgressSpinnerModule,
		DialogModule,
		ConfirmDialogModule,
		SkeletonModule,
		SharedComponentsModule,
		CarouselModule,
		NgOptimizedImage
	],
	providers: [
		ConfirmationService,
		provideHttpClient(withInterceptorsFromDi()),
		ItemMoviesService,
		ItemSeriesService
	],
})
export class AppLayoutModule {}
