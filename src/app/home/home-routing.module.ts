import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component: LandingComponent }
])],
exports: [RouterModule]
})
export class HomeRoutingModule { }
