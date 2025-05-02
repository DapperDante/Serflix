import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { PanelItemsModule } from '../panel-items/panel-items.module';

@NgModule({
	declarations: [HomeCategoriesComponent],
	imports: [CommonModule, CategoriesRoutingModule, PanelItemsModule],
})
export class CategoriesModule {}
