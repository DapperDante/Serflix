import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { BackgroundPostersModule } from '../background-posters/background-posters.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
	declarations: [ForgotPasswordComponent],
	imports: [
		CommonModule,
		ForgotPasswordRoutingModule,
		FloatLabelModule,
		ButtonModule,
		FormsModule,
		BackgroundPostersModule,
		InputTextModule
	],
})
export class ForgotPasswordModule {}
