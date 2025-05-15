import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { ProfileService } from '../service/profile.service';
import { inject } from '@angular/core';

export const isSelectedProfile: CanActivateChildFn = (childRoute, state) => {
	const _profile = inject(ProfileService);
	const _router = inject(Router);
	if (!_profile.selectedProfile) {
		_router.navigate(['/home']);
		return false;
	}
	return true;
}
export const isNotSelectedProfile: CanActivateFn = (route, state) => {
	const _profile = inject(ProfileService);
	const _router = inject(Router);
	if (_profile.selectedProfile) {
		_router.navigate(['home/access']);
		return false;
	}
	return true;
}
