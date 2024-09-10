import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'View',
                items: [
                    {
                        label: 'Movies',
                        icon: 'pi pi-caret-right',
                        routerLink: ['movies']
                    },
                    {
                        label: 'Series',
                        icon: 'pi pi-chart-line',
                        routerLink: ['series']
                    }
                ]
            },
            {
                label: 'Search',
                items: [
                    {
                        label: 'Movies',
                        icon: 'pi pi-caret-right',
                        routerLink: ['search-movies']
                    },
                    {
                        label: 'Series',
                        icon: 'pi pi-globe',
                        routerLink: ['search-series']
                    }
                ]
            }
        ]
    }
}
