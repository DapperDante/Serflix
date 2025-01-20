import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
		styles: `
			.inputSearch:focus{
				width: 20rem !important;
				box-shadow: 0 0 0 0 !important;
			}
		`
})
export class AppTopbarComponent {
    searchText!: string;
    @ViewChild('menuButton') menuButton!: ElementRef;

    @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;
    constructor(public layoutService: LayoutService, public el: ElementRef, private router: Router, private currentRouter: ActivatedRoute) {}

    activeItem!: number;

    get mobileTopbarActive(): boolean {
        return this.layoutService.state.topbarMenuActive;
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    sendSearch(){
        this.router.navigate(['search'], {relativeTo: this.currentRouter, queryParams: {query: this.searchText}})
    }
    onMobileTopbarMenuButtonClick() {
        this.layoutService.onTopbarMenuToggle();
    }

}
