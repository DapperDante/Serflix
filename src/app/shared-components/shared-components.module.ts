import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PanelCardComponent } from './panel-card/panel-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ListItemsComponent } from './list-items/list-items.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CarouselModule } from 'primeng/carousel';



@NgModule({
  declarations: [PanelCardComponent, ListItemsComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    SkeletonModule,
    CarouselModule,
    NgOptimizedImage
  ],
  exports: [PanelCardComponent, ListItemsComponent]
})
export class SharedComponentsModule { }
