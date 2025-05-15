import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PanelItemsComponent } from './panel-items.component';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { PaginatorModule } from 'primeng/paginator';
import { TabMenuModule } from 'primeng/tabmenu';



@NgModule({
  declarations: [PanelItemsComponent],
  imports: [
    CommonModule,
		CardModule,
		NgOptimizedImage,
		SkeletonModule,
		PaginatorModule,
		TabMenuModule
  ],
	exports: [PanelItemsComponent]
})
export class PanelItemsModule { }
