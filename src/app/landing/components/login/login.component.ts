import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { LayoutService } from 'src/app/service/layout.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	standalone: false,
	animations: [
		trigger('container', [
			transition(':enter', [
				style({
					zIndex: 1,
					transform: 'scale(0.3) translateY(-20%)'
				}),
				sequence([
					animate("700ms ease-in-out",
						style({
							transform: 'scale(0.5) translateY(120%)'
						})
					),
					animate("700ms ease-in-out",
						style({
							transform: 'scale(0.6) translateY(-20%)'
						})
					),
					animate("700ms ease-in-out",
						style({
							zIndex: 3,
							transform: 'translateY(0)'
						})
					)
				])
			]
			)
		]),
		trigger('tickets', [
			transition(':enter', [
				style({
					opacity: 0,
					transform: 'scale(2, 2) rotate(50deg) translateY(-60%) translateX(-5%)'
				}),
				animate("1s ease-in-out",
					style({
						opacity: 1,
						transform: 'scale(1) rotate(50deg) translateY(-60%) translateX(-5%)'
					})
				)
			])
		])
	],
	styles: `
		.tickets{
			transform: rotate(50deg) translateY(-60%) translateX(-5%);
			z-index: 1;
		}
	`
})
export class LoginComponent {
	private readonly _auth = inject(AuthService);
	private readonly _layout = inject(LayoutService);
	urlPosters: string[] = [];
	showTickets = false;
	constructor(private router: Router) {}
	ngOnInit(): void {
		this._layout.getPosters().subscribe({
			next: (res) =>{
				this.urlPosters = res.result;
			}
		})
	}
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
			this._auth.showError(new Error('Invalid username'));
			return false;
		}
		if(this.loginForm.get('password')?.invalid){
			this._auth.showError(new Error('Invalid password'));
			return false;
		}
		const { username, password } = this.loginForm.value;
		this.loading = true;
		this._auth.login(username!, password!).subscribe({
			next: () => {
				this.router.navigate(['/home']);
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
	startTicketsAnimation(){
		this.showTickets = true;
	}
	navigateToRegister(){
		this.router.navigate(['/register'], {replaceUrl: true});
	}
}
