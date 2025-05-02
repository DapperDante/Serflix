import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
	private readonly _auth = inject(AuthService);
	constructor(private route: ActivatedRoute){}
	loading: boolean = false;
	formControl = new FormGroup({
		newPassword: new FormControl('', [
			Validators.required,
			Validators.minLength(this._auth.minLengthPassword),
			Validators.pattern(this._auth.regexToPassword),
		]),
		repeatNewPassword: new FormControl('', [
			Validators.required,
			Validators.minLength(this._auth.minLengthPassword),
			Validators.pattern(this._auth.regexToPassword),
		]),
	});
	resetPassword(): boolean {
		console.log(this.formControl);
		if (this.formControl.invalid) {
			this._auth.showError(new Error('Invalid form'));
			return false;
		}
		const { newPassword, repeatNewPassword } = this.formControl.value;
		if (newPassword !== repeatNewPassword) {
			this._auth.showError(new Error("Passwords don't match"));
			return false;
		}
		const token = this.route.snapshot.paramMap.get('token')!;
		this.loading = true;
		this._auth.resetPassword(newPassword!, token).subscribe({
			next: () => {
				this.loading = true;
			},
			error: () => {
				this.loading = false;
			},
			complete: () => {
				this.loading = false;
			},
		});
		return true;
	}
}
