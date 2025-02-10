import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSeriesComponent } from './components/home-series/home-series.component';
import { SerieInfoComponent } from './components/serie-info/serie-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeSeriesComponent,
    title: 'Series'
  },
	{
		path: ':id',
		component: SerieInfoComponent
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
