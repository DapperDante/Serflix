import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    constructor(private router: Router){}
    ngOnInit() {
        if(!history.state.idProfile)
            this.router.navigate(['profiles']);
        this.model = [
            {
                label: 'View',
                items: [
                    {
                        label: 'Movies',
                        icon: 'pi pi-caret-right',
                        command: ()=>{
                            this.NavigateOtherPage('movies');
                        }
                    },
                    {
                        label: 'Series',
                        icon: 'pi pi-chart-line',
                        command: ()=>{
                            this.NavigateOtherPage('series');
                        }
                    }
                ]
            },
            {
                label: 'Search',
                items: [
                    {
                        label: 'Movies',
                        icon: 'pi pi-caret-right',
                        command: ()=>{
                            this.NavigateOtherPage('search-movies');
                        }
                    },
                    {
                        label: 'Series',
                        icon: 'pi pi-globe',
                        command: ()=>{
                            this.NavigateOtherPage('search-series');
                        }
                    }
                ]
            }
        ]
    }
    NavigateOtherPage(url: string){
        this.router.navigate(['home', url], {state: {idProfile: history.state.idProfile}});
    }
}
