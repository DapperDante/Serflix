import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSeriesComponent } from './search-series.component';

const routes: Routes = [
  {path: '', component: SearchSeriesComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchSeriesRoutingModule { }
