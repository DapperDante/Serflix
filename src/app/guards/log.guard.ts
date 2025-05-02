import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const isLogged: CanActivateFn = (route, state) => {
	const _auth = inject(AuthService);
	if (!_auth.token) {
		_auth.logout();
		return false;
	}
	return true;
};
export const isNotLogged: CanActivateFn = (route, state) => {
	const _auth = inject(AuthService);
	const _router = inject(Router);
	if (_auth.token) {
		_router.navigate(['/home']);
		return false;
	}
	return true;
}
