import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
	providedIn: 'root',
})
export class TmdbInterceptorService implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (!req.url.includes(environment.API_TMDB)) return next.handle(req);
		return next.handle(
			req.clone({
				setHeaders: {
					Authorization: `Bearer ${environment.TOKEN_TMDB}`,
				},
			})
		);
	}
}
