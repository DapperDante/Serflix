import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AuthService } from '../home/service/auth.service';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';

export const backendInterceptor: HttpInterceptorFn = (req, next) => {
	const _auth = inject(AuthService);
	if (!req.url.includes(environment.ApiDb)) return next(req);
	const reqWithToken = req.clone({
		setHeaders: {
			Authorization: `${_auth.getToken()}`,
		},
	});
	return next(reqWithToken).pipe(
		catchError((err) => {
			// if (err.status === 401) {
			// 	_auth.Logout();
			// }
			throw err;
		})
	);
};
