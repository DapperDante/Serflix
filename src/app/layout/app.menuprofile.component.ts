import { Component, ElementRef, inject } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { LayoutService } from './service/app.layout.service';
import { ProfileService } from '../service/profile.service';
import { Router } from '@angular/router';
import { ProfileInfo } from '../interface/account.interface';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-menu-profile',
	templateUrl: './app.menuprofile.component.html',
	animations: [
		trigger('menu', [
			transition('void => inline', [
				style({ height: 0 }),
				animate('400ms cubic-bezier(0.86, 0, 0.07, 1)', style({ opacity: 1, height: '*' })),
			]),
			transition('inline => void', [
				animate('400ms cubic-bezier(0.86, 0, 0.07, 1)', style({ opacity: 0, height: '0' })),
			]),
			transition('void => overlay', [
				style({ opacity: 0, transform: 'scaleY(0.8)' }),
				animate('.12s cubic-bezier(0, 0, 0.2, 1)'),
			]),
			transition('overlay => void', [animate('.1s linear', style({ opacity: 0 }))]),
		]),
	],
})
export class AppMenuProfileComponent {
	private readonly _profile = inject(ProfileService);
	private readonly _auth = inject(AuthService);
	profile$?: Observable<ProfileInfo | undefined>;
	constructor(public layoutService: LayoutService, public el: ElementRef, private router: Router) {}
	ngOnInit() {
		this._profile.refreshProfile();
		this.profile$ = this._profile.getProfile$().asObservable();
	}
	logout() {
		this._profile.selectedProfile = false;
		this._auth.logout();
	}
	toggleMenu() {
		this.layoutService.onMenuProfileToggle();
	}
	changeProfile() {
		this._profile.logoutProfile().subscribe(()=>{
			this.router.navigate(['/home']);
		});
	}
	get isHorizontal() {
		return this.layoutService.isHorizontal() && this.layoutService.isDesktop();
	}

	get menuProfileActive(): boolean {
		return this.layoutService.state.menuProfileActive;
	}

	get menuProfilePosition(): string {
		return this.layoutService.config().menuProfilePosition;
	}

	get isTooltipDisabled(): boolean {
		return !this.layoutService.isSlim();
	}
}
