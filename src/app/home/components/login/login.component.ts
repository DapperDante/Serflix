import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent {
	private readonly _auth = inject(AuthService);
	constructor(private router: Router) {}
	loginForm = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required, Validators.minLength(9)]),
	});
	loading = false;
	Login(): boolean {
		if (this.loginForm.invalid) {
		this._auth.ShowError(new Error('Invalid form'));
			return false;
		}
		const {username, password} = this.loginForm.value;
		this.loading = true;
		this._auth.Login(username!, password!).subscribe({
			next: () => {
				this.router.navigate(['/profile']);
			},
			error: () => {
				this.loading = false;
			},
			complete: () =>{
				this.loading = false;
			}
		});
		return true;
	}
}
