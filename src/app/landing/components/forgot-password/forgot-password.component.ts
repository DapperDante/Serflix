import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styles: ``
})
export class ForgotPasswordComponent {
	loading: boolean = false;
	emailInput: string = '';
	
	private _authService = inject(AuthService);
	resetPassword(): boolean{
		if(!this.emailInput){
			this._authService.showError(new Error('You must write an email'));
			return false;
		}
		this._authService.resetPassword(this.emailInput)
		.subscribe({
			next: ()=>{
				this.loading = true;
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
