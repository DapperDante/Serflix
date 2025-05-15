import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectorImagesProfileModule } from '../selector-images-profile/selector-images-profile.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
@NgModule({
	declarations: [ProfileComponent],
	imports: [
		CommonModule,
		ProfileRoutingModule,
		ChartModule,
		DialogModule,
		SkeletonModule,
		NgOptimizedImage,
		InputTextModule,
		FloatLabelModule,
		IconFieldModule,
		InputIconModule,
		ButtonModule,
		ReactiveFormsModule,
		SelectorImagesProfileModule,
		FormsModule
	],
	providers: [
		provideHttpClient(
			withInterceptorsFromDi()
		)
	]
})
export class ProfileModule {}
