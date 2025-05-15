import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ErrorHandlingService } from '../error/error-handling.service';

export const error: CanActivateFn = (route, state) => {
	const error = inject(ErrorHandlingService);
	if(!error.getIsError()){
		new Router().navigate(['/']);
		return false;
	}
  return true;
};
//Its protected the route if there isn't an error
export const notError: CanActivateFn = (route, state) => {
	const error = inject(ErrorHandlingService);
	if(error.getIsError()){
		new Router().navigate(['/error']);
		return false;
	}
	return true;
}
