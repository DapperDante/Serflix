import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeAccessRoutingModule } from './home-access-routing.module';
import { HomeAccessComponent } from './home-access.component';
import { CarouselModule } from 'primeng/carousel';
import { SkeletonModule } from 'primeng/skeleton';
import { ListItemsModule } from '../list-items/list-items.module';

@NgModule({
	declarations: [HomeAccessComponent],
	imports: [
		CommonModule,
		HomeAccessRoutingModule,
		CarouselModule,
		NgOptimizedImage,
		SkeletonModule,
		ListItemsModule
	],
})
export class HomeAccessModule {}
