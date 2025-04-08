import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { Service } from 'src/app/interface/service.interface';
import { environment } from 'src/environments/environment.development';
import { SuccessHandlingService } from './success-handling.service';
import { LoginRequest, TokenRequest } from '../interface/backend.interface';

const PATH = environment.API_BACKEND_USER;

@Injectable({
	providedIn: 'root'
})
export class AuthService implements Service{
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	private readonly _cookieService = inject(CookieService);
	private readonly _success = inject(SuccessHandlingService);
	readonly plans = [
		{
			id: 1,
			name: 'Free',
			price: '0$/month',
			styleClass: 'border-gray-500'
		},
		{
			id: 2,
			name: 'Premium',
			price: '5$/month',
			styleClass: 'border-yellow-500'
		}
	]
	//These are for form's settings
	readonly minLengthPassword = 9;
	readonly minLengthUsername = 10;
	readonly regexToPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
	constructor(private _router: Router) {}
	register(username: string, email: string, password: string): Observable<TokenRequest> {
		const newUser = { username, email, password };
		return this._http.post<TokenRequest>(`${PATH}/register`, newUser).pipe(
			catchError(this.errorHandler),
			tap({
				next: (data) => {
					this.token = data.token;
					this._success.showSuccessMessage('Register successful');
					sessionStorage.setItem('first-time', 'true');
				},
				error: (error) => {
					this.showError(error);
				},
			})
		);
	}
	login(username: string, password: string): Observable<LoginRequest> {
		const user = { username, password };
		return this._http.post<LoginRequest>(`${PATH}/login`, user).pipe(
			catchError(this.errorHandler),
			tap({
				next: (data) => {
					this.token = data.token;
					this._success.showSuccessMessage('Login successful');
					if(data.first_time)
						sessionStorage.setItem('first-time', 'true');
				},
				error: (error) => {
					this.showError(error);
				},
			})
		);
	}
	logout(): void {
		this._cookieService.delete('access-token');
		this._router.navigate(['']);
	}
	updatePassword(oldPassword: string, newPassword: string): Observable<void> {
		const password = {
			oldPassword,
			newPassword,
		};
		return this._http.post<void>(`${PATH}/change-password`, password).pipe(
			catchError(this.errorHandler),
			tap({
				next: () => {
					this._success.showSuccessMessage('Password changed');
				},
				error: (error) => {
					this.showError(error);
				},
			})
		);
	}
	updateUsername(newUsername: string): Observable<void> {
		const username = { newUsername };
		return this._http.post<void>(`${PATH}/change-username`, username).pipe(
			catchError(this.errorHandler),
			tap({
				next: () => {
					this._success.showSuccessMessage('Username changed');
				},
				error: (error) => {
					this.showError(error);
				},
			})
		);
	}
	updateFirstTime(): Observable<void>{
		return this._http.put<void>(`${PATH}/update-first-time`, {}).pipe(
			catchError(this.errorHandler),
			tap({
				next: () => {
					this._success.showSuccessMessage('Welcome user');
				},
				error: (error) => {
					this.showError(error);
				}
			})
		)
	}
	showError(error: Error) {
		this._error.ShowError(error.message);
	}
	errorHandler(error: HttpErrorResponse): Observable<never> {
		return throwError(() => new Error(error.error.msg));
	}
	resetPassword(email: string): Observable<void>{
		return this._http.put<void>(`${PATH}/reset-password`, {email})
		.pipe(
			catchError(this.errorHandler),
			tap({
				next: () => {
					this._success.showSuccessMessage('Email sent');
				},
				error: (error) => {
					this.showError(error);
				},
			})
		)
	}
	get firstTime(): boolean{
		return sessionStorage.getItem('first-time') ? true: false;
	}
	get token(): string | undefined {
		return this._cookieService.get('access-token');
	}
	set token(token: string) {
		this._cookieService.set('access-token', token);
	}
}
