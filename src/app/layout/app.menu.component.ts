import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
	model: any[] = [];
	constructor(private router: Router) {}
	ngOnInit() {
		this.model = [
			{
				label: 'Entertaiment',
				items: [
					{
						label: 'Movies',
						icon: 'pi pi-caret-right',
						command: () => {
							this.NavigateOtherPage('movie');
						},
					},
					{
						label: 'Series',
						icon: 'pi pi-caret-right',
						command: () => {
							this.NavigateOtherPage('serie');
						},
					},
					{
						label: 'Collections',
						icon: 'pi pi-book',
						command: () => {
							this.NavigateOtherPage('collection');
						}
					}
				]
			},
			{
				label: 'Categories',
				items: [
					{
						label: 'Adventure',
						icon: 'pi pi-flag',
						command: () => {
							this.NavigateOtherPage('categories', '1');
						}
					},
					{
						label: 'Comedy',
						icon: 'pi pi-thumbs-up',
						command: () => {
							this.NavigateOtherPage('categories', '2');
						}
					},
					{
						label: 'Horror',
						icon: 'pi pi-lightbulb',
						command: () => {
							this.NavigateOtherPage('categories', '3');
						}
					},
					{
						label: 'Animation',
						icon: 'pi pi-bolt',
						command: () => {
							this.NavigateOtherPage('categories', '4');
						}
					}
				]
			},
			{
				label: 'Info',
				items: [
					{
						label: 'stars',
						icon: 'pi pi-star',
						command: () => {
							this.NavigateOtherPage('stars');
						}
					}
				]
			}
		];
	}
	NavigateOtherPage(...path: string[]) {
		this.router.navigate(['home', ...path]);
	}
}
