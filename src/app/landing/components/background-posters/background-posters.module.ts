import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BackgroundPostersComponent } from './background-posters.component';



@NgModule({
  declarations: [BackgroundPostersComponent],
  imports: [
    CommonModule,
		NgOptimizedImage
  ],
	exports: [
		BackgroundPostersComponent
	]
})
export class BackgroundPostersModule { }
