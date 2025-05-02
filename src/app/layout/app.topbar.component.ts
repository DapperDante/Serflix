import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { expandHeight, moveBackLeftToRight } from '../animation/animation';

@Component({
	selector: 'app-topbar',
	templateUrl: './app.topbar.component.html',
	animations: [
		moveBackLeftToRight('4s'),
		expandHeight('0.3s')
	],
	styles: `
			.inputSearch:focus{
				width: 20rem !important;
				box-shadow: 0 0 0 0 !important;
			}
			.text-logo{
				background-position: -50% 0%;
				background-size: 400% 400%;
				background-image: linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 18%, rgba(0, 0, 0, 1) 36%);
				background-clip: text;
				color: transparent;
			}
		`,
})
export class AppTopbarComponent {
	searchText!: string;
	showData: boolean = false;
	@ViewChild('menuButton') menuButton!: ElementRef;

	@ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;
	constructor(
		public layoutService: LayoutService,
		public el: ElementRef,
		private router: Router,
		private currentRouter: ActivatedRoute
	) {}

	activeItem!: number;

	get mobileTopbarActive(): boolean {
		return this.layoutService.state.topbarMenuActive;
	}

	onMenuButtonClick() {
		this.layoutService.onMenuToggle();
	}

	sendSearch() {
		this.router.navigate(['search'], { relativeTo: this.currentRouter, queryParams: { query: this.searchText } });
		this.searchText = '';
	}
	onMobileTopbarMenuButtonClick() {
		this.layoutService.onTopbarMenuToggle();
	}
}
