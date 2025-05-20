import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { animate, sequence, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	standalone: false,
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
		trigger('movieCinema', [
			transition(':enter', [
				style({
					opacity: 0,
					transform: 'scale(2) rotate(-40deg) translateY(-20%) translateX(50%)'
				}),
				animate("1s ease-in-out",
					style({
						opacity: 1,
						transform: 'scale(1) rotate(-40deg) translateY(-20%) translateX(50%)'
					})
				)
			])
		])
	],
	styles: `
		.movieCinema{
			transform: rotate(-40deg) translateY(-20%) translateX(50%);
		}
	`
})
export class RegisterComponent {
	private readonly _auth = inject(AuthService);
	showMovieCinema = false;
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
	register(): boolean {
		if(this.registerForm.get('username')?.invalid){
			this._auth.showError(new Error('Invalid username'));
			return false;
		}
		if(this.registerForm.get('email')?.invalid){
			this._auth.showError(new Error('Invalid email'));
			return false;
		}
		if(this.registerForm.get('password')?.invalid){
			this._auth.showError(new Error('Invalid password'));
			return false;
		}
		const { username, email, password } = this.registerForm.value;
		this.loading = true;
		this._auth.register(username!, email!, password!).subscribe({
			error: () => {
				this.loading = false;
			},
			complete: ()=>{
				this.loading = false;
				this.registerForm.reset();
			}
		});
		return true;
	}
	showMovieCinemaAnimation(){
		this.showMovieCinema = true;
	}
	navigateToLogin(){
		this.router.navigate(['login'], {replaceUrl: true})
	}
}
