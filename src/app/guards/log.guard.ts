import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ProfileService } from '../service/profile.service';

export const isLogged: CanActivateFn = (route, state) => {
	const _auth = inject(AuthService);
	if (!_auth.getToken()) {
		_auth.Logout();
		return false;
	}
	return true;
};
export const isNotLogged: CanActivateFn = (route, state) => {
	const _auth = inject(AuthService);
	const _router = inject(Router);
	if (_auth.getToken()) {
		_router.navigate(['profile']);
		return false;
	}
	return true;
}
export const isSelectedProfile: CanActivateFn = (route, state) => {
	const _profile = inject(ProfileService);
	const _router = inject(Router);
	if (!_profile.isSelectedProfile()) {
		_router.navigate(['profile']);
		return false;
	}
	return true;
}
export const isNotSelectedProfile: CanActivateFn = (route, state) => {
	const _profile = inject(ProfileService);
	const _router = inject(Router);
	if (_profile.isSelectedProfile()) {
		_router.navigate(['home']);
		return false;
	}
	return true;
}
