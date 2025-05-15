import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LandingHomeComponent } from './landing-home.component';
import { LandingHomeRoutingModule } from './landing-home-routing.module';
import { BackgroundPostersComponent } from '../background-posters/background-posters.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { BackgroundPostersModule } from '../background-posters/background-posters.module';

@NgModule({
	declarations: [LandingHomeComponent],
	imports: [
		CommonModule,
		LandingHomeRoutingModule,
		ButtonModule,
		RippleModule,
		NgOptimizedImage,
		BackgroundPostersModule,
		AnimateOnScrollModule,
	],
})
export class LandingHomeModule {}
