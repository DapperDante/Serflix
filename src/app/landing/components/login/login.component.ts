import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
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
					transform: 'translateY(2rem)'
				}),
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
				),
			]
			)
		])
	],
	styles: `
		.background{
			transform: skew(-20deg, 15deg) translateX(-11%) translateY(-8%);
			filter: brightness(20%);
			height: 200vh;
		}
	`
})
export class LoginComponent {
	private readonly _auth = inject(AuthService);
	private readonly _layout = inject(LayoutService);
	urlPosters: string[] = [];
	isLoadImages = false;
	imagesLoaded: number = 0;
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
	loadImage(): void{
		if(++this.imagesLoaded >= this.urlPosters.length){
			this.isLoadImages = true;
		}
	}
}
