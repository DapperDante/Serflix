import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PanelItemsComponent } from './panel-items/panel-items.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ListItemsComponent } from './list-items/list-items.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CarouselModule } from 'primeng/carousel';
import { ShowImagesComponent } from './show-images/show-images.component';
import { DialogModule } from 'primeng/dialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [PanelItemsComponent, ListItemsComponent, ShowImagesComponent],
  imports: [
		CommonModule,
		CardModule,
		ButtonModule,
		SkeletonModule,
		CarouselModule,
		NgOptimizedImage,
		DialogModule,
		TabMenuModule,
		PaginatorModule
	],
	exports: [
		PanelItemsComponent,
		ListItemsComponent,
		ShowImagesComponent
	]
})
export class SharedComponentsModule { }
