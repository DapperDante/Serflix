import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectProfileComponent } from './select-profile.component';

const routes: Routes = [
	{
		path: '',
		component: SelectProfileComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectProfileRoutingModule { }
