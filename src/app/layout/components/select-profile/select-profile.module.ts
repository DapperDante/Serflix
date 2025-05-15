import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectProfileRoutingModule } from './select-profile-routing.module';
import { SelectProfileComponent } from './select-profile.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectorImagesProfileModule } from '../selector-images-profile/selector-images-profile.module';
import { SkeletonModule } from 'primeng/skeleton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
	declarations: [SelectProfileComponent, WelcomeComponent],
	imports: [
		CommonModule,
		SelectProfileRoutingModule,
		DialogModule,
		InputTextModule,
		FormsModule,
		ButtonModule,
		SelectorImagesProfileModule,
		SkeletonModule,
		ConfirmDialogModule,
	],
})
export class SelectProfileModule {}
