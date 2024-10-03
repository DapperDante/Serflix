import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabMenuModule } from 'primeng/tabmenu'
import { HomeSeriesComponent } from './components/home-series/home-series.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SharedComponentsModule } from "../shared-components/shared-components.module";
@NgModule({
  declarations: [
    HomeSeriesComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    PaginatorModule,
    ProgressSpinnerModule,
    TabMenuModule,
    ToastModule,
    SharedComponentsModule
  ],
  providers: [
    MessageService
  ]
})
export class SeriesModule { }
