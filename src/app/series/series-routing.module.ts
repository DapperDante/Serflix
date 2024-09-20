import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSeriesComponent } from './components/home-series/home-series.component';

const routes: Routes = [
  {
    path: '',
    component: HomeSeriesComponent,
    title: 'Series'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SeriesRoutingModule { }
