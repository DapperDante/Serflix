import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
	animations: [
		trigger('container', [
			transition(':enter', [
				style({
					zIndex: 1,
					transform: 'translateY(50%)'
				}),
				sequence([
					animate("800ms ease-in-out",
						style({
							transform: 'translateY(-12rem)'
						})
					),
					animate("1s ease-in-out",
						style({
							zIndex: 3,
							transform: 'translateY(0)'
						})
					)
				])
			])
		]),
		trigger('glasses', [
			transition(':enter', [
				style({
					transform: 'translateY(-500%)'
				}),
				animate('3s ease-in-out',
					style({
						transform: 'rotate(45deg) translateY(-35%)'
					})
				)
			])
		])
	],
  styles: `
		.glasses{
			transform: rotate(45deg) translateY(-35%);
		}
	`
})
export class ForgotPasswordComponent {
	loading: boolean = false;
	emailInput: string = '';
	showGlasses: boolean = false;
	private _authService = inject(AuthService);
	resetPassword(): boolean{
		if(!this.emailInput){
			this._authService.showError(new Error('You must write an email'));
			return false;
		}
		this._authService.requestResetPassword(this.emailInput)
		.subscribe({
			next: ()=>{
				this.loading = true;
				this.emailInput = '';
			},
			error: ()=>{
				this.loading = false;
			},
			complete: ()=>{
				this.loading = false;
			}
		})
		return true;
	}
}
