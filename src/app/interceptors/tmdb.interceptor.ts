import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
export const tmdbInterceptor: HttpInterceptorFn = (req, next) => {
	if(!req.url.includes(environment.API_TMDB)) return next(req);
	const TOKEN = environment.TOKEN_TMDB;
	const reqWithToken = req.clone({
		setHeaders: {
			Authorization: `Bearer ${TOKEN}`,
		},
	});
	return next(reqWithToken);
};
