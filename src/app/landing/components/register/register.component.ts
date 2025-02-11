import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	standalone: false
})
export class RegisterComponent {
	private readonly _auth = inject(AuthService);
	constructor(private router: Router) {}
	registerForm = new FormGroup({
		username: new FormControl('', [Validators.required, Validators.minLength(this._auth.minLengthUsername)]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('',
			[
				Validators.required,
				Validators.minLength(this._auth.minLengthPassword),
				Validators.pattern(this._auth.regexToPassword)
			]
		),
	});
	loading = false;
	Register(): boolean {
		if(this.registerForm.get('username')?.invalid){
			this._auth.ShowError(new Error('Invalid username'));
			return false;
		}
		if(this.registerForm.get('email')?.invalid){
			this._auth.ShowError(new Error('Invalid email'));
			return false;
		}
		if(this.registerForm.get('password')?.invalid){
			this._auth.ShowError(new Error('Invalid password'));
			return false;
		}
		const { username, email, password } = this.registerForm.value;
		this.loading = true;
		this._auth.Register(username!, email!, password!).subscribe({
			next: () => {
				this.router.navigate(['/profile']);
			},
			error: () => {
				this.loading = false;
			},
			complete: ()=>{
				this.loading = false;
			}
		});
		return true;
	}
}
