import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';

const routes: Routes = [
	{
		path: '',
		component: HomeCategoriesComponent,
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CategoriesRoutingModule {}
