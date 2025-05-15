import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { BackgroundPostersModule } from '../background-posters/background-posters.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		LoginRoutingModule,
		ReactiveFormsModule,
		FloatLabelModule,
		ButtonModule,
		PasswordModule,
		BackgroundPostersModule,
		InputTextModule
	],
})
export class LoginModule {}
