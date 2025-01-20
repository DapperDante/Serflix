import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ErrorHandlingService } from 'src/app/error/error-handling.service';
import { Service } from 'src/app/interface/service.interface';
import { environment } from 'src/environments/environment.development';
import { SuccessHandlingService } from './success-handling.service';

const PATH = environment.API_BACKEND_USER;

@Injectable({
	providedIn: 'root',
})
export class AuthService implements Service{
	private readonly _http = inject(HttpClient);
	private readonly _error = inject(ErrorHandlingService);
	private readonly _cookieService = inject(CookieService);
	private readonly _success = inject(SuccessHandlingService);
	constructor(private _router: Router) {
		console.log(`Service ${this.constructor.name} is ready`);
	}
	Register(username: string, email: string, password: string): Observable<{msg:string, token:string}> {
		const newUser = { username, email, password };
		return this._http.post<{ msg: string; token: string }>(`${PATH}/register`, newUser).pipe(
			catchError(this.ErrorHandler),
			tap({
				next: (data) => {
					this.setToken(data.token);
					this._success.showSuccessMessage('Register successful');
				},
				error: (error)=>{
					this.ShowError(error);
				}
			})
		);
	}
	Login(username: string, password: string): Observable<{msg: string, token: string}> {
		const user = { username, password };
		return this._http.post<{ msg: string; token: string }>(`${PATH}/login`, user).pipe(
			catchError(this.ErrorHandler),
			tap({
				next: (data) => {
					this.setToken(data.token);
					this._success.showSuccessMessage('Login successful');
				},
				error: (error) => {
					this.ShowError(error);
				}
			})
		);
	}
	Logout(): void {
		this._cookieService.delete('access-token');
		this._router.navigate(['']);
	}
	getToken(): string | undefined {
		return this._cookieService.get('access-token');
	}
	setToken(token: string){
		this._cookieService.set('access-token', token);
	}
	ShowError(error: Error){
		this._error.ShowError(error.message);
	}
	ErrorHandler(error: HttpErrorResponse): Observable<never> {
		let message = '';
		switch (error.status) {
			case 404:
				message = 'Incorrect user';
				break;
			case 401:
				message = 'Incorrect password';
				break;
			case 400:
				message = 'User already exists';
				break;
			case 500:
				message = 'Internal server error';
				break;
			default:
				message = 'Error';
				break;
		}
		return throwError(() => new Error(message));
	}
}
