import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorImagesProfileComponent } from './selector-images-profile.component';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';



@NgModule({
  declarations: [SelectorImagesProfileComponent],
  imports: [
    CommonModule,
		DialogModule,
		SkeletonModule
  ],
	exports: [SelectorImagesProfileComponent]
})
export class SelectorImagesProfileModule { }
