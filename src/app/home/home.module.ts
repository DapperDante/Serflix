import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';
@NgModule({
	declarations: [LandingComponent, LoginComponent, RegisterComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		ButtonModule,
		InputTextModule,
		AppConfigModule,
		RouterModule,
		PasswordModule,
		ReactiveFormsModule,
		FloatLabelModule,
		NgOptimizedImage,
		DividerModule
	],
	providers: [],
})
export class HomeModule {}
