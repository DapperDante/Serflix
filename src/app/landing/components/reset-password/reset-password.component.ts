import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from 'src/app/directives/matchPassword.validator';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styles: `
		:host::ng-deep .p-password-panel{
			width: 100%;
		}
	`
})
export class ResetPasswordComponent {
	private readonly _auth = inject(AuthService);
	loading: boolean = false;
	formControl = new FormGroup({
		newPassword: new FormControl('',
			[
				Validators.required,
				Validators.minLength(this._auth.minLengthPassword),
				Validators.pattern(this._auth.regexToPassword)
			]),
		confirmPassword: new FormControl('',
			[
				Validators.required,
				Validators.minLength(this._auth.minLengthPassword),
				Validators.pattern(this._auth.regexToPassword),
				matchPassword()
			]
		)
	});
	resetPassword(): boolean{
		if(this.formControl.invalid){
			this._auth.showError(new Error('Invalid form'));
			return false;
		}
		return true;
	}
}
