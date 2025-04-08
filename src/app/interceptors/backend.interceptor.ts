import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { ProfileService } from '../service/profile.service';

export const backendInterceptor: HttpInterceptorFn = (req, next) => {
	const _auth = inject(AuthService);
	const _profile = inject(ProfileService);
	if (!req.url.includes(environment.API_BACKEND) || urlToPassWithoutToken.includes(req.url))
		return next(req);
	const reqWithToken = req.clone({
		setHeaders: {
			Authorization: `${_auth.token}`,
		},
	});
	return next(reqWithToken).pipe(
		catchError((err) => {
			if (err.status === 401 && !urlToIgnoreCloseSession.includes(req.url)) {
				_profile.selectedProfile = false;
				_auth.logout();
			}
			throw err;
		})
	);
};
const urlToPassWithoutToken = [
	`${environment.API_BACKEND_USER}/login`,
	`${environment.API_BACKEND_USER}/register`,
];
const urlToIgnoreCloseSession = [
	`${environment.API_BACKEND_USER}/change-password`,
]
