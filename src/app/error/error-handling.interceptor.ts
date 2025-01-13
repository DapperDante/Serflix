import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorHandlingService } from './error-handling.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
	const _error = inject(ErrorHandlingService);
	const _router = inject(Router);
  return next(req)
	.pipe(
		catchError((error) => {
			switch (error.status) {
				case 0:
					_error.setIsError(true);
					_router.navigate(['/error']);
					break;
			}
			return throwError(() => error);
		})
	);
};
