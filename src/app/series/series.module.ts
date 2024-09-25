import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DeferModule } from 'primeng/defer';
import { TabMenuModule } from 'primeng/tabmenu'
import { HomeSeriesComponent } from './components/home-series/home-series.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    HomeSeriesComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    CardModule,
    PaginatorModule,
    ButtonModule,
    ProgressSpinnerModule,
    DeferModule,
    TabMenuModule,
    ToastModule
  ],
  providers: [
    MessageService
  ]
})
export class SeriesModule { }
