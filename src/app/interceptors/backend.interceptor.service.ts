import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
	providedIn: 'root',
})
export class BackendInterceptorService implements HttpInterceptor {
	private readonly _auth = inject(AuthService);
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if(urlWithoutToken.some((url) => req.url.includes(url)))
			return next.handle(req);
		return next.handle(
			req.clone({
				setHeaders: {
					Authorization: `${this._auth.token}`,
				},
			})
		);
	}
}
const urlWithoutToken: string[] = [
	`${environment.API_BACKEND_USER}/login`,
	`${environment.API_BACKEND_USER}/register`,
	`${environment.API_TMDB}`,
	`${environment.API_BACKEND_USER}/forgot-password`,
	`${environment.API_BACKEND_USER}/auth`,
	`${environment.API_BACKEND_USER}/auth/verify-email`
];
