import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { SuccessHandlingService } from 'src/app/service/success-handling.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
})
export class RegisterComponent {
	private readonly _auth = inject(AuthService);
	private readonly _success = inject(SuccessHandlingService);
	loading = false;
	constructor(private router: Router) {}
	registerForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.minLength(10)]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(9)]),
	});
	Register(): boolean {
		if (this.registerForm.invalid) {
			this._auth.ShowError(new Error('Invalid form'));
			return false;
		}
		const { name, email, password } = this.registerForm.value;
		this.loading = true;
		this._auth.Register(name!, email!, password!).subscribe({
			next: () => {
				this._success.showSuccessMessage('User registered successfully');
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
