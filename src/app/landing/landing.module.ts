import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
@NgModule({
	declarations: [
		LandingComponent,
		LoginComponent,
		RegisterComponent,
		ForgotPasswordComponent,
  	ResetPasswordComponent
	],
	imports: [
		FormsModule,
		CommonModule,
		LandingRoutingModule,
		ButtonModule,
		InputTextModule,
		AppConfigModule,
		RouterModule,
		PasswordModule,
		ReactiveFormsModule,
		FloatLabelModule,
		NgOptimizedImage,
		DividerModule,
		AnimateOnScrollModule,
	],
	providers: [],
})
export class LandingModule {}
