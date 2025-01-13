import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../home/service/auth.service';
import { ProfileService } from '../layout/service/profile.service';

export const isLogged: CanActivateFn = (route, state) => {
	const _auth = inject(AuthService);
	if (!_auth.getToken()) {
		new Router().navigate(['']);
		return false;
	}
	return true;
};
export const isNotLogged: CanActivateFn = (route, state) => {
	const _auth = inject(AuthService);
	if (_auth.getToken()) {
		new Router().navigate(['profile']);
		return false;
	}
	return true;
}
export const isSelectedProfile: CanActivateFn = (route, state) => {
	const _profile = inject(ProfileService);
	if (!_profile.isSelectedProfile()) {
		new Router().navigate(['profile']);
		return false;
	}
	return true;
}
export const isNotSelectedProfile: CanActivateFn = (route, state) => {
	const _profile = inject(ProfileService);
	if (_profile.isSelectedProfile()) {
		new Router().navigate(['home']);
		return false;
	}
	return true;
}
