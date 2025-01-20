import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { AppConfigModule } from './config/app.config.module';
import { AppLayoutComponent } from './app.layout.component';
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
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { HomeAccessComponent } from './components/home-access/home-access.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { CarouselModule } from 'primeng/carousel';
import { NgOptimizedImage } from '@angular/common';
import { ItemMoviesService } from '../movies/service/item-movies.service';
import { ItemSeriesService } from '../series/service/item-series.service';
import { FormsModule } from '@angular/forms';
@NgModule({
	declarations: [
		AppLayoutComponent,
		AppMenuProfileComponent,
		AppTopbarComponent,
		AppRightMenuComponent,
		AppMenuComponent,
		AppSidebarComponent,
		AppMenuitemComponent,
		AppFooterComponent,
		HomeAccessComponent
	],
	imports: [
		FormsModule,
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
		DialogModule,
		SkeletonModule,
		SharedComponentsModule,
		CarouselModule,
		NgOptimizedImage
	],
	providers: [
		provideHttpClient(withInterceptorsFromDi()),
		ItemMoviesService,
		ItemSeriesService
	],
})
export class AppLayoutModule {}
