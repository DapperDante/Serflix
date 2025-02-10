import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { ProfileService } from '../service/profile.service';

export const backendInterceptor: HttpInterceptorFn = (req, next) => {
	const _auth = inject(AuthService);
	const _profile = inject(ProfileService);
	if (!req.url.includes(environment.API_BACKEND) || req.url.includes(`${environment.API_BACKEND_USER}/login`) || req.url.includes(`${environment.API_BACKEND_USER}/register`))
		return next(req);
	const reqWithToken = req.clone({
		setHeaders: {
			Authorization: `${_auth.getToken()}`,
		},
	});
	return next(reqWithToken).pipe(
		catchError((err) => {
			// if (err.status === 401) {
			// 	_profile.setSelectedProfile(false);
			// 	_auth.Logout();
			// }
			throw err;
		})
	);
};
