import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
	declarations: [HomeCategoriesComponent],
	imports: [CommonModule, CategoriesRoutingModule, SharedComponentsModule],
})
export class CategoriesModule {}
