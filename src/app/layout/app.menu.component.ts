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
				icon: 'pi pi-play',
				items: [
					{
						label: 'Movies',
						icon: 'pi pi-caret-right',
						command: () => {
							this.NavigateOtherPage(['movie']);
						},
					},
					{
						label: 'Series',
						icon: 'pi pi-caret-right',
						command: () => {
							this.NavigateOtherPage(['serie']);
						},
					}
				]
			},
			{
				label: 'Categories',
				icon: 'pi pi-book',
				items: [
					{
						label: 'Adventure',
						icon: 'pi pi-flag',
						command: () => {
							this.NavigateOtherPage(['categories'], {name: 'adventure'});
						}
					},
					{
						label: 'Comedy',
						icon: 'pi pi-thumbs-up',
						command: () => {
							this.NavigateOtherPage(['categories'], {name: 'comedy'});
						}
					},
					{
						label: 'Horror',
						icon: 'pi pi-lightbulb',
						command: () => {
							this.NavigateOtherPage(['categories'], {name: 'horror'});
						}
					},
					{
						label: 'Animation',
						icon: 'pi pi-bolt',
						command: () => {
							this.NavigateOtherPage(['categories'], {name: 'animation'});
						}
					}
				]
			}
		];
	}
	NavigateOtherPage(path: string[], queryParams?: any) {
		this.router.navigate(['home/access', ...path], {
			queryParams
		});
	}
}
