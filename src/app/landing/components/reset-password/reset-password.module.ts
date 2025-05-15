import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { BackgroundPostersModule } from '../background-posters/background-posters.module';


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
		ReactiveFormsModule,
		FloatLabelModule,
		PasswordModule,
		ButtonModule,
		BackgroundPostersModule
  ]
})
export class ResetPasswordModule { }
