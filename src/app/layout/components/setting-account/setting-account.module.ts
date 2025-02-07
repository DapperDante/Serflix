import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingAccountRoutingModule } from './setting-account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { SettingAccountComponent } from './setting-account.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
	declarations: [
		SettingAccountComponent
	],
	imports: [
		CommonModule,
		SettingAccountRoutingModule,
		ReactiveFormsModule,
		PasswordModule,
		FloatLabelModule,
		DividerModule,
		ButtonModule,
		InputTextModule
	],
})
export class SettingAccountModule {}
