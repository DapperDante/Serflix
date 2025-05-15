import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { BackgroundPostersModule } from '../background-posters/background-posters.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
	declarations: [RegisterComponent],
	imports: [
		CommonModule,
		RegisterRoutingModule,
		ReactiveFormsModule,
		FloatLabelModule,
		PasswordModule,
		DividerModule,
		ButtonModule,
		BackgroundPostersModule,
		InputTextModule
	],
})
export class RegisterModule {}
