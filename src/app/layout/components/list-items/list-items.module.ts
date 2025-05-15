import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ListItemsComponent } from './list-items.component';
import { CarouselModule } from 'primeng/carousel';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
	declarations: [ListItemsComponent],
	imports: [CommonModule, CarouselModule, NgOptimizedImage, SkeletonModule],
	exports: [ListItemsComponent],
})
export class ListItemsModule {}
