import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	standalone: false
})
export class LoginComponent {
	private readonly _auth = inject(AuthService);
	constructor(private router: Router) {}
	loginForm = new FormGroup({
		username: new FormControl('', [Validators.required, Validators.minLength(this._auth.minLengthUsername)]),
		password: new FormControl('',
			[
				Validators.required,
				Validators.minLength(this._auth.minLengthPassword),
				Validators.pattern(this._auth.regexToPassword)
			]),
	});
	loading = false;
	Login(): boolean {
		if(this.loginForm.get('username')?.invalid){
			this._auth.ShowError(new Error('Invalid username'));
			return false;
		}
		if(this.loginForm.get('password')?.invalid){
			this._auth.ShowError(new Error('Invalid password'));
			return false;
		}
		const { username, password } = this.loginForm.value;
		this.loading = true;
		this._auth.Login(username!, password!).subscribe({
			next: () => {
				this.router.navigate(['/profile']);
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
