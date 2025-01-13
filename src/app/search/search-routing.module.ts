import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search.component';

const router: Routes = [
  {path: '', component: SearchComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(router)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchMoviesRoutingModule { }
