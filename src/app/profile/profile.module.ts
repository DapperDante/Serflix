import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
@NgModule({
	declarations: [ProfileComponent],
	imports: [
		CommonModule,
		ProfileRoutingModule,
		ProgressSpinnerModule,
		ChartModule,
		DialogModule,
		ToastModule,
		SkeletonModule,
		NgOptimizedImage,
		ChartModule,
		InputTextModule,
		FloatLabelModule,
		IconFieldModule,
		InputIconModule,
		ButtonModule,
		SharedComponentsModule
	],
	providers: [MessageService],
})
export class ProfileModule {}
